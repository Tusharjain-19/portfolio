import { MetadataRoute } from 'next';
import { PORTFOLIO } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tusharjain.in';
  const now = new Date();

  // ============================================
  // CORE PAGES  -  Highest crawl priority
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
      url: `${baseUrl}/engineering`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/credentials`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
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
  // PROJECT PAGES  -  Each project gets indexed
  // ============================================
  const projectRoutes: MetadataRoute.Sitemap = PORTFOLIO.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ============================================
  // RESEARCH PAGES  -  Academic content
  // ============================================
  const researchRoutes: MetadataRoute.Sitemap = PORTFOLIO.research.map((item) => ({
    url: `${baseUrl}/research/${item.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.75,
  }));

  // ============================================
  // STATIC ASSETS  -  Resume, Research PDFs & Certs
  // ============================================
  const assetRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resume.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Tushar_Jain_Resume.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/Dual-UUVSystemResearch.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/Statistical_Data_Analysis_Report_final%20(1).pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/Tushar%20Jain_internship_%20InnoByte%20Services.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Certificate_Tushar%20Jain_MITS-DU-202608-00357.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Certificate_INTERN260467_Tushar_Jain.pdf`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return [...coreRoutes, ...projectRoutes, ...researchRoutes, ...assetRoutes];
}
