
import { heroContent } from "@/content/hero";
import { stylesContent } from "@/content/styles";
import { ArrowDown, ArrowRight } from "lucide-react";

export const Hero = () => {
  const { fonts, colors, typography, spacing, animations } = stylesContent;
  
  return (
    <section id="hero" className={`relative min-h-screen ${colors.background.main} flex items-center`}>
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className={`${spacing.content.maxWidth} ${spacing.content.padding}`}>
          
          {/* Header Badge - Minimal */}
          <div className={`mb-20 ${animations.fadeIn}`}>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-px bg-gray-900" />
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.5em] uppercase font-medium`}>
                {heroContent.sectionNumber}
              </span>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Name - Daha büyük ve etkileyici */}
              <div className={`space-y-6 ${animations.fadeIn}`}>
                <h1 className={`${typography.hero.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] tracking-tight`}>
                  {heroContent.name.first}
                </h1>
                <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light ${colors.primary.light} leading-[0.85] tracking-tight ml-6 lg:ml-12`}>
                  {heroContent.name.last}
                </h1>
              </div>

              {/* Description */}
              <div className={`${animations.fadeIn} max-w-3xl`}>
                <p className={`${typography.hero.description} ${colors.primary.accent} leading-[1.6] ${fonts.secondary} font-light`}>
                  {heroContent.description}
                </p>
              </div>

              {/* CTA */}
              <div className={`pt-12 ${animations.fadeIn}`}>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                    behavior: 'smooth'
                  })} 
                  className={`group inline-flex items-center space-x-4 ${stylesContent.buttons.primary}`}
                >
                  <span className={`${fonts.secondary} font-medium tracking-wide text-lg`}>
                    {heroContent.cta.primary.text}
                  </span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 ${animations.transition.default}`} />
                </button>
              </div>
            </div>

            {/* Right Column - Minimal stats */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-20">
              
              {/* Professional Stats - Daha minimal */}
              <div className={`space-y-16 text-right ${animations.fadeIn}`}>
                <div>
                  <div className={`text-4xl lg:text-5xl ${fonts.primary} font-light ${colors.primary.main} mb-3`}>
                    4+
                  </div>
                  <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.4em] uppercase`}>
                    Years Experience
                  </div>
                </div>
                
                <div>
                  <div className={`text-4xl lg:text-5xl ${fonts.primary} font-light ${colors.primary.main} mb-3`}>
                    20+
                  </div>
                  <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.4em] uppercase`}>
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Contact Link - Daha minimal */}
              <div className={`text-right ${animations.fadeIn}`}>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  })} 
                  className={`group inline-flex items-center space-x-4 ${colors.primary.light} ${animations.hover.color} ${animations.transition.colors}`}
                >
                  <span className={`${fonts.secondary} tracking-wide`}>
                    {heroContent.cta.secondary.text}
                  </span>
                  <div className={`${stylesContent.buttons.icon}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Daha minimal */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className={`${spacing.content.maxWidth} ${spacing.content.padding}`}>
          <div className="flex items-center justify-between py-8 border-t border-gray-100">
            
            {/* Scroll Indicator */}
            <button 
              className="flex items-center space-x-4 cursor-pointer group" 
              onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}
            >
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.3em] uppercase`}>
                Scroll
              </span>
              <div className={`w-8 h-8 border border-gray-200 flex items-center justify-center group-hover:border-gray-600 ${animations.transition.colors}`}>
                <ArrowDown className={`${colors.primary.lighter} group-hover:text-gray-600 ${animations.transition.colors}`} size={14} />
              </div>
            </button>

            {/* Year */}
            <div className="hidden md:block">
              <span className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} tracking-[0.4em] uppercase`}>
                2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
