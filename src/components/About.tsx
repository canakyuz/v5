
import { aboutContent } from "@/content/about";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24">
              <div className="text-xs font-departure text-gray-400 mb-6 tracking-[0.2em] uppercase">{aboutContent.sectionNumber}</div>
              <h2 className="text-4xl md:text-6xl font-cooper font-extralight text-gray-900 leading-[0.9] mb-6">
                {aboutContent.title.main}
                <br />
                <span className="italic text-gray-600">{aboutContent.title.accent}</span>
              </h2>
              <div className="w-16 h-px bg-gray-200 mt-6"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-16">
              {/* Main description */}
              <div className="space-y-6 pt-4">
                <p className="text-xl md:text-2xl text-gray-800 leading-[1.4] font-cooper font-light max-w-3xl">
                  {aboutContent.description.main}
                </p>
                
                <p className="text-base text-gray-500 leading-[1.6] max-w-2xl font-inter font-light">
                  {aboutContent.description.secondary}
                </p>
              </div>
              
              {/* Skills - Compact 3-column layout */}
              <div className="space-y-12">
                {/* Core Technologies */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-gray-900 to-gray-600"></div>
                  <div className="pl-12">
                    <h3 className="text-2xl font-cooper font-light text-gray-900 mb-8 tracking-wide">{aboutContent.skills.frontend.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                      {aboutContent.skills.frontend.items.map((skill, index) => (
                        <div key={skill.name} className="group hover:transform hover:translate-x-1 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-departure text-[10px] text-gray-300 tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</div>
                            <span className="text-[10px] font-departure text-gray-400 bg-gray-100 px-2 py-1 rounded uppercase tracking-wide">
                              {skill.level}
                            </span>
                          </div>
                          <div className="text-gray-900 font-inter font-medium text-base mb-1">{skill.name}</div>
                          <div className="text-xs text-gray-400 leading-relaxed">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Tools & Methodologies */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-gray-600 to-gray-400"></div>
                  <div className="pl-12">
                    <h3 className="text-2xl font-cooper font-light text-gray-900 mb-8 tracking-wide">{aboutContent.skills.tools.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                      {aboutContent.skills.tools.items.map((skill, index) => (
                        <div key={skill.name} className="group hover:transform hover:translate-x-1 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-departure text-[10px] text-gray-300 tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</div>
                            <span className="text-[10px] font-departure text-gray-400 bg-gray-100 px-2 py-1 rounded uppercase tracking-wide">
                              {skill.level}
                            </span>
                          </div>
                          <div className="text-gray-700 font-inter font-medium text-base mb-1">{skill.name}</div>
                          <div className="text-xs text-gray-400 leading-relaxed">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture & Best Practices */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gradient-to-b from-gray-400 to-gray-200"></div>
                  <div className="pl-12">
                    <h3 className="text-2xl font-cooper font-light text-gray-900 mb-8 tracking-wide">{aboutContent.skills.architecture.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                      {aboutContent.skills.architecture.items.map((skill, index) => (
                        <div key={skill.name} className="group hover:transform hover:translate-x-1 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-departure text-[10px] text-gray-300 tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</div>
                            <span className="text-[10px] font-departure text-gray-400 bg-gray-100 px-2 py-1 rounded uppercase tracking-wide">
                              {skill.level}
                            </span>
                          </div>
                          <div className="text-gray-700 font-inter font-medium text-base mb-1">{skill.name}</div>
                          <div className="text-xs text-gray-400 leading-relaxed">{skill.description}</div>
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
