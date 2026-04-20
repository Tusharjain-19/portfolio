'use client';

import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden min-h-[90vh] sm:min-h-[85vh] flex items-center w-full max-w-[100vw]">
        {/* Subtle Background */}
        <HeroBackground />
        
        {/* Content Layer */}
        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 md:gap-12 items-start justify-center w-full max-w-4xl mx-auto overflow-hidden">
            
            {/* Text Block */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8 w-full max-w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="w-full break-words"
                >
                    <h1 className="text-[11vw] leading-none sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-(--text-primary) mb-3 md:mb-6 leading-[1.05] md:leading-[0.9] text-wrap-balance break-words break-keep sm:break-normal w-full max-w-full">
                        {PORTFOLIO.profile.name}
                        <span className="text-(--text-muted)">.</span>
                    </h1>
                    <motion.div 
                        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-(--text-secondary) font-light max-w-2xl leading-relaxed mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        {PORTFOLIO.profile.bio}
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4 pt-4 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                >
                    <motion.a 
                        href={`mailto:${PORTFOLIO.profile.socials.email}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto text-center px-5 sm:px-6 md:px-8 py-3 bg-(--text-primary) text-(--bg-primary) font-medium rounded-full hover:opacity-90 transition-all shadow-lg text-sm sm:text-base flex-1 sm:flex-none"
                    >
                        Email Me
                    </motion.a>
                    
                    <motion.a 
                        href={PORTFOLIO.profile.socials.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto text-center px-5 sm:px-6 md:px-8 py-3 border border-(--border-color) text-(--text-secondary) rounded-full hover:text-(--text-primary) hover:border-(--text-primary) transition-all bg-(--bg-primary)/50 backdrop-blur-sm text-sm sm:text-base flex-1 sm:flex-none"
                    >
                        LinkedIn
                    </motion.a>

                </motion.div>
            </div>
        </div>
    </section>
  );
}
