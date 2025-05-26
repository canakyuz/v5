
export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-32">
              <div className="text-sm font-mono text-gray-500 mb-4">02 — HAKKIMDA</div>
              <h2 className="text-4xl md:text-5xl font-cooper font-light text-gray-900 leading-tight">
                Yaratıcılık
                <br />
                <span className="italic">& Kod</span>
              </h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="space-y-24">
              {/* Main description */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-cooper font-light">
                  Teknoloji ve tasarım arasındaki sınırları bulanıklaştırarak, 
                  <em className="italic font-normal"> kullanıcı deneyimini yeniden tanımlayan</em> çözümler geliştiriyorum.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-inter">
                  Her proje benim için yeni bir keşif yolculuğu. Minimal tasarım prensipleriyle 
                  modern teknolojileri harmanlayarak, hem işlevsel hem de estetik değer taşıyan 
                  dijital ürünler yaratıyorum.
                </p>
              </div>
              
              {/* Skills - Ultra minimalist approach */}
              <div className="space-y-20">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gray-900"></div>
                  <div className="pl-8">
                    <h3 className="text-2xl font-cooper font-light text-gray-900 mb-8">Frontend</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">01</div>
                        <div className="text-gray-900 font-inter font-medium">React & Next.js</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">02</div>
                        <div className="text-gray-900 font-inter font-medium">TypeScript</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">03</div>
                        <div className="text-gray-900 font-inter font-medium">Tailwind CSS</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">04</div>
                        <div className="text-gray-900 font-inter font-medium">Framer Motion</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-1 h-16 bg-gray-400"></div>
                  <div className="pl-8">
                    <h3 className="text-2xl font-cooper font-light text-gray-900 mb-8">Backend</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">01</div>
                        <div className="text-gray-700 font-inter">Node.js</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">02</div>
                        <div className="text-gray-700 font-inter">Python</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">03</div>
                        <div className="text-gray-700 font-inter">PostgreSQL</div>
                      </div>
                      <div className="group">
                        <div className="font-mono text-xs text-gray-400 mb-1">04</div>
                        <div className="text-gray-700 font-inter">GraphQL</div>
                      </div>
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
