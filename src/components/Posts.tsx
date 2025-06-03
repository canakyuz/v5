
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const Posts = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  
  return (
    <section id="blog" className={`${spacing.section.padding} ${spacing.content.padding} ${colors.background.light}`}>
      <div className={spacing.content.maxWidth}>
        <div className={grid.main}>
          {/* Section number and title */}
          <div className={grid.sidebar}>
            <div className={grid.sticky}>
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} mb-6 md:mb-8 tracking-[0.2em] uppercase`}>
                {postsContent.sectionNumber}
              </div>
              <h2 className={`${typography.section.title} ${fonts.primary} font-extralight ${colors.primary.main} leading-[0.9] mb-6 md:mb-8`}>
                {postsContent.title.main}
                <br />
                <span className={`italic ${colors.primary.light}`}>{postsContent.title.accent}</span>
              </h2>
              <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed mb-6 md:mb-8 max-w-sm`}>
                {postsContent.description}
              </p>
              <div className="w-24 h-px bg-gray-200 mt-6 md:mt-8"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={grid.content}>
            <div className={`${spacing.section.margin} pt-4 md:pt-8`}>
              {postsContent.posts.map((post, index) => (
                <article key={post.id} className={cards.post}>
                  <div className="relative">
                    {/* Mobile-friendly indicator */}
                    <div className="absolute -left-4 md:-left-8 lg:-left-12 top-0 w-1 md:w-2 h-12 md:h-16 bg-gradient-to-b from-gray-900 to-gray-400"></div>
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      {/* Post metadata */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-4 md:space-x-8">
                          <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.2em] font-medium`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                              {post.category}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Post title */}
                      <h3 className={`${typography.post.title} ${fonts.primary} font-light ${colors.primary.main} mb-3 md:mb-4 tracking-wide`}>
                        {post.title}
                      </h3>
                      
                      {/* Post excerpt */}
                      <p className={`${typography.post.excerpt} ${colors.primary.accent} leading-[1.7] max-w-full md:max-w-2xl ${fonts.secondary} font-light mb-6 md:mb-8`}>
                        {post.excerpt}
                      </p>
                      
                      {/* Post metadata - date and read time */}
                      <div className={`flex items-center space-x-6 mb-6 md:mb-8`}>
                        <div className={`flex items-center space-x-2 ${colors.primary.lighter}`}>
                          <Calendar size={14} />
                          <span className={`${fonts.secondary} ${typography.post.meta}`}>{post.date}</span>
                        </div>
                        <div className={`flex items-center space-x-2 ${colors.primary.lighter}`}>
                          <Clock size={14} />
                          <span className={`${fonts.secondary} ${typography.post.meta}`}>{post.readTime}</span>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className={`px-3 py-1 ${colors.background.main} ${colors.primary.light} ${typography.section.small} ${fonts.secondary} ${stylesContent.colors.border.medium} rounded-full ${animations.hover.color} ${animations.transition.colors}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Read more link */}
                      <div className="pt-3 md:pt-4">
                        <a 
                          href={post.link}
                          className="inline-flex items-center space-x-3 md:space-x-4 group/link"
                        >
                          <div className="relative">
                            <div className={buttons.icon}>
                              <span className={`${colors.primary.light} group-hover/link:text-white ${typography.post.meta} transform group-hover/link:translate-x-1 ${animations.transition.default}`}>
                                →
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className={`${fonts.secondary} font-medium ${colors.primary.main} group-hover/link:${colors.primary.light} ${animations.transition.colors} ${typography.post.meta} md:text-base`}>
                              Read More
                            </span>
                            <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.2em] uppercase`}>
                              Continue Reading
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* View All Posts Link */}
              <div className="text-center pt-8 md:pt-16">
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-3 group/more ${animations.hover.translate} ${animations.transition.default}`}
                >
                  <div className={`${colors.primary.main} ${fonts.secondary} font-medium text-lg ${animations.hover.color} ${animations.transition.colors}`}>
                    All Posts
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className={`${colors.primary.light} ${animations.hover.color} group-hover/more:transform group-hover/more:translate-x-1 group-hover/more:translate-y-[-1px] ${animations.transition.default}`}
                  />
                </a>
                <div className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.2em] uppercase mt-2`}>
                  View All Writing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
