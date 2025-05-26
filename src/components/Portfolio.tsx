
const projects = [
  {
    id: 1,
    title: "Ethereal Commerce",
    subtitle: "E-ticaret Deneyimi",
    description: "Sınırları aşan alışveriş deneyimi için geliştirilmiş modern platform",
    image: "photo-1460925895917-afdab827c52f",
    technologies: ["React", "Node.js", "MongoDB"],
    year: "2024",
    category: "E-commerce",
    link: "#"
  },
  {
    id: 2,
    title: "Minimal Portfolio",
    subtitle: "Kişisel Marka",
    description: "Sanat ve teknolojinin buluşması ile yaratılmış kişisel portfolio",
    image: "photo-1498050108023-c5249f4df085",
    technologies: ["Next.js", "Tailwind", "Framer"],
    year: "2024",
    category: "Branding",
    link: "#"
  },
  {
    id: 3,
    title: "Flow Management",
    subtitle: "Proje Yönetimi",
    description: "Ekip işbirliğini yeniden tanımlayan akıllı proje yönetim sistemi",
    image: "photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Express", "PostgreSQL"],
    year: "2023",
    category: "Productivity",
    link: "#"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-40">
          <div className="text-xs font-departure text-gray-400 mb-8 tracking-[0.2em] uppercase">03 — Seçilmiş Çalışmalar</div>
          <h2 className="text-5xl md:text-8xl font-cooper font-extralight text-gray-900 leading-[0.9] max-w-5xl">
            Her proje, bir
            <br />
            <span className="italic text-gray-600">hikaye anlatır</span>
          </h2>
          <div className="w-32 h-px bg-gray-200 mt-12"></div>
        </div>
        
        {/* Projects - Ultra refined grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              {/* Project header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-8">
                  <div className="font-departure text-sm text-gray-300 tracking-[0.2em]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-departure text-gray-400 tracking-[0.2em] uppercase">
                    {project.category}
                  </div>
                </div>
                <div className="font-departure text-sm text-gray-400">
                  {project.year}
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-12 items-start">
                {/* Project title and info */}
                <div className="col-span-12 lg:col-span-5">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-cooper font-light text-gray-900 leading-[1.1] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-xl text-gray-500 italic font-cooper font-light">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 font-inter leading-[1.7] text-lg font-light">
                      {project.description}
                    </p>
                    
                    {/* Technologies - refined badges */}
                    <div className="pt-8">
                      <div className="font-departure text-xs text-gray-400 mb-6 tracking-[0.2em] uppercase">Technology Stack</div>
                      <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={tech} className="group/tech">
                            <span className="text-sm font-inter text-gray-600 group-hover/tech:text-gray-900 transition-colors">
                              {String(techIndex + 1).padStart(2, '0')} {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project link */}
                    <div className="pt-8">
                      <a 
                        href={project.link}
                        className="inline-flex items-center space-x-4 text-gray-900 hover:text-gray-600 transition-all duration-300 group/link"
                      >
                        <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-300">
                          <span className="text-gray-600 group-hover/link:text-white text-sm transform group-hover/link:translate-x-0.5 transition-all duration-300">→</span>
                        </div>
                        <span className="font-inter font-medium">Projeyi İncele</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="relative overflow-hidden bg-gray-50 rounded-sm">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80`}
                      alt={project.title}
                      className="w-full h-[350px] lg:h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects link */}
        <div className="mt-40 text-center">
          <div className="inline-flex items-center space-x-8 group cursor-pointer">
            <div className="w-24 h-px bg-gray-200 group-hover:bg-gray-900 transition-colors duration-500"></div>
            <span className="font-departure text-sm text-gray-400 group-hover:text-gray-900 transition-colors duration-500 tracking-[0.2em] uppercase">
              Daha Fazla Proje
            </span>
            <div className="w-24 h-px bg-gray-200 group-hover:bg-gray-900 transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
