import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";
import { Sparkles, CheckCircle2 } from "lucide-react";
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
                    <p className={`font-heading text-gray-900 dark:text-white leading-[1.4] font-light max-w-3xl mb-6`}>
                      {aboutContent.description.main}
                    </p>
                    
                    <p className={`font-primary text-gray-600 dark:text-gray-300 leading-[1.6] max-w-2xl font-light`}>
                      {aboutContent.description.secondary}
                    </p>
                  </div>
                  
                  {/* Skills - Modern Clean Design */}
                  <div className="space-y-10 mt-12">
                    {/* Core Technologies */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-1 bg-blue-500/70 rounded-full"></div>
                        <h3 className={`text-xl font-heading font-medium text-gray-900 dark:text-white tracking-wide`}>
                          {aboutContent.skills.frontend.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {aboutContent.skills.frontend.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`bg-white/60 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 rounded-xl p-5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                          >
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              <h4 className="font-heading text-base font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                            </div>
                            
                            <p className="font-primary text-sm text-gray-600 dark:text-gray-300 mb-3 pl-3.5">
                              {skill.description}
                            </p>
                            
                            <div className="flex items-center pl-3.5">
                              <span className="text-xs font-primary text-blue-600 dark:text-blue-400 font-medium tracking-wide">
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tools & Methodologies */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-1 bg-purple-500/70 rounded-full"></div>
                        <h3 className={`text-xl font-heading font-medium text-gray-900 dark:text-white tracking-wide`}>
                          {aboutContent.skills.tools.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {aboutContent.skills.tools.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`bg-white/60 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 rounded-xl p-5 transition-all duration-300 hover:border-purple-500/40 hover:shadow-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                          >
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              <h4 className="font-heading text-base font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                            </div>
                            
                            <p className="font-primary text-sm text-gray-600 dark:text-gray-300 mb-3 pl-3.5">
                              {skill.description}
                            </p>
                            
                            <div className="flex items-center pl-3.5">
                              <span className="text-xs font-primary text-purple-600 dark:text-purple-400 font-medium tracking-wide">
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture & Best Practices */}
                    <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.0s' }}>
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-1 bg-indigo-500/70 rounded-full"></div>
                        <h3 className={`text-xl font-heading font-medium text-gray-900 dark:text-white tracking-wide`}>
                          {aboutContent.skills.architecture.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {aboutContent.skills.architecture.items.map((skill, index) => (
                          <div 
                            key={skill.name} 
                            className={`bg-white/60 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 rounded-xl p-5 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-sm ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                            style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                          >
                            <div className="flex items-center space-x-2 mb-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              <h4 className="font-heading text-base font-medium text-gray-900 dark:text-white">
                                {skill.name}
                              </h4>
                            </div>
                            
                            <p className="font-primary text-sm text-gray-600 dark:text-gray-300 mb-3 pl-3.5">
                              {skill.description}
                            </p>
                            
                            <div className="flex items-center pl-3.5">
                              <span className="text-xs font-primary text-indigo-600 dark:text-indigo-400 font-medium tracking-wide">
                                {skill.level}
                              </span>
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
