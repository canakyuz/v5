export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'modern-frontend-mimarisi',
    title: 'Modern Frontend Mimarisi: Micro-Frontend Yaklaşımı',
    excerpt: 'Monolitik frontend uygulamalarından micro-frontend yaklaşımına geçiş ve faydaları hakkında kapsamlı bir inceleme.',
    date: '12 Mayıs 2023',
    readTime: '8 dk',
    category: 'Mimari',
    content: `
<h2>Bölüm 1: Micro-Frontend Nedir?</h2>
<p>Micro-frontend yaklaşı mı büyük frontend uygulamalarını küçük ve yönetilebilir parçalara bölmek anlamına gelir.</p>
<h2>Bölüm 2: Avantajları</h2>
<p>Takımlar arası bağımsız geliştirme, dağıtım kolaylığı ve ölçeklenebilirlik başlıca avantajlardır.</p>
`,
  },
  {
    slug: 'typescript-ile-daha-guvenli-react',
    title: 'TypeScript ile Daha Güvenli React Uygulamaları',
    excerpt: 'TypeScript\'in sunduğu tip güvenliği sayesinde daha sağlam uygulamalar geliştirin.',
    date: '25 Nisan 2023',
    readTime: '6 dk',
    category: 'React',
    content: `
<h2>Giriş</h2>
<p>TypeScript React projelerinde hata oranını düşürür.</p>
<h2>Tipler</h2>
<p>Props ve state için tip tanımlamak kod kalitesini artırır.</p>
`,
  },
  {
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: Hangisi Ne Zaman Kullanılmalı?',
    excerpt: 'İki güçlü CSS layout sistemi arasındaki farklar ve ideal kullanım senaryoları.',
    date: '10 Nisan 2023',
    readTime: '5 dk',
    category: 'CSS',
    content: `
<h2>CSS Grid</h2>
<p>Grid iki boyutlu yerleşim sağlar.</p>
<h2>Flexbox</h2>
<p>Flexbox tek boyutlu yerleşim için idealdir.</p>
`,
  },
  {
    slug: 'web-performance-optimizasyonu',
    title: 'Web Performance Optimizasyonu: Temel İlkeler',
    excerpt: 'Web uygulamalarında performansı artırmak için en etkili yöntemler.',
    date: '2 Nisan 2023',
    readTime: '7 dk',
    category: 'Performans',
    content: `
<h2>Neden Önemli?</h2>
<p>Kullanıcı deneyimi için hız kritiktir.</p>
<h2>Temel Teknikler</h2>
<p>Lazy loading, caching ve sıkıştırma en yaygın yöntemlerdir.</p>
`,
  },
  {
    slug: 'javascript-yeni-ozellikler',
    title: "JavaScript'te Yeni Nesil Özellikleri",
    excerpt: 'ES2022 ve sonrası ile gelen yeni özellikler ve kullanımları.',
    date: '15 Mart 2023',
    readTime: '4 dk',
    category: 'JavaScript',
    content: `
<h2>Optional Chaining</h2>
<p>Soru işareti ile güvenli erişim sağlar.</p>
<h2>Nullish Coalescing</h2>
<p>Varsayılan değer atamada daha doğru sonuç verir.</p>
`,
  }
];
