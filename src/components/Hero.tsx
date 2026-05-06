'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const bioWords = "Engineering student at BMS College of Engineering, building real-world projects across frontend, backend, and embedded systems, focused on solving practical problems through simple and usable products.".split(" ");

  return (
    <section className="relative w-full flex flex-col overflow-hidden pt-32 pb-10">
      
      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-4 sm:px-8 md:px-16 max-w-5xl mx-auto relative z-20 text-center">
        
        {/* Bio Section */}
        <div className="flex flex-col items-center gap-6 sm:gap-10 mb-8 w-full">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-body text-[var(--text-primary)] tracking-tight"
            >
                Tushar Jain.
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.4em] max-w-3xl">
                {bioWords.map((word, i) => (
                    <motion.span 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.015) }}
                        className="text-lg sm:text-xl md:text-2xl font-body font-normal text-[var(--text-secondary)] leading-loose"
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
        </div>

        {/* Action Links */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 pt-4">
            <motion.a 
                href="mailto:tushar.jain2022@bmsce.ac.in" 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group flex flex-col items-center gap-3 hover:opacity-70 transition-opacity"
            >
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">Contact</span>
                <span className="text-lg sm:text-xl font-medium font-body text-[var(--text-primary)] underline decoration-[var(--border-color)] underline-offset-8">Email Me</span>
            </motion.a>
            
            <motion.a 
                href="https://linkedin.com/in/tushar-jain-in" 
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group flex flex-col items-center gap-3 hover:opacity-70 transition-opacity"
            >
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">Network</span>
                <span className="text-lg sm:text-xl font-medium font-body text-[var(--text-primary)] underline decoration-[var(--border-color)] underline-offset-8">LinkedIn</span>
            </motion.a>
        </div>

      </div>
    </section>
  );
}
