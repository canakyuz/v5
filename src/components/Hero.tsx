
import { heroContent } from "@/content/hero";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-gray-100/40 to-gray-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-gradient-to-tr from-gray-50/60 to-gray-100/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gray-50/40 rounded-full transform -translate-x-1/2 blur-xl"></div>
      </div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center space-y-12">
          {/* Section indicator */}
          <div className="inline-flex items-center space-x-4 text-xs font-departure text-gray-400 tracking-[0.3em] uppercase">
            <div className="w-8 h-px bg-gray-300"></div>
            <span>{heroContent.sectionNumber}</span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          
          {/* Main title - more dramatic */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl lg:text-[14rem] font-light text-gray-900 leading-[0.8] tracking-tighter font-cooper">
              {heroContent.name.first}
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-normal italic text-gray-500 leading-[0.8] tracking-tight font-cooper transform -translate-y-4">
              {heroContent.name.last}
            </h1>
          </div>
          
          {/* Centered accent line */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
          </div>
          
          {/* Description - centered and larger */}
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 leading-[1.3] font-inter font-light text-center">
              {heroContent.description}
            </p>
          </div>
          
          {/* CTA buttons - horizontal layout */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 pt-8">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-all duration-500 group-hover:shadow-2xl">
                <ArrowUpRight className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
              </div>
              <div className="text-left">
                <span className="text-gray-900 font-medium font-inter text-xl block">{heroContent.cta.primary.text}</span>
                <div className="text-xs font-departure text-gray-400 tracking-[0.15em] uppercase">{heroContent.cta.primary.label}</div>
              </div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-4 transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-300">
                <ArrowUpRight className="text-gray-600 group-hover:text-gray-900 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
              </div>
              <div className="text-left">
                <span className="text-gray-600 font-inter text-lg block group-hover:text-gray-900 transition-colors duration-300">{heroContent.cta.secondary.text}</span>
                <div className="text-xs font-departure text-gray-400 tracking-[0.15em] uppercase">{heroContent.cta.secondary.label}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Side text - positioned differently */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="writing-mode-vertical text-gray-300 font-departure text-xs tracking-[0.4em] uppercase">
          {heroContent.sideText}
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-4 cursor-pointer group animate-bounce" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase group-hover:text-gray-600 transition-colors duration-300">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
          <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-50 transition-all duration-300">
            <ChevronDown className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};
