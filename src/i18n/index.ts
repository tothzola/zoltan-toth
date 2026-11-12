import { en, type Dictionary } from './en';
import { de } from './de';
import { fr } from './fr';
import { hu } from './hu';
import { ro } from './ro';

export const locales = ['en', 'de', 'fr', 'hu', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, hu, ro };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Site root with a trailing slash; respects `base` once the site is published under a sub-path. */
export const base = import.meta.env.BASE_URL.replace(/\/$/, '') + '/';

/** Home page of a language: `/` for English, `/<lang>/` for the others. */
export function localeUrl(locale: Locale): string {
  return locale === defaultLocale ? base : `${base}${locale}/`;
}

export type { Dictionary };
