import React from 'react';
import Link from 'next/link';

const featuredArticle = {
  title: "Modern Frontend Mimarisi: Micro-Frontend Yaklaşımı",
  excerpt: "Monolitik frontend uygulamalarından micro-frontend yaklaşımına geçiş ve faydaları hakkında kapsamlı bir inceleme.",
  coverImage: "🏢",
  readTime: "8 dk okuma",
  date: "12 Mayıs 2023",
  category: "Mimari",
  url: "#"
};

const articles = [
  {
    title: "TypeScript ile Daha Güvenli React Uygulamaları",
    excerpt: "TypeScript'in sunduğu tip güvenliği ve React ile entegrasyonu sayesinde daha az hata yapın, daha sağlam uygulamalar geliştirin.",
    coverImage: "📘",
    readTime: "6 dk okuma",
    date: "25 Nisan 2023",
    category: "React",
    url: "#"
  },
  {
    title: "CSS Grid vs Flexbox: Hangisi Ne Zaman Kullanılmalı?",
    excerpt: "İki güçlü CSS layout sistemi arasındaki farklar, güçlü yönleri ve her birinin ideal kullanım senaryoları.",
    coverImage: "🎨",
    readTime: "5 dk okuma",
    date: "10 Nisan 2023",
    category: "CSS",
    url: "#"
  },
  {
    title: "Web Performance Optimizasyonu: Temel İlkeler",
    excerpt: "Kullanıcı deneyimini artırmak için web uygulamalarında performans optimizasyonu yapmanın en etkili yöntemleri.",
    coverImage: "⚡",
    readTime: "7 dk okuma",
    date: "2 Nisan 2023",
    category: "Performans",
    url: "#"
  }
];

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

        <div className="space-y-12">
          {/* Featured Article */}
          <article className="bg-surface border border-border rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-lg">
            <div className="h-64 lg:h-auto bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-6xl">
              {featuredArticle.coverImage}
            </div>
            <div className="p-8 flex flex-col">
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
                <span className="ml-auto bg-surface-elevated px-3 py-1 rounded-full text-xs">
                  {featuredArticle.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
              <p className="text-text-secondary mb-6">{featuredArticle.excerpt}</p>
              <Link 
                href={featuredArticle.url}
                className="mt-auto btn btn-primary self-start"
              >
                <span>Makaleyi Oku</span>
                <span>→</span>
              </Link>
            </div>
          </article>

          {/* Regular Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="blog-card bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-lg h-full flex flex-col"
              >
                <div className="h-48 bg-gradient-to-tr from-surface-elevated to-surface-hover flex items-center justify-center text-5xl">
                  {article.coverImage}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                    <span>{article.date}</span>
                    <span className="ml-auto bg-surface-elevated px-3 py-1 rounded-full text-xs">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-text-secondary mb-6 text-sm">{article.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs text-text-tertiary">{article.readTime}</span>
                    <Link 
                      href={article.url}
                      className="text-accent font-medium hover:text-accent-hover transition-colors text-sm"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
