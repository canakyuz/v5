
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
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <div className="text-sm font-mono text-gray-500 mb-4">03 — SEÇILMIŞ ÇALIŞMALAR</div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight max-w-4xl">
            Her proje, bir
            <br />
            <span className="italic">hikaye anlatır</span>
          </h2>
        </div>
        
        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:direction-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`col-span-12 lg:col-span-7 ${
                index % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <div className="relative group overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                    alt={project.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className={`col-span-12 lg:col-span-5 ${
                index % 2 === 1 ? 'lg:order-1' : ''
              }`}>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-mono text-gray-500 mb-2">
                      {String(index + 1).padStart(2, '0')} — {project.year}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 italic">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-sm font-mono text-gray-500 px-3 py-1 border border-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    <span className="font-medium mr-2">Projeyi İncele</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
