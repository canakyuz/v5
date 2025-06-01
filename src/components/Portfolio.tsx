
import { portfolioContent } from "@/content/portfolio";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-40 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section number and title - Responsive adjustments */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-departure text-gray-400 mb-6 md:mb-8 tracking-[0.2em] uppercase">{portfolioContent.sectionNumber}</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-cooper font-extralight text-gray-900 leading-[0.9] mb-6 md:mb-8">
                {portfolioContent.title.main}
                <br />
                <span className="italic text-gray-600">{portfolioContent.title.accent}</span>
              </h2>
              <p className="font-inter text-gray-500 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8 max-w-sm">
                {portfolioContent.description}
              </p>
              <div className="w-24 h-px bg-gray-200 mt-6 md:mt-8"></div>
            </div>
          </div>
          
          {/* Content - Better mobile spacing */}
          <div className="lg:col-span-8">
            <div className="space-y-16 md:space-y-24 lg:space-y-32 pt-4 md:pt-8">
              {portfolioContent.projects.map((project, index) => (
                <article key={project.id} className="group relative">
                  <div className="relative">
                    {/* Mobile-friendly indicator */}
                    <div className="absolute -left-4 md:-left-8 lg:-left-12 top-0 w-1 md:w-2 h-16 md:h-24 bg-gradient-to-b from-gray-900 to-gray-400"></div>
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      {/* Project metadata - Better mobile layout */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-4 md:space-x-8">
                          <div className="font-departure text-xs text-gray-300 tracking-[0.2em] font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                              {project.category} — {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project title - Responsive text */}
                      <h3 className="text-2xl md:text-3xl font-cooper font-light text-gray-900 mb-3 md:mb-4 tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-xl font-cooper font-light italic text-gray-500 leading-relaxed mb-6 md:mb-8">
                        {project.subtitle}
                      </p>
                      
                      {/* Project image - Better responsive sizing */}
                      <div className="mb-6 md:mb-8">
                        <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-50 rounded-sm group-hover:shadow-2xl transition-all duration-700 w-full max-w-none md:max-w-2xl">
                          <img 
                            src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=95`}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                        </div>
                      </div>
                      
                      {/* Description - Better mobile text */}
                      <p className="text-base md:text-lg text-gray-500 leading-[1.7] max-w-full md:max-w-2xl font-inter font-light mb-6 md:mb-8">
                        {project.description}
                      </p>
                      
                      {/* Technology Stack - Responsive grid */}
                      <div className="mb-6 md:mb-8">
                        <div className="font-departure text-xs text-gray-400 mb-3 md:mb-4 tracking-[0.2em] uppercase">
                          Technology Stack
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-3 md:gap-y-4 max-w-full md:max-w-xl">
                          {project.technologies.map((tech, techIndex) => (
                            <div key={tech} className="group/tech hover:transform hover:translate-x-2 transition-all duration-300">
                              <div className="font-departure text-xs text-gray-300 mb-1 tracking-[0.2em]">
                                {String(techIndex + 1).padStart(2, '0')}
                              </div>
                              <div className="text-gray-900 font-inter font-medium text-base md:text-lg group-hover/tech:text-gray-600 transition-colors duration-300">
                                {tech}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project Link - Mobile-friendly */}
                      <div className="pt-3 md:pt-4">
                        <a 
                          href={project.link}
                          className="inline-flex items-center space-x-3 md:space-x-4 group/link"
                        >
                          <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-500">
                              <span className="text-gray-600 group-hover/link:text-white text-sm transform group-hover/link:translate-x-1 transition-all duration-300">
                                →
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="font-inter font-medium text-gray-900 group-hover/link:text-gray-600 transition-colors duration-300 text-sm md:text-base">
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
