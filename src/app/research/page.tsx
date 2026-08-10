import React from 'react';
import { PORTFOLIO } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft } from '@/components/Icons';
import Metadata from 'next';

export const metadata = {
  title: "Academic & Systems Research | Tushar Jain",
  description: "Explore independent academic research, systems engineering frameworks, and statistical data science projects by Tushar Jain.",
};

export default function ResearchHubPage() {
  return (
    <main className="theme-udaipur min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative overflow-x-hidden">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-20 sm:py-28 relative z-10 space-y-16">
        
        {/* HEADER */}
        <header className="border-b border-(--border-color) pb-12 space-y-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-mono text-(--text-muted) hover:text-(--text-primary) transition-colors mb-4 uppercase tracking-widest">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
              Research & Papers
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading text-(--text-primary)">
            Research Papers
          </h1>
          <p className="text-base sm:text-xl text-(--text-secondary) font-light max-w-2xl leading-relaxed">
            Independent research papers, statistical analysis, and engineering system designs.
          </p>
        </header>

        {/* RESEARCH PROJECTS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO.research.map((item, idx) => (
            <Link
              key={item.id}
              href={`/research/${item.slug}`}
              className="group flex flex-col justify-between p-8 bg-(--bg-secondary) border border-(--border-color) hover:border-blue-500/50 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full font-semibold">
                    {item.researchType}
                  </span>
                  <span className="text-xs font-mono text-(--text-muted) group-hover:text-blue-500 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-bold font-heading text-(--text-primary) group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {item.title}
                </h2>

                <p className="text-sm text-(--text-secondary) font-light leading-relaxed line-clamp-3">
                  {item.problemContext}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-(--border-color) flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.coreTechnicalAreas.slice(0, 3).map((area, i) => (
                    <span key={i} className="text-[9px] font-mono text-(--text-muted) bg-(--bg-primary) border border-(--border-color) px-2 py-0.5 rounded">
                      {area}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform shrink-0">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
