
import React from 'react';
import Link from 'next/link';
import { ProductProject } from '@/data/types';
import { PORTFOLIO } from '@/data/portfolio';

export default function ProjectDetail({ project }: { project: ProductProject }) {
  // Find next/prev for navigation
  const currentIndex = PORTFOLIO.projects.findIndex(p => p.id === project.id);
  const nextProject = PORTFOLIO.projects[currentIndex + 1];
  const prevProject = PORTFOLIO.projects[currentIndex - 1];

  return (
    <article className="min-h-full text-[var(--text-primary)] pb-20">
      
      {/* SECTION 1 - HEADER */}
      <header className="p-8 md:p-12 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-3xl">
            {project.tagline && (
                <div className="mb-4 inline-block px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-full">
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        {project.tagline}
                    </span>
                </div>
            )}
            <h1 className="text-3xl md:text-6xl font-black mb-6 text-[var(--text-primary)] tracking-tight">{project.title}</h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">{project.oneLineSummary}</p>
            
            <div className="flex flex-wrap gap-4 mt-10">
                 {project.proofLinks?.github && (
                    <a 
                        href={project.proofLinks.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                        <span>{project.id === 'split-payment' ? 'View Code' : 'GitHub'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                 )}
                 {project.proofLinks?.linkedin && (
                     <a 
                        href={project.proofLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                        <span>{project.id === 'split-payment' ? 'Read Post' : 'LinkedIn'}</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                 )}
                 {project.proofLinks?.demo && (
                     <a 
                        href={project.proofLinks.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-6 py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all flex items-center gap-2 group"
                    >
                        <span>Live Demo</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                 )}
            </div>
        </div>
      </header>

      <div className="p-8 md:p-12 max-w-3xl mx-auto space-y-16">
        
        {/* SECTION 2 - IDEA ORIGIN */}
        <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">How I got this idea</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                {project.ideaOrigin}
            </p>
        </section>

        {/* SECTION 3 - PROBLEM STATEMENT */}
        <section>
             <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Problem</h2>
             <div className="p-6 bg-red-900/5 border-l-2 border-red-500/30 rounded-r">
                <div className="text-[var(--text-secondary)] italic leading-relaxed">
                    {Array.isArray(project.problemStatement) ? (
                        <ul className="list-disc pl-5 space-y-2">
                            {project.problemStatement.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{project.problemStatement}</p>
                    )}
                </div>
             </div>
        </section>

        {/* SECTION 4 - SOLUTION */}
        <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Solution</h2>
            <div className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {Array.isArray(project.solutionOverview) ? (
                     <ul className="list-disc pl-5 space-y-2">
                        {project.solutionOverview.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{project.solutionOverview}</p>
                )}
            </div>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                    <span key={t} className="px-2 py-1 bg-[var(--bg-tertiary)] text-[var(--text-muted)] text-xs rounded border border-[var(--border-color)] font-mono">
                        {t}
                    </span>
                ))}
            </div>
        </section>

        {/* SECTION 5 - HARDEST TECHNICAL CHALLENGE */}
        <section>
             <h2 className="text-sm font-mono text-amber-600 mb-4 uppercase tracking-widest">Hardest Technical Challenge</h2>
             <p className="text-[var(--text-secondary)] leading-relaxed font-medium">
                {project.hardestTechnicalChallenge}
             </p>
        </section>

         {/* SECTION 6 - DEMO / PROOF / VISUALS */}
         <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">
                {project.id === 'split-payment' ? 'System Architecture' : 'Demo'}
            </h2>
            {project.id === 'split-payment' ? (
                <div className="w-full p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden relative group">
                    {/* Visual representation of split payment */}
                    <div className="flex flex-col items-center justify-center space-y-8 py-10">
                        <div className="w-32 h-14 border-2 border-[var(--text-primary)] rounded flex items-center justify-center font-bold text-sm bg-[var(--bg-primary)]">
                            ORCHESTRATOR
                        </div>
                        <div className="w-1 h-12 bg-[var(--border-color)] relative">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border-r-2 border-b-2 border-[var(--border-color)] rotate-45 mt-10"></div>
                        </div>
                        <div className="flex gap-12 md:gap-24 relative">
                            {/* Connector Lines */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[150%] md:w-[200%] h-12 border-t-2 border-x-2 border-[var(--border-color)] rounded-t-lg -z-10"></div>
                            
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 border-2 border-dashed border-[var(--text-muted)] rounded-full flex items-center justify-center text-[10px] font-mono p-2 text-center">
                                    UPI GATEWAY (Razorpay)
                                </div>
                                <span className="mt-4 text-xs font-mono text-[var(--text-muted)]">Partial A</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 border-2 border-dashed border-[var(--text-muted)] rounded-full flex items-center justify-center text-[10px] font-mono p-2 text-center">
                                    CARD GATEWAY (Razorpay)
                                </div>
                                <span className="mt-4 text-xs font-mono text-[var(--text-muted)]">Partial B</span>
                            </div>
                        </div>
                        <div className="mt-12 p-4 border border-yellow-700/30 bg-yellow-700/5 rounded text-[10px] font-mono text-yellow-600/80 max-w-md text-center">
                           ATOMICITY GUARD: Ensures fail-safe rollback if either source fails
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--text-muted)] font-mono text-sm">
                    [ Demo Video / Screenshots to be added ]
                </div>
            )}
         </section>

         {/* SECTION 7 - LEARNINGS */}
         <section>
             <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">What I learned</h2>
             <ul className="space-y-4">
                 {project.learnings.map((learning, idx) => (
                     <li key={idx} className="flex gap-4 items-start text-[var(--text-secondary)]">
                         <span className="text-blue-500 mt-1.5 text-xs">●</span>
                         <span className="leading-relaxed">{learning}</span>
                     </li>
                 ))}
             </ul>
         </section>

         {/* SECTION 8 - NAVIGATION */}
         <nav className="flex justify-between pt-12 border-t border-[var(--border-color)]">
             {prevProject ? (
                 <Link href={`/work/${prevProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-right flex flex-col items-start group">
                     <span className="text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100">← Previous</span>
                     <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)]">{prevProject.title}</span>
                 </Link>
             ) : (<div></div>)}

             {nextProject ? (
                 <Link href={`/work/${nextProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-right flex flex-col items-end group">
                      <span className="text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100">Next →</span>
                      <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)]">{nextProject.title}</span>
                 </Link>
             ) : (<div></div>)}
         </nav>

      </div>
    </article>
  );
}
