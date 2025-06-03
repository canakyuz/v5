
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const { fonts, colors, typography, spacing, animations, buttons } = stylesContent;
  
  return (
    <section id="hero" className={`relative min-h-screen ${colors.background.main} overflow-hidden`}>
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
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
        <div className={`${spacing.content.maxWidth} px-6 h-full`}>
          
          {/* Content Grid */}
          <div className="min-h-screen flex items-center py-16">
            <div className="w-full">
              
              {/* Top Section - Badge and Navigation */}
              <div className={`flex items-center justify-between mb-20 ${animations.fadeIn}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-px bg-gray-300" />
                  <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                    01 — Software Developer
                  </span>
                </div>
                
                <div className="hidden md:block">
                  <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                    {heroContent.sideText}
                  </span>
                </div>
              </div>

              {/* Main Hero Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                
                {/* Left Column - Name and Description */}
                <div className="lg:col-span-8 space-y-16">
                  
                  {/* Hero Title */}
                  <div className={`${animations.fadeIn}`}>
                    <h1 className={`${typography.hero.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] tracking-tighter mb-6`}>
                      {heroContent.name.first}
                    </h1>
                    <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light italic ${colors.primary.lighter} leading-[0.85] tracking-tight ml-8 lg:ml-20`}>
                      {heroContent.name.last}
                    </h1>
                  </div>

                  {/* Description */}
                  <div className={`${animations.fadeIn} max-w-3xl`}>
                    <p className={`${typography.hero.description} ${colors.primary.light} leading-[1.6] ${fonts.secondary} font-light`}>
                      {heroContent.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-8 ${animations.fadeIn}`}>
                    <button 
                      onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className={`group relative overflow-hidden ${buttons.primary} text-sm`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`font-medium ${fonts.secondary}`}>{heroContent.cta.primary.text}</span>
                        <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 ${animations.transition.default}`} />
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className={`group flex items-center space-x-3 ${colors.primary.light} ${animations.hover.color} ${animations.transition.colors}`}
                    >
                      <div className={`w-12 h-12 border ${stylesContent.colors.border.dark} rounded-full flex items-center justify-center group-hover:border-gray-900 ${animations.transition.colors}`}>
                        <Play className="w-4 h-4" />
                      </div>
                      <span className={`text-sm ${fonts.secondary}`}>{heroContent.cta.secondary.text}</span>
                    </button>
                  </div>
                </div>

                {/* Right Column - Stats and Visual Elements */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-16">
                  
                  {/* Stats Section */}
                  <div className={`space-y-12 ${animations.fadeIn}`}>
                    <div className="text-center lg:text-right">
                      <div className={`text-6xl lg:text-7xl ${fonts.primary} font-light ${colors.primary.main} mb-3`}>4+</div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.25em] uppercase`}>
                        Years Experience
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <div className={`text-6xl lg:text-7xl ${fonts.primary} font-light ${colors.primary.main} mb-3`}>20+</div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.25em] uppercase`}>
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`flex justify-center lg:justify-end ${animations.fadeIn}`}>
                    <div className="relative">
                      <div className={`w-28 h-28 ${stylesContent.colors.border.medium} rounded-full flex items-center justify-center hover:border-gray-400 ${animations.transition.colors} cursor-pointer group`}>
                        <div className={`text-[10px] ${fonts.mono} ${colors.primary.lighter} text-center tracking-[0.15em] uppercase group-hover:text-gray-600 ${animations.transition.colors} leading-tight`}>
                          Software<br />Developer
                        </div>
                      </div>
                      {/* Floating accent dot */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className={`${spacing.content.maxWidth} px-6`}>
          <div className="flex items-center justify-between py-8">
            
            {/* Scroll Indicator */}
            <button 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>Scroll</div>
              <div className={`w-8 h-8 ${stylesContent.colors.border.dark} rounded-full flex items-center justify-center group-hover:border-gray-600 ${animations.transition.colors}`}>
                <ArrowDown className={`${colors.primary.lighter} group-hover:text-gray-600 ${animations.transition.colors}`} size={14} />
              </div>
            </button>

            {/* Year Badge */}
            <div className="hidden lg:block">
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase border ${stylesContent.colors.border.medium} px-4 py-2 rounded-full`}>
                Portfolio 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
