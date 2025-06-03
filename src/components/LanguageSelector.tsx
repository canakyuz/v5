'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isChangingLocale, setIsChangingLocale] = useState(false);
  
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as 'tr' | 'en';
    setIsChangingLocale(true);
    
    // Dil değişikliğini uygula
    setLanguage(nextLocale);
    setIsChangingLocale(false);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <select
        value={language}
        onChange={onSelectChange}
        className="bg-zinc-800 text-white text-sm rounded-md px-3 py-1.5 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="tr">{t('language.tr')}</option>
        <option value="en">{t('language.en')}</option>
      </select>
      
      {isChangingLocale && (
        <span className="inline-block animate-spin">⟳</span>
      )}
    </div>
  );
}
