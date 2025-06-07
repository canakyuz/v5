
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, ExternalLink, Sparkles, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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
  
  // Text truncation utility
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  
  return (
    <section id="portfolio" className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-25 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, rgba(79, 70, 229, 0.05) 60%, transparent 80%)`,
          }}
        />
        
        {/* Multi-layer Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-purple-500/10" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

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
                        {portfolioContent.sectionNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] mb-6`}>
                    {portfolioContent.title.main}
                    <br />
                    <span className="italic text-gradient-elegant">
                      {portfolioContent.title.accent}
                    </span>
                  </h2>
                  <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                    {portfolioContent.description}
                  </p>
                  <div className="w-20 h-px bg-gradient-to-r from-blue-500 to-transparent mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Projects Grid */}
            <div className={grid.content}>
              <div className={`${spacing.section.margin} pt-4`}>
                {portfolioContent.projects.map((project, index) => (
                  <article 
                    key={project.id} 
                    className={`group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:transform hover:translate-y-[-4px] grid grid-cols-1 md:grid-cols-5 gap-0 h-[480px] md:h-[360px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    
                    {/* Enhanced Project Image */}
                    <div className="relative md:col-span-2 overflow-hidden bg-gray-800/60 h-full w-full">
                      <img 
                        src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
                      
                      {/* Enhanced Project Number Overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full">
                          <span className={`${fonts.mono} text-xs text-white tracking-[0.2em] font-medium`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 rounded-full">
                          <span className={`${fonts.mono} text-xs text-blue-300 tracking-[0.1em] uppercase`}>
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Enhanced Project Content */}
                    <div className="p-6 md:col-span-3 flex flex-col justify-between h-full min-h-0 relative">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-2xl"></div>
                      
                      <div className="flex-1 space-y-4 overflow-hidden relative z-10">
                        {/* Enhanced Title and Subtitle */}
                        <div className="space-y-2">
                          <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} hover:text-gradient-elegant transition-colors duration-300 line-clamp-2`}>
                            {truncateText(project.title, 50)}
                          </h3>
                          <p className={`${typography.post.excerpt} ${fonts.primary} font-light italic text-gray-400 line-clamp-1`}>
                            {truncateText(project.subtitle, 40)}
                          </p>
                        </div>
                        
                        {/* Enhanced Description */}
                        <p className={`${typography.post.excerpt} text-gray-300 leading-relaxed ${fonts.secondary} font-light line-clamp-3`}>
                          {truncateText(project.description, 120)}
                        </p>
                        
                        {/* Enhanced Technology Stack */}
                        <div className="flex flex-wrap gap-2 min-h-[2rem]">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 bg-gray-800/60 text-gray-300 text-xs font-medium border border-gray-700/60 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 text-gray-400 text-xs">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced Project Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 mt-auto relative z-10">
                        <div className={`${fonts.mono} text-xs text-gray-400 tracking-[0.1em] uppercase`}>
                          {project.year}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => navigate(`/project/${project.id}`)}
                            className="inline-flex items-center space-x-2 group/detail bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 px-3 py-2 rounded-lg transition-all duration-300"
                          >
                            <Eye className="w-3 h-3 text-purple-400 group-hover/detail:text-white transition-colors duration-300" />
                            <span className="text-xs font-medium text-purple-300 group-hover/detail:text-white transition-colors duration-300">
                              Detay
                            </span>
                          </button>
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 group/link bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 px-3 py-2 rounded-lg transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3 text-blue-400 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:translate-y-[-1px] transition-all duration-300" />
                            <span className="text-xs font-medium text-blue-300 group-hover/link:text-white transition-colors duration-300">
                              Görüntüle
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                
                {/* Enhanced More Projects Link */}
                <div className={`text-center pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-3 group/more bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
                  >
                    <span className="text-base font-medium text-gradient-elegant group-hover/more:text-white transition-colors duration-300">
                      Tüm Projeler
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
