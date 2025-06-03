
import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";

export const About = () => {
  return (
    <section id="about" className={`${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding} ${stylesContent.colors.background.light}`}>
      <div className={stylesContent.spacing.content.maxWidth}>
        <div className={stylesContent.grid.main}>
          {/* Section number and title */}
          <div className={stylesContent.grid.sidebar}>
            <div className={stylesContent.grid.sticky}>
              <div className={`text-xs ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} mb-6 tracking-[0.2em] uppercase`}>
                {aboutContent.sectionNumber}
              </div>
              <h2 className={`${stylesContent.typography.section.title} ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} leading-[0.9] mb-6`}>
                {aboutContent.title.main}
                <br />
                <span className={`italic ${stylesContent.colors.primary.light}`}>{aboutContent.title.accent}</span>
              </h2>
              <div className={`w-16 h-px ${stylesContent.colors.border.light} mt-6`}></div>
            </div>
          </div>
          
          {/* Content */}
          <div className={stylesContent.grid.content}>
            <div className={stylesContent.spacing.section.margin}>
              {/* Main description */}
              <div className={`${stylesContent.spacing.card.gap} pt-4`}>
                <p className={`${stylesContent.typography.hero.description} ${stylesContent.colors.primary.main} leading-[1.4] ${stylesContent.fonts.primary} font-light max-w-3xl`}>
                  {aboutContent.description.main}
                </p>
                
                <p className={`${stylesContent.typography.section.description} ${stylesContent.colors.primary.light} leading-[1.6] max-w-2xl ${stylesContent.fonts.secondary} font-light`}>
                  {aboutContent.description.secondary}
                </p>
              </div>
              
              {/* Skills - Modern dark layout */}
              <div className="space-y-16">
                {/* Core Technologies */}
                <div className="relative">
                  <div className={`absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500`}></div>
                  <div className="pl-12">
                    <h3 className={`text-2xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-8 tracking-wide`}>
                      {aboutContent.skills.frontend.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {aboutContent.skills.frontend.items.map((skill, index) => (
                        <div key={skill.name} className={`group ${stylesContent.cards.post} ${stylesContent.animations.transition.default} hover:border-blue-500/50`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`${stylesContent.fonts.mono} text-[10px] ${stylesContent.colors.primary.accent} tracking-[0.2em]`}>
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} bg-blue-500/10 px-2 py-1 rounded uppercase tracking-wide border border-blue-500/20`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-base mb-2`}>
                            {skill.name}
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tools & Methodologies */}
                <div className="relative">
                  <div className={`absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500`}></div>
                  <div className="pl-12">
                    <h3 className={`text-2xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-8 tracking-wide`}>
                      {aboutContent.skills.tools.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {aboutContent.skills.tools.items.map((skill, index) => (
                        <div key={skill.name} className={`group ${stylesContent.cards.post} ${stylesContent.animations.transition.default} hover:border-purple-500/50`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`${stylesContent.fonts.mono} text-[10px] ${stylesContent.colors.primary.accent} tracking-[0.2em]`}>
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} bg-purple-500/10 px-2 py-1 rounded uppercase tracking-wide border border-purple-500/20`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-base mb-2`}>
                            {skill.name}
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture & Best Practices */}
                <div className="relative">
                  <div className={`absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-pink-500 to-orange-500`}></div>
                  <div className="pl-12">
                    <h3 className={`text-2xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-8 tracking-wide`}>
                      {aboutContent.skills.architecture.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {aboutContent.skills.architecture.items.map((skill, index) => (
                        <div key={skill.name} className={`group ${stylesContent.cards.post} ${stylesContent.animations.transition.default} hover:border-orange-500/50`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`${stylesContent.fonts.mono} text-[10px] ${stylesContent.colors.primary.accent} tracking-[0.2em]`}>
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} bg-orange-500/10 px-2 py-1 rounded uppercase tracking-wide border border-orange-500/20`}>
                              {skill.level}
                            </span>
                          </div>
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-base mb-2`}>
                            {skill.name}
                          </div>
                          <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
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
      </div>
    </section>
  );
};
