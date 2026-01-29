
import React from 'react';
import { ResearchProject } from '@/data/types';
import Link from 'next/link';

export default function ResearchDetail({ research }: { research: ResearchProject }) {
  return (
    <article className="min-h-full text-[var(--text-primary)] pb-20 max-w-4xl mx-auto">
      
      {/* HEADER */}
      <header className="py-12 md:py-20 border-b border-[var(--border-color)]">
        <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-mono rounded border border-blue-900/30 uppercase tracking-wider">
                {research.researchType}
            </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[var(--text-primary)]">{research.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm font-mono text-[var(--text-muted)]">
            <span>Sole Author</span>
            <span>•</span>
            <span>Systems Architecture</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
        
        {/* LEFT COLUMN (Navigation / Metadata sticky?) - Keeping it simple single column for MVP per instructions but using grid for structure */}
        <div className="md:col-span-8 space-y-16">
            
            {/* SECTION 1 - CONTEXT */}
            <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Context</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                    {research.problemContext}
                </p>
            </section>

            {/* SECTION 2 - RESEARCH PROBLEM */}
            <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Research Problem</h2>
                <div className="p-6 bg-[var(--bg-secondary)] border-l-2 border-[var(--text-muted)] rounded-r">
                   <p className="text-[var(--text-secondary)] italic leading-relaxed">
                        Traditional maritime surveillance systems often struggle to balance stealthy detection with active response, especially in environments requiring strict ethical oversight. Existing autonomous solutions often lack the &quot;Human-in-the-loop&quot; gating necessary for non-lethal compliance.
                   </p>
                </div>
            </section>

            {/* SECTION 3 - PROPOSED ARCHITECTURE */}
            <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Proposed System Architecture</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {research.systemArchitectureSummary}
                </p>
                {/* Placeholder for Diagram */}
                <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded flex flex-col items-center justify-center text-[var(--text-muted)] font-mono text-sm p-4 text-center">
                    <span className="mb-2">[ Architecture Diagram Placeholder ]</span>
                    <span className="text-xs text-[var(--text-muted)] opacity-70">Dual-UUV Communication & Command Flow</span>
                </div>
            </section>

            {/* SECTION 4 - CORE TECHNICAL AREAS */}
            <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Core Technical Areas</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {research.coreTechnicalAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded">
                            <span className="text-blue-500 text-xs">■</span>
                            <span className="text-[var(--text-secondary)] text-sm">{area}</span>
                        </li>
                    ))}
                </ul>
            </section>

             {/* SECTION 5 - KEY CONTRIBUTIONS */}
             <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Key Contributions</h2>
                <ul className="space-y-4">
                    {research.keyContributions.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-[var(--text-secondary)]">
                            <span className="text-green-500 mt-1.5 text-xs">✓</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

             {/* SECTION 6 - LIMITATIONS & ETHICS */}
             <section className="p-8 bg-amber-900/5 border border-amber-900/20 rounded-lg">
                <h2 className="text-sm font-mono text-amber-600 mb-4 uppercase tracking-widest flex items-center gap-2">
                    ⚠ Limitations & Ethical Considerations
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                    {research.limitationsAndEthics}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">Conceptual Only</span>
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">No Field Deployment</span>
                </div>
            </section>

            {/* SECTION 7 - LEARNINGS */}
            <section>
                <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">What I Learned</h2>
                 <ul className="space-y-4">
                    {research.learnings.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-[var(--text-secondary)]">
                            <span className="text-[var(--text-muted)] mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

        {/* RIGHT COLUMN - ACTIONS */}
        <div className="md:col-span-4 space-y-8">
            <div className="sticky top-24">
                <div className="p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg">
                     <h3 className="text-[var(--text-primary)] font-bold mb-2">Read the Paper</h3>
                     <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
                        Full theoretical analysis, localization math, and communication protocols.
                     </p>
                     <a 
                        href="/Tushar Jain (2).pdf"
                        target="_blank"
                        className="block w-full text-center py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded hover:opacity-90 transition-opacity"
                     >
                        Download PDF
                     </a>
                     <p className="text-center text-xs text-[var(--text-muted)] mt-3 font-mono">
                        PDF • 5MB
                     </p>
                </div>

                <div className="mt-8">
                     <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm font-mono flex items-center gap-2">
                        ← Back to Home
                     </Link>
                </div>
            </div>
        </div>

      </div>
    </article>
  );
}
