import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "All Projects | Tushar Jain",
  description: "A complete archive of engineering projects, MVPs, and products.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-neutral-800">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 max-w-7xl mx-auto space-y-10 sm:space-y-14">
        
        {/* PAGE TITLE */}
        <header className="border-b border-(--border-color) pb-8 sm:pb-12 pt-6 sm:pt-8 md:pt-14">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-(--text-muted) hover:text-(--text-primary) transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Back home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 tracking-tight">All Projects</h1>
            <p className="text-base sm:text-lg md:text-xl text-(--text-secondary) font-light max-w-2xl">
                A complete archive of the MVPs, products, and engineering projects I&apos;ve built.
            </p>
        </header>

        {/* PROJECTS GRID */}
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 group/all">
                {PORTFOLIO.projects.map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/work/${project.slug}`} 
                        className="group flex flex-col p-5 sm:p-6 bg-(--bg-secondary)/50 rounded-xl border border-(--border-color) hover:border-(--text-muted) transition-all duration-300 group-hover/all:opacity-60 hover:opacity-100! hover:shadow-lg"
                    >
                        <div className="flex justify-between items-start mb-3 gap-2">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-(--text-primary) group-hover:text-(--accent) transition-colors leading-tight">
                                {project.title}
                            </h3>
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-(--text-muted) uppercase italic border border-(--border-color) px-2 py-0.5 rounded-full shrink-0">
                                Details <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        {project.tagline && (
                            <span className="text-[10px] font-mono text-(--text-muted) uppercase tracking-widest mb-3 block">
                                {project.tagline.split('|')[0].trim()}
                            </span>
                        )}
                        <p className="text-(--text-secondary) font-light text-sm mt-auto">
                            {project.oneLineSummary}
                        </p>
                    </Link>
                ))}
            </div>
        </section>

      </div>
    </main>
  );
}
