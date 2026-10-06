import React from 'react';
import Link from 'next/link';
import { ProductProject } from '@/data/types';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowUpRight, ArrowLeft, ArrowRight, Circle, Video, Check } from '@/components/Icons';

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
                        <span>GitHub</span>
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
                         <span>LinkedIn</span>
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

            {project.id === 'jaipur-ride' && (
              <div className="my-8 p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl relative overflow-hidden shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-mono text-(--accent) uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Adoption & Traction Metrics
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase font-bold">
                    Google Play Live
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">1.5K+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Play Store Downloads</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">50K+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Web Impressions</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">&lt;10ms</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">BFS Pathfinding</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">15KB</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Transit Graph</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'namma-ride' && (
              <div className="my-8 p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl relative overflow-hidden shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-mono text-(--accent) uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Commuter Accessibility & Play Store Adoption
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase font-bold">
                    Google Play Live
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">100+</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Play Store Downloads</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">3</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Languages (KN/HI/EN)</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">&lt;50KB</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Asset Bundle</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">100%</span>
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Offline-Ready</span>
                  </div>
                </div>
              </div>
            )}

            {project.id === 'notescsbs' && (
              <div className="my-8 p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl relative overflow-hidden shadow-inner">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                  <h3 className="text-xs font-mono text-(--accent) uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Search Performance Telemetry (Google Search Console)
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-(--text-muted)">
                    <span className="px-2 py-0.5 rounded bg-(--bg-tertiary) border border-(--border-color)">Search: Web (Text)</span>
                    <span className="px-2 py-0.5 rounded bg-(--bg-tertiary) border border-(--border-color)">12-Month Period</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  <div className="p-4 bg-(--bg-primary) border border-blue-500/30 rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-mono text-blue-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Total Clicks
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-(--text-primary)">1.17K</span>
                    <span className="text-[10px] font-mono text-(--text-muted) mt-0.5">Organic student visits</span>
                  </div>

                  <div className="p-4 bg-(--bg-primary) border border-purple-500/30 rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-mono text-purple-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Impressions
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-(--text-primary)">9.75K</span>
                    <span className="text-[10px] font-mono text-(--text-muted) mt-0.5">Search results views</span>
                  </div>

                  <div className="p-4 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mb-1">
                      Average CTR
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-(--text-primary)">12%</span>
                    <span className="text-[10px] font-mono text-emerald-500 mt-0.5">High intent search</span>
                  </div>

                  <div className="p-4 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-[10px] sm:text-xs font-mono text-(--text-muted) uppercase tracking-wider mb-1">
                      Avg Position
                    </span>
                    <span className="text-2xl sm:text-3xl font-black font-heading tracking-tight text-(--text-primary)">4.9</span>
                    <span className="text-[10px] font-mono text-blue-400 mt-0.5">Top-5 Google rank</span>
                  </div>
                </div>

                <div className="bg-(--bg-primary) border border-(--border-color) rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider">Organic Search Growth Trend</span>
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded-full font-mono uppercase tracking-wider">SEO Optimized</span>
                  </div>
                  {/* Clean Sparkline Traffic Trend */}
                  <div className="h-16 w-full flex items-end justify-between pt-2 gap-0.75">
                    {[22, 28, 25, 34, 45, 38, 52, 60, 48, 65, 78, 90, 95, 88, 102, 118, 130, 122, 142, 155].map((val, idx) => (
                      <div 
                        key={idx} 
                        className="bg-(--accent) opacity-40 hover:opacity-100 transition-opacity rounded-t-sm w-full"
                        style={{ height: `${(val / 155) * 100}%` }}
                        title={`Period segment ${idx + 1}: relative search volume index`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-[10px] text-(--text-muted) font-light mt-3 leading-relaxed">
                  * Performance telemetry from Google Search Console over a 12-month period for academic engineering queries, syllabus keywords, and BMSCE CSBS department study material requests.
                </p>
              </div>
            )}

            {project.id === 'billing-pos' && (
              <div className="my-8 p-6 bg-(--bg-secondary) border border-(--border-color) rounded-2xl relative overflow-hidden shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-mono text-(--accent) uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    POS Architecture & Hardware Integration
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase font-bold">
                    100% Offline-First
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">&lt;10s</span>
                    <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Punch Speed</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">58 / 80mm</span>
                    <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Thermal Print</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">0 MDR</span>
                    <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Dynamic UPI QR</span>
                  </div>
                  <div className="p-3.5 bg-(--bg-primary) border border-(--border-color) rounded-xl flex flex-col justify-center">
                    <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-(--text-primary)">0ms</span>
                    <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-wider mt-0.5">Cloud Lag</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-(--text-secondary) bg-(--bg-primary) border border-(--border-color) p-4 rounded-xl">
                  <div className="flex items-center justify-between pb-2 border-b border-(--border-color)">
                    <span className="text-(--text-muted)">Storage Engine:</span>
                    <span className="text-(--text-primary) font-semibold">Dexie.js (IndexedDB) Persistent DB</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-(--border-color)">
                    <span className="text-(--text-muted)">Thermal Driver:</span>
                    <span className="text-(--text-primary) font-semibold">ESC/POS (Bluetooth SPP & USB OTG)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-(--border-color)">
                    <span className="text-(--text-muted)">Payment Bridge:</span>
                    <span className="text-(--text-primary) font-semibold">Dynamic Bharat UPI QR Generator</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-(--text-muted)">Reporting Engine:</span>
                    <span className="text-(--text-primary) font-semibold">SheetJS (.xlsx) + jsPDF AutoTable</span>
                  </div>
                </div>
              </div>
            )}

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
                {['vital-health-tech', 'indigo-inflight'].includes(project.id) ? 'System Architecture Diagram' : 'Project Demo / Interface'}
            </h2>
             {project.id === 'vital-health-tech' ? (
                <div className="w-full bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex justify-center items-center overflow-x-auto no-scrollbar shadow-inner">
                  <svg width="600" height="220" viewBox="0 0 600 220" fill="none" className="min-w-125 select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                    <defs>
                      <marker id="arr-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 2 L 6 5 L 0 8 z" fill="#3f3f46" />
                      </marker>
                    </defs>
                    <path d="M 120 110 L 170 110" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-g)" />
                    <path d="M 290 110 L 340 110" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-g)" />
                    <path d="M 440 110 L 490 110" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr-g)" />

                    <g>
                      <rect x="10" y="75" width="110" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="22" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Sensors</text>
                      <text x="22" y="112" fill="#a1a1aa" fontSize="8">MPU6050 (I2C)</text>
                      <text x="22" y="124" fill="#71717a" fontSize="8">MAX30102 (SpO2)</text>
                    </g>
                    <g>
                      <rect x="170" y="75" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="182" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">ESP32 Firmware</text>
                      <text x="182" y="112" fill="#a1a1aa" fontSize="8">FreeRTOS C++ task</text>
                      <text x="182" y="124" fill="#71717a" fontSize="8">Fall Threshold Filter</text>
                    </g>
                    <g>
                      <rect x="340" y="75" width="100" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="352" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Mobile Client</text>
                      <text x="352" y="112" fill="#a1a1aa" fontSize="8">BLE Sync App</text>
                      <text x="352" y="124" fill="#71717a" fontSize="8">GPS Coordinates</text>
                    </g>
                    <g>
                      <rect x="490" y="75" width="100" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="502" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Supabase DB</text>
                      <text x="502" y="112" fill="#a1a1aa" fontSize="8">Cloud Telemetry</text>
                      <text x="502" y="124" fill="#71717a" fontSize="8">Emergency Sync</text>
                      <circle cx="574" cy="93" r="3" fill="#dc2626" />
                    </g>
                  </svg>
                </div>
             ) : project.id === 'indigo-inflight' ? (
                <div className="w-full bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex justify-center items-center overflow-x-auto no-scrollbar shadow-inner">
                  <svg width="600" height="220" viewBox="0 0 600 220" fill="none" className="min-w-125 select-none text-[10px]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                    <defs>
                      <marker id="arr-g" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 2 L 6 5 L 0 8 z" fill="#3f3f46" />
                      </marker>
                    </defs>
                    <path d="M 130 110 L 180 110" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-g)" />
                    <path d="M 300 110 L 350 110" stroke="#27272a" strokeWidth="1" markerEnd="url(#arr-g)" />
                    <path d="M 460 110 L 510 110" stroke="#27272a" strokeWidth="1" strokeDasharray="2 2" markerEnd="url(#arr-g)" />

                    <g>
                      <rect x="10" y="75" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="22" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Local Plane Server</text>
                      <text x="22" y="112" fill="#a1a1aa" fontSize="8">Offline Media Assets</text>
                      <text x="22" y="124" fill="#71717a" fontSize="8">Docker / Node.js</text>
                    </g>
                    <g>
                      <rect x="180" y="75" width="120" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="192" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Wi-Fi Router AP</text>
                      <text x="192" y="112" fill="#a1a1aa" fontSize="8">Cabin WLAN network</text>
                      <text x="192" y="124" fill="#71717a" fontSize="8">No External Link</text>
                    </g>
                    <g>
                      <rect x="350" y="75" width="110" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="362" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Passenger Browser</text>
                      <text x="362" y="112" fill="#a1a1aa" fontSize="8">WLAN Streaming Page</text>
                      <text x="362" y="124" fill="#71717a" fontSize="8">HTML5 Video Player</text>
                    </g>
                    <g>
                      <rect x="510" y="75" width="80" height="70" rx="4" fill="#09090b" stroke="#27272a" strokeWidth="1" />
                      <text x="522" y="98" fill="#f4f4f5" fontWeight="600" fontSize="10">Offline Cache</text>
                      <text x="522" y="112" fill="#a1a1aa" fontSize="8">PWA Storage</text>
                      <circle cx="574" cy="93" r="3" fill="#d97706" />
                    </g>
                  </svg>
                </div>
             ) : project.id === 'billing-pos' ? (
                <div className="w-full space-y-8">
                  {/* Demo Video Player */}
                  <div className="w-full bg-(--bg-secondary) border border-(--border-color) rounded-2xl overflow-hidden shadow-xl p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-3 px-1">
                      <span className="text-xs sm:text-sm font-mono text-(--accent) uppercase tracking-wider font-semibold flex items-center gap-2">
                        <Video className="w-4 h-4 text-(--accent)" /> Live Application Walkthrough & Video Demo
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full uppercase font-bold">
                        Video MP4
                      </span>
                    </div>
                    <div className="relative rounded-xl overflow-hidden border border-(--border-color) bg-black">
                      <video 
                        src={project.videoUrl || "/billing_pos_demo.mp4"} 
                        controls 
                        playsInline
                        preload="metadata"
                        poster="/billing_pos.png"
                        className="w-full aspect-video max-h-115 object-contain mx-auto"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-xs text-(--text-muted) mt-3 font-light leading-relaxed px-1">
                      Live walk-through demonstration: High-speed order punching, dish category navigation, live cart modifiers, ESC/POS thermal printing preview, and dashboard analytics.
                    </p>
                  </div>

                  {/* Screenshots */}
                  <div className="w-full bg-(--bg-secondary) border border-(--border-color) rounded-xl overflow-hidden shadow-md p-3">
                    <div className="text-[11px] font-mono text-(--text-muted) uppercase tracking-wider mb-2 px-1">
                      1. High-Speed POS Cashier Station (Dual-Pane Touch Grid)
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="/billing_pos.png" 
                        alt="Billing Pro POS Billing Screen" 
                        className="w-full h-auto object-contain rounded-lg border border-(--border-color)"
                    />
                  </div>
                  <div className="w-full bg-(--bg-secondary) border border-(--border-color) rounded-xl overflow-hidden shadow-md p-3">
                    <div className="text-[11px] font-mono text-(--text-muted) uppercase tracking-wider mb-2 px-1">
                      2. Real-Time Financial & Sales Analytics Dashboard
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src="/billing_pos_dashboard.png" 
                        alt="Billing Pro POS Dashboard Screen" 
                        className="w-full h-auto object-contain rounded-lg border border-(--border-color)"
                    />
                  </div>
                </div>
             ) : project.imageUrl ? (
                 <div className="w-full max-w-xl mx-auto bg-(--bg-secondary) border border-(--border-color) rounded-xl overflow-hidden shadow-md flex justify-center items-center p-3 dark:bg-white/2">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img 
                         src={project.detailImageUrl || project.imageUrl} 
                         alt={`${project.title} architecture or screenshot`} 
                         className="max-h-95 w-auto object-contain mx-auto rounded-lg transition-transform duration-500 hover:scale-[1.015]"
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
