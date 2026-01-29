'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO } from '@/data/portfolio';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Subtle Background */}
        <HeroBackground />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between w-full">
            <div className="flex-1 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }} // Delay after preloader
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-6 leading-[0.9]">
                        {PORTFOLIO.profile.name}
                        <span className="text-[var(--text-muted)]">.</span>
                    </h1>
                    <motion.div 
                        className="text-xl md:text-3xl text-[var(--text-secondary)] font-light max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                         {/* Split bio into lines if needed or just show it */}
                        {PORTFOLIO.profile.bio}
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                >
                    <motion.a 
                        href={`mailto:${PORTFOLIO.profile.socials.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full hover:opacity-90 transition-all inline-block shadow-lg"
                    >
                        Email Me
                    </motion.a>
                    
                    <motion.a 
                        href={PORTFOLIO.profile.socials.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all bg-[var(--bg-primary)]/50 backdrop-blur-sm inline-block"
                    >
                        LinkedIn
                    </motion.a>
                    
                    <motion.a 
                        href="/Tushar Jain (2).pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all bg-[var(--bg-primary)]/50 backdrop-blur-sm inline-block"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>
            </div>

            {/* Profile Picture - Magnetic & Glowing */}
            <motion.div 
                className="relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 2.4, ease: "backOut" }}
            >
                <div className="relative z-10 block">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl relative group">
                        <Image 
                            src="/pic2.jpeg"
                            alt={`${PORTFOLIO.profile.name} profile`}
                            fill
                            className="object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-105 group-hover:scale-110"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                         {/* Inner Glow */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                    </div>
                </div>

                {/* Decorative Elements behind - Theme Aware */}
                <div className="absolute -inset-4 opacity-20 blur-2xl rounded-full z-0 animate-pulse bg-gradient-to-tr from-neutral-800 to-neutral-500 dark:from-neutral-800 dark:to-neutral-500 light:from-neutral-200 light:to-neutral-400" />
            </motion.div>
        </div>
    </section>
  );
}
