'use client';

import { useLanguage } from '../context/LanguageContext';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function LanguageAndThemeControls() {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  
  // Bileşen yalnızca istemci tarafında çalıştıktan sonra görüntülenir
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 bg-zinc-900/70 backdrop-blur-sm p-2 rounded-lg border border-zinc-800">
      {/* Dil Seçici */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'tr' | 'en')}
        className="bg-zinc-800 text-white text-sm rounded-md px-3 py-1.5 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="tr">{t('language.tr')}</option>
        <option value="en">{t('language.en')}</option>
      </select>
      
      {/* Tema Seçici */}
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-zinc-800 text-white text-sm rounded-md px-3 py-1.5 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="system">{t('theme.system')}</option>
        <option value="dark">{t('theme.dark')}</option>
        <option value="light">{t('theme.light')}</option>
      </select>
    </div>
  );
}
