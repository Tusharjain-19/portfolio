
'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      {/* Dynamic Gradient Background that transitions smoothly */}
      <div 
        className="absolute inset-0 transition-colors duration-1000 ease-in-out"
        style={{
            background: isDark 
                ? 'linear-gradient(to bottom, #0a0a0a, #111111)' 
                : '#ffffff'
        }}
      />
      
      {/* Sun Indicator - Removed */}
      
      {/* Moon Indicator - Removed */}
      
      {/* Stars - Dark Mode Only */}
      <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: isDark ? 0.6 : 0 }}
      >
          <div className="stars-layer" />
      </div>
    </div>
  );
}
