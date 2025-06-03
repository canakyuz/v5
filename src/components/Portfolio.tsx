
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const Portfolio = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
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
  
  // Text truncation utility
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  
  return (
    <section id="portfolio" className="relative bg-black overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15) 0%, rgba(79, 70, 229, 0.1) 30%, transparent 60%)`,
          }}
        />
        
        {/* Multi-layer Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/15 to-blue-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-indigo-500/10" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
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
                    <div className="w-8 md:w-12 h-px bg-gradient-to-r from-purple-500 to-indigo-500" />
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-purple-400 animate-pulse" />
                      <span className="text-[10px] md:text-xs font-mono text-purple-400 tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                        {portfolioContent.sectionNumber}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                  <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.85] mb-6`}>
                    {portfolioContent.title.main}
                    <br />
                    <span className={`italic ${colors.primary.light} bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent`}>
                      {portfolioContent.title.accent}
                    </span>
                  </h2>
                  <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                    {portfolioContent.description}
                  </p>
                  <div className="w-20 h-px bg-gradient-to-r from-purple-500 to-transparent mt-6"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Projects Grid */}
            <div className={grid.content}>
              <div className={`${spacing.section.margin} pt-4`}>
                {portfolioContent.projects.map((project, index) => (
                  <article 
                    key={project.id} 
                    className={`group relative bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:transform hover:translate-y-[-4px] grid grid-cols-1 md:grid-cols-5 gap-0 h-[480px] md:h-[360px] ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
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
                        <div className="bg-purple-500/20 backdrop-blur-md border border-purple-500/30 px-3 py-1 rounded-full">
                          <span className={`${fonts.mono} text-xs text-purple-300 tracking-[0.1em] uppercase`}>
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
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-2xl"></div>
                      
                      <div className="flex-1 space-y-4 overflow-hidden relative z-10">
                        {/* Enhanced Title and Subtitle */}
                        <div className="space-y-2">
                          <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} hover:text-purple-300 transition-colors duration-300 line-clamp-2`}>
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
                      
                      {/* Enhanced Project Link */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50 mt-auto relative z-10">
                        <div className={`${fonts.mono} text-xs text-gray-400 tracking-[0.1em] uppercase`}>
                          {project.year}
                        </div>
                        <a 
                          href={project.link}
                          className="inline-flex items-center space-x-2 group/link bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 px-4 py-2 rounded-lg transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-purple-300 group-hover/link:text-white transition-colors duration-300">
                            View Project
                          </span>
                          <ExternalLink className="w-3 h-3 text-purple-400 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:translate-y-[-1px] transition-all duration-300" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
                
                {/* Enhanced More Projects Link */}
                <div className={`text-center pt-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-3 group/more bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 hover:border-purple-500/50 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
                  >
                    <span className="text-base font-medium text-purple-300 group-hover/more:text-white transition-colors duration-300">
                      More Projects
                    </span>
                    <ArrowUpRight 
                      size={16} 
                      className="text-purple-400 group-hover/more:text-white group-hover/more:transform group-hover/more:translate-x-1 group-hover/more:translate-y-[-1px] transition-all duration-300"
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
