import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = 'https://diamondwarrantycorp.com';

// Use localhost when testing, domain in production
const BASE_FOR_INDEX =
  process.env.NODE_ENV === 'production'
    ? hostname
    : 'http://localhost:5173';

// React routes
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'daily', priority: 0.8 },
  { url: '/dealers', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'yearly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/claim', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms', changefreq: 'yearly', priority: 0.5 },
];

async function generateSitemap(filename, links) {
  const sitemap = new SitemapStream({ hostname });

  links.forEach(link => {
    sitemap.write({
      ...link,
      lastmod: new Date().toISOString(),
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  const xml = data.toString();
  const filePath = path.resolve(__dirname, 'public', filename);
  writeFileSync(filePath, xml, 'utf8');
  return `${hostname}/${filename}`; // absolute URL for production
}

(async () => {
  // 1) Generate pages-sitemap.xml
  await generateSitemap('pages-sitemap.xml', pages);

  // 2) Generate sitemap_index.xml with a link to pages-sitemap.xml
  const pagesSitemapLoc =
    `${BASE_FOR_INDEX}/pages-sitemap.xml`;

const indexXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n` +
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <sitemap>\n    <loc>${hostname}/pages-sitemap.xml</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>\n` +
  `</sitemapindex>`;


  const indexPath = path.resolve(__dirname, 'public', 'sitemap_index.xml');
  writeFileSync(indexPath, indexXml, 'utf8');

  console.log('✅ Sitemaps generated with lastmod and index → pages link.');
})();
