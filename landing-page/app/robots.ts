import { MetadataRoute } from 'next';

export const revalidate = 86400; // regenerate once a day for export compatibility

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.kacperkulesza.pl/sitemap.xml',
  };
}
