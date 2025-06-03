'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '../context/LanguageContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
