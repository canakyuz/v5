
const projects = [
  {
    id: 1,
    title: "Ethereal Commerce",
    subtitle: "E-ticaret Deneyimi",
    description: "Sınırları aşan alışveriş deneyimi için geliştirilmiş modern platform. Kullanıcı deneyimini ön planda tutan, performans odaklı çözümler.",
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
    description: "Sanat ve teknolojinin buluşması ile yaratılmış kişisel portfolio. Minimalist tasarım anlayışı ile güçlü görsel hikaye.",
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
    description: "Ekip işbirliğini yeniden tanımlayan akıllı proje yönetim sistemi. Verimlilik ve kullanıcı deneyimini harmanlayan çözüm.",
    image: "photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Express", "PostgreSQL"],
    year: "2023",
    category: "Productivity",
    link: "#"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Refined Header */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <div className="font-departure text-xs text-gray-400 tracking-[0.3em] uppercase">
              03 — Seçilmiş Çalışmalar
            </div>
            <div className="flex-1 h-px bg-gray-200 ml-8"></div>
          </div>
          
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-cooper font-light text-gray-900 leading-[0.85] tracking-tight">
                Her proje,
                <br />
                <span className="italic font-normal text-gray-600">bir hikaye</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="font-inter text-gray-500 text-lg font-light leading-relaxed">
                Teknoloji ile yaratıcılığın buluştuğu noktada, 
                her detayın özenle tasarlandığı projeler.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <article key={project.id} className="group relative">
              {/* Project Metadata */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div className="flex items-center space-x-12">
                  <div className="font-departure text-sm text-gray-300 tracking-[0.2em] font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="font-departure text-sm text-gray-400 tracking-wider">
                  {project.year}
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Project Content */}
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                  <div className="space-y-8">
                    {/* Title Section */}
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-cooper font-light text-gray-900 leading-[1.1] tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xl font-cooper font-light italic text-gray-500 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 font-inter leading-[1.8] text-lg font-light max-w-xl">
                      {project.description}
                    </p>
                    
                    {/* Technology Stack */}
                    <div className="pt-6">
                      <div className="font-departure text-xs text-gray-400 mb-4 tracking-[0.2em] uppercase">
                        Technology Stack
                      </div>
                      <div className="flex flex-wrap gap-6">
                        {project.technologies.map((tech, techIndex) => (
                          <div key={tech} className="group/tech">
                            <span className="font-inter text-sm text-gray-600 group-hover/tech:text-gray-900 transition-colors duration-300 font-medium">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Link */}
                    <div className="pt-8">
                      <a 
                        href={project.link}
                        className="inline-flex items-center space-x-4 group/link"
                      >
                        <div className="relative">
                          <div className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-500">
                            <span className="text-gray-600 group-hover/link:text-white text-lg transform group-hover/link:translate-x-1 transition-all duration-300">
                              →
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="font-inter font-medium text-gray-900 group-hover/link:text-gray-600 transition-colors duration-300">
                            Projeyi İncele
                          </span>
                          <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                            View Project
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 rounded-sm group-hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-white font-inter text-sm">
                        {project.category} — {project.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center space-x-8 group cursor-pointer">
            <div className="w-16 h-px bg-gray-200 group-hover:bg-gray-900 transition-all duration-500"></div>
            <div className="text-center">
              <span className="font-departure text-sm text-gray-400 group-hover:text-gray-900 transition-colors duration-500 tracking-[0.2em] uppercase block">
                Daha Fazla Çalışma
              </span>
              <span className="font-inter text-xs text-gray-300 group-hover:text-gray-600 transition-colors duration-500">
                Coming Soon
              </span>
            </div>
            <div className="w-16 h-px bg-gray-200 group-hover:bg-gray-900 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
