'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem, BentoGridBackground } from '@/components/ui/bento-grid';

// Blog makaleleri için renk haritası
const categoryColors: Record<string, { bg: string, text: string }> = {
  "Mimari": { bg: "from-indigo-500 to-purple-600", text: "text-indigo-200" },
  "React": { bg: "from-sky-500 to-cyan-400", text: "text-sky-200" },
  "CSS": { bg: "from-pink-500 to-rose-400", text: "text-pink-200" },
  "Performans": { bg: "from-amber-500 to-yellow-400", text: "text-amber-200" },
  "JavaScript": { bg: "from-yellow-400 to-amber-500", text: "text-yellow-100" }
};

// Tüm makaleleri tek bir dizide topluyoruz, öne çıkan makale ilk sırada
const allArticles = [
  {
    title: "Modern Frontend Mimarisi: Micro-Frontend Yaklaşımı",
    excerpt: "Monolitik frontend uygulamalarından micro-frontend yaklaşımına geçiş ve faydaları hakkında kapsamlı bir inceleme.",
    coverImage: "🏢",
    readTime: "8 dk",
    date: "12 Mayıs 2023",
    category: "Mimari",
    url: "/blog/modern-frontend-mimarisi",
    featured: true,
    size: "large" // large, medium, small
  },
  {
    title: "TypeScript ile Daha Güvenli React Uygulamaları",
    excerpt: "TypeScript'in sunduğu tip güvenliği ve React ile entegrasyonu sayesinde daha az hata yapın, daha sağlam uygulamalar geliştirin.",
    coverImage: "📘",
    readTime: "6 dk",
    date: "25 Nisan 2023",
    category: "React",
    url: "/blog/typescript-ile-daha-guvenli-react",
    featured: false,
    size: "medium"
  },
  {
    title: "CSS Grid vs Flexbox: Hangisi Ne Zaman Kullanılmalı?",
    excerpt: "İki güçlü CSS layout sistemi arasındaki farklar, güçlü yönleri ve her birinin ideal kullanım senaryoları.",
    coverImage: "🎨",
    readTime: "5 dk",
    date: "10 Nisan 2023",
    category: "CSS",
    url: "/blog/css-grid-vs-flexbox",
    featured: false,
    size: "small"
  },
  {
    title: "Web Performance Optimizasyonu: Temel İlkeler",
    excerpt: "Kullanıcı deneyimini artırmak için web uygulamalarında performans optimizasyonu yapmanın en etkili yöntemleri.",
    coverImage: "⚡",
    readTime: "7 dk",
    date: "2 Nisan 2023",
    category: "Performans",
    url: "/blog/web-performance-optimizasyonu",
    featured: false,
    size: "medium"
  },
  {
    title: "JavaScript'te Yeni Nesil Özellikleri",
    excerpt: "ES2022 ve sonrası ile gelen yeni JavaScript özellikleri ve modern tarayıcılarda kullanımı.",
    coverImage: "✨",
    readTime: "4 dk",
    date: "15 Mart 2023",
    category: "JavaScript",
    url: "/blog/javascript-yeni-ozellikler",
    featured: false,
    size: "small"
  }
];

// Blog makalesinden BentoGridItem oluşturan yardımcı fonksiyon
const createBlogItem = (article: typeof allArticles[0], index: number, customOptions?: { imagePosition?: 'top' | 'left' | 'right' }) => {
  // Kategori renklerini al
  const categoryColor = categoryColors[article.category] || { bg: "from-gray-500 to-gray-600", text: "text-gray-200" };
  
  // Boyut belirleme
  const size = article.size === "large" ? "featured" : 
              article.size === "medium" ? "medium" : "small";

  // İkon boyutu
  const iconSize = article.size === "large" ? "text-5xl" : "text-3xl";
  
  // Varsayılan görsel konumu "top", aksi belirtilmedikçe
  const imagePosition = customOptions?.imagePosition || "top";
  
  return (
    <Link href={article.url} className="block h-full group">
      <BentoGridItem
        key={index}
        size={size}
        title={article.title}
        description={article.size !== "small" ? article.excerpt : undefined}
        imagePosition={imagePosition}
        image={
          <BentoGridBackground gradient={categoryColor.bg}>
            <span className={iconSize}>{article.coverImage}</span>
          </BentoGridBackground>
        }
        header={
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">{article.date}</span>
            <span className={`font-medium px-2 py-0.5 rounded-md bg-white/10 ${categoryColor.text}`}>
              {article.category}
            </span>
          </div>
        }
        footer={
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/50">{article.readTime}</span>
            <span className="text-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </div>
        }
      />
    </Link>
  );
};

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">✍️ Blog</div>
          <h2 className="section-title">Teknik Yazılarım</h2>
          <p className="section-subtitle">
            Web geliştirme, yazılım mimarisi ve teknoloji trendleri hakkında düşüncelerim.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Sol kolon - Büyük makale */}
            <div className="md:col-span-6 md:row-span-2 md:h-[450px]">
              {createBlogItem({...allArticles[0], size: "large"}, 0)}
            </div>
            
            {/* Sağ üst - React & TypeScript - Resim sağda */}
            <div className="md:col-span-6 md:h-[220px]">
              {createBlogItem({...allArticles[1], size: "medium"}, 1, { imagePosition: "right" })}
            </div>
            
            {/* CSS Grid */}
            <div className="md:col-span-3 md:h-[220px]">
              {createBlogItem({...allArticles[2], size: "small"}, 2)}
            </div>
            
            {/* JavaScript */}
            <div className="md:col-span-3 md:h-[220px]">
              {createBlogItem({...allArticles[3], size: "small"}, 3)}
            </div>
            
            {/* Performans - Tüm genişlik, görsel solda */}
            <div className="md:col-span-12 md:h-[220px]">
              {createBlogItem({...allArticles[4], size: "medium"}, 4, { imagePosition: "left" })}
            </div>
          </div>
        </div>
        
        {/* Tüm Makaleler Linki */}
        <div className="flex justify-center mt-8">
          <Link 
            href="/blog"
            className="group px-6 py-2.5 border-[0.5px] border-white/10 hover:border-white/20 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <span>Tüm Yazıları Gör</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
