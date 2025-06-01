
import { portfolioContent } from "@/content/portfolio";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number and title - Sticky like About section */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-32">
              <div className="text-xs font-departure text-gray-400 mb-8 tracking-[0.2em] uppercase">{portfolioContent.sectionNumber}</div>
              <h2 className="text-5xl md:text-7xl font-cooper font-extralight text-gray-900 leading-[0.9] mb-8">
                {portfolioContent.title.main}
                <br />
                <span className="italic text-gray-600">{portfolioContent.title.accent}</span>
              </h2>
              <p className="font-inter text-gray-500 text-lg font-light leading-relaxed mb-8 max-w-sm">
                {portfolioContent.description}
              </p>
              <div className="w-24 h-px bg-gray-200 mt-8"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-32 pt-8">
              {portfolioContent.projects.map((project, index) => (
                <article key={project.id} className="group relative">
                  {/* Project with similar structure to About skills sections */}
                  <div className="relative">
                    <div className="absolute -left-12 top-0 w-2 h-24 bg-gradient-to-b from-gray-900 to-gray-400"></div>
                    <div className="pl-16">
                      {/* Project metadata */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-8">
                          <div className="font-departure text-xs text-gray-300 tracking-[0.2em] font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                              {project.category} — {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project title */}
                      <h3 className="text-3xl font-cooper font-light text-gray-900 mb-4 tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-xl font-cooper font-light italic text-gray-500 leading-relaxed mb-8">
                        {project.subtitle}
                      </p>
                      
                      {/* Project image */}
                      <div className="mb-8">
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm group-hover:shadow-2xl transition-all duration-700 max-w-2xl">
                          <img 
                            src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90`}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-lg text-gray-500 leading-[1.7] max-w-2xl font-inter font-light mb-8">
                        {project.description}
                      </p>
                      
                      {/* Technology Stack - Similar to About skills grid */}
                      <div className="mb-8">
                        <div className="font-departure text-xs text-gray-400 mb-4 tracking-[0.2em] uppercase">
                          Technology Stack
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-xl">
                          {project.technologies.map((tech, techIndex) => (
                            <div key={tech} className="group/tech hover:transform hover:translate-x-2 transition-all duration-300">
                              <div className="font-departure text-xs text-gray-300 mb-1 tracking-[0.2em]">
                                {String(techIndex + 1).padStart(2, '0')}
                              </div>
                              <div className="text-gray-900 font-inter font-medium text-lg group-hover/tech:text-gray-600 transition-colors duration-300">
                                {tech}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Link */}
                      <div className="pt-4">
                        <a 
                          href={project.link}
                          className="inline-flex items-center space-x-4 group/link"
                        >
                          <div className="relative">
                            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-500">
                              <span className="text-gray-600 group-hover/link:text-white text-sm transform group-hover/link:translate-x-1 transition-all duration-300">
                                →
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="font-inter font-medium text-gray-900 group-hover/link:text-gray-600 transition-colors duration-300">
                              {portfolioContent.cta.text}
                            </span>
                            <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                              {portfolioContent.cta.label}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
