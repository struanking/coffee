// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.coffee-blog.com',
  vite: {
      plugins: [tailwindcss()],
    },
});
