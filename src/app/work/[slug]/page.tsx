
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
    title: project.title,
    description: `${project.oneLineSummary} Built by Tushar Jain, BMSCE student. Tech: ${project.techStack.slice(0, 4).join(', ')}.`,
    keywords: [project.title, `${project.title} maker`, `${project.title} developer`, "Tushar Jain", "BMSCE", ...project.techStack],
    alternates: {
      canonical: `https://tusharjain.in/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title}  -  Tushar Jain`,
      description: project.oneLineSummary,
      type: 'article',
      url: `https://tusharjain.in/work/${project.slug}`,
      siteName: 'Tushar Jain  -  Engineering Portfolio',
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
      title: `${project.title}  -  Tushar Jain`,
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
    <main className="theme-jodhpur min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative overflow-x-hidden">
        <StructuredData data={projectData as Record<string, unknown>} />
        
        {/* Background Ceramic Geometry */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
               backgroundSize: '48px 48px'
             }}
        />

        
        <div className="max-w-4xl mx-auto sm:border-x border-(--border-color) min-h-screen bg-(--bg-primary) relative z-10 shadow-2xl py-12 sm:py-20 px-4 sm:px-10">
            <ProjectDetail project={project} />
        </div>
    </main>
  );
}
