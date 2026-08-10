'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useSound } from '@/hooks/useSound';

const NUM_LINKS = 12;
const LINK_LENGTH = 16;

function ChainLink({ isDark, isOdd }: { isDark: boolean, isOdd: boolean }) {
  const metalColor = isDark ? '#b0b0b0' : '#707070';
  
  return (
    <div
      style={{
        width: '16px',
        height: '26px',
        borderRadius: '8px',
        border: `4px solid ${metalColor}`,
        filter: isOdd ? 'brightness(0.7)' : 'none',
        boxShadow: isDark 
            ? 'inset 1px 1px 2px rgba(255,255,255,0.5), inset -1px -1px 3px rgba(0,0,0,0.8), 2px 4px 6px rgba(0,0,0,0.6)'
            : 'inset 1px 1px 3px rgba(255,255,255,0.9), inset -1px -1px 3px rgba(0,0,0,0.3), 1px 3px 5px rgba(0,0,0,0.3)',
        transform: `perspective(100px) rotateY(${isOdd ? 80 : 0}deg)`,
      }}
    />
  );
}

export default function ThemeToggle() {
  const { playSound, playChainSound, playToggleSound } = useSound();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  const lastSoundTime = useRef(0);

  const knobX = useMotionValue(0);
  const knobY = useMotionValue((NUM_LINKS - 1) * LINK_LENGTH);
  const isDragging = useRef(false);
  const switchTriggered = useRef(false);

  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const knobRef = useRef<HTMLDivElement | null>(null);
  
  const points = useRef(Array.from({ length: NUM_LINKS }).map((_, i) => ({
      x: 0, 
      y: i * LINK_LENGTH,
      oldX: 0,
      oldY: i * LINK_LENGTH,
  }))).current;

  const topAnchorY = useRef(0);
  const topAnchorVy = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = useCallback(() => {
    toggleTheme();
    playSound('click');
    playToggleSound();
    
    // Add a flash effect manually to body
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.inset = '0';
    flash.style.backgroundColor = isDark ? 'white' : 'black';
    flash.style.opacity = '0.3';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = 'opacity 0.4s ease-out';
    document.body.appendChild(flash);
    
    // Force reflow
    void flash.offsetWidth;
    flash.style.opacity = '0';
    setTimeout(() => flash.remove(), 400);
  }, [isDark, playSound, playToggleSound, toggleTheme]);

  useAnimationFrame(() => {
    // 1. Simulate switch spring at the top
    const dx = points[1].x - points[0].x;
    const dy = points[1].y - points[0].y;
    const dist01 = Math.sqrt(dx*dx + dy*dy);
    const tension = Math.max(0, dist01 - LINK_LENGTH);
    
    const pullForce = tension * 0.8; // Force exerted by chain on the switch
    const springForce = -topAnchorY.current * 0.3; // Spring inside the housing pulling up
    
    topAnchorVy.current = (topAnchorVy.current + pullForce + springForce) * 0.8; // Damping
    topAnchorY.current += topAnchorVy.current;
    
    // Limit how far the switch can be pulled down
    if (topAnchorY.current > 30) topAnchorY.current = 30;
    if (topAnchorY.current < 0) topAnchorY.current = 0;
    
    points[0].x = 0;
    points[0].y = topAnchorY.current;

    // Trigger toggle if pulled far enough
    if (topAnchorY.current > 20 && !switchTriggered.current) {
        switchTriggered.current = true;
        handleToggle();
    } else if (topAnchorY.current < 5) {
        switchTriggered.current = false;
    }

    let maxVel = 0;

    // 2. Verlet integration for chain links
    for(let i=1; i<NUM_LINKS; i++) {
        if (i === NUM_LINKS - 1 && isDragging.current) {
            points[i].x = knobX.get();
            points[i].y = knobY.get();
            continue;
        }
        
        const p = points[i];
        const vx = (p.x - p.oldX) * 0.98; // Friction/Air resistance
        const vy = (p.y - p.oldY) * 0.98;
        
        const vel = Math.sqrt(vx*vx + vy*vy);
        if (vel > maxVel) maxVel = vel;

        p.oldX = p.x;
        p.oldY = p.y;
        p.x += vx;
        p.y += vy + 1.5; // Gravity
    }

    // 3. Constraints relaxation for rigidity
    for(let iter=0; iter<15; iter++) {
        for(let i=0; i<NUM_LINKS - 1; i++) {
            const p1 = points[i];
            const p2 = points[i+1];
            const diffX = p2.x - p1.x;
            const diffY = p2.y - p1.y;
            const distance = Math.sqrt(diffX*diffX + diffY*diffY);
            
            if (distance === 0) continue;

            const diff = LINK_LENGTH - distance;
            const percent = diff / distance / 2;
            const offsetX = diffX * percent;
            const offsetY = diffY * percent;

            if (i !== 0) {
                p1.x -= offsetX;
                p1.y -= offsetY;
            }
            if (i !== NUM_LINKS - 2 || !isDragging.current) {
                p2.x += offsetX;
                p2.y += offsetY;
            }
        }
    }

    // Trigger chain rattle sound based on movement
    if (maxVel > 1.5) {
        const now = Date.now();
        // The faster it moves, the more frequent the clinks can be
        const throttleDelay = Math.max(50, 200 - (maxVel * 10)); 
        if (now - lastSoundTime.current > throttleDelay) {
            if (playChainSound) {
                playChainSound(maxVel);
            }
            lastSoundTime.current = now;
        }
    }

    // 4. Update DOM elements
    for(let i=0; i<NUM_LINKS - 1; i++) { // Render all links except knob
        const el = linkRefs.current[i];
        if (el) {
            // Compute rotation to point to next link
            const p1 = points[i];
            const p2 = points[i+1];
            // default angle 0 means pointing down. 
            // atan2(y, x) is 90 deg when pointing down.
            const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI) - 90;
            
            el.style.transform = `translate3d(${p1.x}px, ${p1.y}px, 0) rotate(${angle}deg)`;
        }
    }

    // Update knob rotation and position
    if (knobRef.current) {
        const pLast = points[NUM_LINKS - 1];
        const pPrev = points[NUM_LINKS - 2];
        const angle = Math.atan2(pLast.y - pPrev.y, pLast.x - pPrev.x) * (180 / Math.PI) - 90;
        
        // The knob wrapper is already translated by Framer Motion, so we only rotate it
        knobRef.current.style.transform = `rotate(${angle}deg)`;
        
        // Sync framer motion values if not dragging
        if (!isDragging.current) {
            knobX.set(pLast.x);
            knobY.set(pLast.y);
        }
    }
  });

  if (!mounted) return null;

  // Knob dimensions
  const knobWidth = 16;
  const knobHeight = 44;

  return (
    <div className="flex fixed top-0 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 z-50 flex-col items-center scale-[0.7] sm:scale-100 origin-top">
      
      {/* Ceiling Mount - 3D bracket */}
      <div className="absolute top-0 z-20 flex justify-center w-full">
        {/* Top plate */}
        <div
          className="w-8 h-4 rounded-b-md"
          style={{
            background: isDark
              ? 'linear-gradient(180deg, #555 0%, #222 100%)'
              : 'linear-gradient(180deg, #d0d0d0 0%, #999 100%)',
            boxShadow: `
              0 4px 6px ${isDark ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'},
              inset 0 1px 0 ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)'}
            `,
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
            borderLeft: `1px solid ${isDark ? '#111' : '#888'}`,
            borderRight: `1px solid ${isDark ? '#111' : '#888'}`,
            borderBottom: `1px solid ${isDark ? '#111' : '#888'}`,
          }}
        >
            {/* The hole the chain comes out of */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-2 rounded-full bg-black/80 shadow-inner" />
        </div>
      </div>

      <div className="relative pointer-events-none" style={{ width: 0, height: 0 }}>
        {/* Chain Links */}
        {Array.from({ length: NUM_LINKS - 1 }).map((_, i) => (
            <div 
                key={i}
                ref={el => { linkRefs.current[i] = el; }}
                className="absolute top-0 left-0"
                style={{
                    marginLeft: '-8px', // Center horizontally (width 16/2)
                    marginTop: '-13px', // Center vertically (height 26/2)
                    zIndex: NUM_LINKS - i,
                }}
            >
                <ChainLink isDark={isDark} isOdd={i % 2 !== 0} />
            </div>
        ))}

        {/* Draggable Knob */}
        <motion.div
            className="absolute top-0 left-0 cursor-grab active:cursor-grabbing touch-none pointer-events-auto"
            style={{
                marginLeft: -(knobWidth / 2),
                marginTop: 0, // Knob hangs down from its connection point
                zIndex: 1,
                x: knobX,
                y: knobY,
            }}
            drag
            dragMomentum={false}
            dragConstraints={{ top: 0, bottom: 250, left: -100, right: 100 }}
            dragElastic={0.05}
            onDragStart={() => { isDragging.current = true; }}
            onDragEnd={() => { isDragging.current = false; }}
        >
            <div 
                ref={knobRef}
                className="relative flex flex-col items-center"
                style={{
                   transformOrigin: 'top center'
                }}
            >
                {/* The connection ring on the knob */}
                <div className="w-2 h-3 border-2 border-neutral-400 rounded-full -mb-1 z-0" />
                
                {/* The main knob body */}
                <div
                    className="relative transition-colors duration-300 z-10"
                    style={{
                        width: `${knobWidth}px`,
                        height: `${knobHeight}px`,
                        borderRadius: '8px',
                        background: isDark
                        ? 'linear-gradient(180deg, #f0f0f0 0%, #c0c0c0 30%, #a0a0a0 60%, #888888 100%)'
                        : 'linear-gradient(180deg, #444444 0%, #2a2a2a 30%, #1a1a1a 60%, #000000 100%)',
                        boxShadow: isDark
                        ? '0 6px 16px rgba(0,0,0,0.5), inset 1px 0 0 rgba(255,255,255,0.4), inset -1px 0 0 rgba(0,0,0,0.2)'
                        : '0 6px 16px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.2), inset -1px 0 0 rgba(0,0,0,0.4)',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.05)'}`,
                    }}
                >
                    {/* Grip lines */}
                    {[12, 20, 28].map((top) => (
                        <div
                        key={top}
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                            top: `${top}px`,
                            width: '10px',
                            height: '1.5px',
                            background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)',
                            borderRadius: '1px',
                        }}
                        />
                    ))}
                    
                    {/* Bottom ornament - sun/moon indicator */}
                    <div
                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 transition-all duration-500"
                        style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: isDark
                            ? 'linear-gradient(135deg, #ffd700, #ff8c00)'
                            : 'linear-gradient(135deg, #87ceeb, #4169e1)',
                        boxShadow: isDark
                            ? '0 0 8px rgba(255,215,0,0.6)'
                            : '0 0 8px rgba(65,105,225,0.6)',
                        }}
                    />
                </div>
            </div>
        </motion.div>
        
        {/* Pull hint text */}
        <div className="absolute top-[220px] -left-16 pointer-events-none opacity-40 font-mono text-[9px] uppercase tracking-widest whitespace-nowrap rotate-[-90deg]">
             Pull to switch
        </div>
      </div>
    </div>
  );
}
