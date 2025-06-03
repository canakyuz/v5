
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowUpRight, Calendar, Clock, ArrowRight } from "lucide-react";

export const Posts = () => {
  const { fonts, colors, typography, spacing, animations, buttons, grid, cards } = stylesContent;
  
  return (
    <section id="blog" className={`${spacing.section.padding} ${spacing.content.padding} ${colors.background.light}`}>
      <div className={spacing.content.maxWidth}>
        <div className={grid.main}>
          {/* Section header */}
          <div className={grid.sidebar}>
            <div className={grid.sticky}>
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} mb-6 tracking-[0.3em] uppercase`}>
                {postsContent.sectionNumber}
              </div>
              <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.9] mb-8`}>
                {postsContent.title.main}
                <br />
                <span className={`italic ${colors.primary.light}`}>{postsContent.title.accent}</span>
              </h2>
              <p className={`${fonts.secondary} ${colors.primary.accent} ${typography.section.description} font-light leading-relaxed max-w-sm`}>
                {postsContent.description}
              </p>
              <div className="w-24 h-px bg-gray-300 mt-8"></div>
            </div>
          </div>
          
          {/* Posts grid */}
          <div className={grid.content}>
            <div className={`${spacing.section.margin} pt-8`}>
              {postsContent.posts.map((post, index) => (
                <article key={post.id} className={cards.post}>
                  
                  {/* Post header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-6">
                      <div className={`${fonts.mono} ${typography.post.meta} ${colors.primary.lighter} tracking-[0.3em] font-medium`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className={`${fonts.mono} ${typography.post.meta} ${colors.primary.lighter} tracking-[0.2em] uppercase px-3 py-1 bg-gray-100`}>
                        {post.category}
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-xs text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Post title */}
                  <h3 className={`${typography.post.title} ${fonts.primary} font-medium ${colors.primary.main} mb-4 leading-tight ${animations.hover.color} ${animations.transition.colors} text-xl`}>
                    {post.title}
                  </h3>
                  
                  {/* Post excerpt */}
                  <p className={`${typography.post.excerpt} ${colors.primary.accent} leading-relaxed ${fonts.secondary} font-light mb-6`}>
                    {post.excerpt}
                  </p>
                  
                  {/* Tags and read more */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className={`px-3 py-1 ${colors.background.main} ${colors.primary.light} ${typography.post.meta} ${fonts.secondary} border border-gray-200 text-xs`}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className={`px-3 py-1 ${colors.primary.lighter} ${typography.post.meta} ${fonts.secondary} text-xs`}>
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <a 
                      href={post.link}
                      className="inline-flex items-center space-x-3 group/link"
                    >
                      <span className={`${fonts.secondary} font-medium ${colors.primary.main} group-hover/link:${colors.primary.light} ${animations.transition.colors} ${typography.post.meta}`}>
                        Read More
                      </span>
                      <ArrowRight className={`${colors.primary.light} group-hover/link:text-gray-900 w-4 h-4 group-hover/link:translate-x-1 ${animations.transition.default}`} />
                    </a>
                  </div>
                </article>
              ))}
              
              {/* View All Posts Link */}
              <div className="text-center pt-12">
                <a 
                  href="#" 
                  className={`inline-flex items-center space-x-4 group/more ${animations.hover.translate} ${animations.transition.default}`}
                >
                  <div className={`${colors.primary.main} ${fonts.secondary} font-medium text-lg ${animations.hover.color} ${animations.transition.colors}`}>
                    All Posts
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
