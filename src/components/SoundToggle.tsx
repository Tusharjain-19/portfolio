
'use client';

import React, { useEffect, useState } from 'react';
import { useSound } from '@/hooks/useSound';

export default function SoundToggle() {
  const { isEnabled, toggleSound } = useSound();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use consistent styling during SSR to prevent hydration mismatch
  const baseClasses = "fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 group flex items-center gap-2";
  
  // Default to dark theme styling during SSR
  const themeClasses = mounted
    ? (isEnabled 
        ? 'bg-[var(--bg-secondary)]/80 border-[var(--accent)] text-[var(--text-primary)]' 
        : 'bg-[var(--bg-secondary)]/80 border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text-secondary)]')
    : 'bg-neutral-900/80 border-neutral-800 text-neutral-500';

  return (
    <button
      onClick={toggleSound}
      className={`${baseClasses} ${themeClasses}`}
      aria-label={isEnabled ? "Mute sounds" : "Enable sounds"}
      title="Better with sound 😉"
    >
      {/* Icon */}
      <div className="relative w-4 h-4 flex items-center justify-center">
         {isEnabled ? (
             <div className="flex gap-[2px] items-center h-full">
                 <div className="w-[2px] h-full bg-current animate-[sound-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-[2px] h-3/4 bg-current animate-[sound-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '200ms' }}></div>
                 <div className="w-[2px] h-1/2 bg-current animate-[sound-bar_1s_ease-in-out_infinite]" style={{ animationDelay: '400ms' }}></div>
             </div>
         ) : (
            <div className="w-[2px] h-full bg-current rotate-45 absolute"></div>
         )}
      </div>
      
      {/* Hinglish Label */}
      <span className="text-xs font-mono hidden sm:inline">
        {isEnabled ? "Sound on 🔊" : "Thoda sound?"}
      </span>
      
      <style jsx>{`
        @keyframes sound-bar {
            0%, 100% { height: 30%; opacity: 0.5; }
            50% { height: 100%; opacity: 1; }
        }
      `}</style>
    </button>
  );
}
