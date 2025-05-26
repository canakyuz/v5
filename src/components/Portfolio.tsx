
const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Modern ve kullanıcı dostu bir e-ticaret çözümü",
    image: "photo-1460925895917-afdab827c52f",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Portfolyo Sitesi",
    description: "Minimal ve şık tasarım anlayışıyla hazırlanmış portfolyo",
    image: "photo-1498050108023-c5249f4df085",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#"
  },
  {
    id: 3,
    title: "Task Yönetim Uygulaması",
    description: "Ekip işbirliğini kolaylaştıran proje yönetim aracı",
    image: "photo-1581091226825-a6a2a5aee158",
    technologies: ["React", "Express", "PostgreSQL"],
    link: "#"
  },
  {
    id: 4,
    title: "Blog Platformu",
    description: "İçerik yönetimi ve blog yazarları için özel platform",
    image: "photo-1487058792275-0ad4aaf24ca7",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    link: "#"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Portfolyo
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors font-medium"
                >
                  Projeyi Gör →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
