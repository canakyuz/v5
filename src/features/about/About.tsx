import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { SectionHeader } from "@/components/SectionHeader";

export const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="section section-with-bg">
      <div className="section-container">
        <div className={`relative z-10 ${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding}`}>
          <div className={stylesContent.spacing.content.maxWidth}>
            <div className={stylesContent.grid.main}>
              {/* Section Header */}
              <SectionHeader
                sectionNumber={aboutContent.sectionNumber}
                title={{
                  main: aboutContent.title.main,
                  accent: aboutContent.title.accent
                }}
                className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              />
              
              {/* Content */}
              <div className={stylesContent.grid.content}>
                <div className={`${stylesContent.spacing.section.margin} pt-4`}>
                  {/* Main description */}
                  <div className={`${stylesContent.spacing.card.gap} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                    <p className={`${stylesContent.typography.hero.description} text-gray-900 dark:text-white leading-[1.4] ${stylesContent.fonts.primary} font-light max-w-3xl mb-6`}>
                      {aboutContent.description.main}
                    </p>
                    
                    <p className={`${stylesContent.typography.section.description} text-gray-600 dark:text-gray-300 leading-[1.6] max-w-2xl ${stylesContent.fonts.secondary} font-light`}>
                      {aboutContent.description.secondary}
                    </p>
                  </div>
                  
                  {/* Skills - Simplified Design */}
                  <div className="space-y-12 mt-12">
                    {/* Core Technologies */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                      <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-gray-900 dark:text-white mb-6 tracking-wide`}>
                        {aboutContent.skills.frontend.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aboutContent.skills.frontend.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`group relative overflow-hidden bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-xl p-4 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                          >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <div className="flex items-center justify-between mb-2 relative z-10">
                              <div className={`text-gray-900 dark:text-white ${stylesContent.fonts.secondary} font-medium text-sm group-hover:text-blue-300 transition-colors duration-300`}>
                                {skill.name}
                              </div>
                              <span className={`text-[10px] ${stylesContent.fonts.mono} text-blue-400 px-2 py-1 rounded-full border border-blue-500/30 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed relative z-10`}>
                              {skill.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tools & Methodologies */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                      <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-gray-900 dark:text-white mb-6 tracking-wide`}>
                        {aboutContent.skills.tools.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aboutContent.skills.tools.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`group relative overflow-hidden bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-xl p-4 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                          >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <div className="flex items-center justify-between mb-2 relative z-10">
                              <div className={`text-gray-900 dark:text-white ${stylesContent.fonts.secondary} font-medium text-sm group-hover:text-purple-300 transition-colors duration-300`}>
                                {skill.name}
                              </div>
                              <span className={`text-[10px] ${stylesContent.fonts.mono} text-purple-400 px-2 py-1 rounded-full border border-purple-500/30 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed relative z-10`}>
                              {skill.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture & Best Practices */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
                      <h3 className={`text-xl ${stylesContent.fonts.primary} font-light text-gray-900 dark:text-white mb-6 tracking-wide`}>
                        {aboutContent.skills.architecture.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aboutContent.skills.architecture.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`group relative overflow-hidden bg-white/50 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-xl p-4 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                          >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-indigo-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            
                            <div className="flex items-center justify-between mb-2 relative z-10">
                              <div className={`text-gray-900 dark:text-white ${stylesContent.fonts.secondary} font-medium text-sm group-hover:text-indigo-300 transition-colors duration-300`}>
                                {skill.name}
                              </div>
                              <span className={`text-[10px] ${stylesContent.fonts.mono} text-indigo-400 px-2 py-1 rounded-full border border-indigo-500/30 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300`}>
                                {skill.level}
                              </span>
                            </div>
                            <div className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed relative z-10`}>
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
      </div>
    </section>
  );
};
