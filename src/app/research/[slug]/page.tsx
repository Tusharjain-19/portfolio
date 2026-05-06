
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ResearchDetail from '@/components/ResearchDetail';
import Link from 'next/link';

import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

// Generate static params
export async function generateStaticParams() {
  return PORTFOLIO.research.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const research = PORTFOLIO.research.find((p) => p.slug === slug);

  if (!research) {
    return {
      title: 'Research Not Found',
    };
  }

  return {
    title: research.title,
    description: `${research.systemArchitectureSummary} Independent research by Tushar Jain, BMSCE. Areas: ${research.coreTechnicalAreas.slice(0, 3).join(', ')}.`,
    keywords: [research.title, "Tushar Jain research", "BMSCE research", ...research.coreTechnicalAreas],
    alternates: {
      canonical: `https://tusharjain.in/research/${research.slug}`,
    },
    openGraph: {
      title: `${research.title} — Tushar Jain`,
      description: research.systemArchitectureSummary,
      type: 'article',
      url: `https://tusharjain.in/research/${research.slug}`,
      siteName: 'Tushar Jain — Engineering Portfolio',
      authors: ['Tushar Jain'],
      images: [
        {
          url: '/pic2.jpeg',
          width: 800,
          height: 600,
          alt: `${research.title} by Tushar Jain`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${research.title} — Tushar Jain`,
      description: research.systemArchitectureSummary,
    },
  };
}

export default async function ResearchPage({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;
  const research = PORTFOLIO.research.find((p) => p.slug === slug);

  if (!research) {
    notFound();
  }

  const researchData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": research.title,
    "description": research.systemArchitectureSummary,
    "author": {
      "@type": "Person",
      "name": PORTFOLIO.profile.name
    },
    "url": `https://tusharjain.in/research/${research.slug}`
  };

  return (
    <main className="theme-udaipur min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)] transition-colors duration-500 font-body relative">
        <StructuredData data={researchData as Record<string, unknown>} />
        
        {/* Dot Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
               backgroundSize: '48px 48px'
             }}
        />

        
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto py-12 sm:py-20">
                <ResearchDetail research={research} />
            </div>
        </div>
    </main>
  );
}
