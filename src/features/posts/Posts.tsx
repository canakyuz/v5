import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";

export const Posts = () => {
  const { fonts, colors, typography, spacing, grid } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section id="posts" className="section section-with-bg">
      <div className="section-container">
        <div className={`relative z-10 ${spacing.section.padding} ${spacing.content.padding}`}>
          <div className={spacing.content.maxWidth}>
            <div className={grid.main}>
              <SectionHeader 
                sectionNumber={postsContent.sectionNumber}
                title={postsContent.title}
                description={postsContent.description}
              />
              
              <div className={grid.content}>
                <div className={`${spacing.section.margin} pt-4`}>
                  {postsContent.posts.map((post, index) => (
                    <article 
                      key={post.id} 
                      className={`group relative overflow-hidden bg-white/80 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800/60 rounded-xl p-4 md:p-6 hover:border-blue-500/40 hover:bg-white/90 dark:hover:bg-gray-900/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 ${isLoaded ? 'animate-fade-in' : 'opacity-0'} mb-4 md:mb-6`}
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                      onClick={() => navigate(`/post/${post.id}`)}
                    >
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      
                      <div className="flex flex-wrap md:flex-nowrap md:items-center justify-between gap-2 md:gap-0 mb-3 md:mb-4 relative z-10">
                        <div className="flex items-center space-x-2 md:space-x-3">
                          <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-2 py-1 rounded-md group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 group-hover:border-blue-300 dark:group-hover:border-blue-500/30 transition-all duration-300">
                            <span className={`${fonts.mono} text-xs text-blue-600 dark:text-blue-400 tracking-wide`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 px-2 py-1 rounded-md group-hover:bg-gray-200 dark:group-hover:bg-gray-800/70 group-hover:border-gray-400 dark:group-hover:border-gray-600/60 transition-all duration-300">
                            <span className={`${fonts.mono} text-xs text-gray-600 dark:text-gray-400 uppercase group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300`}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-gray-600 dark:text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={12} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                            <span className="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 relative z-10 line-clamp-2`}>
                        {post.title}
                      </h3>
                      
                      <p className={`${typography.post.excerpt} text-gray-600 dark:text-gray-400 leading-relaxed ${fonts.secondary} font-light mb-3 md:mb-4 relative z-10 line-clamp-2 md:line-clamp-3`}>
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 pt-3 border-t border-gray-200 dark:border-gray-800/50 relative z-10">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, isMobile ? 1 : 2).map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 text-xs border border-gray-300 dark:border-gray-700/40 rounded-md group-hover:border-blue-500/30 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > (isMobile ? 1 : 2) && (
                            <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                              +{post.tags.length - (isMobile ? 1 : 2)}
                            </span>
                          )}
                        </div>
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/post/${post.id}`);
                          }}
                          className="inline-flex items-center space-x-1 md:space-x-2 bg-blue-50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 px-2 md:px-3 py-1 rounded-md transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-500/30 group-hover:border-blue-400 dark:group-hover:border-blue-500/50"
                        >
                          <span className="text-xs md:text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">
                            Devamını Oku
                          </span>
                          <ArrowRight className="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </button>
                      </div>
                    </article>
                  ))}
                  
                  <div className={`text-center pt-6 md:pt-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <a 
                      href="#" 
                      className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/40 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:shadow-md hover:shadow-blue-500/10 transform hover:-translate-y-1"
                    >
                      <span className="text-sm md:text-base text-blue-600 dark:text-blue-400">
                        Tüm Yazılar
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
