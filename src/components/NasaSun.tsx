
'use client';

import React from 'react';

interface NasaSunProps {
  size?: number;
  className?: string;
}

/**
 * NASA 3D Sun Model embedded via iframe
 * Source: NASA Solar System Exploration
 */
export default function NasaSun({ size = 200, className = "" }: NasaSunProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* NASA 3D Sun iframe */}
      <iframe
        src="https://solarsystem.nasa.gov/gltf_embed/2352/"
        width={size * 1.5}
        height={size * 1.5}
        style={{
          border: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
        title="NASA 3D Sun Model"
        loading="lazy"
        allow="fullscreen"
      />
      
      {/* Subtle outer glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: '0 0 60px 20px rgba(255, 150, 50, 0.3)',
        }}
      />
    </div>
  );
}
