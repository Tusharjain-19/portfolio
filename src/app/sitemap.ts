import { MetadataRoute } from 'next';
import { PORTFOLIO } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tusharjain.in';
  const now = new Date();

  // ============================================
  // CORE PAGES — Highest crawl priority
  // ============================================
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // ============================================
  // PROJECT PAGES — Each project gets indexed
  // ============================================
  const projectRoutes: MetadataRoute.Sitemap = PORTFOLIO.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ============================================
  // RESEARCH PAGES — Academic content
  // ============================================
  const researchRoutes: MetadataRoute.Sitemap = PORTFOLIO.research.map((item) => ({
    url: `${baseUrl}/research/${item.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.75,
  }));

  // ============================================
  // STATIC ASSETS — Resume, Research PDFs
  // ============================================
  const assetRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Dual-UUVSystemResearch.pdf`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [...coreRoutes, ...projectRoutes, ...researchRoutes, ...assetRoutes];
}
