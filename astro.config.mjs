// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://devfest2026.gdg-aranjuez.com',
  base: '/devfest-aranjuez-2026',
  vite: {
    plugins: [tailwindcss()],
  },
});
