
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const { fonts, colors, typography, spacing, animations, buttons } = stylesContent;
  
  return (
    <section id="hero" className={`relative min-h-screen ${colors.background.main} overflow-hidden`}>
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
        <div className={`${spacing.content.maxWidth} px-6 h-full`}>
          
          {/* Content Grid */}
          <div className="min-h-screen flex items-center py-20">
            <div className="w-full">
              
              {/* Section Badge */}
              <div className={`flex items-center space-x-4 mb-16 ${animations.fadeIn}`}>
                <div className="w-16 h-px bg-gray-300" />
                <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                  {heroContent.sectionNumber}
                </span>
              </div>

              {/* Hero Title */}
              <div className={`mb-20 ${animations.fadeIn}`}>
                <h1 className={`${typography.hero.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.75] tracking-tighter mb-6`}>
                  {heroContent.name.first}
                </h1>
                <div className="flex items-end">
                  <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light italic ${colors.primary.lighter} leading-[0.75] tracking-tight`}>
                    {heroContent.name.last}
                  </h1>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                
                {/* Left: Description and Actions */}
                <div className="space-y-12">
                  
                  {/* Description */}
                  <div className={animations.fadeIn}>
                    <p className={`${typography.hero.description} ${colors.primary.light} leading-[1.4] ${fonts.secondary} font-light max-w-lg`}>
                      {heroContent.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 ${animations.fadeIn}`}>
                    <button 
                      onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className={`group relative overflow-hidden ${buttons.primary}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`text-base font-medium ${fonts.secondary}`}>{heroContent.cta.primary.text}</span>
                        <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 ${animations.transition.default}`} />
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                      })} 
                      className={`group flex items-center space-x-3 ${colors.primary.light} ${animations.hover.color} ${animations.transition.colors}`}
                    >
                      <div className={`w-10 h-10 ${stylesContent.colors.border.dark} rounded-full flex items-center justify-center group-hover:border-gray-900 ${animations.transition.colors}`}>
                        <Play className="w-3 h-3" />
                      </div>
                      <span className={`text-base ${fonts.secondary}`}>{heroContent.cta.secondary.text}</span>
                    </button>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex flex-col justify-center space-y-8 lg:pl-12">
                  
                  {/* Stats Cards */}
                  <div className={`space-y-6 ${animations.fadeIn}`}>
                    <div className="text-right">
                      <div className={`text-4xl ${fonts.primary} font-light ${colors.primary.main} mb-1`}>4+</div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                        Years Experience
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-4xl ${fonts.primary} font-light ${colors.primary.main} mb-1`}>20+</div>
                      <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className={`flex justify-end ${animations.fadeIn}`}>
                    <div className={`w-20 h-20 ${stylesContent.colors.border.medium} rounded-full flex items-center justify-center hover:border-gray-400 ${animations.transition.colors} cursor-pointer group`}>
                      <div className={`text-[10px] ${fonts.mono} ${colors.primary.lighter} text-center tracking-[0.2em] uppercase group-hover:text-gray-600 ${animations.transition.colors} leading-tight`}>
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
      <div className={`absolute bottom-8 left-8 ${animations.fadeIn}`}>
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
      </div>

      {/* Vertical Year */}
      <div className={`absolute bottom-8 right-8 ${animations.fadeIn} hidden lg:block`}>
        <div className={`writing-mode-vertical text-5xl ${fonts.primary} font-light text-gray-200 tracking-widest`}>
          2024
        </div>
      </div>

    </section>
  );
};
