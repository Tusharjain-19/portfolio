
import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "Contact",
  description: "Get in touch with Tushar Jain for engineering internships, embedded systems projects, web development, or collaboration.",
};

export default function ContactPage() {
  return (
    <main className="theme-pushkar bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500 font-body">

      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="px-4 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-3xl mx-auto w-full relative z-10">
        
        {/* PAGE TITLE */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 font-heading text-[var(--text-primary)] tracking-tight">
            Connect
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-xl leading-relaxed">
              Open to engineering internships, embedded systems discussions, and building the future.
          </p>
        </div>

        {/* FLOATING GLASS PANEL */}
        <div className="w-full space-y-4 mb-12 bg-[var(--bg-secondary)]/30 backdrop-blur-xl border border-[var(--border-color)] p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* EMAIL */}
            <a 
                href={`mailto:${PORTFOLIO.profile.socials.email}`}
                className="block w-full p-5 sm:p-8 bg-[var(--bg-primary)]/50 border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden"
            >
                <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.2em] mb-3">Electronic Mail</span>
                <span className="text-base sm:text-2xl md:text-3xl font-heading text-[var(--text-primary)] break-words leading-tight">
                  {PORTFOLIO.profile.socials.email}
                </span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {/* LINKEDIN */}
                <a 
                    href={PORTFOLIO.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 sm:p-6 bg-[var(--bg-primary)]/50 border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300"
                >
                    <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.2em] mb-3">Network</span>
                    <span className="flex items-center gap-2 text-base sm:text-lg font-heading font-bold text-[var(--text-primary)]">
                      LinkedIn <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                    </span>
                </a>

                {/* GITHUB */}
                <a 
                    href={PORTFOLIO.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 sm:p-6 bg-[var(--bg-primary)]/50 border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300"
                >
                    <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-[0.2em] mb-3">Code</span>
                    <span className="flex items-center gap-2 text-base sm:text-lg font-heading font-bold text-[var(--text-primary)]">
                      GitHub <ArrowUpRight className="w-4 h-4 text-[var(--accent)]" />
                    </span>
                </a>
            </div>
        </div>

        {/* SECTION 3 - RESUME */}
        <div className="mb-12 flex justify-center sm:justify-start">
             <a 
                href={PORTFOLIO.profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold font-heading tracking-wide rounded-full hover:scale-105 hover:shadow-[0_0_20px_var(--accent)] transition-all duration-300 text-sm sm:text-base"
             >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <span>Download Artifact (Resume)</span>
             </a>
        </div>

        {/* SECTION 4 - LOCATION */}
        <div className="text-center sm:text-left text-[var(--text-muted)] font-mono text-xs uppercase tracking-[0.2em] relative inline-block">
            Based in Bengaluru, India
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] rounded-full animate-ping" />
        </div>

      </div>
    </main>
  );
}
