// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Producción: dominio actual (Vercel). Cuando se conecte un dominio propio,
// sustituir aquí. También respeta SITE_URL si se define como variable de entorno.
const SITE = process.env.SITE_URL || 'https://web-ana-karina-luxury.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
