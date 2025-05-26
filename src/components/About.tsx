
export const About = () => {
  return (
    <section id="about" className="py-40 px-6 bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-32">
              <div className="text-xs font-departure text-gray-400 mb-8 tracking-[0.2em] uppercase">02 — Hakkımda</div>
              <h2 className="text-5xl md:text-7xl font-cooper font-extralight text-gray-900 leading-[0.9] mb-8">
                Yaratıcılık
                <br />
                <span className="italic text-gray-600">&amp; Kod</span>
              </h2>
              <div className="w-24 h-px bg-gray-200 mt-8"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-32">
              {/* Main description */}
              <div className="space-y-12 pt-8">
                <p className="text-2xl md:text-3xl text-gray-800 leading-[1.4] font-cooper font-light max-w-4xl">
                  Teknoloji ve tasarım arasındaki sınırları bulanıklaştırarak, 
                  <em className="italic font-normal text-gray-600"> kullanıcı deneyimini yeniden tanımlayan</em> çözümler geliştiriyorum.
                </p>
                
                <p className="text-lg text-gray-500 leading-[1.7] max-w-2xl font-inter font-light">
                  Her proje benim için yeni bir keşif yolculuğu. Minimal tasarım prensipleriyle 
                  modern teknolojileri harmanlayarak, hem işlevsel hem de estetik değer taşıyan 
                  dijital ürünler yaratıyorum.
                </p>
              </div>
              
              {/* Skills - Ultra refined approach */}
              <div className="space-y-24">
                <div className="relative">
                  <div className="absolute -left-12 top-0 w-2 h-24 bg-gradient-to-b from-gray-900 to-gray-400"></div>
                  <div className="pl-16">
                    <h3 className="text-3xl font-cooper font-light text-gray-900 mb-12 tracking-wide">Frontend Development</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">01</div>
                        <div className="text-gray-900 font-inter font-medium text-lg">React & Next.js</div>
                        <div className="text-sm text-gray-400 mt-1">Modern UI Framework</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">02</div>
                        <div className="text-gray-900 font-inter font-medium text-lg">TypeScript</div>
                        <div className="text-sm text-gray-400 mt-1">Type Safety</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">03</div>
                        <div className="text-gray-900 font-inter font-medium text-lg">Tailwind CSS</div>
                        <div className="text-sm text-gray-400 mt-1">Utility-First Styling</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">04</div>
                        <div className="text-gray-900 font-inter font-medium text-lg">Framer Motion</div>
                        <div className="text-sm text-gray-400 mt-1">Animation & Interaction</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-12 top-0 w-2 h-24 bg-gradient-to-b from-gray-400 to-gray-200"></div>
                  <div className="pl-16">
                    <h3 className="text-3xl font-cooper font-light text-gray-900 mb-12 tracking-wide">Backend Development</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">01</div>
                        <div className="text-gray-700 font-inter font-medium text-lg">Node.js</div>
                        <div className="text-sm text-gray-400 mt-1">Server Runtime</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">02</div>
                        <div className="text-gray-700 font-inter font-medium text-lg">Python</div>
                        <div className="text-sm text-gray-400 mt-1">Data & AI</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">03</div>
                        <div className="text-gray-700 font-inter font-medium text-lg">PostgreSQL</div>
                        <div className="text-sm text-gray-400 mt-1">Database</div>
                      </div>
                      <div className="group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="font-departure text-xs text-gray-300 mb-2 tracking-[0.2em]">04</div>
                        <div className="text-gray-700 font-inter font-medium text-lg">GraphQL</div>
                        <div className="text-sm text-gray-400 mt-1">API Layer</div>
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
