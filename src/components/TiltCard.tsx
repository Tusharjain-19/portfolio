
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // How strong the tilt is (default 15deg)
  perspective?: number; // CSS perspective (default 1000)
}

export default function TiltCard({ 
    children, 
    className = "", 
    intensity = 15,
    perspective = 1000 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth tilt return
  const springConfig = { damping: 25, stiffness: 400 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized position (-0.5 to 0.5) from center
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Static fallback for mobile/reduced-motion
  const [isStatic, setIsStatic] = useState(false);
  
  useEffect(() => {
     if (typeof window !== 'undefined') {
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const touchQuery = window.matchMedia('(hover: none)');
        // eslint-disable-next-line
        setIsStatic(motionQuery.matches || touchQuery.matches);
     }
  }, []);

  if (isStatic) {
      return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        perspective: perspective,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        <motion.div
           style={{
             transform: "translateZ(20px)",
             // Using translateZ to pop content slightly out
           }}
           className="w-full h-full"
        >
             {children}
        </motion.div>
        
        {/* Subtle Glare Effect */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10 rounded-xl mix-blend-overlay"
            style={{
                background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 80%)`,
                transform: "translateZ(40px)"
            }}
        />
      </motion.div>
    </motion.div>
  );
}
