
import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';

export const metadata = {
  title: "Contact | Tushar Jain",
  description: "Get in touch for engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-neutral-800 flex flex-col">
      
      {/* HEADER / NAVIGATION */}
      <nav className="p-6 md:p-12 flex justify-between items-center max-w-3xl mx-auto w-full">
         <Link href="/" className="font-bold text-lg hover:text-[var(--text-secondary)] transition-colors">
            {PORTFOLIO.profile.name}.
         </Link>
          <Link href="/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            ← Back Home
         </Link>
      </nav>

      <div className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 pb-20 max-w-2xl mx-auto w-full text-center">
        
        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">Get in touch</h1>
        
        {/* SECTION 1 - INTRO */}
        <p className="text-xl text-[var(--text-secondary)] font-light mb-12 max-w-lg leading-relaxed">
            I am currently open to internship opportunities and discussions about embedded systems or web engineering.
        </p>

        {/* SECTION 2 - CONTACT METHODS */}
        <div className="w-full space-y-4 mb-12">
            
            {/* EMAIL */}
            <a 
                href={`mailto:${PORTFOLIO.profile.socials.email}`}
                className="block w-full p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-all group"
            >
                <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1 group-hover:text-[var(--text-secondary)]">Email</span>
                <span className="text-xl md:text-2xl font-mono text-[var(--text-primary)] break-all">{PORTFOLIO.profile.socials.email}</span>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* LINKEDIN */}
                <a 
                    href={PORTFOLIO.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-all group"
                >
                    <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1 group-hover:text-[var(--text-secondary)]">Professional Network</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">LinkedIn ↗</span>
                </a>

                {/* GITHUB */}
                <a 
                    href={PORTFOLIO.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--text-muted)] transition-all group"
                >
                    <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1 group-hover:text-[var(--text-secondary)]">Code & Projects</span>
                    <span className="text-lg font-bold text-[var(--text-primary)]">GitHub ↗</span>
                </a>
            </div>
        </div>

        {/* SECTION 3 - RESUME */}
        <div className="mb-12">
             <a 
                href="/Tushar Jain (2).pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded hover:opacity-90 transition-opacity"
             >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>Download Resume (PDF)</span>
             </a>
        </div>

        {/* SECTION 4 - LOCATION */}
        <div className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
            Based in Bengaluru, India
        </div>

      </div>
    </main>
  );
}
