// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  adapter: cloudflare()
});