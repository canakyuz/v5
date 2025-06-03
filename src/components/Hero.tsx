
import { heroContent } from "@/content/hero";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 h-full">
          
          {/* Content Grid */}
          <div className="min-h-screen flex items-center py-20">
            <div className="w-full">
              
              {/* Section Badge */}
              <div className="flex items-center space-x-4 mb-16 animate-fade-in">
                <div className="w-16 h-px bg-gray-300" />
                <span className="text-xs font-departure text-gray-400 tracking-[0.3em] uppercase">
                  {heroContent.sectionNumber}
                </span>
              </div>

              {/* Hero Title */}
              <div className="mb-20 animate-fade-in">
                <h1 className="text-6xl md:text-8xl lg:text-[8rem] xl:text-[11rem] font-cooper font-light text-gray-900 leading-[0.75] tracking-tighter mb-6">
                  {heroContent.name.first}
                </h1>
                <div className="flex items-end">
                  <h1 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-cooper font-light italic text-gray-400 leading-[0.75] tracking-tight">
                    {heroContent.name.last}
                  </h1>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                
                {/* Left: Description and Actions */}
                <div className="space-y-12">
                  
                  {/* Description */}
                  <div className="animate-fade-in">
                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-[1.4] font-inter font-light max-w-lg">
                      {heroContent.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in">
                    <button 
                      onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-base font-medium font-inter">{heroContent.cta.primary.text}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-300">
                        <Play className="w-3 h-3" />
                      </div>
                      <span className="text-base font-inter">{heroContent.cta.secondary.text}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex flex-col justify-center space-y-8 lg:pl-12">
                  
                  {/* Stats Cards */}
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-right">
                      <div className="text-4xl font-cooper font-light text-gray-900 mb-1">4+</div>
                      <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">
                        Years Experience
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-4xl font-cooper font-light text-gray-900 mb-1">20+</div>
                      <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="flex justify-end animate-fade-in">
                    <div className="w-20 h-20 border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer group">
                      <div className="text-[10px] font-departure text-gray-400 text-center tracking-[0.2em] uppercase group-hover:text-gray-600 transition-colors leading-tight">
                        Frontend<br />Engineer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Elements */}
      <div className="absolute bottom-8 left-8 animate-fade-in">
        <button 
          className="flex items-center space-x-3 cursor-pointer group" 
          onClick={() => document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })}
        >
          <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">Scroll</div>
          <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors">
            <ArrowDown className="text-gray-400 group-hover:text-gray-600 transition-colors" size={14} />
          </div>
        </button>
      </div>

      {/* Vertical Year */}
      <div className="absolute bottom-8 right-8 animate-fade-in hidden lg:block">
        <div className="writing-mode-vertical text-5xl font-cooper font-light text-gray-200 tracking-widest">
          2024
        </div>
      </div>

    </section>
  );
};
