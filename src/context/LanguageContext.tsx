'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'tr' | 'en';

type TranslationKey = 
  | 'skills.title'
  | 'skills.badge'
  | 'skills.subtitle'
  | 'skills.frontendBackend'
  | 'skills.devopsTools'
  | 'skills.total'
  | 'theme.light'
  | 'theme.dark'
  | 'theme.system'
  | 'language.tr'
  | 'language.en'
  | 'nav.skills'
  | 'nav.work'
  | 'nav.blog'
  | 'nav.contact'
  | 'aria.toggleLanguage'
  | 'aria.toggleTheme'
  | 'aria.openMenu'
  | 'aria.closeMenu';

type TranslationFunc = (param: any) => string;

interface TranslationRecord {
  [key: string]: string | TranslationFunc;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, params?: any) => string;
}

// JSON formatındaki çeviri dosyalarını içe aktarıyoruz
import trMessages from '../messages/tr.json';
import enMessages from '../messages/en.json';

// Çeviri dosyalarını işleyip, düz yapıya dönüştüren yardımcı fonksiyon
function flattenMessages(messages: Record<string, any>, prefix = ''): Record<string, any> {
  return Object.keys(messages).reduce((flattenedMessages: Record<string, any>, key) => {
    const value = messages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      Object.assign(flattenedMessages, flattenMessages(value, prefixedKey));
    } else {
      flattenedMessages[prefixedKey] = value;
    }
    
    return flattenedMessages;
  }, {});
}

// Çeviri verilerini düzleştirelim
const flattenedTr = flattenMessages(trMessages);
const flattenedEn = flattenMessages(enMessages);

// Sayı değerlerini fonksiyona dönüştürelim
flattenedTr['skills.total'] = (count: number) => `Toplam: ${count} yetenek`;
flattenedEn['skills.total'] = (count: number) => `Total: ${count} skills`;

// Dil çevirileri
const translations: Record<Language, TranslationRecord> = {
  tr: flattenedTr,
  en: flattenedEn
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');
  
  // Çeviri yardımcı fonksiyonu
  const t = (key: string, params?: any): string => {
    const translationSet = translations[language];
    const translation = translationSet[key];
    
    if (typeof translation === 'function') {
      return translation(params);
    }
    
    return (translation as string) || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Dil bağlamını kullanmak için hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}
