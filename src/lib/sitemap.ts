import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://panamagoldenkey.com';
  
  // Define static pages
  const staticPages = [
    '',
    '/residency',
    '/real-estate',
    '/medical-tourism',
    '/infrastructure',
    '/about-panama',
    '/about-us',
    '/contact',
    '/blog',
    '/faq',
    '/testimonials',
    '/calculator',
    '/privacy',
    '/terms',
    '/disclaimer',
  ];
  
  // Generate sitemap entries for all pages in all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Add homepage and static pages for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(altLocale => [
              altLocale,
              `${baseUrl}/${altLocale}${page}`,
            ])
          ),
        },
      });
    });
  });
  
  // Add dynamic pages (example: blog posts, properties)
  // These would be fetched from your API in a real implementation
  
  return sitemapEntries;
}