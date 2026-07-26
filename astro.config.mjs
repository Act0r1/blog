// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://insaf.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Literata',
      cssVariable: '--font-literata',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['400 700'],
      styles: ['normal'],
    },
  ],

  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  output: "static",
});
