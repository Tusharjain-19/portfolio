
'use client';

import React from 'react';

interface NasaMoonProps {
  size?: number;
  className?: string;
}

/**
 * NASA 3D Moon Model embedded via iframe
 * Source: NASA Solar System Exploration
 */
export default function NasaMoon({ size = 180, className = "" }: NasaMoonProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* NASA 3D Moon iframe */}
      <iframe
        src="https://solarsystem.nasa.gov/gltf_embed/2366/"
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
        title="NASA 3D Moon Model"
        loading="lazy"
        allow="fullscreen"
      />
      
      {/* Subtle outer glow */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: '0 0 40px 10px rgba(180, 200, 255, 0.2)',
        }}
      />
    </div>
  );
}
