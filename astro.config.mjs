// @ts-check
import sugarcube from '@sugarcube-sh/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.coffee-blog.com',
  vite: {
    plugins: [sugarcube()],
  },
});
