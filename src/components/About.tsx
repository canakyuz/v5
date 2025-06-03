
import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";

export const About = () => {
  const { fonts, colors, typography, spacing, animations, grid } = stylesContent;
  
  return (
    <section id="about" className={`${spacing.section.padding} ${spacing.content.padding} ${colors.background.light}`}>
      <div className={spacing.content.maxWidth}>
        <div className={grid.main}>
          {/* Section header */}
          <div className={grid.sidebar}>
            <div className={grid.sticky}>
              <div className={`${typography.section.small} ${fonts.mono} ${colors.primary.lighter} mb-6 tracking-[0.3em] uppercase`}>
                {aboutContent.sectionNumber}
              </div>
              <h2 className={`${typography.section.title} ${fonts.primary} font-light ${colors.primary.main} leading-[0.9] mb-8`}>
                {aboutContent.title.main}
                <br />
                <span className={`italic ${colors.primary.light}`}>{aboutContent.title.accent}</span>
              </h2>
              <div className="w-24 h-px bg-gray-300 mt-8"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={grid.content}>
            <div className={`${spacing.section.margin} pt-8`}>
              {/* Main description */}
              <div className="space-y-8 mb-20">
                <p className={`${typography.hero.description} ${colors.primary.main} leading-[1.5] ${fonts.primary} font-light max-w-4xl`}>
                  {aboutContent.description.main}
                </p>
                
                <p className={`${typography.section.description} ${colors.primary.accent} leading-[1.7] max-w-3xl ${fonts.secondary} font-light`}>
                  {aboutContent.description.secondary}
                </p>
              </div>
              
              {/* Skills - Daha temiz layout */}
              <div className="space-y-20">
                {/* Core Technologies */}
                <div>
                  <h3 className={`${typography.section.subtitle} ${fonts.primary} font-light ${colors.primary.main} mb-12 tracking-wide`}>
                    {aboutContent.skills.frontend.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutContent.skills.frontend.items.map((skill, index) => (
                      <div key={skill.name} className={`group ${animations.hover.translate} ${animations.transition.default}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`${fonts.mono} text-xs ${colors.primary.lighter} tracking-[0.3em]`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <span className={`text-xs ${fonts.mono} ${colors.primary.lighter} bg-gray-100 px-3 py-1 uppercase tracking-wide`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className={`${colors.primary.main} ${fonts.secondary} font-medium text-lg mb-2`}>
                          {skill.name}
                        </div>
                        <div className={`text-sm ${colors.primary.lighter} leading-relaxed`}>
                          {skill.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools & Methodologies */}
                <div>
                  <h3 className={`${typography.section.subtitle} ${fonts.primary} font-light ${colors.primary.main} mb-12 tracking-wide`}>
                    {aboutContent.skills.tools.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutContent.skills.tools.items.map((skill, index) => (
                      <div key={skill.name} className={`group ${animations.hover.translate} ${animations.transition.default}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`${fonts.mono} text-xs ${colors.primary.lighter} tracking-[0.3em]`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <span className={`text-xs ${fonts.mono} ${colors.primary.lighter} bg-gray-100 px-3 py-1 uppercase tracking-wide`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className={`${colors.primary.light} ${fonts.secondary} font-medium text-lg mb-2`}>
                          {skill.name}
                        </div>
                        <div className={`text-sm ${colors.primary.lighter} leading-relaxed`}>
                          {skill.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture & Best Practices */}
                <div>
                  <h3 className={`${typography.section.subtitle} ${fonts.primary} font-light ${colors.primary.main} mb-12 tracking-wide`}>
                    {aboutContent.skills.architecture.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutContent.skills.architecture.items.map((skill, index) => (
                      <div key={skill.name} className={`group ${animations.hover.translate} ${animations.transition.default}`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`${fonts.mono} text-xs ${colors.primary.lighter} tracking-[0.3em]`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <span className={`text-xs ${fonts.mono} ${colors.primary.lighter} bg-gray-100 px-3 py-1 uppercase tracking-wide`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className={`${colors.primary.light} ${fonts.secondary} font-medium text-lg mb-2`}>
                          {skill.name}
                        </div>
                        <div className={`text-sm ${colors.primary.lighter} leading-relaxed`}>
                          {skill.description}
                        </div>
                      </div>
                    ))}
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
