// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

const isBuild = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  output: isBuild ? 'server' : 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: isBuild ? netlify() : undefined
});