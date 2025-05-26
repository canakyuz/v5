
const projects = [
  {
    id: 1,
    title: "Ethereal Commerce",
    subtitle: "E-ticaret Deneyimi",
    description: "Sınırları aşan alışveriş deneyimi",
    image: "photo-1460925895917-afdab827c52f",
    technologies: ["React", "Node.js", "MongoDB"],
    year: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Minimal Portfolio",
    subtitle: "Kişisel Marka",
    description: "Sanat ve teknolojinin buluşması",
    image: "photo-1498050108023-c5249f4df085",
    technologies: ["Next.js", "Tailwind", "Framer"],
    year: "2024",
    link: "#"
  },
  {
    id: 3,
    title: "Flow Management",
    subtitle: "Proje Yönetimi",
    description: "Ekip işbirliğini yeniden tanımlar",
    image: "photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Express", "PostgreSQL"],
    year: "2023",
    link: "#"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-32">
          <div className="text-sm font-departure text-gray-500 mb-4 tracking-wider">03 — SEÇILMIŞ ÇALIŞMALAR</div>
          <h2 className="text-4xl md:text-6xl font-cooper font-light text-gray-900 leading-tight max-w-4xl">
            Her proje, bir
            <br />
            <span className="italic">hikaye anlatır</span>
          </h2>
        </div>
        
        {/* Projects - Ultra minimalist grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              {/* Project number and year */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div className="font-departure text-sm text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="font-departure text-sm text-gray-400">
                  {project.year}
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Project title and info */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-cooper font-light text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 italic font-cooper">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700 font-inter leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    {/* Technologies - minimal badges */}
                    <div className="pt-4">
                      <div className="font-departure text-xs text-gray-400 mb-3 tracking-wider">STACK</div>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={tech} className="text-sm font-inter text-gray-600">
                            {String(techIndex + 1).padStart(2, '0')} {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="relative overflow-hidden bg-gray-50">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                      alt={project.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <span className="text-sm font-departure">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects link */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-4 group cursor-pointer">
            <div className="w-16 h-px bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
            <span className="font-departure text-sm text-gray-500 group-hover:text-gray-900 transition-colors duration-300 tracking-wider">
              DAHA FAZLA PROJE
            </span>
            <div className="w-16 h-px bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
