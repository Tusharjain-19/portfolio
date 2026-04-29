import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] py-16 sm:py-24 px-4 sm:px-6 lg:px-10 mt-auto w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
        
        {/* Col 1: Brand & Bio */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block text-xl sm:text-2xl font-black text-[var(--text-primary)] tracking-tight">
            {PORTFOLIO.profile.name}.
          </Link>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-md">
            {PORTFOLIO.profile.bio}
          </p>
          <div className="pt-4 font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
            <p className="mb-1">Based in {PORTFOLIO.education.college.includes('Bengaluru') ? 'Bengaluru, India' : 'India'}</p>
            <p>Class of {PORTFOLIO.education.graduation}</p>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-4">
            <h3 className="text-[var(--text-primary)] font-bold text-sm tracking-widest uppercase font-mono mb-4">Sitemap</h3>
            <ul className="space-y-3 font-mono text-sm">
                <li><Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link></li>
                <li><Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">All Projects</Link></li>
                <li><Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</Link></li>
            </ul>
        </div>

        {/* Col 3: Connect & Socials */}
        <div className="space-y-4">
            <h3 className="text-[var(--text-primary)] font-bold text-sm tracking-widest uppercase font-mono mb-4">Connect</h3>
            <ul className="space-y-3 font-mono text-sm">
                <li><a href={PORTFOLIO.profile.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a></li>
                <li><a href={PORTFOLIO.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a></li>
                <li><a href={`mailto:${PORTFOLIO.profile.socials.email}`} className="hover:text-[var(--text-primary)] transition-colors">Email</a></li>
                <li><a href={PORTFOLIO.profile.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors underline decoration-[var(--border-color)] underline-offset-4 hover:decoration-[var(--text-primary)]">Resume</a></li>
            </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
        <p className="opacity-70">&copy; {new Date().getFullYear()} {PORTFOLIO.profile.name}. All rights reserved.</p>
        <p className="opacity-70 italic">&quot;Engineering simple solutions for real-world problems.&quot;</p>
      </div>
    </footer>
  );
}
