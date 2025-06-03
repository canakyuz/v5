
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { GradientText } from "./GradientText";
import { FloatingElements } from "./FloatingElements";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatedBackground />
        <FloatingElements />
        
        {/* Gradient Overlays */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
          
          {/* Header Badge */}
          <div className={`mb-20 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-blue-400 tracking-[0.4em] uppercase font-medium">
                  Software Developer
                </span>
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Name with enhanced typography */}
              <div className={`space-y-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-light leading-[0.8] tracking-tighter">
                    <GradientText gradient="from-white via-blue-100 to-blue-300">
                      {heroContent.name.first}
                    </GradientText>
                  </h1>
                  <div className="absolute -top-4 -left-4 w-8 h-8 border border-blue-500/30 rounded-full animate-pulse" />
                </div>
                
                <div className="relative ml-8 lg:ml-16">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-light leading-[0.8] tracking-tighter text-gray-300">
                    {heroContent.name.last}
                  </h1>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                </div>
              </div>

              {/* Description with enhanced styling */}
              <div className={`max-w-3xl ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                    {heroContent.description}
                  </p>
                  <div className="absolute -bottom-2 left-0 w-24 h-px bg-gradient-to-r from-blue-500 to-transparent" />
                </div>
              </div>

              {/* Enhanced CTA */}
              <div className={`pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                      behavior: 'smooth'
                    })} 
                    className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 font-medium tracking-wide">
                      {heroContent.cta.primary.text}
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({
                      behavior: 'smooth'
                    })} 
                    className="group inline-flex items-center space-x-3 border border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <span className="font-medium tracking-wide">
                      {heroContent.cta.secondary.text}
                    </span>
                    <div className="w-8 h-8 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Stats */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-16">
              
              {/* Professional Stats with enhanced design */}
              <div className={`space-y-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <div className="group">
                  <div className="relative p-6 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-5xl lg:text-6xl font-light text-white mb-2">
                      <GradientText gradient="from-blue-400 to-purple-400">4+</GradientText>
                    </div>
                    <div className="text-xs font-mono text-gray-400 tracking-[0.3em] uppercase">
                      Years Experience
                    </div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                <div className="group">
                  <div className="relative p-6 border border-gray-800 rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-5xl lg:text-6xl font-light text-white mb-2">
                      <GradientText gradient="from-purple-400 to-pink-400">20+</GradientText>
                    </div>
                    <div className="text-xs font-mono text-gray-400 tracking-[0.3em] uppercase">
                      Projects Delivered
                    </div>
                    <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between py-8 border-t border-gray-800">
            
            {/* Scroll Indicator */}
            <button 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <span className="text-xs font-mono text-gray-400 tracking-[0.2em] uppercase">
                Scroll
              </span>
              <div className="w-8 h-8 border border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                <ArrowDown className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 animate-bounce" size={12} />
              </div>
            </button>

            {/* Enhanced Year */}
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
