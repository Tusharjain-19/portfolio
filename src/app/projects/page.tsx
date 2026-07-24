import React from 'react';
import Link from 'next/link';
import { PORTFOLIO } from '@/data/portfolio';
import { ArrowLeft, ArrowUpRight } from '@/components/Icons';

export const metadata = {
  title: "Projects",
  description: "Complete archive of engineering projects by Tushar Jain (BMSCE).",
};

export default function ProjectsPage() {
  return (
    <main className="theme-jodhpur bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative overflow-hidden">
      
      {/* Background Ceramic Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
             backgroundSize: '48px 48px'
           }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 pb-16 sm:pb-20 max-w-7xl mx-auto space-y-10 sm:space-y-14 pt-24 sm:pt-32">
        
        {/* PAGE TITLE */}
        <header className="border-b-2 border-(--border-color) pb-8 sm:pb-12 text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-(--text-muted) hover:text-(--accent) transition-colors mb-6 uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Return to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight font-heading text-(--text-primary)">
              Engineering Archives
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-(--text-secondary) font-light max-w-3xl">
                A showcase of technical mastery and real-world execution.
            </p>
        </header>

        {/* PROJECTS GRID */}
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 group/all">
                {PORTFOLIO.projects.map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/work/${project.slug}`} 
                        className="group flex flex-col bg-(--bg-secondary)/40 backdrop-blur-md border border-(--border-color) hover:border-(--accent) transition-all duration-500 hover:shadow-2xl overflow-hidden relative"
                    >
                        {/* Ceramic Border Corner Accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-(--accent) opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-(--accent) opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-(--accent) opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-(--accent) opacity-0 group-hover:opacity-100 transition-opacity" />

                        {project.imageUrl && (
                            <div className="w-full aspect-[16/10] overflow-hidden border-b border-(--border-color) relative">
                                <div className="absolute inset-0 bg-(--accent)/10 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[50%] group-hover:grayscale-0"
                                />
                            </div>
                        )}
                        <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-20 bg-gradient-to-t from-(--bg-secondary) to-transparent">
                            <div className="flex justify-between items-start mb-4 gap-2">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-(--text-primary) group-hover:text-(--accent) transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-(--border-color) text-(--text-primary) group-hover:bg-(--accent) group-hover:text-(--bg-primary) transition-colors shrink-0">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </div>
                            {project.tagline && (
                                <span className="text-xs font-mono text-(--text-muted) uppercase tracking-widest mb-4 block">
                                    {project.tagline.split('|')[0].trim()}
                                </span>
                            )}
                            <p className="text-(--text-secondary) font-light text-base mt-auto line-clamp-3 leading-relaxed">
                                {project.oneLineSummary}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      </div>
    </main>
  );
}
