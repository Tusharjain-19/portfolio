
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ProjectDetail from '@/components/ProjectDetail';
import Link from 'next/link';

// Generate static params for all projects
export async function generateStaticParams() {
  return PORTFOLIO.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;
  const project = PORTFOLIO.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Simple Top Bar for standalone page navigation */}
        <nav className="p-6 border-b border-[var(--border-color)] flex justify-between items-center sticky top-0 bg-[var(--bg-primary)]/90 backdrop-blur z-40">
            <Link href="/" className="font-bold text-lg tracking-tight hover:text-[var(--text-secondary)] transition-colors">
                {PORTFOLIO.profile.name}.
            </Link>
            <Link href="/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
               ✕ Close
            </Link>
        </nav>
        
        <div className="max-w-4xl mx-auto border-x border-[var(--border-color)] min-h-screen bg-[var(--bg-primary)]">
            <ProjectDetail project={project} />
        </div>
    </main>
  );
}
