// Desteklenen diller
export const locales = ['tr', 'en'] as const;
export type Locale = (typeof locales)[number];

// Varsayılan dil
export const defaultLocale: Locale = 'tr';
