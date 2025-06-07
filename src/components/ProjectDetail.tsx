
import { useParams, useNavigate } from "react-router-dom";
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, ExternalLink, Calendar, Tag, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fonts, colors, typography, spacing } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const project = portfolioContent.projects.find(p => p.id === parseInt(id || "0"));

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proje Bulunamadı</h1>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-600/20 to-rose-600/20 border border-yellow-500/30 hover:border-yellow-500/50 px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={16} />
            <span className="text-yellow-300">Ana Sayfaya Dön</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(234, 179, 8, 0.15) 0%, rgba(244, 63, 94, 0.1) 30%, rgba(34, 197, 94, 0.05) 60%, transparent 80%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-rose-900/5 to-emerald-900/10" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className={`relative z-10 ${spacing.section.padding} ${spacing.content.padding}`}>
        <div className={spacing.content.maxWidth}>
          {/* Back Button */}
          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-3 group bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-yellow-500/50 px-6 py-3 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-2px]"
            >
              <ArrowLeft size={16} className="text-yellow-400 group-hover:text-white group-hover:transform group-hover:translate-x-[-2px] transition-all duration-300" />
              <span className="text-yellow-300 group-hover:text-white transition-colors duration-300">Geri Dön</span>
            </button>
          </div>

          {/* Project Header */}
          <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-rose-500" />
              <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 px-4 py-2 rounded-full">
                <span className={`${fonts.mono} text-sm text-yellow-300 tracking-[0.2em] uppercase font-medium`}>
                  Proje Detayı
                </span>
              </div>
            </div>
            
            <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light text-gradient-elegant leading-[0.9] mb-6`}>
              {project.title}
            </h1>
            
            <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-300 leading-relaxed max-w-3xl mb-8`}>
              {project.description}
            </p>

            {/* Project Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-yellow-400" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag size={16} className="text-rose-400" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye size={16} className="text-emerald-400" />
                <span>Proje Detayları</span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative group rounded-2xl overflow-hidden bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-yellow-500/50 transition-all duration-500">
              <img 
                src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                alt={project.title}
                className="w-full h-[60vh] object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6">
                <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 px-4 py-2 rounded-full">
                  <span className={`${fonts.mono} text-sm text-yellow-300 tracking-[0.1em] uppercase`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Technologies */}
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-6`}>
                Kullanılan Teknolojiler
              </h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={tech}
                    className="flex items-center space-x-3 p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl hover:border-rose-500/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Features */}
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-6`}>
                Özellikler
              </h3>
              <div className="space-y-3">
                {["Modern UI/UX Tasarım", "Responsive Design", "Performance Optimizasyonu", "SEO Uyumlu"].map((feature, index) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-3 p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-6`}>
                Proje İstatistikleri
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl">
                  <div className="text-2xl font-bold text-gradient-elegant mb-1">100%</div>
                  <div className="text-sm text-gray-400">Tamamlanma Oranı</div>
                </div>
                <div className="p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl">
                  <div className="text-2xl font-bold text-gradient-elegant mb-1">{project.year}</div>
                  <div className="text-sm text-gray-400">Proje Yılı</div>
                </div>
                <div className="p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl">
                  <div className="text-2xl font-bold text-gradient-elegant mb-1">A+</div>
                  <div className="text-sm text-gray-400">Kalite Puanı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-8">
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-6`}>
                Proje Hakkında
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bu proje, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir web uygulamasıdır. 
                  Kullanıcı deneyimini ön planda tutarak, hem görsel hem de fonksiyonel açıdan mükemmel bir sonuç elde edilmiştir.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Projenin geliştirilmesi sürecinde, en güncel teknolojiler ve best practice'ler kullanılmıştır. 
                  Responsive tasarım prensiplerine uygun olarak geliştirilmiş olup, tüm cihazlarda sorunsuz çalışmaktadır.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Performance optimizasyonu ve SEO uyumluluğu göz önünde bulundurularak geliştirilmiş bu proje, 
                  modern web standartlarını karşılamaktadır.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 group bg-gradient-to-r from-yellow-600/20 to-rose-600/20 border border-yellow-500/30 hover:border-yellow-500/50 px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
            >
              <span className="text-lg font-medium text-gradient-elegant">
                Projeyi İncele
              </span>
              <ExternalLink 
                size={20} 
                className="text-yellow-400 group-hover:text-white group-hover:transform group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
