
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  
  return (
    <section id="portfolio" className={`${spacing.section.padding} ${spacing.content.padding} ${colors.background.main}`}>
      <div className={spacing.content.maxWidth}>
        <div className={grid.main}>
          {/* Section header */}
          <div className={grid.sidebar}>
            <div className={grid.sticky}>
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} mb-4 tracking-[0.2em] uppercase`}>
                {portfolioContent.sectionNumber}
              </div>
              <h2 className={`${typography.section.title} ${fonts.primary} font-extralight ${colors.primary.main} leading-[0.9] mb-6`}>
                {portfolioContent.title.main}
                <br />
                <span className={`italic ${colors.primary.light}`}>{portfolioContent.title.accent}</span>
              </h2>
              <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                {portfolioContent.description}
              </p>
              <div className="w-20 h-px bg-gray-200 mt-6"></div>
            </div>
          </div>
          
          {/* Projects grid */}
          <div className={grid.content}>
            <div className={`${spacing.section.margin} pt-4`}>
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
                    <div className="absolute top-4 left-4">
                      <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.2em] font-medium`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.1em] uppercase`}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project content */}
                  <div className={cards.projectContent}>
                    
                    {/* Title and subtitle */}
                    <div className="space-y-2">
                      <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} ${animations.hover.color} ${animations.transition.colors}`}>
                        {project.title}
                      </h3>
                      <p className={`${typography.post.excerpt} ${fonts.primary} font-light italic ${colors.primary.light}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className={`${typography.post.excerpt} ${colors.primary.accent} leading-relaxed ${fonts.secondary} font-light`}>
                      {project.description}
                    </p>
                    
                    {/* Technology stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className={`px-3 py-1 ${colors.background.light} ${colors.primary.light} ${typography.post.meta} ${fonts.secondary} ${stylesContent.colors.border.light} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project link */}
                    <div className="flex items-center justify-between pt-2">
                      <div className={`${fonts.mono} ${typography.post.meta} ${colors.primary.lighter} tracking-[0.1em] uppercase`}>
                        {project.year}
                      </div>
                      <a 
                        href={project.link}
                        className="inline-flex items-center space-x-2 group/link"
                      >
                        <span className={`${fonts.secondary} font-medium ${colors.primary.main} group-hover/link:${colors.primary.light} ${animations.transition.colors} ${typography.post.meta}`}>
                          View Project
                        </span>
                        <div className={buttons.icon}>
                          <ExternalLink className={`${colors.primary.light} group-hover/link:text-white w-3 h-3 ${animations.transition.default}`} />
                        </div>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* More Projects Link */}
              <div className="text-center pt-8">
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-3 group/more ${animations.hover.translate} ${animations.transition.default}`}
                >
                  <div className={`${colors.primary.main} ${fonts.secondary} font-medium text-base ${animations.hover.color} ${animations.transition.colors}`}>
                    More Projects
                  </div>
                  <ArrowUpRight 
                    size={16} 
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
