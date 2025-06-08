import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight, Calculator, Code, Briefcase, Rocket } from "lucide-react";
import { GradientText } from "@/components/GradientText";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Subtle Mathematical Background Pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyMDIwMjAiIHN0cm9rZS13aWR0aD0iMC4yNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIwLjUiLz48L2c+PC9zdmc+')] opacity-10 dark:opacity-5"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[60%] bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl transform -rotate-12"></div>
      </div>

      <div className="container px-4 mx-auto">
        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
            
            {/* Professional Badge */}
            <div className={`mb-6 md:mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center space-x-3 bg-blue-50/10 dark:bg-blue-900/10 border border-blue-200/20 dark:border-blue-500/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-sm">
                <Code className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                <span className="text-[10px] md:text-xs font-mono text-blue-400 tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium">
                  Developer & Entrepreneur
                </span>
              </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16">
              
              {/* Left Column - Optimized Typography */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                
                {/* Name Typography */}
                <div className={`space-y-1 md:space-y-2 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h1 className="flex flex-col space-y-0 md:space-y-2">
                    <span className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <GradientText gradient="from-gray-900 dark:from-white via-blue-400 dark:via-blue-200 to-blue-500 dark:to-blue-300">
                        {heroContent.name.first}
                      </GradientText>
                    </span>
                    <span className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-600 dark:text-gray-300">
                      {heroContent.name.last}
                    </span>
                  </h1>
                  
                  {/* Professional Title */}
                  <p className="font-space-grotesk text-sm md:text-base text-gray-600 dark:text-gray-400 font-light tracking-wide mt-2 md:mt-3">
                    Software Developer with a Mathematics Background
                  </p>
                </div>

                {/* Personal Description */}
                <div className={`max-w-2xl lg:max-w-3xl ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <p className="font-space-grotesk text-sm md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Combining mathematical precision with programming creativity. Currently working at a tech company while developing my own entrepreneurial projects.
                  </p>
                </div>
                
                {/* Key Attributes */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-4 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400">
                      <Calculator size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Math Graduate</h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Analytical approach to problem solving</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Industry Professional</h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Working at a leading tech company</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-500 dark:text-pink-400">
                      <Rocket size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Entrepreneur</h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Building innovative side projects</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className={`pt-4 md:pt-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
                    <button 
                      onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group relative inline-flex items-center justify-center space-x-2 md:space-x-3 bg-blue-600 dark:bg-blue-600 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 transform hover:translate-y-[-2px]"
                    >
                      <span className="font-space-grotesk font-medium tracking-wide text-sm md:text-base">
                        {heroContent.cta.primary.text}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group inline-flex items-center justify-center space-x-2 md:space-x-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-5 md:px-8 py-2.5 md:py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
                    >
                      <span className="font-space-grotesk font-medium tracking-wide text-sm md:text-base">
                        {heroContent.cta.secondary.text}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Experience Cards */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6 mt-4 lg:mt-0">
                {/* Professional Timeline */}
                <div className={`relative border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-r-xl"></div>
                  
                  <h3 className="font-playfair text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-1">Professional Journey</h3>
                  
                  <div className="space-y-3 mt-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-500 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-space-grotesk text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">Mathematics Degree</h4>
                        <p className="font-space-grotesk text-xs md:text-sm text-gray-600 dark:text-gray-400">Built strong foundations in analytical thinking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 dark:border-purple-500 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-space-grotesk text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">Software Development</h4>
                        <p className="font-space-grotesk text-xs md:text-sm text-gray-600 dark:text-gray-400">Working at a tech company developing innovative solutions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full bg-pink-100 dark:bg-pink-900/30 border-2 border-pink-500 dark:border-pink-500 flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-space-grotesk text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">Entrepreneurship</h4>
                        <p className="font-space-grotesk text-xs md:text-sm text-gray-600 dark:text-gray-400">Building side projects and bringing ideas to life</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Stats */}
                <div className={`grid grid-cols-2 gap-3 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  <div className="group border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                    <div className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      <GradientText gradient="from-blue-400 to-purple-400">4+</GradientText>
                    </div>
                    <div className="font-space-grotesk text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Years Experience
                    </div>
                  </div>
                  
                  <div className="group border border-gray-200 dark:border-gray-800 rounded-xl p-4 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                    <div className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      <GradientText gradient="from-purple-400 to-pink-400">20+</GradientText>
                    </div>
                    <div className="font-space-grotesk text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-4 md:bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center justify-between py-3 md:py-6 border-t border-gray-200 dark:border-gray-800/50 backdrop-blur-sm">
              <button 
                className="flex items-center space-x-2 cursor-pointer group" 
                onClick={() => document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth'
                })}
              >
                <span className="font-space-grotesk text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                  Explore More
                </span>
                <div className="w-6 h-6 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-300">
                  <ArrowDown className="text-gray-600 dark:text-gray-400 group-hover:text-blue-400 transition-colors duration-300 animate-bounce" size={12} />
                </div>
              </button>

              <div>
                <span className="font-space-grotesk text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                  2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
