
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ResearchDetail from '@/components/ResearchDetail';
import Link from 'next/link';

// Generate static params
export async function generateStaticParams() {
  return PORTFOLIO.research.map((item) => ({
    slug: item.slug,
  }));
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

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-neutral-500/30">
        <nav className="p-6 border-b border-[var(--border-color)] flex justify-between items-center sticky top-0 bg-[var(--bg-primary)]/90 backdrop-blur z-40">
            <Link href="/" className="font-bold text-lg tracking-tight hover:text-[var(--text-secondary)] transition-colors">
                {PORTFOLIO.profile.name}.
            </Link>
            <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest hidden md:block">
                Systems Research
            </span>
             <Link href="/" className="text-sm font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
               ✕ Close
            </Link>
        </nav>
        
        <div className="px-6 md:px-12 lg:px-24">
            <ResearchDetail research={research} />
        </div>
    </main>
  );
}
