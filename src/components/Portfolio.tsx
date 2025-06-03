
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  
  // Text truncation utility
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };
  
  return (
    <section id="portfolio" className={`${spacing.section.padding} ${spacing.content.padding} ${colors.background.main}`}>
      <div className={spacing.content.maxWidth}>
        <div className={grid.main}>
          {/* Section header */}
          <div className={grid.sidebar}>
            <div className={grid.sticky}>
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} mb-6 tracking-[0.3em] uppercase`}>
                {portfolioContent.sectionNumber}
              </div>
              <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.9] mb-8`}>
                {portfolioContent.title.main}
                <br />
                <span className={`italic ${colors.primary.light}`}>{portfolioContent.title.accent}</span>
              </h2>
              <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                {portfolioContent.description}
              </p>
              <div className="w-24 h-px bg-gray-300 mt-8"></div>
            </div>
          </div>
          
          {/* Projects grid */}
          <div className={grid.content}>
            <div className={`${spacing.section.margin} pt-8`}>
              {portfolioContent.projects.map((project, index) => (
                <article key={project.id} className={cards.project}>
                  
                  {/* Project image */}
                  <div className={cards.projectImage}>
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={project.title}
                      className={`w-full h-full object-cover ${animations.transition.slow} group-hover:scale-105`}
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 ${animations.transition.default}`}></div>
                    
                    {/* Project number overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} bg-white/90 backdrop-blur-sm px-4 py-2 tracking-[0.3em] font-medium`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} bg-white/90 backdrop-blur-sm px-4 py-2 tracking-[0.2em] uppercase`}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project content */}
                  <div className={cards.projectContent}>
                    <div className="flex-1 space-y-4 overflow-hidden">
                      {/* Title and subtitle */}
                      <div className="space-y-3">
                        <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} ${animations.hover.color} ${animations.transition.colors} line-clamp-2 text-xl`}>
                          {truncateText(project.title, 50)}
                        </h3>
                        <p className={`${typography.post.excerpt} ${fonts.primary} font-light italic ${colors.primary.light} line-clamp-1`}>
                          {truncateText(project.subtitle, 40)}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className={`${typography.post.excerpt} ${colors.primary.accent} leading-relaxed ${fonts.secondary} font-light line-clamp-3`}>
                        {truncateText(project.description, 120)}
                      </p>
                      
                      {/* Technology stack */}
                      <div className="flex flex-wrap gap-3 min-h-[2rem]">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span 
                            key={tech} 
                            className={`px-3 py-1 ${colors.background.light} ${colors.primary.light} ${typography.post.meta} ${fonts.secondary} border border-gray-200 text-xs font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className={`px-3 py-1 ${colors.primary.lighter} ${typography.post.meta} ${fonts.secondary} text-xs`}>
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Project link */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                      <div className={`${fonts.mono} ${typography.post.meta} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                        {project.year}
                      </div>
                      <a 
                        href={project.link}
                        className="inline-flex items-center space-x-3 group/link"
                      >
                        <span className={`${fonts.secondary} font-medium ${colors.primary.main} group-hover/link:${colors.primary.light} ${animations.transition.colors} text-sm`}>
                          View Project
                        </span>
                        <div className={buttons.icon}>
                          <ExternalLink className={`${colors.primary.light} group-hover/link:text-white w-4 h-4 ${animations.transition.default}`} />
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* More Projects Link */}
              <div className="text-center pt-12">
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-4 group/more ${animations.hover.translate} ${animations.transition.default}`}
                >
                  <div className={`${colors.primary.main} ${fonts.secondary} font-medium text-lg ${animations.hover.color} ${animations.transition.colors}`}>
                    More Projects
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className={`${colors.primary.light} ${animations.hover.color} group-hover/more:transform group-hover/more:translate-x-1 group-hover/more:translate-y-[-1px] ${animations.transition.default}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
