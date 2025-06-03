'use client';

import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <Skills />
        <Work />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
