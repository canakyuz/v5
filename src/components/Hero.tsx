
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight, Play, Code, Sparkles, Zap } from "lucide-react";

export const Hero = () => {
  const { fonts, colors, typography, spacing, animations, buttons } = stylesContent;
  
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-gray-900 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-gray-600 rotate-45 animate-bounce delay-700"></div>
        <div className="absolute bottom-48 left-48 w-2 h-8 bg-gray-400 animate-bounce delay-1200"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
              backgroundSize: '80px 80px'
            }} 
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        <div className={`${spacing.content.maxWidth} px-6 h-full`}>
          
          {/* Content Grid */}
          <div className="min-h-screen flex items-center py-16">
            <div className="w-full">
              
              {/* Top Section - Enhanced Badge */}
              <div className={`flex items-center justify-between mb-16 ${animations.fadeIn}`}>
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-16 h-px bg-gradient-to-r from-gray-900 to-gray-400"></div>
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <span className={`relative ${typography.section.small} ${fonts.mono} bg-white border border-gray-200 px-4 py-2 rounded-full tracking-[0.3em] uppercase text-gray-900 font-semibold shadow-sm`}>
                      {heroContent.sectionNumber}
                    </span>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                    {heroContent.sideText}
                  </span>
                </div>
              </div>

              {/* Main Hero Content - Modern Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                
                {/* Left Column - Enhanced Typography */}
                <div className="lg:col-span-7 space-y-12">
                  
                  {/* Hero Title with Modern Effects */}
                  <div className={`${animations.fadeIn} relative`}>
                    <div className="absolute -top-8 -left-4 text-8xl font-extralight text-gray-100 select-none -z-10">01</div>
                    <h1 className={`${typography.hero.title} ${fonts.primary} font-extralight ${colors.primary.main} leading-[0.8] tracking-tighter mb-6 relative`}>
                      <span className="relative inline-block">
                        {heroContent.name.first}
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-transparent"></div>
                      </span>
                    </h1>
                    <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-extralight italic ${colors.primary.light} leading-[0.8] tracking-tight ml-8 lg:ml-20 relative`}>
                      <span className="relative">
                        {heroContent.name.last}
                        <Sparkles className="absolute -top-6 -right-8 w-6 h-6 text-gray-400 animate-pulse" />
                      </span>
                    </h1>
                  </div>

                  {/* Enhanced Description */}
                  <div className={`${animations.fadeIn} max-w-2xl relative`}>
                    <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-gray-900 to-transparent opacity-20"></div>
                    <p className={`${typography.hero.description} ${colors.primary.light} leading-[1.6] ${fonts.secondary} font-light pl-8`}>
                      {heroContent.description}
                    </p>
                  </div>

                  {/* Modern Action Buttons */}
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 ${animations.fadeIn}`}>
                    <button 
                      onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center space-x-3">
                        <span className={`font-semibold ${fonts.secondary} text-lg`}>{heroContent.cta.primary.text}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className="group flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <div className="relative w-14 h-14 border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                        <Play className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                        <div className="absolute inset-0 rounded-full bg-gray-900 scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                      </div>
                      <div className="space-y-1">
                        <span className={`text-lg font-medium ${fonts.secondary} block`}>{heroContent.cta.secondary.text}</span>
                        <span className={`text-sm ${fonts.mono} text-gray-400 uppercase tracking-wider`}>Let's talk</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Column - Interactive Elements */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-16">
                  
                  {/* Enhanced Stats with Icons */}
                  <div className={`space-y-12 ${animations.fadeIn}`}>
                    <div className="group text-center lg:text-right cursor-pointer">
                      <div className="relative inline-block">
                        <div className={`text-7xl lg:text-8xl ${fonts.primary} font-extralight ${colors.primary.main} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          4+
                        </div>
                        <Code className="absolute -top-4 -right-8 w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                      </div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase font-semibold`}>
                        Years Experience
                      </div>
                    </div>
                    
                    <div className="group text-center lg:text-right cursor-pointer">
                      <div className="relative inline-block">
                        <div className={`text-7xl lg:text-8xl ${fonts.primary} font-extralight ${colors.primary.main} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          20+
                        </div>
                        <Zap className="absolute -top-4 -right-8 w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                      </div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase font-semibold`}>
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Modern Decorative Element */}
                  <div className={`flex justify-center lg:justify-end ${animations.fadeIn}`}>
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative w-32 h-32 border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-400 transition-all duration-500 group-hover:rotate-180 bg-white/80 backdrop-blur-sm">
                        <div className={`text-center leading-tight`}>
                          <div className={`text-xs ${fonts.mono} ${colors.primary.main} tracking-[0.2em] uppercase font-bold`}>
                            Frontend
                          </div>
                          <div className={`text-xs ${fonts.mono} ${colors.primary.light} tracking-[0.2em] uppercase`}>
                            Engineer
                          </div>
                        </div>
                      </div>
                      {/* Floating accent elements */}
                      <div className="absolute -top-3 -right-3 w-4 h-4 bg-gray-900 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gray-600 rounded-full group-hover:scale-150 transition-transform duration-300 delay-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className={`${spacing.content.maxWidth} px-6`}>
          <div className="flex items-center justify-between py-8">
            
            {/* Enhanced Scroll Indicator */}
            <button 
              className="flex items-center space-x-4 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <div className="relative">
                <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.light} tracking-[0.3em] uppercase font-semibold group-hover:text-gray-900 transition-colors duration-300`}>
                  Scroll to explore
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="relative w-10 h-10 border-2 border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-all duration-300 group-hover:bg-gray-900">
                <ArrowDown className={`${colors.primary.light} group-hover:text-white transition-colors duration-300 animate-bounce`} size={16} />
              </div>
            </button>

            {/* Enhanced Year Badge */}
            <div className="hidden lg:block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 rounded-full blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className={`relative ${typography.section.small} ${fonts.mono} ${colors.primary.light} tracking-[0.3em] uppercase border-2 border-gray-200 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm font-semibold hover:border-gray-400 transition-colors duration-300`}>
                  Portfolio 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
