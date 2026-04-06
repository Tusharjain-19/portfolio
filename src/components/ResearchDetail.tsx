
import React from 'react';
import { ResearchProject } from '@/data/types';
import Link from 'next/link';
import { Circle, ArrowUpRight, ArrowLeft } from '@/components/Icons';

export default function ResearchDetail({ research }: { research: ResearchProject }) {
  return (
    <article className="min-h-full text-[var(--text-primary)] pb-16 sm:pb-20 max-w-4xl mx-auto">
      
      {/* HEADER */}
      <header className="py-10 sm:py-14 md:py-20 border-b border-[var(--border-color)]">
        <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-mono rounded border border-blue-900/30 uppercase tracking-wider">
                {research.researchType}
            </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight text-[var(--text-primary)]">{research.title}</h1>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
            <span>Sole Author</span>
            <span>•</span>
            <span>Systems Architecture</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
        </div>
      </header>

      {/* BODY — Single column on mobile, 2-col on md+ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-12">
        
        {/* LEFT COLUMN - Main Content */}
        <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            
            {/* SECTION 1 - CONTEXT */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Context</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                    {research.problemContext}
                </p>
            </section>

            {/* SECTION 2 - RESEARCH PROBLEM */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Research Problem</h2>
                <div className="p-4 sm:p-6 bg-[var(--bg-secondary)] border-l-2 border-[var(--text-muted)] rounded-r">
                   <p className="text-[var(--text-secondary)] italic leading-relaxed text-sm sm:text-base">
                        Traditional maritime surveillance systems often struggle to balance stealthy detection with active response, especially in environments requiring strict ethical oversight. Existing autonomous solutions often lack the &quot;Human-in-the-loop&quot; gating necessary for non-lethal compliance.
                   </p>
                </div>
            </section>

            {/* SECTION 3 - PROPOSED ARCHITECTURE */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Proposed System Architecture</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {research.systemArchitectureSummary}
                </p>
                <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-xs sm:text-sm p-4 text-center">
                    <span className="mb-2">[ Architecture Diagram Placeholder ]</span>
                    <span className="text-xs text-[var(--text-muted)] opacity-70">Dual-UUV Communication &amp; Command Flow</span>
                </div>
            </section>

            {/* SECTION 4 - CORE TECHNICAL AREAS */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Core Technical Areas</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {research.coreTechnicalAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                            <span className="text-blue-500 text-xs shrink-0">■</span>
                            <span className="text-[var(--text-secondary)] text-sm">{area}</span>
                        </li>
                    ))}
                </ul>
            </section>

             {/* SECTION 5 - KEY CONTRIBUTIONS */}
             <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Key Contributions</h2>
                <ul className="space-y-3 sm:space-y-4">
                    {research.keyContributions.map((item, idx) => (
                        <li key={idx} className="flex gap-3 sm:gap-4 items-start text-[var(--text-secondary)]">
                            <span className="text-green-500 mt-1.5 text-xs shrink-0">✓</span>
                            <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

             {/* SECTION 6 - LIMITATIONS & ETHICS */}
             <section className="p-5 sm:p-8 bg-amber-900/5 border border-amber-900/20 rounded-lg">
                <h2 className="text-xs sm:text-sm font-mono text-amber-600 mb-3 sm:mb-4 uppercase tracking-widest flex items-center gap-2">
                    [!] Limitations &amp; Ethical Considerations
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                    {research.limitationsAndEthics}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">Conceptual Only</span>
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">No Field Deployment</span>
                </div>
            </section>

            {/* SECTION 7 - LEARNINGS */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">What I Learned</h2>
                 <ul className="space-y-3 sm:space-y-4">
                    {research.learnings.map((item, idx) => (
                        <li key={idx} className="flex gap-3 sm:gap-4 items-start text-[var(--text-secondary)]">
                            <Circle className="text-[var(--text-muted)] mt-1.5 w-2.5 h-2.5 shrink-0" />
                            <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

        {/* RIGHT COLUMN - ACTIONS (Full width on mobile, sticky sidebar on lg) */}
        <div className="lg:col-span-4 order-first lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-4">
                <div className="p-5 sm:p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl">
                     <h3 className="text-[var(--text-primary)] font-bold mb-2 text-sm sm:text-base">Read the Paper</h3>
                     <p className="text-[var(--text-muted)] text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                        Full theoretical analysis, localization math, and communication protocols.
                     </p>
                     
                     <div className="space-y-3">
                        {research.paperLink && (
                            <a 
                                href={research.paperLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-center py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
                            >
                                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Download PDF
                            </a>
                        )}
                        
                        {research.researchGateLink && (
                            <a 
                                href={research.researchGateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-center py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors text-sm"
                            >
                                <span>ResearchGate</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                     </div>

                     <p className="text-center text-xs text-[var(--text-muted)] mt-4 font-mono">
                        System Architecture &amp; Framework
                     </p>
                </div>

                <Link href="/" className="flex items-center justify-center gap-1.5 text-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-mono py-3">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        </div>

      </div>
    </article>
  );
}
