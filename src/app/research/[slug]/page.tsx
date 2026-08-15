
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ResearchDetail from '@/components/ResearchDetail';
import MobileDetoxDetail from '@/components/projects/MobileDetoxDetail';
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
    title: `${research.title} | Systems Engineering Research`,
    description: `${research.systemArchitectureSummary} Academic research by Tushar Jain, CSBS student at BMS College of Engineering (BMSCE), Bengaluru. Technical Areas: ${research.coreTechnicalAreas.join(', ')}.`,
    keywords: [research.title, "Tushar Jain research", "BMSCE research", "Bengaluru", ...research.coreTechnicalAreas],
    alternates: {
      canonical: `https://tusharjain.in/research/${research.slug}`,
    },
    openGraph: {
      title: `${research.title}  -  Tushar Jain`,
      description: research.systemArchitectureSummary,
      type: 'article',
      url: `https://tusharjain.in/research/${research.slug}`,
      siteName: 'Tushar Jain  -  Engineering Portfolio',
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
      title: `${research.title}  -  Tushar Jain`,
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
    <main className="theme-udaipur min-h-screen bg-(--bg-primary) text-(--text-primary) selection:bg-(--accent) selection:text-(--bg-primary) transition-colors duration-500 font-body relative">
        <StructuredData data={researchData as Record<string, unknown>} />
        
        {/* Dot Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
             style={{
               backgroundImage: 'radial-gradient(circle at 2px 2px, var(--border-color) 1px, transparent 0)',
               backgroundSize: '48px 48px'
             }}
        />

        
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
            <div className="max-w-4xl mx-auto pt-16 pb-4">
              {/* RESEARCH SELECTOR TABS */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-(--bg-secondary) border border-(--border-color) rounded-2xl w-fit mx-auto sm:mx-0 shadow-sm">
                {PORTFOLIO.research.map((item) => (
                  <Link
                    key={item.id}
                    href={`/research/${item.slug}`}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                      item.slug === slug
                        ? 'bg-(--text-primary) text-(--bg-primary) font-bold shadow-md'
                        : 'text-(--text-muted) hover:text-(--text-primary) hover:bg-(--bg-primary)'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    <span>{item.title.length > 32 ? item.title.slice(0, 32) + '...' : item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto pb-12 sm:pb-20">
                {slug === 'mobile-detox-sleep-quality' ? (
                  <MobileDetoxDetail />
                ) : (
                  <ResearchDetail research={research} />
                )}
            </div>
        </div>
    </main>
  );
}
