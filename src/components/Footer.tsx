
import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)] py-10 sm:py-12 px-4 sm:px-6 font-mono text-xs uppercase tracking-widest">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left: name + school */}
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <p className="text-[var(--text-secondary)] font-bold normal-case tracking-normal text-sm">
            {PORTFOLIO.profile.name}
          </p>
          <p className="text-[var(--text-muted)] opacity-60 normal-case tracking-normal text-xs">
            Engineering Student · BMS College of Engineering
          </p>
        </div>

        {/* Right: links */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a href={PORTFOLIO.profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
            <a href={PORTFOLIO.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
            <a href={PORTFOLIO.profile.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Resume</a>
            <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="hover:text-[var(--text-primary)] transition-colors">Email</a>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[var(--border-color)] text-center">
        <p className="opacity-40 text-[10px]">&copy; {new Date().getFullYear()} {PORTFOLIO.profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
