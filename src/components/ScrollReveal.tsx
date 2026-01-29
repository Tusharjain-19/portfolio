
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Accessibility: Disable animations if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !el.current) return;

    // Mobile: Use faster, subtler animation
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        {
          opacity: 0,
          y: isMobile ? 10 : 20, // Reduced offset on mobile
        },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.4 : 0.6, // Faster on mobile
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 80%", // Trigger when top of element hits 80% of viewport
            toggleActions: "play none none none", // Play once, never reverse
            once: true, // Ensures animation only happens once
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
