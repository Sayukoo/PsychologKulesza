import { MetadataRoute } from 'next';

export const revalidate = 86400; // regenerate once a day for export compatibility

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://psychologkacper.pl',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://psychologkacper.pl/polityka-prywatnosci',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
