
export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Hakkımda
          </h2>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Teknoloji ve tasarım arasındaki köprüyü kurmaya odaklanan bir geliştiriciyim. 
              Modern web teknolojileri kullanarak kullanıcı deneyimini ön planda tutan 
              çözümler geliştiriyorum.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Her proje benim için yeni bir öğrenme fırsatı ve yaratıcı bir meydan okuma. 
              Detaylara verdiğim önem ve mükemmeliyetçi yaklaşımımla her işi en iyi şekilde 
              tamamlamayı hedefliyorum.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Backend</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Profil Fotoğrafı</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
