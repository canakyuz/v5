
import { heroContent } from "@/content/hero";
import { ArrowDown, ArrowUpRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-white">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-3 h-3 bg-gray-900 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-gray-300 rounded-full animate-pulse delay-700"></div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            
            {/* Left Column - Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-12 py-20">
              
              {/* Section Badge */}
              <div className="flex items-center space-x-4 animate-fade-in">
                <div className="w-12 h-px bg-gray-900"></div>
                <span className="text-xs font-departure text-gray-500 tracking-[0.3em] uppercase">
                  {heroContent.sectionNumber}
                </span>
                <Sparkles className="w-4 h-4 text-gray-400" />
              </div>

              {/* Hero Title - Bold & Dramatic */}
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-cooper font-light text-gray-900 leading-[0.8] tracking-tighter">
                  {heroContent.name.first}
                </h1>
                <div className="flex items-center space-x-8">
                  <h1 className="text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-cooper font-light italic text-gray-400 leading-[0.8] tracking-tight">
                    {heroContent.name.last}
                  </h1>
                  <div className="hidden lg:block w-24 h-px bg-gray-300 mt-8"></div>
                </div>
              </div>

              {/* Description - Prominent */}
              <div className="max-w-2xl animate-fade-in">
                <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-[1.3] font-inter font-light">
                  {heroContent.description}
                </p>
              </div>

              {/* Action Buttons - Enhanced */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 animate-fade-in">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative overflow-hidden bg-gray-900 text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium font-inter">{heroContent.cta.primary.text}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                    <Play className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-inter">{heroContent.cta.secondary.text}</span>
                </button>
              </div>

            </div>

            {/* Right Column - Vertical Text & Stats */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center space-y-16 py-20">
              
              {/* Vertical Year */}
              <div className="hidden lg:block self-end animate-fade-in">
                <div className="writing-mode-vertical text-8xl font-cooper font-light text-gray-200 tracking-widest">
                  2024
                </div>
              </div>

              {/* Stats/Info Cards */}
              <div className="space-y-8 animate-fade-in">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="text-2xl font-cooper font-light text-gray-900 mb-2">5+</div>
                  <div className="text-sm font-departure text-gray-500 tracking-[0.1em] uppercase">
                    Years Experience
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                  <div className="text-2xl font-cooper font-light text-gray-900 mb-2">50+</div>
                  <div className="text-sm font-departure text-gray-500 tracking-[0.1em] uppercase">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:flex justify-end animate-fade-in">
                <div className="w-32 h-32 border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer group">
                  <div className="text-xs font-departure text-gray-400 text-center tracking-[0.2em] uppercase group-hover:text-gray-600 transition-colors">
                    Creative<br/>Developer
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-8 animate-fade-in">
        <button 
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">Scroll</div>
            <div className="w-px h-20 bg-gray-300 group-hover:bg-gray-600 transition-colors duration-300"></div>
          </div>
          <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-900 transition-all duration-300">
            <ArrowDown className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
          </div>
        </button>
      </div>

      {/* Side Navigation Dots */}
      <div className="hidden xl:block absolute right-8 top-1/2 transform -translate-y-1/2 animate-fade-in">
        <div className="flex flex-col space-y-4">
          <button className="w-2 h-2 bg-gray-900 rounded-full"></button>
          <button className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-500 transition-colors"></button>
          <button className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-500 transition-colors"></button>
          <button className="w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-500 transition-colors"></button>
        </div>
      </div>

    </section>
  );
};
