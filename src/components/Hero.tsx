
import { heroContent } from "@/content/hero";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative bg-white">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side - Main content */}
          <div className="col-span-12 lg:col-span-8 space-y-12">
            {/* Section indicator */}
            <div className="flex items-center space-x-4 text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">
              <div className="w-8 h-px bg-gray-300"></div>
              <span>{heroContent.sectionNumber}</span>
            </div>
            
            {/* Main title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-cooper font-light text-gray-900 leading-[0.8] tracking-tighter">
                {heroContent.name.first}
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-cooper font-light italic text-gray-500 leading-[0.8] tracking-tight ml-8 md:ml-16">
                {heroContent.name.last}
              </h1>
            </div>
            
            {/* Description */}
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-inter font-light">
                {heroContent.description}
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-8">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-4 hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                  <ArrowUpRight className="text-white" size={18} />
                </div>
                <div className="text-left">
                  <span className="text-gray-900 font-medium font-inter text-lg block">{heroContent.cta.primary.text}</span>
                  <span className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">{heroContent.cta.primary.label}</span>
                </div>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center space-x-4 hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
                  <ArrowUpRight className="text-gray-600" size={16} />
                </div>
                <div className="text-left">
                  <span className="text-gray-700 font-inter block group-hover:text-gray-900 transition-colors duration-300">{heroContent.cta.secondary.text}</span>
                  <span className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">{heroContent.cta.secondary.label}</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Right side - Minimal accent */}
          <div className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 border border-gray-200 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase mb-2">2024</div>
                  <div className="w-8 h-px bg-gray-300 mx-auto"></div>
                  <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase mt-2">Portfolio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          className="flex flex-col items-center space-y-3 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors duration-300">
            <ArrowDown className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={12} />
          </div>
        </button>
      </div>
    </section>
  );
};
