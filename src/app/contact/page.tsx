
import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "Contact Tushar Jain — Engineering Intern, BMSCE Bengaluru",
  description: "Get in touch with Tushar Jain for engineering internships, embedded systems projects, web development, or collaboration. BMSCE CSBS student based in Bengaluru, India.",
  keywords: ["contact Tushar Jain", "Tushar Jain email", "hire Tushar Jain", "engineering intern Bengaluru", "BMSCE intern", "freelance developer India"],
  alternates: {
    canonical: 'https://tusharjain.in/contact',
  },
  openGraph: {
    title: "Contact Tushar Jain — BMSCE, Bengaluru",
    description: "Get in touch for engineering internships, embedded systems, or web development opportunities.",
    url: 'https://tusharjain.in/contact',
    type: 'website',
    siteName: 'Tushar Jain — Engineering Portfolio',
  },
  twitter: {
    card: 'summary' as const,
    title: "Contact Tushar Jain — BMSCE, Bengaluru",
    description: "Engineering intern available for web dev, embedded systems & collaboration.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-neutral-800 flex flex-col">

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-10 pb-16 sm:pb-20 pt-6 sm:pt-8 max-w-2xl mx-auto w-full">
        
        {/* PAGE TITLE */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[var(--text-primary)]">Get in touch</h1>
          
          {/* SECTION 1 - INTRO */}
          <p className="text-base sm:text-xl text-[var(--text-secondary)] font-light max-w-lg leading-relaxed">
              I am currently open to internship opportunities and discussions about embedded systems or web engineering.
          </p>
        </div>

        {/* SECTION 2 - CONTACT METHODS */}
        <div className="w-full space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            
            {/* EMAIL */}
            <a 
                href={`mailto:${PORTFOLIO.profile.socials.email}`}
                className="block w-full p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-muted)] transition-all group"
            >
                <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1.5 group-hover:text-[var(--text-secondary)]">Email</span>
                <span className="text-base sm:text-xl md:text-2xl font-mono text-[var(--text-primary)] break-all leading-tight">{PORTFOLIO.profile.socials.email}</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                 {/* LINKEDIN */}
                <a 
                    href={PORTFOLIO.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-muted)] transition-all group"
                >
                    <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1.5 group-hover:text-[var(--text-secondary)]">Professional Network</span>
                    <span className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-[var(--text-primary)]">LinkedIn <ArrowUpRight className="w-4 h-4" /></span>
                </a>

                {/* GITHUB */}
                <a 
                    href={PORTFOLIO.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-4 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl hover:border-[var(--text-muted)] transition-all group"
                >
                    <span className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1.5 group-hover:text-[var(--text-secondary)]">Code &amp; Projects</span>
                    <span className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-[var(--text-primary)]">GitHub <ArrowUpRight className="w-4 h-4" /></span>
                </a>
            </div>
        </div>

        {/* SECTION 3 - RESUME */}
        <div className="mb-8 sm:mb-12">
             <a 
                href={PORTFOLIO.profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
             >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
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
