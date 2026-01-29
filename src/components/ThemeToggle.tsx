'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useSound } from '@/hooks/useSound';

export default function ThemeToggle() {
  const { playSound } = useSound();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  // Rope Animation Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Chain physics: Stiff but swingy
  const springConfig = { damping: 12, stiffness: 180, mass: 0.8 }; 
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  const [ropeBaseLength, setRopeBaseLength] = useState(120);

  // Create path for the chain with stretching logic
  const path = useTransform([xSpring, ySpring], ([lx, ly]: number[]) => {
    const totalLength = ropeBaseLength + ly;
    return `M 0 0 Q ${lx * 0.5} ${totalLength * 0.5} ${lx} ${totalLength}`; 
  });
  
  useEffect(() => {
    setMounted(true);
    // Responsive chain length
    const handleResize = () => setRopeBaseLength(window.innerWidth < 768 ? 80 : 120);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = () => {
    const currentY = y.get();
    // Trigger theme change if pulled down significantly (e.g., > 100px)
    if (currentY > 100) {
      toggleTheme();
      playSound('click');
    }
    // Always snap back to origin
    x.set(0);
    y.set(0);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-0 right-6 md:right-24 z-50 flex flex-col items-center">
      {/* Chain Container */}
      <div className="relative w-0.5 h-[500px] pointer-events-none flex justify-center">
         
        {/* Top Socket Base */}
        <div className={`absolute top-0 w-4 h-2 rounded-b-sm border-x border-b z-10 ${
            isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-neutral-200 border-neutral-300'
        }`} />

        <svg 
            className="absolute top-0 left-1/2 -translate-x-1/2 overflow-visible pointer-events-none"
            width="200"
            height="500"
            viewBox="-100 0 200 500"
        >
            <g>
                {/* Rope Shadow (Depth) */}
                <motion.path 
                    d={path} 
                    stroke={isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.15)"} 
                    strokeWidth="8" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0 12"
                    style={{ filter: 'blur(2px)', transform: 'translate(1px, 2px)' }}
                />
                
                {/* Metallic Bead Core */}
                <motion.path 
                    d={path} 
                    stroke={isDark ? "#b5b5b5" : "#4a4a4a"} 
                    strokeWidth="6" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0 12"
                />
                
                {/* Bead Highlights */}
                <motion.path 
                    d={path} 
                    stroke={isDark ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"} 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0 12"
                    style={{ transform: 'translateX(-1.5px) translateY(-1px)' }}
                />

                {/* Connecting Wire (Thin line between beads) */}
                <motion.path 
                    d={path} 
                    stroke={isDark ? "#888" : "#333"} 
                    strokeWidth="1" 
                    fill="none"
                    strokeLinecap="round"
                    style={{ opacity: 0.5 }}
                />
            </g>
        </svg>

        {/* Instruction Hint - Positioned to the side for better visibility */}
        <motion.div 
            className={`absolute right-full mr-4 top-[138px] flex items-center gap-2 pointer-events-none whitespace-nowrap`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ 
                opacity: [0.3, 0.7, 0.3],
                x: [0, -4, 0],
            }}
            transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut"
            }}
        >
            <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${isDark ? 'text-white' : 'text-black'}`}>
                Pull to switch
            </span>
            <div className={`w-4 h-px opacity-30 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </motion.div>

        {/* Draggable Handle (The Knob) */}
        <motion.div
            className="absolute left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing touch-none pointer-events-auto"
            style={{ 
                x: xSpring,
                y: ySpring,
                top: ropeBaseLength 
            }}
            drag
            dragConstraints={{ top: 0, bottom: 151, left: -30, right: 30 }} // ~4cm pull
            dragElastic={0.01}
            onDrag={(_, info) => {
                x.set(info.offset.x);
                y.set(info.offset.y);
            }}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* The Handle - Cylindrical Metallic Knob */}
            <div className={`
                w-3 h-9 shadow-xl border flex flex-col items-center justify-between py-1.5 rounded-full
                transition-all duration-300
                ${isDark 
                    ? 'bg-linear-to-b from-neutral-100 to-neutral-400 border-neutral-100 shadow-white/10' 
                    : 'bg-linear-to-b from-neutral-800 to-black border-neutral-700 shadow-black/40'
                }
            `}>
                <div className={`w-1.5 h-px ${isDark ? 'bg-black/20' : 'bg-white/20'}`} />
                <div className={`w-1.5 h-px ${isDark ? 'bg-black/20' : 'bg-white/20'}`} />
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-neutral-500 shadow-inner' : 'bg-neutral-400'}`} />
            </div>
        </motion.div>
      </div>
    </div>
  );
}
