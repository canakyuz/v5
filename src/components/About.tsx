
import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 dark:from-slate-950 dark:via-gray-900 dark:to-gray-950 light:from-gray-50 light:via-white light:to-gray-100">
      <div className={`relative z-10 ${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding}`}>
        <div className={stylesContent.spacing.content.maxWidth}>
          <div className={stylesContent.grid.main}>
            {/* Section Header */}
            <div className={stylesContent.grid.sidebar}>
              <div className={stylesContent.grid.sticky}>
                {/* Header Badge */}
                <div className={`mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-400 animate-pulse" />
                      <span className="text-[10px] md:text-xs font-mono text-blue-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                        {aboutContent.sectionNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className={`${stylesContent.typography.section.title} ${stylesContent.fonts.primary} font-light text-white dark:text-white light:text-gray-900 leading-[0.85] mb-6`}>
                    {aboutContent.title.main}
                    <br />
                    <span className="italic text-gradient-elegant">{aboutContent.title.accent}</span>
                  </h2>
                  <div className="w-20 h-px bg-gradient-to-r from-blue-500 to-transparent mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className={stylesContent.grid.content}>
              <div className={`${stylesContent.spacing.section.margin} pt-4`}>
                {/* Main description */}
                <div className={`${stylesContent.spacing.card.gap} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <p className={`${stylesContent.typography.hero.description} text-white dark:text-white light:text-gray-900 leading-[1.4] ${stylesContent.fonts.primary} font-light max-w-3xl mb-6`}>
                    {aboutContent.description.main}
                  </p>
                  
                  <p className={`${stylesContent.typography.section.description} text-gray-300 dark:text-gray-300 light:text-gray-600 leading-[1.6] max-w-2xl ${stylesContent.fonts.secondary} font-light`}>
                    {aboutContent.description.secondary}
                  </p>
                </div>
                
                {/* Skills - Simplified Design */}
                <div className="space-y-12 mt-12">
                  {/* Core Technologies */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-white dark:text-white light:text-gray-900 mb-6 tracking-wide`}>
                      {aboutContent.skills.frontend.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.frontend.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/50 backdrop-blur-sm border border-gray-700/60 dark:border-gray-700/60 light:border-gray-200 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`text-white dark:text-white light:text-gray-900 ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-blue-400 px-2 py-1 rounded-full border border-blue-500/30`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools & Methodologies */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-white dark:text-white light:text-gray-900 mb-6 tracking-wide`}>
                      {aboutContent.skills.tools.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.tools.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/50 backdrop-blur-sm border border-gray-700/60 dark:border-gray-700/60 light:border-gray-200 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`text-white dark:text-white light:text-gray-900 ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-purple-400 px-2 py-1 rounded-full border border-purple-500/30`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture & Best Practices */}
                  <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
                    <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-white dark:text-white light:text-gray-900 mb-6 tracking-wide`}>
                      {aboutContent.skills.architecture.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aboutContent.skills.architecture.items.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className={`group bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/50 backdrop-blur-sm border border-gray-700/60 dark:border-gray-700/60 light:border-gray-200 rounded-xl p-4 hover:border-indigo-500/50 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                          style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`text-white dark:text-white light:text-gray-900 ${stylesContent.fonts.secondary} font-medium text-sm`}>
                              {skill.name}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} text-indigo-400 px-2 py-1 rounded-full border border-indigo-500/30`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`text-xs text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed`}>
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
