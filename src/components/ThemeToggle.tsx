'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('theme');
  
  // Yalnızca istemci tarafında çalıştıktan sonra görüntü
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="flex items-center space-x-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-zinc-800 text-white text-sm rounded-md px-3 py-1.5 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <option value="system">{t('system')}</option>
        <option value="dark">{t('dark')}</option>
        <option value="light">{t('light')}</option>
      </select>
    </div>
  );
}
