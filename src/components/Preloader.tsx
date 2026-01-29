'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const words = ["INITIALIZING", "LOADING ASSETS", "CONFIGURING ENVIRONMENT", "READY"];

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setComplete(true)
    });

    const isMobile = window.innerWidth < 768;

    // Prevent scrolling during preload
    document.body.style.overflow = 'hidden';

    // Animation Sequence
    tl.to(progressRef.current, {
      width: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
    })
    .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
    }, "-=0.2")
    .to(containerRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut',
    });

    // Word cycler
    let wordIndex = 0;
    const interval = setInterval(() => {
        if (textRef.current && wordIndex < words.length) {
            textRef.current.innerText = words[wordIndex];
            wordIndex++;
        }
    }, 350);

    return () => {
        clearInterval(interval);
        document.body.style.overflow = ''; // Restore scroll
    };
  }, []);

  if (complete) return null;

  return (
    <div 
        ref={containerRef}
        className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-none"
    >
        <div className="w-64 md:w-96 space-y-4">
            <div 
                ref={textRef}
                className="text-white font-mono text-xs md:text-sm tracking-[0.2em] text-center h-5"
            >
                INITIALIZING...
            </div>
            <div className="w-full h-[1px] bg-[#333] relative overflow-hidden">
                <div 
                    ref={progressRef}
                    className="absolute left-0 top-0 h-full bg-white w-0"
                />
            </div>
        </div>
    </div>
  );
}
