import { MetadataRoute } from 'next';

const SITE_URL = 'https://social-bridge.net';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages with priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/en/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/news/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/column/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // English pages
    {
      url: `${SITE_URL}/en/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/services/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/news/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/en/column/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/en/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // News/column article pages
  const newsArticles = [
    'takeoff-tokyo-2026',
    'hyogo-kobe-startup-consortium',
    'metal-recycling-initiatives',
    'waste-paper-management',
  ];

  const columnArticles = [
    'circular-economy-japan',
    'metal-recycling',
    'waste-paper-recycling',
    'how-culture-born-from-boom',
    'dx-recycling-industry',
  ];

  const newsPages: MetadataRoute.Sitemap = newsArticles.map((slug) => ({
    url: `${SITE_URL}/news/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const columnPages: MetadataRoute.Sitemap = columnArticles.map((slug) => ({
    url: `${SITE_URL}/column/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...newsPages, ...columnPages];
}
