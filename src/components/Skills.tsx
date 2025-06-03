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
        transform: translateX(calc(-50% - 0.5rem));
      }
    }

    .animate-infiniteScroll {
      animation: infiniteScroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
    }

    .scroller {
      mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, white 10%, white 90%, transparent);
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
  }
];

// Skill card component
const SkillCard = ({ skill }: { skill: any }) => {
  // Renk tonu seçimi için ilerleme yüzdesine göre ayarlama
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'from-accent/5 to-accent/20';
    if (percentage >= 80) return 'from-accent/5 to-accent/15';
    if (percentage >= 70) return 'from-accent/5 to-accent/10';
    return 'from-accent/0 to-accent/5';
  }

  return (
    <div className="skill-card rounded-xl p-4 border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-sm hover:border-[var(--border-hover)] transition-all duration-300 shadow-md relative overflow-hidden group">
      {/* Progress bar */}
      <div 
        className="absolute bottom-0 left-0 h-full bg-gradient-to-r from-accent/10 to-accent/20 z-0" 
        style={{ width: `${skill.proficiency}%` }} 
      />
      <div className="absolute bottom-0 left-[70%] w-px h-full bg-accent/30 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-base text-[var(--text-primary)]">{skill.name}</h3>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">{skill.proficiency}%</span>
        </div>
        
        <p className="text-xs text-[var(--text-secondary)] opacity-90 mb-3 line-clamp-2">
          {skill.description}
        </p>
        
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
    
    // Klonlama işlemi
    if (scrollerRef.current) {
      // Mevcut öğeleri klonla ve ekle
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach(item => {
        const duplicate = item.cloneNode(true);
        if (scrollerRef.current) scrollerRef.current.appendChild(duplicate);
      });
    }
    
    setStart(true);
  }, [direction, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`scroller relative overflow-hidden max-w-full ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)'
      }}
    >
      <div 
        ref={scrollerRef}
        className={`flex flex-nowrap gap-4 py-4 ${start ? 'animate-infiniteScroll' : ''} hover:[animation-play-state:paused]`}
      >
        {items.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
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
  
  // İki ayrı sıra için yetenekleri bölüştürelim
  const topRowSkills = [...frontendSkills, ...backendSkills];
  const bottomRowSkills = [...devopsSkills, ...toolsSkills, ...frontendSkills.slice(0, 3)]; // Dengeli görünmesi için

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
        <div className="space-y-12 bg-[var(--surface-elevated)]/80 backdrop-blur-sm p-8 rounded-xl border border-[var(--border)] shadow-xl">
          {/* Birinci sıra - sola doğru hareket eden */}
          <div className="rounded-lg overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]/90 pl-2 border-l-4 border-accent">{t('skills.frontendBackend')}</h3>
            <InfiniteMovingCards 
              items={topRowSkills} 
              direction="left" 
              speed="normal"
              className="py-2"
            />
          </div>

          {/* İkinci sıra - sağa doğru hareket eden */}
          <div className="rounded-lg overflow-hidden">
            <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]/90 pl-2 border-l-4 border-accent">{t('skills.devopsTools')}</h3>
            <InfiniteMovingCards 
              items={bottomRowSkills} 
              direction="right" 
              speed="normal"
              className="py-2"
            />
          </div>
        </div>

        {/* Yetenek sayısı */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {t('skills.total', skills.length)}
        </div>
      </div>
    </section>
  );
}
