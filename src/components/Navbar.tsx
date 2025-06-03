'use client';

import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Section = 'skills' | 'work' | 'blog' | 'contact';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  // Client-side rendering için
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll efekti ve aktif bölüm tespiti
  useEffect(() => {
    const handleScroll = () => {
      // Scroll durumu
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Sayfa scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Aktif bölüm tespiti
      const sections = [
        { id: 'skills', element: document.getElementById('skills') },
        { id: 'work', element: document.getElementById('work') },
        { id: 'blog', element: document.getElementById('blog') },
        { id: 'contact', element: document.getElementById('contact') }
      ];
      
      // Görünür durumdaki bölümü tespit et
      const currentSection = sections
        .filter(section => section.element !== null)
        .find(section => {
          if (section.element) {
            const rect = section.element.getBoundingClientRect();
            return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
          }
          return false;
        });
      
      if (currentSection) {
        setActiveSection(currentSection.id as Section);
      }
    };

    // Scroll değerini hemen ayarlamak için bir kez çağır
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıldığında body scroll kilit
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Link'e tıklandığında mobil menüyü kapat
  const handleNavLinkClick = (item: Section) => () => {
    setActiveSection(item);
    setMobileMenuOpen(false);
  };

  // Temayı değiştir
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Dili değiştir
  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 w-full backdrop-blur-md border-b border-white/5 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-medium text-white">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          
          {/* Ana Menü - Masaüstü */}
          <div className="hidden md:block">
            <div className="flex gap-4 items-center space-x-8">
              {(['skills', 'work', 'blog', 'contact'] as Section[]).map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  onClick={handleNavLinkClick(section)}
                  className={`px-2 py-2 text-sm font-medium ${activeSection === section 
                    ? 'text-white border-b-2 border-primary' 
                    : 'text-gray-300 hover:text-white'} transition-colors duration-200 ease-in-out`}
                >
                  {t(`nav.${section}`)}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Kontroller */}
          <div className="flex items-center space-x-3">
            {/* Dil Değiştirici */}
            {mounted && (
              <button
                onClick={toggleLanguage}
                aria-label={t('aria.toggleLanguage')}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition duration-150 ease-in-out"
              >
                <span className="text-xs font-medium">{language === 'tr' ? 'EN' : 'TR'}</span>
              </button>
            )}
            
            {/* Tema Değiştirici */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={t('aria.toggleTheme')}
                className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition duration-150 ease-in-out"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}
            
            {/* Mobil menü butonu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none transition duration-150 ease-in-out"
              >
                <svg 
                  className="h-6 w-6" 
                  stroke="currentColor" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    className={`${mobileMenuOpen ? 'hidden' : 'inline-flex'}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                  <path 
                    className={`${mobileMenuOpen ? 'inline-flex' : 'hidden'}`} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* İlerleme çubuğu */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Mobil menü panel */}
      <div 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-black border-t border-gray-800 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {(['skills', 'work', 'blog', 'contact'] as Section[]).map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={handleNavLinkClick(section)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === section 
                ? 'text-white bg-gray-900' 
                : 'text-gray-300 hover:text-white hover:bg-gray-800'} transition-colors duration-150 ease-in-out`}
            >
              {t(`nav.${section}`)}
            </Link>
          ))}
          
          <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between">
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center px-4 py-2 border border-gray-800 rounded-md text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-800 transition-colors duration-150 ease-in-out"
            >
              {language === 'tr' ? t('language.en') : t('language.tr')}
            </button>
            
            <button
              onClick={toggleTheme}
              className="inline-flex items-center px-4 py-2 border border-gray-800 rounded-md text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-800 transition-colors duration-150 ease-in-out"
            >
              {theme === 'dark' ? t('theme.light') : t('theme.dark')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
