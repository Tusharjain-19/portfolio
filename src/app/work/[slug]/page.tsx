
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ProjectDetail from '@/components/ProjectDetail';
import Link from 'next/link';

import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

// Generate static params for all projects
export async function generateStaticParams() {
  return PORTFOLIO.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const project = PORTFOLIO.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Built by Tushar Jain`,
    description: `${project.oneLineSummary} Built by Tushar Jain, BMSCE student. Tech: ${project.techStack.slice(0, 4).join(', ')}.`,
    keywords: [project.title, `${project.title} maker`, `${project.title} developer`, "Tushar Jain", "BMSCE", ...project.techStack],
    alternates: {
      canonical: `https://tusharjain.in/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Tushar Jain`,
      description: project.oneLineSummary,
      type: 'article',
      url: `https://tusharjain.in/work/${project.slug}`,
      siteName: 'Tushar Jain — Engineering Portfolio',
      authors: ['Tushar Jain'],
      images: [
        {
          url: '/pic2.jpeg',
          width: 800,
          height: 600,
          alt: `${project.title} by Tushar Jain`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Tushar Jain`,
      description: project.oneLineSummary,
    },
  };
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

  const projectData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.oneLineSummary,
    "author": {
      "@type": "Person",
      "name": PORTFOLIO.profile.name
    },
    "url": `https://tusharjain.in/work/${project.slug}`,
    "techStack": project.techStack
  };

  return (
    <main className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
        <StructuredData data={projectData as Record<string, unknown>} />
        {/* Simple Top Bar for standalone page navigation */}
        <nav className="px-4 sm:px-6 py-3 sm:py-4 border-b border-(--border-color) flex justify-between items-center sticky top-0 bg-(--bg-primary)/90 backdrop-blur z-40">
            <Link href="/" className="font-bold text-sm sm:text-base lg:text-lg tracking-tight hover:text-(--text-secondary) transition-colors">
                {PORTFOLIO.profile.name}.
            </Link>
            <Link href="/" className="text-xs sm:text-sm font-mono text-(--text-muted) hover:text-(--text-primary) transition-colors flex items-center gap-1.5">
               <span>✕</span><span className="hidden xs:inline">Close</span>
            </Link>
        </nav>
        
        <div className="max-w-4xl mx-auto sm:border-x border-(--border-color) min-h-screen bg-(--bg-primary)">
            <ProjectDetail project={project} />
        </div>
    </main>
  );
}
