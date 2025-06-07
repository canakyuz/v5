
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

export const Posts = () => {
  const { fonts, colors, typography, spacing, grid } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="blog" className="relative bg-gray-950/95 dark:bg-gray-950/95 light:bg-gray-50/95">
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
                    className={`group relative bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-xl p-6 hover:border-blue-500/40 hover:bg-gray-900/40 dark:hover:bg-gray-900/40 light:hover:bg-white/80 transition-all duration-300 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md">
                          <span className={`${fonts.mono} text-xs text-blue-400 tracking-wide`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300 px-2 py-1 rounded-md">
                          <span className={`${fonts.mono} text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 uppercase`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-500 light:text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-3 leading-tight`}>
                      {post.title}
                    </h3>
                    
                    <p className={`${typography.post.excerpt} text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed ${fonts.secondary} font-light mb-4`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-800/50 dark:border-gray-800/50 light:border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-gray-800/40 dark:bg-gray-800/40 light:bg-gray-100 text-gray-400 dark:text-gray-400 light:text-gray-600 text-xs border border-gray-700/40 dark:border-gray-700/40 light:border-gray-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-500 light:text-gray-600 text-xs">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <button 
                        onClick={() => navigate(`/post/${post.id}`)}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 px-3 py-1 rounded-md transition-all duration-300"
                      >
                        <span className="text-sm text-blue-400">
                          Devamını Oku
                        </span>
                        <ArrowRight className="w-3 h-3 text-blue-400" />
                      </button>
                    </div>
                  </article>
                ))}
                
                <div className={`text-center pt-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <span className="text-blue-400">
                      Tüm Yazılar
                    </span>
                    <ArrowUpRight size={14} className="text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
