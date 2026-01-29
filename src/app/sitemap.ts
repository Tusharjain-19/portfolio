import { MetadataRoute } from 'next';
import { PORTFOLIO } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tusharjain.in';

  // Base routes
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project routes
  const projectRoutes = PORTFOLIO.projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Research routes
  const researchRoutes = PORTFOLIO.research.map((item) => ({
    url: `${baseUrl}/research/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes, ...researchRoutes];
}
