
import { aboutContent } from "@/content/about";
import { stylesContent } from "@/content/styles";

export const About = () => {
  return (
    <section id="about" className={`${stylesContent.spacing.section.padding} ${stylesContent.spacing.content.padding} bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950`}>
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
              
              {/* Skills - Minimal layout */}
              <div className="space-y-12">
                {/* Core Technologies */}
                <div>
                  <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                    {aboutContent.skills.frontend.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutContent.skills.frontend.items.map((skill) => (
                      <div key={skill.name} className="group border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                            {skill.name}
                          </div>
                          <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} px-2 py-1 rounded-full border border-gray-700/50`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                          {skill.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tools & Methodologies */}
                <div>
                  <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                    {aboutContent.skills.tools.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutContent.skills.tools.items.map((skill) => (
                      <div key={skill.name} className="group border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                            {skill.name}
                          </div>
                          <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} px-2 py-1 rounded-full border border-gray-700/50`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className={`text-xs ${stylesContent.colors.primary.light} leading-relaxed`}>
                          {skill.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture & Best Practices */}
                <div>
                  <h3 className={`text-xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-6 tracking-wide`}>
                    {aboutContent.skills.architecture.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutContent.skills.architecture.items.map((skill) => (
                      <div key={skill.name} className="group border border-gray-700/50 rounded-xl p-4 hover:border-gray-600/50 transition-colors duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`${stylesContent.colors.primary.main} ${stylesContent.fonts.secondary} font-medium text-sm`}>
                            {skill.name}
                          </div>
                          <span className={`text-[10px] ${stylesContent.fonts.mono} ${stylesContent.colors.primary.accent} px-2 py-1 rounded-full border border-gray-700/50`}>
                            {skill.level}
                          </span>
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
    </section>
  );
};
