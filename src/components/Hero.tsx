import React from "react";
import { heroContent } from "@/content/hero";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { GradientText } from "./GradientText";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          
          {/* Header Badge */}
          <div className={`mb-16 md:mb-20 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center space-x-4">
              <div className="w-8 md:w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-400 animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono text-blue-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                  Software Developer
                </span>
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column - Optimized Typography */}
            <div className="lg:col-span-8 space-y-12 md:space-y-16">
              
              {/* Optimized Name Typography */}
              <div className={`space-y-4 md:space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-light leading-[0.85] tracking-[-0.02em]">
                    <GradientText gradient="from-white via-blue-100 to-blue-300">
                      {heroContent.name.first}
                    </GradientText>
                  </h1>
                  <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-4 md:w-8 h-4 md:h-8 border border-blue-500/40 rounded-full animate-pulse" />
                </div>
                
                <div className="relative ml-4 md:ml-8 lg:ml-16">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-light leading-[0.85] tracking-[-0.02em] text-gray-200">
                    {heroContent.name.last}
                  </h1>
                  <div className="absolute top-0 right-0 w-1.5 md:w-2 h-1.5 md:h-2 bg-purple-500 rounded-full animate-ping" />
                </div>
              </div>

              {/* Optimized Description */}
              <div className={`max-w-2xl lg:max-w-3xl ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed font-light">
                    {heroContent.description}
                  </p>
                  <div className="absolute -bottom-2 left-0 w-16 md:w-24 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-transparent" />
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className={`pt-8 md:pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <button 
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                      behavior: 'smooth'
                    })} 
                    className="group relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium tracking-wide text-sm md:text-base">
                      {heroContent.cta.primary.text}
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    })} 
                    className="group inline-flex items-center justify-center space-x-3 border border-gray-600 text-gray-300 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:border-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <span className="font-medium tracking-wide text-sm md:text-base">
                      {heroContent.cta.secondary.text}
                    </span>
                    <div className="w-6 md:w-8 h-6 md:h-8 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Stats */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-12 md:space-y-16">
              
              <div className={`space-y-8 md:space-y-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <div className="group">
                  <div className="relative p-6 border border-gray-800 rounded-2xl bg-gray-900/60 backdrop-blur-md hover:border-blue-500/60 transition-all duration-500 hover:bg-gray-800/70">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">
                      <GradientText gradient="from-blue-400 to-purple-400">4+</GradientText>
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                      Years Experience
                    </div>
                    <div className="absolute top-0 right-0 w-2 md:w-3 h-2 md:h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="group">
                  <div className="relative p-6 border border-gray-800 rounded-2xl bg-gray-900/60 backdrop-blur-md hover:border-purple-500/60 transition-all duration-500 hover:bg-gray-800/70">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">
                      <GradientText gradient="from-purple-400 to-pink-400">20+</GradientText>
                    </div>
                    <div className="text-[10px] md:text-xs font-mono text-gray-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
                      Projects Delivered
                    </div>
                    <div className="absolute top-0 right-0 w-2 md:w-3 h-2 md:h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between py-6 md:py-8 border-t border-gray-800/50 backdrop-blur-sm">
            
            <button 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <span className="text-[10px] md:text-xs font-mono text-gray-400 tracking-[0.2em] uppercase">
                Scroll
              </span>
              <div className="w-6 md:w-8 h-6 md:h-8 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all duration-300">
                <ArrowDown className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 animate-bounce" size={12} />
              </div>
            </button>

            <div className="hidden md:block">
              <span className="text-xs font-mono text-gray-400 tracking-[0.3em] uppercase">
                2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
