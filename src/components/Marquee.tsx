'use client';

import React from 'react';
import { useTheme } from '@/hooks/useTheme';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number; // seconds
}

export default function Marquee({ items, direction = 'left', speed = 20 }: MarqueeProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="w-full overflow-hidden bg-[var(--bg-primary)] border-y border-[var(--border-color)] py-12 relative select-none">
       {/* Gradient masks for smooth edge fade */}
       <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--bg-primary), transparent)` }}></div>
       <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--bg-primary), transparent)` }}></div>

      <div 
        className={`flex w-max hover:[animation-play-state:paused] ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
             animationDuration: `${speed}s`,
        }}
      >
        {/* Render 4 copies for smooth seamless looping */}
        {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0 px-8">
                {items.map((item, idx) => (
                    <span 
                        key={`${item}-${idx}`} 
                        className="text-4xl md:text-6xl font-black text-transparent stroke-text uppercase tracking-tight whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-300 cursor-default"
                        style={{ 
                            WebkitTextStroke: isDark ? '1px rgba(255,255,255,0.5)' : '1px rgba(0,0,0,0.5)', 
                        }}
                    >
                    {item}
                    </span>
                ))}
            </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); } 
        }
        @keyframes marquee-right {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
            animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
            animation: marquee-right linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
            .animate-marquee-left, .animate-marquee-right {
                animation: none !important;
                transform: translateX(0) !important;
            }
        }
      `}</style>
    </div>
  );
}
