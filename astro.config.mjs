// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/AdoptaUnJuniorPlatform.io',
  base: '/devfest-aranjuez-2026',
  vite: {
    plugins: [tailwindcss()],
  },
});
