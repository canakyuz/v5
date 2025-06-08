import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, ExternalLink, Eye, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";

export const Portfolio = () => {
  const { fonts, colors, typography, spacing, grid } = stylesContent;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Text truncation utility
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  
  return (
    <section id="portfolio" className="section section-with-bg">
      <div className="section-container">
        <div className={`relative z-10 ${spacing.section.padding} ${spacing.content.padding}`}>
          <div className={spacing.content.maxWidth}>
            <div className={grid.main}>
              {/* Section Header */}
              <SectionHeader
                sectionNumber={portfolioContent.sectionNumber}
                title={{
                  main: portfolioContent.title.main,
                  accent: portfolioContent.title.accent
                }}
                description={portfolioContent.description}
                className={isLoaded ? 'animate-fade-in' : 'opacity-0'}
              />
              
              {/* Enhanced Projects Grid */}
              <div className={grid.content}>
                <div className={`${spacing.section.margin} pt-4`}>
                  <div className="grid grid-cols-1 gap-4 md:gap-12 mb-4">
                    {portfolioContent.projects.map((project, index) => (
                      <article 
                        key={project.id} 
                        className={`group relative bg-white/80 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800/60 rounded-xl overflow-hidden hover:border-blue-500/40 hover:bg-white/90 dark:hover:bg-gray-900/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} h-auto md:h-[220px]`}
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                        onClick={() => navigate(`/project/${project.id}`)}
                      >
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        
                        <div className="flex flex-col md:flex-row h-full">
                          {/* Project Image - Sol tarafta (sadece md ve üzeri ekranlarda) */}
                          <div className="relative w-full md:w-[260px] h-44 md:h-full overflow-hidden flex-shrink-0">
                            <img 
                              src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                              alt={project.title}
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>
                            
                            {/* Category and Project Number Badges */}
                            <div className="absolute top-3 left-3">
                              <div className="flex items-center space-x-2">
                                <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-2 py-1 rounded-md group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:border-blue-300 dark:group-hover:border-blue-500/30 transition-all duration-300">
                                  <span className={`${fonts.mono} text-xs text-blue-600 dark:text-blue-400 tracking-wide`}>
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 px-2 py-1 rounded-md group-hover:bg-gray-200 dark:group-hover:bg-gray-800/70 group-hover:border-gray-400 dark:group-hover:border-gray-600/60 transition-all duration-300">
                                  <span className={`${fonts.mono} text-xs text-gray-600 dark:text-gray-400 uppercase group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300`}>
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Project Content - Sağ tarafta (sadece md ve üzeri ekranlarda) */}
                          <div className="p-4 md:p-5 relative z-10 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                                <h3 className={`text-lg md:text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 line-clamp-1`}>
                                  {project.title}
                                </h3>
                                <p className={`text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light line-clamp-2 md:line-clamp-2`}>
                                  {truncateText(project.description, isMobile ? 100 : 150)}
                                </p>
                              </div>
                              
                              {/* Technologies */}
                              <div className="flex flex-wrap gap-1.5 mb-4 md:mb-0">
                                {project.technologies.slice(0, isMobile ? 2 : 4).map((tech) => (
                                  <span 
                                    key={tech} 
                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 text-xs border border-gray-300 dark:border-gray-700/40 rounded-md group-hover:border-blue-500/30 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > (isMobile ? 2 : 4) && (
                                  <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                                    +{project.technologies.length - (isMobile ? 2 : 4)}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            {/* Footer */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-800/50 mt-auto">
                              <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-500">
                                <Calendar size={12} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{project.year}</span>
                              </div>
                              
                              <div className="flex space-x-2">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/project/${project.id}`);
                                  }}
                                  className="inline-flex items-center space-x-1 md:space-x-2 bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 px-2 md:px-3 py-1 rounded-md transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-500/30 group-hover:border-blue-400 dark:group-hover:border-blue-500/50"
                                >
                                  <Eye className="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white" />
                                  <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">
                                    Detay
                                  </span>
                                </button>
                                
                                <a 
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center space-x-1 md:space-x-2 bg-gray-50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800/60 border border-gray-200 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-700/60 px-2 md:px-3 py-1 rounded-md transition-all duration-300"
                                >
                                  <ExternalLink className="w-3 h-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white" />
                                  <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                                    Görüntüle
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                  
                  {/* More Projects Link */}
                  <div className={`text-center pt-8 md:pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <a 
                      href="#" 
                      className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:shadow-md hover:shadow-blue-500/10 transform hover:-translate-y-1"
                    >
                      <span className="text-sm md:text-base text-blue-600 dark:text-blue-400">
                        Tüm Projeler
                      </span>
                      <ArrowUpRight size={14} className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
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
