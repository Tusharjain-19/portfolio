import React from 'react';
import Link from 'next/link';
import { ProductProject } from '@/data/types';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight, ArrowLeft, ArrowRight, Circle } from '@/components/Icons';

export default function ProjectDetail({ project }: { project: ProductProject }) {
  // Find next/prev for navigation
  const currentIndex = PORTFOLIO.projects.findIndex(p => p.id === project.id);
  const nextProject = PORTFOLIO.projects[currentIndex + 1];
  const prevProject = PORTFOLIO.projects[currentIndex - 1];

  return (
    <article className="min-h-full text-(--text-primary) pb-16 sm:pb-20">
      
      {/* SECTION 1 - HEADER */}
      <header className="p-5 sm:p-8 md:p-14 border-b border-(--border-color) bg-(--bg-secondary) flex justify-center">
        <div className="max-w-3xl w-full">
            {project.tagline && (
                <div className="mb-4 inline-block px-3 py-1 bg-(--bg-tertiary) border border-(--border-color) rounded-full">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-(--text-muted)">
                        {project.tagline}
                    </span>
                </div>
            )}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-(--text-primary) tracking-tight leading-tight">{project.title}</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-(--text-secondary) font-light leading-relaxed max-w-2xl">{project.oneLineSummary}</p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">
                 {project.proofLinks?.github && (
                    <a 
                        href={project.proofLinks.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 sm:px-6 py-2.5 sm:py-3 bg-(--text-primary) text-(--bg-primary) font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                    >
                        <span>{project.id === 'split-payment' ? 'View Code' : 'GitHub'}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                 )}
                 {project.proofLinks?.linkedin && (
                      <a 
                         href={project.proofLinks.linkedin} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="px-4 sm:px-6 py-2.5 sm:py-3 border border-(--border-color) text-(--text-primary) font-bold rounded-lg hover:bg-(--bg-tertiary) hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                     >
                         <span>{project.id === 'split-payment' ? 'Read Post' : 'LinkedIn'}</span>
                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                 )}
                 {project.proofLinks?.demo && (
                      <a 
                         href={project.proofLinks.demo} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="px-4 sm:px-6 py-2.5 sm:py-3 border border-(--border-color) text-(--text-primary) font-bold rounded-lg hover:bg-(--bg-tertiary) hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                     >
                         <span>Live Demo</span>
                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                 )}
                 {project.proofLinks?.playStore && (
                      <a 
                         href={project.proofLinks.playStore} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="px-4 sm:px-6 py-2.5 sm:py-3 border border-(--border-color) text-(--text-primary) font-bold rounded-lg hover:bg-(--bg-tertiary) hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                     >
                         <span>Google Play Store</span>
                         <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                 )}
            </div>
        </div>
      </header>

      <div className="p-5 sm:p-8 md:p-14 max-w-3xl mx-auto space-y-12 sm:space-y-20">
        
        {/* SECTION 2 - IDEA ORIGIN */}
        <section>
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">How I got this idea</h2>
            <p className="text-(--text-secondary) leading-relaxed text-base sm:text-lg">
                {project.ideaOrigin}
            </p>
        </section>

        {/* SECTION 3 - PROBLEM STATEMENT */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Problem</h2>
             <div className="p-4 sm:p-6 bg-red-900/5 border-l-2 border-red-500/30 rounded-r">
                <div className="text-(--text-secondary) italic leading-relaxed text-sm sm:text-base">
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
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">Solution</h2>
            <div className="text-(--text-secondary) leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
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
                    <span key={t} className="px-2 py-1 bg-(--bg-tertiary) text-(--text-muted) text-xs rounded border border-(--border-color) font-mono">
                        {t}
                    </span>
                ))}
            </div>
        </section>

        {/* SECTION 5 - HARDEST TECHNICAL CHALLENGE */}
        <section>
             <h2 className="text-xs sm:text-sm font-mono text-amber-600 mb-3 sm:mb-4 uppercase tracking-widest">Hardest Technical Challenge</h2>
             <p className="text-(--text-secondary) leading-relaxed font-medium text-sm sm:text-base">
                {project.hardestTechnicalChallenge}
             </p>
        </section>

         {/* SECTION 6 - DEMO / PROOF / VISUALS */}
         <section className="flex flex-col items-center w-full">
            <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest self-start">
                {['split-payment', 'vital-health-tech', 'air-guitar', 'indigo-inflight'].includes(project.id) ? 'System Architecture Diagram' : 'Project Demo / Interface'}
            </h2>
            {project.imageUrl ? (
                <div className="w-full max-w-xl mx-auto bg-(--bg-secondary) border border-(--border-color) rounded-xl overflow-hidden shadow-md flex justify-center items-center p-3 dark:bg-white/2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={project.detailImageUrl || project.imageUrl} 
                        alt={`${project.title} architecture or screenshot`} 
                        className="max-h-[380px] w-auto object-contain mx-auto rounded-lg transition-transform duration-500 hover:scale-[1.015]"
                    />
                </div>
            ) : (
                <div className="w-full aspect-video max-w-xl mx-auto bg-(--bg-secondary) border border-(--border-color) rounded-xl flex items-center justify-center text-(--text-muted) font-mono text-xs sm:text-sm px-4 text-center shadow-sm">
                    [ Architecture Diagram / Visuals to be added ]
                </div>
            )}
         </section>

         {/* SECTION 7 - LEARNINGS */}
         <section>
             <h2 className="text-xs sm:text-sm font-mono text-(--text-muted) mb-3 sm:mb-4 uppercase tracking-widest">What I learned</h2>
             <ul className="space-y-3 sm:space-y-4">
                 {project.learnings.map((learning, idx) => (
                     <li key={idx} className="flex gap-3 sm:gap-4 items-start text-(--text-secondary)">
                         <Circle className="text-blue-500 mt-1.5 w-2.5 h-2.5 shrink-0" />
                         <span className="leading-relaxed text-sm sm:text-base">{learning}</span>
                     </li>
                 ))}
             </ul>
         </section>

         {/* SECTION 8 - NAVIGATION */}
         <nav className="flex justify-between pt-8 sm:pt-12 border-t border-(--border-color) gap-4">
             {prevProject ? (
                 <Link href={`/work/${prevProject.slug}`} replace className="text-(--text-muted) hover:text-(--text-primary) transition-colors flex flex-col items-start group flex-1 min-w-0">
                     <span className="flex items-center gap-1.5 text-xs font-mono mb-1 text-(--text-muted) opacity-60 group-hover:opacity-100"><ArrowLeft className="w-3.5 h-3.5" /> Previous</span>
                     <span className="font-bold underline decoration-(--border-color) decoration-2 underline-offset-4 group-hover:decoration-(--text-primary) text-sm sm:text-base truncate max-w-full">{prevProject.title}</span>
                 </Link>
             ) : (<div />)}

             {nextProject ? (
                 <Link href={`/work/${nextProject.slug}`} replace className="text-(--text-muted) hover:text-(--text-primary) transition-colors flex flex-col items-end group flex-1 min-w-0">
                      <span className="flex items-center gap-1.5 text-xs font-mono mb-1 text-(--text-muted) opacity-60 group-hover:opacity-100">Next <ArrowRight className="w-3.5 h-3.5" /></span>
                      <span className="font-bold underline decoration-(--border-color) decoration-2 underline-offset-4 group-hover:decoration-(--text-primary) text-sm sm:text-base truncate max-w-full">{nextProject.title}</span>
                 </Link>
             ) : (<div />)}
         </nav>

      </div>
    </article>
  );
}
