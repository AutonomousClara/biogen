import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/start', '/api/'],
    },
    sitemap: 'https://biogen.autonomousclara.com/sitemap.xml',
  };
}
