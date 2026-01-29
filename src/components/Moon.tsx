
'use client';

import React from 'react';
import { getMoonPhaseName } from '@/utils/astronomy';

interface MoonProps {
  phase: number;
  size?: number;
  className?: string;
}

/**
 * Minimal, professional moon indicator
 * Simple crescent shape - clean and modern
 */
export default function Moon({ phase, size = 50, className = "" }: MoonProps) {
  const phaseName = getMoonPhaseName(phase);
  
  // Calculate shadow position based on phase
  // phase 0 = new moon (fully dark), 0.5 = full moon (fully lit)
  const illumination = phase <= 0.5 ? phase * 2 : (1 - phase) * 2;
  const shadowOffset = (1 - illumination) * 25;
  const isWaxing = phase <= 0.5;
  
  return (
    <div 
      className={`relative ${className}`}
      aria-hidden="true"
      title={phaseName}
      style={{ width: size, height: size }}
    >
      {/* Subtle glow */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 0%, transparent 70%)',
          transform: 'scale(1.5)',
        }}
      />
      
      {/* Moon SVG */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 50 50"
        className="relative z-10"
      >
        <defs>
          <mask id={`moon-phase-${phase.toFixed(2)}`}>
            <circle cx="25" cy="25" r="20" fill="white" />
            <ellipse 
              cx={isWaxing ? 25 - shadowOffset : 25 + shadowOffset} 
              cy="25" 
              rx={20 * (1 - illumination * 0.5)} 
              ry="20" 
              fill="black"
            />
          </mask>
        </defs>
        
        {/* Moon surface */}
        <circle 
          cx="25" 
          cy="25" 
          r="20" 
          fill="#94a3b8"
          mask={`url(#moon-phase-${phase.toFixed(2)})`}
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
