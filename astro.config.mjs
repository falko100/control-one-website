// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://control-one.nl',
  integrations: [
    sitemap({
      filter: (page) => ![
        'https://control-one.nl/hero1/',
        'https://control-one.nl/test-fotos/',
      ].includes(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});