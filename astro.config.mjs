import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Blog posts carry their own dates, so the sitemap can tell search engines when they changed.
const posts = JSON.parse(readFileSync(new URL('./src/data/blog.json', import.meta.url), 'utf8'));
const postDates = new Map(posts.map((p) => [`/blog/${p.slug}`, p.dateModified || p.date]));

export default defineConfig({
  site: 'https://amicadigitalservices.com',
  // The live Express server 301-redirects "/page/" to "/page", so every URL
  // (canonicals, sitemap, internal links) is written without a trailing slash.
  trailingSlash: 'never',
  build: {
    // Keep /about/index.html output: the server serves clean URLs from that format.
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, '');
        const date = postDates.get(path);
        if (date) item.lastmod = new Date(date).toISOString();
        return item;
      },
    }),
  ],
});
