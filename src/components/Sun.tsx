
'use client';

import React from 'react';

interface SunProps {
  size?: number;
  className?: string;
}

/**
 * Minimal, professional sun indicator
 * Just a subtle glow - not a cartoon
 */
export default function Sun({ size = 60, className = "" }: SunProps) {
  return (
    <div 
      className={`relative ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size }}
    >
      {/* Subtle outer glow */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
          transform: 'scale(2)',
        }}
      />
      
      {/* Core - subtle warm circle */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 60%, transparent 80%)',
        }}
      />
    </div>
  );
}
