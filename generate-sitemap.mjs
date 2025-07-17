// generate-sitemap.mjs
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },

];

try {
  const stream = new SitemapStream({ hostname: 'https://wavesolutions.in' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  writeStream.write(xml.toString());
  writeStream.end();

  console.log('✅ Sitemap successfully generated!');
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error);
}
