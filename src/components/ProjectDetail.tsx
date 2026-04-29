
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
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                 )}
                 {project.proofLinks?.playStore && (
                     <a 
                        href={project.proofLinks.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 sm:px-6 py-2.5 sm:py-3 border border-[var(--border-color)] text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--bg-tertiary)] hover:scale-105 transition-all flex items-center gap-2 group text-sm sm:text-base"
                    >
                        <span>Google Play Store</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                {['split-payment', 'vital-health-tech', 'air-guitar', 'indigo-inflight'].includes(project.id) ? 'System Architecture' : 'Demo'}
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
            ) : project.id === 'vital-health-tech' ? (
                <div className="w-full p-5 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center space-y-6 py-6 sm:py-8">
                        <div className="flex items-center gap-4 sm:gap-8">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 border border-blue-500/50 bg-blue-500/5 rounded-lg flex flex-col items-center justify-center text-center p-2">
                                <span className="text-[10px] font-mono text-blue-400">ESP32</span>
                                <span className="text-[8px] text-[var(--text-muted)]">MCU</span>
                            </div>
                            <div className="w-8 h-0.5 bg-[var(--border-color)] relative">
                                <div className="absolute -top-1.5 -right-1 border-t-4 border-l-4 border-transparent border-l-[var(--border-color)]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="px-3 py-1.5 border border-[var(--border-color)] rounded text-[9px] font-mono bg-[var(--bg-primary)]">MPU6050 (Motion)</div>
                                <div className="px-3 py-1.5 border border-[var(--border-color)] rounded text-[9px] font-mono bg-[var(--bg-primary)]">MAX30102 (Pulse)</div>
                            </div>
                        </div>
                        <div className="w-0.5 h-8 bg-dashed border-l border-dashed border-[var(--border-color)]" />
                        <div className="px-4 py-2 border border-green-500/50 bg-green-500/5 rounded-full text-[10px] font-mono text-green-400">BLE 4.2 / Serial</div>
                        <div className="w-0.5 h-8 bg-dashed border-l border-dashed border-[var(--border-color)]" />
                        <div className="w-full max-w-xs p-4 border-2 border-[var(--text-primary)] rounded-xl bg-[var(--bg-primary)] flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-xs font-bold">MOBILE DASHBOARD</div>
                                <div className="text-[8px] text-[var(--text-muted)] uppercase tracking-tighter">Real-time Vitals & Fall Alerts</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : project.id === 'air-guitar' ? (
                <div className="w-full p-5 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="grid grid-cols-3 gap-4 items-center w-full max-w-md">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center font-bold text-amber-500 text-xs">IMU</div>
                                <span className="text-[8px] font-mono uppercase text-[var(--text-muted)]">Gestures</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-full h-0.5 bg-[var(--border-color)]" />
                                <span className="text-[7px] font-mono text-blue-400">SERIAL (115200)</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="px-3 py-4 border-2 border-[var(--text-primary)] rounded bg-[var(--bg-primary)] text-[10px] font-bold text-center">PYTHON ENGINE</div>
                                <span className="text-[8px] font-mono uppercase text-[var(--text-muted)]">Karplus-Strong</span>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg w-full max-w-sm">
                            <div className="flex justify-between items-end h-12 gap-1">
                                {[40, 70, 45, 90, 65, 80, 30, 55, 85, 40].map((h, i) => (
                                    <div key={i} className="flex-1 bg-amber-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                            <div className="mt-2 text-[8px] font-mono text-center text-amber-500">REAL-TIME WAVEFORM SYNTHESIS</div>
                        </div>
                    </div>
                </div>
            ) : project.id === 'indigo-inflight' ? (
                <div className="w-full p-5 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden">
                    <div className="relative flex items-center justify-center py-10">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-[var(--text-primary)] rounded-2xl bg-[var(--bg-primary)] flex items-center justify-center z-10 shadow-xl">
                            <div className="text-center">
                                <div className="text-[10px] font-bold">LOCAL</div>
                                <div className="text-[10px] font-bold">SERVER</div>
                            </div>
                        </div>
                        
                        {/* Wireless rings */}
                        <div className="absolute w-32 h-32 border border-blue-500/20 rounded-full animate-ping" />
                        <div className="absolute w-48 h-48 border border-blue-500/10 rounded-full" />
                        
                        {/* Connected devices */}
                        <div className="absolute top-0 right-10 p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] text-[8px] font-mono">Device A (Phone)</div>
                        <div className="absolute bottom-0 left-10 p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] text-[8px] font-mono">Device B (Tablet)</div>
                        <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 border border-[var(--border-color)] rounded bg-[var(--bg-primary)] text-[8px] font-mono rotate-90">Device C</div>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[8px] font-mono rounded-full border border-red-500/20">NO INTERNET REQUIRED</span>
                    </div>
                </div>
            ) : project.imageUrl ? (
                <div className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={project.imageUrl} 
                        alt={`${project.title} screenshot`} 
                        className="w-full h-auto object-cover"
                    />
                </div>
            ) : (
                <div className="w-full aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-muted)] font-mono text-xs sm:text-sm px-4 text-center shadow-sm">
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
                         <Circle className="text-blue-500 mt-1.5 w-2.5 h-2.5 shrink-0" />
                         <span className="leading-relaxed text-sm sm:text-base">{learning}</span>
                     </li>
                 ))}
             </ul>
         </section>

         {/* SECTION 8 - NAVIGATION */}
         <nav className="flex justify-between pt-8 sm:pt-12 border-t border-[var(--border-color)] gap-4">
             {prevProject ? (
                 <Link href={`/work/${prevProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-start group flex-1 min-w-0">
                     <span className="flex items-center gap-1.5 text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100"><ArrowLeft className="w-3.5 h-3.5" /> Previous</span>
                     <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)] text-sm sm:text-base truncate max-w-full">{prevProject.title}</span>
                 </Link>
             ) : (<div />)}

             {nextProject ? (
                 <Link href={`/work/${nextProject.slug}`} replace className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex flex-col items-end group flex-1 min-w-0">
                      <span className="flex items-center gap-1.5 text-xs font-mono mb-1 text-[var(--text-muted)] opacity-60 group-hover:opacity-100">Next <ArrowRight className="w-3.5 h-3.5" /></span>
                      <span className="font-bold underline decoration-[var(--border-color)] decoration-2 underline-offset-4 group-hover:decoration-[var(--text-primary)] text-sm sm:text-base truncate max-w-full">{nextProject.title}</span>
                 </Link>
             ) : (<div />)}
         </nav>

      </div>
    </article>
  );
}
