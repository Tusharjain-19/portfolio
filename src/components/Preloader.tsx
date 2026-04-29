'use client';

import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';

export default function Preloader() {
  const [scope, animate] = useAnimate();
  const [complete, setComplete] = useState(false);
  const [text, setText] = useState("INITIALIZING");

  useEffect(() => {
    const words = ["INITIALIZING", "LOADING ASSETS", "CONFIGURING ENVIRONMENT", "READY"];
    
    const sequence = async () => {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';

      // 1. Progress Bar
      await animate("#progress-bar", { width: "100%" }, { duration: 0.1, ease: "easeInOut" });
      
      // 2. Text Fade Out
      animate("#preloader-text", { opacity: 0, y: -20 }, { duration: 0.1 });
      
      // 3. Container Slide Up
      await animate(scope.current, { y: "-100%" }, { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 0.05 });

      // Cleanup
      document.body.style.overflow = '';
      setComplete(true);
    };

    sequence();

    // Word cycler
    let wordIndex = 0;
    const interval = setInterval(() => {
        if (wordIndex < words.length) {
            setText(words[wordIndex]);
            wordIndex++;
        }
    }, 350);

    return () => {
        clearInterval(interval);
        document.body.style.overflow = '';
    };
  }, [animate, scope]);

  if (complete) return null;

  return (
    <div 
        ref={scope}
        className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
        <div className="w-64 md:w-96 space-y-4">
            <div 
                id="preloader-text"
                className="text-white font-mono text-xs md:text-sm tracking-[0.2em] text-center h-5"
            >
                {text}...
            </div>
            <div className="w-full h-[1px] bg-[#333] relative overflow-hidden">
                <div 
                    id="progress-bar"
                    className="absolute left-0 top-0 h-full bg-white w-0"
                />
            </div>
        </div>
    </div>
  );
}
