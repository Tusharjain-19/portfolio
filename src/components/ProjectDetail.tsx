
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
    <article className="min-h-full text-[var(--text-primary)] pb-16 sm:pb-20">
      
      {/* SECTION 1 - HEADER */}
      <header className="p-5 sm:p-8 md:p-12 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-3xl">
            {project.tagline && (
                <div className="mb-4 inline-block px-3 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-full">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                        {project.tagline}
                    </span>
                </div>
            )}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-[var(--text-primary)] tracking-tight leading-tight">{project.title}</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl">{project.oneLineSummary}</p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">
                 {project.proofLinks?.github && (
                    <a 
                        href={project.proofLinks.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
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
                        className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
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
                        className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                    >
                        <span>Live Demo</span>
                        <span className="group-hover:translate-x-1 transition-transform">↗</span>
                    </a>
                 )}
            </div>
        </div>
      </header>

      <div className="p-5 sm:p-8 md:p-12 max-w-3xl mx-auto space-y-12 sm:space-y-16">
        
        {/* SECTION 2 - IDEA ORIGIN */}
        <section>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">How I got this idea</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-base sm:text-lg">
                {project.ideaOrigin}
            </p>
        </section>

        {/* SECTION 3 - PROBLEM STATEMENT */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Problem</h2>
             <div className="p-4 sm:p-6 bg-red-900/5 border-l-2 border-red-500/30 rounded-r">
                <div className="text-[var(--text-secondary)] italic leading-relaxed text-sm sm:text-base">
                    {Array.isArray(project.problemStatement) ? (
                        <ul className="list-disc pl-4 sm:pl-5 space-y-2">
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
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">Solution</h2>
            <div className="text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {Array.isArray(project.solutionOverview) ? (
                     <ul className="list-disc pl-4 sm:pl-5 space-y-2">
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
             <h2 className="text-xs sm:text-sm font-mono text-amber-600 mb-3 sm:mb-4 uppercase tracking-widest">Hardest Technical Challenge</h2>
             <p className="text-[var(--text-secondary)] leading-relaxed font-medium text-sm sm:text-base">
                {project.hardestTechnicalChallenge}
             </p>
        </section>

         {/* SECTION 6 - DEMO / PROOF / VISUALS */}
         <section>
            <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">
                {project.id === 'split-payment' ? 'System Architecture' : 'Demo'}
            </h2>
            {project.id === 'split-payment' ? (
                <div className="w-full p-5 sm:p-8 md:p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center space-y-6 py-6 sm:py-10">
                        {/* User box */}
                        <div className="px-4 sm:px-6 h-10 sm:h-14 border-2 border-[var(--text-primary)] rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm bg-[var(--bg-primary)] whitespace-nowrap">
                            USER REQUEST
                        </div>
                        {/* Arrow down */}
                        <div className="w-0.5 h-6 sm:h-10 bg-[var(--border-color)]" />
                        {/* Orchestrator box */}
                        <div className="px-4 sm:px-6 h-10 sm:h-14 border-2 border-[var(--text-primary)] rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm bg-[var(--bg-primary)] whitespace-nowrap">
                            ORCHESTRATOR
                        </div>
                        {/* Arrow split */}
                        <div className="w-0.5 h-6 sm:h-10 bg-[var(--border-color)]" />
                        {/* Fork */}
                        <div className="flex gap-6 sm:gap-12 md:gap-20 relative">
                            <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 w-[120%] sm:w-[160%] h-6 sm:h-10 border-t-2 border-x-2 border-[var(--border-color)] rounded-t-lg" />
                            
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed border-[var(--text-muted)] rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-mono p-2 text-center">
                                    UPI GATEWAY
                                </div>
                                <span className="text-xs font-mono text-[var(--text-muted)]">Partial A</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-dashed border-[var(--text-muted)] rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-mono p-2 text-center">
                                    CARD GATEWAY
                                </div>
                                <span className="text-xs font-mono text-[var(--text-muted)]">Partial B</span>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-8 p-3 sm:p-4 border border-yellow-700/30 bg-yellow-700/5 rounded text-[9px] sm:text-[10px] font-mono text-yellow-600/80 max-w-xs sm:max-w-md text-center">
                           ATOMICITY GUARD: Ensures fail-safe rollback if either source fails
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--text-muted)] font-mono text-xs sm:text-sm px-4 text-center">
                    [ Demo Video / Screenshots to be added ]
                </div>
            )}
         </section>

         {/* SECTION 7 - LEARNINGS */}
         <section>
             <h2 className="text-xs sm:text-sm font-mono text-[var(--text-muted)] mb-3 sm:mb-4 uppercase tracking-widest">What I learned</h2>
             <ul className="space-y-3 sm:space-y-4">
                 {project.learnings.map((learning, idx) => (
                     <li key={idx} className="flex gap-3 sm:gap-4 items-start text-[var(--text-secondary)]">
                         <span className="text-blue-500 mt-1.5 text-xs shrink-0">●</span>
                         <span className="leading-relaxed text-sm sm:text-base">{learning}</span>
                     </li>
                 ))}
             </ul>
         </section>

         {/* SECTION 8 - NAVIGATION */}
         <nav className="flex justify-between pt-8 sm:pt-12 border-t border-[var(--border-color)] gap-4">
             {prevProject ? (
                 <Link href={`/work/${prevProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-start group flex-1 min-w-0">
                     <span className="text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100">← Previous</span>
                     <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)] text-sm sm:text-base truncate max-w-full">{prevProject.title}</span>
                 </Link>
             ) : (<div />)}

             {nextProject ? (
                 <Link href={`/work/${nextProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-end group flex-1 min-w-0">
                      <span className="text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100">Next →</span>
                      <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)] text-sm sm:text-base truncate max-w-full">{nextProject.title}</span>
                 </Link>
             ) : (<div />)}
         </nav>

      </div>
    </article>
  );
}
