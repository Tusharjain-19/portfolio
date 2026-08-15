'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowDown } from '@/components/Icons';

export default function Hero() {
  const bioWords = "Computer Science & Business Systems engineering student at BMSCE, Bengaluru, building fullstack web applications, SaaS MVPs, and embedded IoT hardware to solve real-world problems.".split(" ");

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between items-center overflow-hidden pt-12 pb-8">
      <div />

      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-4 sm:px-8 md:px-16 max-w-5xl mx-auto relative z-20 text-center my-auto">
        
        {/* Bio Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-10 mb-10 w-full">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl sm:text-6xl md:text-8xl font-bold font-body text-(--text-primary) tracking-tight"
            >
                Tushar Jain.
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-x-[0.35em] gap-y-[0.4em] max-w-3xl">
                {bioWords.map((word, i) => (
                    <motion.span 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.015) }}
                        className="text-xl sm:text-2xl md:text-3xl font-body font-normal text-(--text-secondary) leading-relaxed"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
        </div>

        {/* Action Links */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 pt-6">
            <motion.a 
                href={`mailto:${PORTFOLIO.profile.socials.email}`} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group flex flex-col items-center gap-3 hover:opacity-70 transition-opacity"
            >
                <span className="text-xs font-mono text-(--text-muted) tracking-widest uppercase">Contact</span>
                <span className="text-lg sm:text-xl font-medium font-body text-(--text-primary) underline decoration-(--border-color) underline-offset-8">Email Me</span>
            </motion.a>
            
            <motion.a 
                href={PORTFOLIO.profile.socials.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group flex flex-col items-center gap-3 hover:opacity-70 transition-opacity"
            >
                <span className="text-xs font-mono text-(--text-muted) tracking-widest uppercase">Connect</span>
                <span className="text-lg sm:text-xl font-medium font-body text-(--text-primary) underline decoration-(--border-color) underline-offset-8">LinkedIn</span>
            </motion.a>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt at Bottom of Viewport */}
      <motion.div 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 5 }}
        transition={{ duration: 1.2, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="flex flex-col items-center gap-2 text-(--text-muted) pt-6"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Scroll Down</span>
        <ArrowDown className="w-4 h-4 opacity-60" />
      </motion.div>
    </section>
  );
}
