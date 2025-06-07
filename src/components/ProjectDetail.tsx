
import { useParams, useNavigate } from "react-router-dom";
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fonts, colors, typography, spacing } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);

  const project = portfolioContent.projects.find(p => p.id === parseInt(id || "0"));

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Proje Bulunamadı</h1>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={16} />
            <span className="text-blue-400">Ana Sayfaya Dön</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <div className={`${spacing.section.padding} ${spacing.content.padding}`}>
        <div className={spacing.content.maxWidth}>
          <div className={`mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-2 bg-gray-900/40 border border-gray-800/60 hover:border-blue-500/40 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-blue-400" />
              <span className="text-gray-400">Geri Dön</span>
            </button>
          </div>

          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-blue-500/60" />
              <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                <span className={`${fonts.mono} text-sm text-blue-400 tracking-wide uppercase`}>
                  Proje Detayı
                </span>
              </div>
            </div>
            
            <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light text-white leading-[0.9] mb-6`}>
              {project.title}
            </h1>
            
            <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-400 leading-relaxed max-w-3xl mb-6`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-blue-400" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag size={16} className="text-blue-400" />
                <span>{project.category}</span>
              </div>
            </div>
          </div>

          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-xl overflow-hidden bg-gray-900/30 border border-gray-800/60">
              <img 
                src={`https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
                alt={project.title}
                className="w-full h-[60vh] object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                  <span className={`${fonts.mono} text-sm text-blue-400 uppercase`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-4`}>
                Teknolojiler
              </h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="flex items-center space-x-2 p-3 bg-gray-900/30 border border-gray-800/60 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-4`}>
                Özellikler
              </h3>
              <div className="space-y-2">
                {["Modern UI/UX", "Responsive", "Performance", "SEO"].map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-2 p-3 bg-gray-900/30 border border-gray-800/60 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-4`}>
                İstatistikler
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-900/30 border border-gray-800/60 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-500">Tamamlandı</div>
                </div>
                <div className="p-3 bg-gray-900/30 border border-gray-800/60 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">{project.year}</div>
                  <div className="text-sm text-gray-500">Proje Yılı</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-6">
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-4`}>
                Proje Hakkında
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed mb-4">
                  Bu proje, modern web teknolojileri kullanılarak geliştirilmiş kapsamlı bir web uygulamasıdır. 
                  Kullanıcı deneyimini ön planda tutarak, hem görsel hem de fonksiyonel açıdan mükemmel bir sonuç elde edilmiştir.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Performance optimizasyonu ve SEO uyumluluğu göz önünde bulundurularak geliştirilmiş bu proje, 
                  modern web standartlarını karşılamaktadır.
                </p>
              </div>
            </div>
          </div>

          <div className={`text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 px-6 py-3 rounded-lg transition-all duration-300"
            >
              <span className="text-blue-400">
                Projeyi İncele
              </span>
              <ExternalLink size={16} className="text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
