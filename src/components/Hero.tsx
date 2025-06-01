
import { heroContent } from "@/content/hero";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-start px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Enhanced background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-full transform translate-x-1/2 -translate-y-1/3 opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-20 blur-2xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-500 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gray-300 rounded-full opacity-20 animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left content - enhanced with better animations */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-20">
              <div className="text-xs font-departure text-gray-400 mb-8 tracking-[0.3em] uppercase opacity-0 animate-fade-in">
                {heroContent.sectionNumber}
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[14rem] font-extralight text-gray-900 leading-[0.8] tracking-tight font-cooper opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                {heroContent.name.first}
                <br />
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900">{heroContent.name.last}</span>
              </h1>
              
              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mt-8 ml-8 lg:ml-24 opacity-0 animate-fade-in transform scale-x-0 origin-left" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}></div>
            </div>
            
            <div className="max-w-lg ml-8 lg:ml-24">
              <p className="text-xl md:text-2xl text-gray-600 leading-[1.7] mb-24 font-inter font-light opacity-0 animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
                {heroContent.description}
              </p>
              
              <div className="flex flex-col space-y-10 opacity-0 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left transform hover:translate-x-2 transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center mr-8 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <ArrowUpRight className="text-white text-xl transform group-hover:rotate-45 transition-transform duration-500 relative z-10" size={24} />
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium font-inter text-xl group-hover:text-gray-700 transition-colors duration-300">{heroContent.cta.primary.text}</span>
                    <div className="text-xs font-departure text-gray-400 mt-2 tracking-[0.2em] uppercase group-hover:text-gray-500 transition-colors duration-300">{heroContent.cta.primary.label}</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center text-left ml-32 transform hover:translate-x-2 transition-all duration-500"
                >
                  <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center mr-6 group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-500 group-hover:shadow-lg">
                    <ArrowUpRight className="text-gray-600 group-hover:text-white text-sm transform group-hover:rotate-45 transition-all duration-500" size={16} />
                  </div>
                  <div>
                    <span className="text-gray-600 font-inter text-lg group-hover:text-gray-900 transition-colors duration-300">{heroContent.cta.secondary.text}</span>
                    <div className="text-xs font-departure text-gray-400 mt-1 tracking-[0.2em] uppercase group-hover:text-gray-500 transition-colors duration-300">{heroContent.cta.secondary.label}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right content - enhanced with scroll indicator */}
          <div className="col-span-12 lg:col-span-4 flex justify-end">
            <div className="hidden lg:block relative">
              <div className="writing-mode-vertical text-gray-300 font-departure text-xs tracking-[0.4em] uppercase absolute right-12 top-0 opacity-0 animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
                {heroContent.sideText}
              </div>
              <div className="w-px h-40 bg-gradient-to-b from-transparent via-gray-300 to-transparent ml-6 opacity-0 animate-fade-in" style={{animationDelay: '1.8s', animationFillMode: 'forwards'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
        <div className="flex flex-col items-center space-y-4 cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase group-hover:text-gray-600 transition-colors duration-300">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent group-hover:from-gray-600 transition-colors duration-300"></div>
          <ChevronDown className="text-gray-400 group-hover:text-gray-600 transition-all duration-300 animate-bounce" size={16} />
        </div>
      </div>
    </section>
  );
};
