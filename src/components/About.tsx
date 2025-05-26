
export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-32">
              <div className="text-sm font-mono text-gray-500 mb-4">02 — HAKKIMDA</div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Yaratıcılık
                <br />
                <span className="italic">& Kod</span>
              </h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="space-y-16">
              {/* Main description */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  Teknoloji ve tasarım arasındaki sınırları bulanıklaştırarak, 
                  <em className="italic font-normal"> kullanıcı deneyimini yeniden tanımlayan</em> çözümler geliştiriyorum.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Her proje benim için yeni bir keşif yolculuğu. Minimal tasarım prensipleriyle 
                  modern teknolojileri harmanlayarak, hem işlevsel hem de estetik değer taşıyan 
                  dijital ürünler yaratıyorum.
                </p>
              </div>
              
              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-gray-200">
                <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-6 tracking-wider">FRONTEND CRAFT</h3>
                  <div className="space-y-3">
                    {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mr-4"></div>
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-mono text-gray-500 mb-6 tracking-wider">BACKEND SYSTEMS</h3>
                  <div className="space-y-3">
                    {['Node.js', 'Python', 'PostgreSQL', 'GraphQL'].map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                        <span className="text-gray-700">{skill}</span>
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
