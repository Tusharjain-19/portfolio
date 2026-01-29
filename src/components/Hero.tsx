'use client';

import React from 'react';
import Image from 'next/image';
import { PORTFOLIO } from '@/data/portfolio';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-12 md:py-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Subtle Background */}
        <HeroBackground />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between w-full text-center md:text-left">
            <div className="flex-1 space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-[var(--text-primary)] mb-4 md:mb-6 leading-[1.1] md:leading-[0.9]">
                        {PORTFOLIO.profile.name}
                        <span className="text-[var(--text-muted)]">.</span>
                    </h1>
                    <motion.div 
                        className="text-lg md:text-2xl text-[var(--text-secondary)] font-light max-w-xl mx-auto md:mx-0 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        {PORTFOLIO.profile.bio}
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="flex flex-wrap justify-center md:justify-start gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                >
                    <motion.a 
                        href={`mailto:${PORTFOLIO.profile.socials.email}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-full hover:opacity-90 transition-all inline-block shadow-lg text-sm md:text-base"
                    >
                        Email Me
                    </motion.a>
                    
                    <motion.a 
                        href={PORTFOLIO.profile.socials.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 md:px-8 py-3 border border-[var(--border-color)] text-[var(--text-secondary)] rounded-full hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all bg-[var(--bg-primary)]/50 backdrop-blur-sm inline-block text-sm md:text-base"
                    >
                        LinkedIn
                    </motion.a>
                </motion.div>
            </div>

            {/* Profile Picture */}
            <motion.div 
                className="relative flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 2.4, ease: "backOut" }}
            >
                <div className="relative z-10 block">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl relative group">
                        <Image 
                            src="/pic2.jpeg"
                            alt={`${PORTFOLIO.profile.name} profile`}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 224px, 320px"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
