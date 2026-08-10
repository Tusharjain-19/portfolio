'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PORTFOLIO } from '@/data/portfolio';

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = "Engineering student at BMS College of Engineering, building real-world projects across frontend, backend, and embedded systems, focused on solving practical problems through simple and usable products.".split(" ");

  return (
    <section ref={containerRef} className="py-24 sm:py-48 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto">
      <div className="flex flex-col gap-12">
        
        {/* Name Reveal */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold font-heading text-(--text-primary)"
        >
          Tushar Jain.
        </motion.h2>

        {/* Paragraph Reveal - Word by Word */}
        <div className="flex flex-wrap gap-x-[0.2em] gap-y-[0.1em]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [0.1, 0.4 + (i * 0.005)], [0.1, 1]);
            
            return (
              <motion.span 
                key={i} 
                style={{ opacity }}
                className="text-2xl sm:text-4xl md:text-5xl font-light text-(--text-primary) leading-tight"
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Links Reveal */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-8 mt-8"
        >
          <a 
            href={`mailto:${PORTFOLIO.profile.socials.email}`} 
            className="text-lg sm:text-xl font-mono uppercase tracking-widest text-(--text-primary) hover:opacity-50 underline decoration-(--border-color) underline-offset-8 transition-all"
          >
            Email Me
          </a>
          <a 
            href={PORTFOLIO.profile.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg sm:text-xl font-mono uppercase tracking-widest text-(--text-primary) hover:opacity-50 underline decoration-(--border-color) underline-offset-8 transition-all"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
