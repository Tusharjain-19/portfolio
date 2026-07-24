'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import { Github, LinkedIn, Twitter, Mail, ArrowUpRight } from './Icons';
import ResumeModal from './ResumeModal';

export default function Footer() {
  useEffect(() => {
    // Keep an empty effect if needed, or remove later
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-(--bg-primary) text-(--text-primary) border-t border-(--border-color) overflow-hidden pt-12 sm:pt-16 pb-8 px-4 sm:px-8">
      
      {/* Massive Background Text - More subtle and elegant */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden flex justify-center items-center h-full">
         <span 
            className="text-[28vw] sm:text-[25vw] font-heading font-normal italic leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '0.3px var(--border-color)', opacity: 0.1 }}
         >
             JAIN
         </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        
        {/* TOP SECTION: Links & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-10">
            
            {/* Column 1: Logo & Tagline */}
            <div className="col-span-1 flex flex-col">
                <Link href="/" className="font-bold text-3xl tracking-tight mb-8 inline-block group">
                    <span className="font-heading italic font-normal group-hover:text-(--accent) transition-colors">tushar jain</span> <span className="font-heading text-(--accent)">.</span>
                </Link>
                <p className="text-(--text-secondary) font-light text-base max-w-[240px] leading-relaxed italic opacity-80">
                    Bridging the gap between software engineering and hardware innovation.
                </p>
            </div>

            {/* Column 2: Projects */}
            <div className="col-span-1 flex flex-col gap-4">
                <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-(--text-muted) mb-4 border-b border-(--border-color) pb-2 w-fit">Projects</h4>
                {PORTFOLIO.projects.slice(0, 3).map(p => (
                    <Link key={p.id} href={`/work/${p.slug}`} className="text-sm text-(--text-secondary) hover:text-(--text-primary) hover:translate-x-1 transition-all duration-300 w-fit">
                        {p.title}
                    </Link>
                ))}
                <Link href="/projects" className="group mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest px-5 py-2.5 border border-(--border-color) hover:border-(--text-primary) hover:bg-(--text-primary) hover:text-(--bg-primary) transition-all w-fit">
                    View All Projects <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                </Link>
            </div>

            {/* Column 3: Navigate */}
            <div className="col-span-1 flex flex-col gap-5">
                <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-(--text-muted) mb-4 border-b border-(--border-color) pb-2 w-fit">Navigate</h4>
                <Link href="/about" className="text-sm text-(--text-secondary) hover:text-(--text-primary) hover:translate-x-1 transition-all duration-300 w-fit">Background</Link>
                <Link href="/contact" className="text-sm text-(--text-secondary) hover:text-(--text-primary) hover:translate-x-1 transition-all duration-300 w-fit">Connect</Link>
                <button onClick={scrollToTop} className="text-sm text-(--text-secondary) hover:text-(--text-primary) hover:translate-x-1 transition-all duration-300 w-fit flex items-center gap-2">
                    Back to Top ↑
                </button>
            </div>

            {/* Column 4: Connect */}
            <div className="col-span-1 flex flex-col gap-5">
                <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-(--text-muted) mb-4 border-b border-(--border-color) pb-2 w-fit">Connect</h4>
                <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="text-sm text-(--text-secondary) hover:text-(--text-primary) transition-colors flex items-center gap-3 group w-fit">
                    <span className="p-2 border border-(--border-color) group-hover:border-(--text-primary) transition-colors rounded-full">
                        <Mail className="w-3.5 h-3.5" />
                    </span>
                    {PORTFOLIO.profile.socials.email}
                </a>
                <div className="text-sm text-(--text-secondary) flex items-center gap-3 w-fit">
                    <span className="p-2 border border-(--border-color) rounded-full">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    Bengaluru, India
                </div>
                <ResumeModal resumeUrl={PORTFOLIO.profile.resumeLink}>
                    <div className="mt-2 text-xs font-mono font-bold uppercase tracking-widest text-(--text-primary) hover:opacity-60 transition-opacity flex items-center gap-2 w-fit">
                        Full Résumé <ArrowUpRight className="w-3 h-3" />
                    </div>
                </ResumeModal>
            </div>

        </div>

        {/* BOTTOM BAR: Minimalist & Clean */}
        <div className="w-full border-t border-(--border-color) pt-10 flex flex-col md:grid md:grid-cols-3 items-center gap-8">
            
            {/* Social Icons */}
            <div className="flex items-center gap-8 justify-center md:justify-start">
                <a href={PORTFOLIO.profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-(--text-muted) hover:text-(--text-primary) hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                </a>
                <a href={PORTFOLIO.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-(--text-muted) hover:text-(--text-primary) hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
                    <LinkedIn className="w-5 h-5" />
                </a>
                <a href={PORTFOLIO.profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-(--text-muted) hover:text-(--text-primary) hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="text-(--text-muted) hover:text-(--text-primary) hover:-translate-y-1 transition-all duration-300" aria-label="Email">
                    <Mail className="w-5 h-5" />
                </a>
            </div>

            {/* Empty space for grid alignment */}
            <div className="hidden md:block" />

            {/* Copyright */}
            <div className="text-[10px] font-mono text-(--text-muted) text-center md:text-right uppercase tracking-widest opacity-60">
                &copy; {new Date().getFullYear()} Tushar Jain &middot; All Rights Reserved
            </div>

        </div>

      </div>
    </footer>
  );
}
