
import { heroContent } from "@/content/hero";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-white">
      {/* Simplified background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gray-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gray-50/80 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Section indicator */}
          <div className="flex items-center justify-center space-x-3 text-xs font-departure text-gray-500 tracking-wider uppercase">
            <div className="w-6 h-px bg-gray-300"></div>
            <span>{heroContent.sectionNumber}</span>
            <div className="w-6 h-px bg-gray-300"></div>
          </div>
          
          {/* Main title */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 leading-[0.85] tracking-tighter font-cooper">
              {heroContent.name.first}
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light italic text-gray-600 leading-[0.85] tracking-tight font-cooper">
              {heroContent.name.last}
            </h1>
          </div>
          
          {/* Accent line */}
          <div className="w-24 h-px bg-gray-900 mx-auto"></div>
          
          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-inter font-light">
              {heroContent.description}
            </p>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                <ArrowUpRight className="text-white" size={20} />
              </div>
              <div className="text-left">
                <span className="text-gray-900 font-medium font-inter text-lg block">{heroContent.cta.primary.text}</span>
                <span className="text-xs font-departure text-gray-500 tracking-wider uppercase">{heroContent.cta.primary.label}</span>
              </div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-300">
                <ArrowUpRight className="text-gray-600 group-hover:text-gray-900" size={18} />
              </div>
              <div className="text-left">
                <span className="text-gray-700 font-inter block group-hover:text-gray-900 transition-colors duration-300">{heroContent.cta.secondary.text}</span>
                <span className="text-xs font-departure text-gray-500 tracking-wider uppercase">{heroContent.cta.secondary.label}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Side text */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="writing-mode-vertical text-gray-400 font-departure text-xs tracking-widest uppercase">
          {heroContent.sideText}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          className="flex flex-col items-center space-y-2 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-departure text-gray-500 tracking-wider uppercase group-hover:text-gray-700 transition-colors duration-300">SCROLL</span>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
            <ChevronDown className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={14} />
          </div>
        </button>
      </div>
    </section>
  );
};
