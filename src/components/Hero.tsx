
import { heroContent } from "@/content/hero";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start px-6 pt-20 relative overflow-hidden bg-white">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full transform translate-x-1/2 -translate-y-1/3 opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gray-100 rounded-full opacity-30"></div>
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left content - expanded to take more space */}
          <div className="col-span-12 lg:col-span-10">
            <div className="mb-16">
              <div className="text-xs font-departure text-gray-400 mb-6 tracking-[0.2em] uppercase">
                {heroContent.sectionNumber}
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-light text-gray-900 leading-[0.85] tracking-tight font-cooper">
                {heroContent.name.first}
                <br />
                <span className="font-normal italic text-gray-600">{heroContent.name.last}</span>
              </h1>
              
              <div className="w-24 h-1 bg-gray-900 mt-6 ml-8 lg:ml-16"></div>
            </div>
            
            <div className="max-w-2xl ml-8 lg:ml-16">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-16 font-inter font-light">
                {heroContent.description}
              </p>
              
              <div className="flex flex-col space-y-8">
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left transform hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mr-6 group-hover:bg-gray-700 transition-colors duration-300">
                    <ArrowUpRight className="text-white" size={20} />
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium font-inter text-lg">{heroContent.cta.primary.text}</span>
                    <div className="text-xs font-departure text-gray-400 mt-1 tracking-[0.15em] uppercase">{heroContent.cta.primary.label}</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left ml-24 transform hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mr-4 group-hover:border-gray-900 transition-colors duration-300">
                    <ArrowUpRight className="text-gray-600" size={16} />
                  </div>
                  <div>
                    <span className="text-gray-600 font-inter">{heroContent.cta.secondary.text}</span>
                    <div className="text-xs font-departure text-gray-400 mt-1 tracking-[0.15em] uppercase">{heroContent.cta.secondary.label}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right content - reduced to minimal space */}
          <div className="col-span-12 lg:col-span-2 flex justify-end">
            <div className="hidden lg:block relative">
              <div className="writing-mode-vertical text-gray-300 font-departure text-xs tracking-[0.3em] uppercase absolute right-4 top-0">
                {heroContent.sideText}
              </div>
              <div className="w-px h-32 bg-gray-200 ml-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-departure text-gray-400 tracking-[0.15em] uppercase">SCROLL</span>
          <div className="w-px h-8 bg-gray-300"></div>
          <ChevronDown className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={16} />
        </div>
      </div>
    </section>
  );
};
