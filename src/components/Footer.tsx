
import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)] py-12 px-6 font-mono text-xs uppercase tracking-widest text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {PORTFOLIO.profile.name}</p>
        <p className="text-[var(--text-muted)] opacity-60">Engineering Student at {PORTFOLIO.education.college}</p>
        <div className="flex gap-4 mt-2">
            <a href={PORTFOLIO.profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
            <a href={PORTFOLIO.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
            <a href={PORTFOLIO.profile.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">Resume</a>
            <a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="hover:text-[var(--text-primary)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
