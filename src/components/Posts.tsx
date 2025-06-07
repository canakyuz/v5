
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Posts = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section id="blog" className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950">
      <div className={`relative z-10 ${spacing.section.padding} ${spacing.content.padding}`}>
        <div className={spacing.content.maxWidth}>
          <div className={grid.main}>
            {/* Enhanced Section Header */}
            <div className={grid.sidebar}>
              <div className={grid.sticky}>
                {/* Header Badge */}
                <div className={`mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-blue-400 animate-pulse" />
                      <span className="text-[10px] md:text-xs font-mono text-blue-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                        {postsContent.sectionNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] mb-6`}>
                    {postsContent.title.main}
                    <br />
                    <span className="italic text-gradient-elegant">
                      {postsContent.title.accent}
                    </span>
                  </h2>
                  <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                    {postsContent.description}
                  </p>
                  <div className="w-20 h-px bg-gradient-to-r from-blue-500 to-transparent mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Posts Grid */}
            <div className={grid.content}>
              <div className={`${spacing.section.margin} pt-4`}>
                {postsContent.posts.map((post, index) => (
                  <article 
                    key={post.id} 
                    className={`group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:transform hover:translate-y-[-4px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-4px] group-hover:translate-x-4"></div>
                    
                    {/* Enhanced Post Header */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 rounded-full">
                          <span className={`${fonts.mono} text-xs text-blue-300 tracking-[0.2em] font-medium`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="bg-gray-800/60 border border-gray-600/50 px-3 py-1 rounded-full">
                          <span className={`${fonts.mono} text-xs text-gray-300 tracking-[0.1em] uppercase`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-400">
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
                    
                    {/* Enhanced Post Title */}
                    <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} mb-4 leading-tight hover:text-gradient-elegant transition-colors duration-300 relative z-10`}>
                      {post.title}
                    </h3>
                    
                    {/* Enhanced Post Excerpt */}
                    <p className={`${typography.post.excerpt} text-gray-300 leading-relaxed ${fonts.secondary} font-light mb-6 relative z-10`}>
                      {post.excerpt}
                    </p>
                    
                    {/* Enhanced Tags and Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs font-medium border border-gray-700/60 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-3 py-1 text-gray-400 text-xs">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <button 
                        onClick={() => navigate(`/post/${post.id}`)}
                        className="inline-flex items-center space-x-2 group/link bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 px-4 py-2 rounded-lg transition-all duration-300"
                      >
                        <span className="text-sm font-medium text-blue-300 group-hover/link:text-white transition-colors duration-300">
                          Devamını Oku
                        </span>
                        <ArrowRight className="w-3 h-3 text-blue-400 group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300" />
                      </button>
                    </div>
                  </article>
                ))}
                
                {/* Enhanced View All Posts Link */}
                <div className={`text-center pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-3 group/more bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
                  >
                    <span className="text-base font-medium text-gradient-elegant group-hover/more:text-white transition-colors duration-300">
                      Tüm Yazılar
                    </span>
                    <ArrowUpRight 
                      size={16} 
                      className="text-blue-400 group-hover/more:text-white group-hover/more:transform group-hover/more:translate-x-1 group-hover/more:translate-y-[-1px] transition-all duration-300"
                    />
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
