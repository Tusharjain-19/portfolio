import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "Credentials",
  description: "Verified certifications, hackathons, and achievements of Tushar Jain.",
};

export default function CredentialsPage() {
  return (
    <main className="theme-jaisalmer bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] transition-colors duration-500 font-body relative overflow-hidden">
      
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-5xl mx-auto space-y-16 sm:space-y-24">
        
        {/* PAGE TITLE */}
        <header className="text-center space-y-6 sm:space-y-8 pb-10 border-b border-[var(--border-color)]">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mb-4 uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Return to Home
            </Link>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-heading text-[var(--text-primary)] tracking-tight">
              Credentials
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto">
              Verified certifications, industry training, and hackathon achievements.
            </p>
        </header>

        {/* ACHIEVEMENTS SECTION */}
        <section className="space-y-8">
            <ScrollReveal>
                <h2 className="text-sm font-mono text-[var(--accent)] uppercase tracking-[0.2em] mb-4">🏆 Ecosystem Achievements</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PORTFOLIO.hackathons.map((item, idx) => (
                    <ScrollReveal key={idx} className="group">
                        <div className="flex flex-col h-full p-6 sm:p-10 bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] hover:border-[var(--accent)] rounded-2xl transition-all duration-500 hover:shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-7xl font-black select-none pointer-events-none">
                                0{idx + 1}
                            </div>
                            <span className="inline-block px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-full text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] self-start mb-4">
                                {item.title}
                            </span>
                            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                {item.achievement}
                            </h3>
                            <h4 className="text-sm font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">
                                Project: {item.project}
                            </h4>
                            {item.description && (
                                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            )}
                            {item.imageUrl && (
                                <div className="mt-auto w-full border border-[var(--border-color)] rounded-xl overflow-hidden shadow-md bg-[var(--bg-primary)]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        src={item.imageUrl} 
                                        alt={`${item.project} Certificate`} 
                                        className="w-full h-auto max-h-[300px] object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                                    />
                                </div>
                            )}
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="space-y-8 pt-8 border-t border-[var(--border-color)]">
             <ScrollReveal>
                 <h2 className="text-sm font-mono text-[var(--accent)] uppercase tracking-[0.2em] mb-4">📜 Professional Certifications</h2>
             </ScrollReveal>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {PORTFOLIO.certifications.map((cert, idx) => (
                     <ScrollReveal key={idx}>
                         <div className="flex flex-col h-full p-6 bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] hover:border-[var(--accent)] rounded-2xl transition-all duration-500 hover:shadow-xl relative">
                             {/* Badge */}
                             <div className="flex justify-between items-start mb-6">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center font-bold text-xs">
                                         {cert.issuer === 'Coursera' ? 'C' : 'I'}
                                     </div>
                                     <div>
                                         <span className="block text-xs font-bold text-[var(--text-primary)]">{cert.issuer}</span>
                                         <span className="block text-[9px] font-mono text-[var(--text-muted)] uppercase">Verified Credential</span>
                                     </div>
                                 </div>
                                 <span className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[9px] font-mono uppercase tracking-wider rounded-full">
                                     Active
                                 </span>
                             </div>

                             <h3 className="text-xl font-bold font-heading text-[var(--text-primary)] mb-4 flex-grow">
                                 {cert.title}
                             </h3>

                             {cert.skillsGained && (
                                 <div className="mb-6">
                                     <span className="block text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Skills Gained:</span>
                                     <div className="flex flex-wrap gap-1.5">
                                         {cert.skillsGained.map((skill) => (
                                             <span key={skill} className="px-2 py-0.5 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-[10px] rounded font-mono">
                                                 {skill}
                                             </span>
                                         ))}
                                     </div>
                                 </div>
                             )}

                             {cert.verifyUrl !== '#' && (
                                 <a 
                                     href={cert.verifyUrl}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="w-full mt-auto py-2.5 bg-[var(--accent)] text-[var(--bg-primary)] font-bold text-center text-xs uppercase tracking-widest rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                                 >
                                     <span>Verify Credential</span>
                                     <ArrowUpRight className="w-3.5 h-3.5" />
                                 </a>
                             )}
                         </div>
                     </ScrollReveal>
                 ))}
             </div>
        </section>

      </div>
    </main>
  );
}
