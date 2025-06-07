
import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Enhanced Background Effects with Consistent Colors */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15) 0%, rgba(244, 63, 94, 0.1) 30%, rgba(234, 179, 8, 0.05) 60%, transparent 80%)`,
          }}
        />
        
        {/* Multi-layer Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-rose-900/5 to-yellow-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-rose-500/10" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className={`relative z-10 ${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding}`}>
        <div className={stylesContent.spacing.content.maxWidth}>
          <div className={stylesContent.grid.main}>
            {/* Section Header with Consistent Design */}
            <div className={stylesContent.grid.sidebar}>
              <div className={stylesContent.grid.sticky}>
                {/* Header Badge */}
                <div className={`mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-emerald-500 to-rose-500" />
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-emerald-400 animate-pulse" />
                      <span className="text-[10px] md:text-xs font-mono text-emerald-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                        {aboutContent.sectionNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className={`${stylesContent.typography.section.title} ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} leading-[0.85] mb-6`}>
                    {aboutContent.title.main}
                    <br />
                    <span className="italic text-gradient-elegant">{aboutContent.title.accent}</span>
                  </h2>
                  <div className="w-20 h-px bg-gradient-to-r from-emerald-500 to-transparent mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className={stylesContent.grid.content}>
              <div className={`${stylesContent.spacing.section.margin} pt-4`}>
                {/* Main description */}
                <div className={`${stylesContent.spacing.card.gap} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <p className={`${stylesContent.typography.hero.description} ${stylesContent.colors.primary.main} leading-[1.4] ${stylesContent.fonts.primary} font-light max-w-3xl mb-6`}>
                    {aboutContent.description.main}
                  </p>
                  
                  <p className={`${stylesContent.typography.section.description} ${stylesContent.colors.primary.light} leading-[1.6] max-w-2xl ${stylesContent.fonts.secondary} font-light`}>
                    {aboutContent.description.secondary}
                  </p>
                </div>
                
                {/* Skills - Consistent with Posts design */}
                <div className="space-y-12">
                  {/* Core Technologies */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                      {aboutContent.skills.frontend.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.frontend.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl p-4 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools & Methodologies */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                      {aboutContent.skills.tools.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.tools.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl p-4 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-rose-400 px-2 py-1 rounded-full border border-rose-500/30 bg-rose-500/10`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture & Best Practices */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                      {aboutContent.skills.architecture.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.architecture.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl p-4 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-yellow-400 px-2 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
