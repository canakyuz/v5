'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Animasyon stilleri
const AnimationStyles = () => (
  <style jsx global>{`
    @keyframes infiniteScroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(calc(-50%));
      }
    }

    .animate-infiniteScroll {
      animation: infiniteScroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
    }

    .animate-infiniteScroll:hover {
      animation-play-state: paused;
    }

    .scroller {
      mask-image: linear-gradient(to right, transparent, white 5%, white 95%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, white 5%, white 95%, transparent);
    }
  `}</style>
);

const skillCategories = [
  { id: 'all', name: 'Tüm Yetenekler' },
  { id: 'frontend', name: 'Frontend', icon: '⚛️' },
  { id: 'backend', name: 'Backend', icon: '🔧' },
  { id: 'devops', name: 'DevOps', icon: '☁️' },
  { id: 'tools', name: 'Araçlar', icon: '🛠️' },
];

const skills = [
  {
    name: "React",
    category: "frontend",
    proficiency: 95,
    description: "Component-based UI kütüphanesi"
  },
  {
    name: "Next.js",
    category: "frontend",
    proficiency: 90,
    description: "React framework for production"
  },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 88,
    description: "JavaScript için tip güvenliği"
  },
  {
    name: "Vue.js",
    category: "frontend",
    proficiency: 75,
    description: "Progressive JavaScript framework"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 92,
    description: "Utility-first CSS framework"
  },
  {
    name: "SASS/SCSS",
    category: "frontend",
    proficiency: 85,
    description: "CSS preprocessor"
  },
  {
    name: "Node.js",
    category: "backend",
    proficiency: 88,
    description: "JavaScript runtime"
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: 85,
    description: "Node.js web framework"
  },
  {
    name: "NestJS",
    category: "backend",
    proficiency: 78,
    description: "Progressive Node.js framework"
  },
  {
    name: "PostgreSQL",
    category: "backend",
    proficiency: 80,
    description: "Açık kaynak ilişkisel veritabanı"
  },
  {
    name: "MongoDB",
    category: "backend",
    proficiency: 82,
    description: "NoSQL veritabanı"
  },
  {
    name: "GraphQL",
    category: "backend",
    proficiency: 75,
    description: "API sorgu dili"
  },
  {
    name: "AWS",
    category: "devops",
    proficiency: 70,
    description: "Cloud computing platformu"
  },
  {
    name: "Docker",
    category: "devops",
    proficiency: 82,
    description: "Konteyner platformu"
  },
  {
    name: "Kubernetes",
    category: "devops",
    proficiency: 65,
    description: "Konteyner orkestrasyon sistemi"
  },
  {
    name: "Vercel",
    category: "devops",
    proficiency: 88,
    description: "Deployment ve hosting platformu"
  },
  {
    name: "GitHub Actions",
    category: "devops",
    proficiency: 80,
    description: "CI/CD aracı"
  },
  {
    name: "Git",
    category: "tools",
    proficiency: 90,
    description: "Versiyon kontrol sistemi"
  },
  {
    name: "Jest",
    category: "tools",
    proficiency: 78,
    description: "JavaScript test framework"
  },
  {
    name: "Figma",
    category: "tools",
    proficiency: 85,
    description: "UI/UX tasarım aracı"
  },
  {
    name: "React Native",
    category: "frontend",
    proficiency: 75,
    description: "Mobil uygulama framework'ü"
  },
  {
    name: "Storybook",
    category: "tools",
    proficiency: 72,
    description: "UI component explorer"
  },
  {
    name: "FileZilla",
    category: "tools",
    proficiency: 90,
    description: "Dosya transfer aracı"
  },
  /* FortiClient */
  {
    name: "FortiClient",
    category: "tools",
    proficiency: 90,
    description: "Masaüstü güvenlik yazılımı"
  },
  /* FortiGate */
  {
    name: "FortiGate",
    category: "devops",
    proficiency: 90,
    description: "Masaüstü güvenlik yazılımı"
  },
];

// Skill card component
const SkillCard = ({ skill }: { skill: any }) => {
  // Kategori sınıflarını alır
  const getCategoryClasses = (category: string) => {
    switch (category) {
      case 'frontend':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-500',
          border: 'border-blue-500',
          from: 'from-blue-500/10',
          to: 'to-blue-500',
          ring: 'ring-blue-500'
        };
      case 'backend':
        return {
          bg: 'bg-green-500',
          text: 'text-green-500',
          border: 'border-green-500',
          from: 'from-green-500/10',
          to: 'to-green-500',
          ring: 'ring-green-500'
        };
      case 'devops':
        return {
          bg: 'bg-purple-500',
          text: 'text-purple-500',
          border: 'border-purple-500',
          from: 'from-purple-500/10',
          to: 'to-purple-500',
          ring: 'ring-purple-500'
        };
      case 'tools':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-500',
          border: 'border-orange-500',
          from: 'from-orange-500/10',
          to: 'to-orange-500',
          ring: 'ring-orange-500'
        };
      default:
        return {
          bg: 'bg-violet-600',
          text: 'text-violet-600',
          border: 'border-violet-600',
          from: 'from-violet-600/10',
          to: 'to-violet-600',
          ring: 'ring-violet-600'
        };
    }
  };

  // Kartın sınıflarını hesapla
  const classes = getCategoryClasses(skill.category);

  // Yüzdeye göre opacity sınıfını ayarla
  const getOpacityClass = (percentage: number) => {
    if (percentage >= 90) return 'opacity-100';
    if (percentage >= 80) return 'opacity-85';
    if (percentage >= 70) return 'opacity-70';
    return 'opacity-50';
  };

  // Kategori adını görüntülenebilir formata çevirme
  const getCategoryName = (category: string) => {
    const names: {[key: string]: string} = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'devops': 'DevOps',
      'tools': 'Tools'
    };
    return names[category] || category;
  };

  return (
    <div 
      className={`skill-card rounded-xl backdrop-blur-sm transition-all duration-300 shadow-md relative overflow-hidden group min-w-[180px] sm:min-w-[250px] flex flex-col justify-between bg-black/80 border-2 ${classes.border} border-opacity-80`}
    >
      {/* Progress bar - yüzde kadar doldurulan arka plan */}
      <div 
        className={`absolute bottom-0 left-0 h-full bg-gradient-to-r ${classes.from} ${classes.to} z-0 opacity-30`}
        style={{ width: `${skill.proficiency}%` }} 
      />
      
      {/* İnce çizgi - proficiency değerine göre konumlandırılmış */}
      <div 
        className={`absolute bottom-0 w-px h-full z-0 ${classes.bg} opacity-80`}
        style={{ left: `${skill.proficiency}%` }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 px-2 py-1.5 sm:px-4 sm:py-2">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-white">{skill.name}</h3>
            <div className="flex items-center mt-1 mb-0.5">
              <span 
                className={`text-[8px] sm:text-[10px] font-medium px-1 py-0.5 sm:px-1.5 rounded ${classes.bg} text-white opacity-90`}
              >
                {getCategoryName(skill.category)}
              </span>
            </div>
          </div>
          <span 
            className={`text-[10px] sm:text-xs font-medium px-1.5 py-0.5 sm:px-2 rounded-lg ${classes.bg} text-white ${skill.proficiency >= 90 ? 'opacity-90' : 'opacity-75'}`}
          >
            {skill.proficiency}%
          </span>
        </div>
        
        <p className="text-[10px] sm:text-xs text-gray-300 opacity-90 mb-1 sm:mb-2 line-clamp-2">
          {skill.description}
        </p>
        
        {/* Progress bar görünür versiyon */}
        <div className="w-full h-0.5 sm:h-1 bg-gray-800 rounded-lg overflow-hidden">
          <div 
            className={`h-full rounded-lg ${classes.bg} ${getOpacityClass(skill.proficiency)}`}
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
        
        <div className="flex gap-1.5 flex-wrap">
          {skill.tags && skill.tags.map((tag: string, idx: number) => (
            <span 
              key={idx} 
              className="inline-block px-2 py-0.5 bg-accent/10 text-[10px] rounded-md border border-accent/30 text-accent">
              {tag}
            </span>
          ))}
          {skill.category && (
            <span className="inline-block px-2 py-0.5 bg-black/30 text-[10px] rounded-md border border-zinc-700">
              {skill.category}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Sonsuz hareket eden kartlar bileşeni
const InfiniteMovingCards = ({ 
  items, 
  direction = 'left', 
  speed = 'fast',
  className = '',
}: { 
  items: any[], 
  direction?: 'left' | 'right', 
  speed?: 'slow' | 'normal' | 'fast',
  className?: string, 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  const renderItems = useCallback(() => {
    return items.map((skill, idx) => (
      <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
    ));
  }, [items]);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Animasyon hızını ayarla
    const speedVals = {
      slow: '80s',
      normal: '40s',
      fast: '20s'
    };
    
    containerRef.current.style.setProperty('--animation-duration', speedVals[speed]);
    containerRef.current.style.setProperty(
      '--animation-direction', 
      direction === 'left' ? 'forwards' : 'reverse'
    );
    
    setStart(true);

    // Gözlemci ile genişlik değişikliklerini izle
    const resizeObserver = new ResizeObserver(() => {
      setStart(false);
      setTimeout(() => setStart(true), 50);
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [direction, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`scroller relative overflow-hidden max-w-full p-3 ${className}`}
    >
      <div 
        ref={scrollerRef}
        className={`flex flex-nowrap gap-3 py-2 ${start ? 'animate-infiniteScroll' : ''}`}
      >
        {renderItems()}
        {renderItems()} {/* Klonlanmış öğeler - doğrudan JSX içinde render ediyoruz */}
      </div>
    </div>
  );
};

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  // Yetenekleri kategorilerine göre gruplayalım
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const devopsSkills = skills.filter(skill => skill.category === 'devops');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  // Farklı dağılım için grupları shuffle edelim
  const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  
  // İki ayrı sıra için yetenekleri bölüştürelim - daha dengeli bir görünüm için
  const topRowSkills = [...frontendSkills, ...backendSkills];
  const bottomRowSkills = [...devopsSkills, ...toolsSkills];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const { t } = useLanguage();
  
  return (
    <section className="section py-16 overflow-hidden bg-gradient-to-b from-[var(--background)] to-[var(--surface)]" id="skills" ref={skillsRef}>
      {/* Animasyon stillerini ekliyoruz */}
      <AnimationStyles />
      
      <div className="container px-4 mx-auto">
        <div className="section-header text-center mb-12">
          <div className="section-badge inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">{t('skills.badge')}</div>
          <h2 className="section-title text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-muted-foreground">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* İki sıralı hareketli kartlar */}
        <div className="space-y-4 sm:space-y-8 bg-[var(--surface-elevated)]/90 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-[var(--border)] shadow-xl">
          {/* Birinci sıra - sola doğru hareket eden */}
          <div className="overflow-hidden mb-2">
            <h3 className="text-base sm:text-lg font-semibold my-1 text-[var(--text-primary)]/90 px-2 sm:px-4 py-1 border-l-4 border-accent">{t('skills.frontendBackend')}</h3>
            <InfiniteMovingCards 
              items={topRowSkills} 
              direction="left" 
              speed="slow"
            />
          </div>

          {/* İkinci sıra - sağa doğru hareket eden */}
          <div className="overflow-hidden mb-2">
            <h3 className="text-base sm:text-lg font-semibold my-1 text-[var(--text-primary)]/90 px-2 sm:px-4 py-1 border-l-4 border-accent">{t('skills.devopsTools')}</h3>
            <InfiniteMovingCards 
              items={bottomRowSkills} 
              direction="right" 
              speed="slow"
            />
          </div>
        </div>

        {/* Yetenek sayısı */}
        {/* <div className="mt-8 text-center text-sm text-muted-foreground">
          {t('skills.total', skills.length)}
        </div> */}
      </div>
    </section>
  );
}
