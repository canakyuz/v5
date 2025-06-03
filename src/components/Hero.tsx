
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight } from "lucide-react";

export const Hero = () => {
  const { fonts, colors, typography, spacing, animations } = stylesContent;
  
  return (
    <section id="hero" className={`relative min-h-screen ${colors.background.main} overflow-hidden`}>
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} 
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className={`${spacing.content.maxWidth} px-8 lg:px-12 w-full`}>
          
          {/* Header Badge */}
          <div className={`mb-16 ${animations.fadeIn}`}>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-px bg-gray-900" />
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.main} tracking-[0.4em] uppercase font-medium`}>
                Software Developer
              </span>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Name */}
              <div className={`space-y-4 ${animations.fadeIn}`}>
                <h1 className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] tracking-tight`}>
                  {heroContent.name.first}
                </h1>
                <h1 className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl ${fonts.primary} font-light ${colors.primary.light} leading-[0.85] tracking-tight ml-4 lg:ml-8`}>
                  {heroContent.name.last}
                </h1>
              </div>

              {/* Description */}
              <div className={`${animations.fadeIn} max-w-2xl`}>
                <p className={`text-lg md:text-xl lg:text-2xl ${colors.primary.accent} leading-[1.5] ${fonts.secondary} font-light`}>
                  {heroContent.description}
                </p>
              </div>

              {/* CTA */}
              <div className={`pt-8 ${animations.fadeIn}`}>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                    behavior: 'smooth'
                  })} 
                  className={`group inline-flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 ${animations.transition.default} hover:bg-gray-800`}
                >
                  <span className={`${fonts.secondary} font-medium tracking-wide`}>
                    {heroContent.cta.primary.text}
                  </span>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 ${animations.transition.default}`} />
                </button>
              </div>
            </div>

            {/* Right Column - Stats & Contact */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-16">
              
              {/* Professional Stats */}
              <div className={`space-y-12 text-right ${animations.fadeIn}`}>
                <div>
                  <div className={`text-5xl lg:text-6xl ${fonts.primary} font-light ${colors.primary.main} mb-2`}>
                    4+
                  </div>
                  <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                    Years Experience
                  </div>
                </div>
                
                <div>
                  <div className={`text-5xl lg:text-6xl ${fonts.primary} font-light ${colors.primary.main} mb-2`}>
                    20+
                  </div>
                  <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Contact Link */}
              <div className={`text-right ${animations.fadeIn}`}>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })} 
                  className={`group inline-flex items-center space-x-3 ${colors.primary.light} ${animations.hover.color} ${animations.transition.colors} text-sm`}
                >
                  <span className={`${fonts.secondary} tracking-wide`}>
                    {heroContent.cta.secondary.text}
                  </span>
                  <div className={`w-8 h-8 border ${stylesContent.colors.border.dark} flex items-center justify-center group-hover:border-gray-900 ${animations.transition.colors}`}>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className={`${spacing.content.maxWidth} px-8 lg:px-12`}>
          <div className="flex items-center justify-between py-8 border-t border-gray-100">
            
            {/* Scroll Indicator */}
            <button 
              className="flex items-center space-x-3 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                Scroll
              </span>
              <div className={`w-6 h-6 ${stylesContent.colors.border.dark} flex items-center justify-center group-hover:border-gray-600 ${animations.transition.colors}`}>
                <ArrowDown className={`${colors.primary.lighter} group-hover:text-gray-600 ${animations.transition.colors}`} size={12} />
              </div>
            </button>

            {/* Year */}
            <div className="hidden md:block">
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
