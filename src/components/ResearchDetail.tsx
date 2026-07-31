import React from 'react';
import { ResearchProject } from '@/data/types';
import Link from 'next/link';
import { Circle, ArrowUpRight, ArrowLeft } from '@/components/Icons';

export default function ResearchDetail({ research }: { research: ResearchProject }) {
  return (
    <article className="min-h-full text-(--text-primary) pb-16 sm:pb-20 max-w-4xl mx-auto">
      
      {/* HEADER */}
      <header className="py-10 sm:py-14 md:py-20 border-b border-(--border-color)">
        <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-900/20 text-blue-400 text-xs font-mono rounded border border-blue-900/30 uppercase tracking-wider">
                {research.researchType}
            </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight text-(--text-primary)">{research.title}</h1>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-(--text-muted)">
            <span>Sole Author</span>
            <span>•</span>
            <span>Systems Architecture</span>
            <span>•</span>
            <span>{new Date().getFullYear()}</span>
        </div>
      </header>

      {/* BODY  -  Single column on mobile, 2-col on md+ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-12">
        
        {/* LEFT COLUMN - Main Content */}
        <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            
            {/* SECTION 1 - CONTEXT */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Context</h2>
                <p className="text-(--text-secondary) leading-relaxed text-base sm:text-lg">
                    {research.problemContext}
                </p>
            </section>

            {/* SECTION 2 - RESEARCH PROBLEM */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Research Problem</h2>
                <div className="p-4 sm:p-6 bg-(--bg-secondary) border-l-2 border-(--text-muted) rounded-r">
                   <p className="text-(--text-secondary) italic leading-relaxed text-sm sm:text-base">
                        Traditional maritime surveillance systems often struggle to balance stealthy detection with active response, especially in environments requiring strict ethical oversight. Existing autonomous solutions often lack the &quot;Human-in-the-loop&quot; gating necessary for non-lethal compliance.
                   </p>
                </div>
            </section>

            {/* SECTION 3 - PROPOSED ARCHITECTURE */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Proposed System Architecture</h2>
                <p className="text-(--text-secondary) leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {research.systemArchitectureSummary}
                </p>
                <div className="w-full bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex justify-center items-center overflow-x-auto no-scrollbar shadow-inner">
                  <svg width="600" height="280" viewBox="0 0 600 280" fill="none" className="min-w-[500px] select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                    <defs>
                      <marker id="arr-b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 2 L 6 5 L 0 8 z" fill="#3f3f46" />
                      </marker>
                    </defs>
                    <path d="M 140 100 L 190 100" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-b)" />
                    <path d="M 320 100 L 370 100" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-b)" />
                    <path d="M 430 135 L 430 175" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr-b)" />
                    <path d="M 370 210 L 260 210" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr-b)" />

                    <g>
                      <rect x="10" y="65" width="130" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="22" y="88" fill="#f4f4f5" fontWeight="600" fontSize="10">Scout UUV (Sub 1)</text>
                      <text x="22" y="102" fill="#a1a1aa" fontSize="8">Passive Acoustic Sonar</text>
                      <text x="22" y="114" fill="#71717a" fontSize="8">Stealth Anomaly Search</text>
                    </g>
                    <g>
                      <rect x="190" y="65" width="130" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="202" y="88" fill="#f4f4f5" fontWeight="600" fontSize="10">Inspector UUV (Sub 2)</text>
                      <text x="202" y="102" fill="#a1a1aa" fontSize="8">High-Resolution Video</text>
                      <text x="202" y="114" fill="#71717a" fontSize="8">Target Verification</text>
                    </g>
                    <g>
                      <rect x="370" y="65" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="382" y="88" fill="#f4f4f5" fontWeight="600" fontSize="10">Acoustic Gateway</text>
                      <text x="382" y="102" fill="#a1a1aa" fontSize="8">Underwater Modems</text>
                      <text x="382" y="114" fill="#71717a" fontSize="8">Telemetry Uplink</text>
                    </g>
                    <g>
                      <rect x="370" y="175" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="382" y="198" fill="#f4f4f5" fontWeight="600" fontSize="10">Remote Base Station</text>
                      <text x="382" y="212" fill="#a1a1aa" fontSize="8">Cryptographic Gate</text>
                      <text x="382" y="224" fill="#0891b2" fontSize="8" fontWeight="600">HITL Verification Required</text>
                    </g>
                    <g>
                      <rect x="130" y="175" width="130" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="142" y="198" fill="#f4f4f5" fontWeight="600" fontSize="10">Action Authorized</text>
                      <text x="142" y="212" fill="#a1a1aa" fontSize="8">Tactical Response</text>
                      <circle cx="242" cy="193" r="3" fill="#0891b2" />
                    </g>
                  </svg>
                </div>
            </section>

            {/* SECTION 4 - CORE TECHNICAL AREAS */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Core Technical Areas</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {research.coreTechnicalAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-(--bg-secondary) border border-(--border-color) rounded">
                            <span className="text-blue-500 text-xs shrink-0">■</span>
                            <span className="text-(--text-secondary) text-sm">{area}</span>
                        </li>
                    ))}
                </ul>
            </section>

             {/* SECTION 5 - KEY CONTRIBUTIONS */}
             <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Key Contributions</h2>
                <ul className="space-y-3 sm:space-y-4">
                    {research.keyContributions.map((item, idx) => (
                        <li key={idx} className="flex gap-3 sm:gap-4 items-start text-(--text-secondary)">
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
                <p className="text-(--text-secondary) leading-relaxed text-sm sm:text-base">
                    {research.limitationsAndEthics}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">Conceptual Only</span>
                    <span className="px-2 py-1 bg-amber-900/10 text-amber-500 text-xs rounded border border-amber-900/20">No Field Deployment</span>
                </div>
            </section>

            {/* SECTION 7 - LEARNINGS */}
            <section>
                <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">What I Learned</h2>
                 <ul className="space-y-3 sm:space-y-4">
                    {research.learnings.map((item, idx) => (
                        <li key={idx} className="flex gap-3 sm:gap-4 items-start text-(--text-secondary)">
                            <Circle className="text-(--text-muted) mt-1.5 w-2.5 h-2.5 shrink-0" />
                            <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>

        {/* RIGHT COLUMN - ACTIONS (Full width on mobile, sticky sidebar on lg) */}
        <div className="lg:col-span-4 order-first lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-4">
                <div className="p-5 sm:p-6 bg-(--bg-secondary) border border-(--border-color) rounded-xl">
                     <h3 className="text-(--text-primary) font-bold mb-2 text-sm sm:text-base">Read the Paper</h3>
                     <p className="text-(--text-muted) text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                        Full theoretical analysis, localization math, and communication protocols.
                     </p>
                     
                     <div className="space-y-3">
                        {research.paperLink && (
                            <a 
                                href={research.paperLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full text-center py-3 bg-(--text-primary) text-(--bg-primary) font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
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
                                className="flex items-center justify-center gap-2 w-full text-center py-3 border border-(--border-color) text-(--text-primary) font-bold rounded-lg hover:bg-(--bg-tertiary) transition-colors text-sm"
                            >
                                <span>ResearchGate</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </a>
                        )}
                     </div>

                     <p className="text-center text-xs text-(--text-muted) mt-4 font-mono">
                        System Architecture &amp; Framework
                     </p>
                </div>

                <Link href="/" className="flex items-center justify-center gap-1.5 text-center text-(--text-muted) hover:text-(--text-primary) transition-colors text-sm font-mono py-3">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>
            </div>
        </div>

      </div>
    </article>
  );
}
