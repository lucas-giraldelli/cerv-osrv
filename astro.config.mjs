import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://osrv.com.br',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  publicDir: 'static',
});
