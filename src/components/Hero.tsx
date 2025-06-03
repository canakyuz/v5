'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const beamContainerRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement için spotlight ve beams efekti
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
      
      // Beam efektlerini hareket ettirme
      if (beamContainerRef.current) {
        const moveX = (x - rect.width / 2) * 0.01;
        const moveY = (y - rect.height / 2) * 0.01;
        beamContainerRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      }
      
      // Code preview 3D tilt efekti
      if (codeRef.current) {
        const codeRect = codeRef.current.getBoundingClientRect();
        const codeX = e.clientX - codeRect.left;
        const codeY = e.clientY - codeRect.top;
        
        const centerX = codeRect.width / 2;
        const centerY = codeRect.height / 2;
        
        const rotateY = ((codeX - centerX) / centerX) * 5;
        const rotateX = ((centerY - codeY) / centerY) * 5;
        
        codeRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      }
    };
    
    const handleMouseLeave = () => {
      if (codeRef.current) {
        codeRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      }
      if (beamContainerRef.current) {
        beamContainerRef.current.style.transform = 'translateX(0) translateY(0)';
      }
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  // Beams animasyonu
  useEffect(() => {
    const beams = document.querySelectorAll('.beam');
    
    beams.forEach((beam, index) => {
      const htmlBeam = beam as HTMLElement;
      // Random başlangıç pozisyonu
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 2;
      
      htmlBeam.style.animationDelay = `${delay}s`;
      htmlBeam.style.animationDuration = `${duration}s`;
    });
  }, []);

  // Spotlight pozisyonu hesaplama
  const spotlightStyles = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 112, 243, 0.15), transparent 80%)`,
  };

  return (
    <section 
      ref={heroRef} 
      className="hero"
    >
      {/* Arka plan efektleri */}
      <div className="background-effects">
        <div ref={beamContainerRef} className="beams-container">
          <div className="beam beam-1"></div>
          <div className="beam beam-2"></div>
          <div className="beam beam-3"></div>
          <div className="beam beam-4"></div>
          <div className="beam beam-5"></div>
        </div>
        <div className="grid-pattern"></div>
        <div className="glow"></div>
        <div className="spotlight" style={spotlightStyles}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
          <div className="hero-content lg:max-w-[600px] z-10">
            {/* Badge */}
            <div className="hero-badge">
              <span className="mr-2">🚀</span>
              <span>Available for new projects</span>
            </div>
            
            {/* Başlık */}
            <h1 className="hero-title">
              Building the <span className="highlight">future</span> of web
            </h1>
            
            {/* Açıklama */}
            <p className="hero-description">
              I'm a software engineer specializing in creating exceptional digital experiences. 
              Currently focused on building scalable applications with modern technologies.
            </p>
            
            {/* Butonlar */}
            <div className="hero-actions">
              <Link href="#work" className="btn btn-primary">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Code preview */}
          <div className="relative max-w-[500px] w-full hidden lg:block">
            <div 
              ref={codeRef}
              className="card p-8 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
            >
              <div className="card-badge">TypeScript</div>
              <div className="code-content font-mono text-sm">
                <div className="mb-2">
                  <span className="opacity-60 mr-4 select-none">1</span>
                  <span className="text-rose-400">const</span> <span className="text-cyan-400">developer</span> = {'{'}
                </div>
                <div className="mb-2">
                  <span className="opacity-60 mr-4 select-none">2</span>
                  <span className="pl-6">name:</span> <span className="text-green-400">'Bekircan'</span>,
                </div>
                <div className="mb-2">
                  <span className="opacity-60 mr-4 select-none">3</span>
                  <span className="pl-6">skills:</span> [<span className="text-green-400">'React'</span>,<span className="text-green-400">'TypeScript'</span>],
                </div>
                <div className="mb-2">
                  <span className="opacity-60 mr-4 select-none">4</span>
                  <span className="pl-6">passion:</span> <span className="text-green-400">'Building awesome apps'</span>
                </div>
                <div className="mb-2">
                  <span className="opacity-60 mr-4 select-none">5</span>
                  <span>{'}'};</span>
                </div>
                <div>
                  <span className="opacity-60 mr-4 select-none">6</span>
                  <span className="text-slate-400">// Let's build something amazing!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
