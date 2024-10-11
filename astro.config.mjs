import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://itsabubakar.github.io',
  base: '/affest', // The name of your repository
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
