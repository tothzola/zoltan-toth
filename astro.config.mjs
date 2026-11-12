import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tothzola.github.io',
  base: '/zoltan-toth',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'hu', 'ro'],
    routing: { prefixDefaultLocale: false },
  },
});
