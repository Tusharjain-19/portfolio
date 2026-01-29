
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">{project.title}</h1>
            <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed">{project.oneLineSummary}</p>
            
            <div className="flex flex-wrap gap-4 mt-6">
                 {project.proofLinks?.github && (
                    <a href={project.proofLinks.github} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--text-muted)] border-b border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors">
                        GitHub ↗
                    </a>
                 )}
                 {project.proofLinks?.demo && (
                     <a href={project.proofLinks.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--text-muted)] border-b border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors">
                        Live Demo ↗
                    </a>
                 )}
                 {project.proofLinks?.linkedin && (
                     <a href={project.proofLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-[var(--text-muted)] border-b border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors">
                        LinkedIn ↗
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

         {/* SECTION 6 - DEMO / PROOF */}
         <section>
            <h2 className="text-sm font-mono text-[var(--text-muted)] mb-4 uppercase tracking-widest">Demo</h2>
            <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded flex items-center justify-center text-[var(--text-muted)] font-mono text-sm">
                [ Demo Video / Screenshots to be added ]
            </div>
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
