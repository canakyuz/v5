
import { heroContent } from "@/content/hero";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center space-y-16">
          {/* Section indicator */}
          <div className="flex items-center justify-center space-x-6 text-xs font-departure text-gray-400 tracking-[0.3em] uppercase animate-fade-in">
            <div className="w-12 h-px bg-gray-300"></div>
            <span>{heroContent.sectionNumber}</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
          
          {/* Main title with dramatic spacing */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-cooper font-light text-gray-900 leading-[0.75] tracking-tighter">
              {heroContent.name.first}
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-cooper font-light italic text-gray-400 leading-[0.75] tracking-tight -mt-4">
              {heroContent.name.last}
            </h1>
          </div>
          
          {/* Large description with emphasis */}
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-2xl md:text-4xl lg:text-5xl text-gray-600 leading-relaxed font-inter font-light">
              {heroContent.description}
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 animate-fade-in">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gray-900 text-white px-12 py-6 rounded-full hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xl font-medium font-inter">{heroContent.cta.primary.text}</span>
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden border-2 border-gray-300 text-gray-700 px-12 py-6 rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xl font-inter">{heroContent.cta.secondary.text}</span>
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Creative bottom section */}
          <div className="pt-20 animate-fade-in">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-24 h-24 border border-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto hover:border-gray-400 transition-colors duration-300">
                  <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">2024</div>
                </div>
                <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">Portfolio</div>
              </div>
              
              <div className="w-px h-16 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="w-24 h-24 border border-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto hover:border-gray-400 transition-colors duration-300">
                  <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">DEV</div>
                </div>
                <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">Creative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <button 
          className="flex flex-col items-center space-y-4 cursor-pointer group"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase mb-2">Scroll</div>
          <div className="w-px h-16 bg-gray-300 group-hover:bg-gray-600 transition-colors duration-300"></div>
          <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 group-hover:bg-gray-900 transition-all duration-300">
            <ArrowDown className="text-gray-400 group-hover:text-white transition-colors duration-300" size={14} />
          </div>
        </button>
      </div>
    </section>
  );
};
