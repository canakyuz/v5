
import { useParams, useNavigate } from "react-router-dom";
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { useState, useEffect } from "react";

export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fonts, colors, typography, spacing } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);

  const post = postsContent.posts.find(p => p.id === id);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Yazı Bulunamadı</h1>
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

          <article className="max-w-4xl mx-auto">
            <header className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-px bg-blue-500/60" />
                <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                  <span className={`${fonts.mono} text-sm text-blue-400 tracking-wide uppercase`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light text-white leading-[0.9] mb-6`}>
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-blue-400" />
                  <span>Bekircan Akyüz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-blue-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-blue-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-gray-800/40 text-gray-400 text-sm border border-gray-700/40 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-400 leading-relaxed`}>
                {post.excerpt}
              </p>
            </header>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-6 mb-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-white">Giriş</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Bu yazıda, {post.title.toLowerCase()} konusunu detaylı bir şekilde ele alacağız. 
                    Modern web geliştirme dünyasında bu konu oldukça önemli bir yere sahip ve günümüzde 
                    birçok geliştirici tarafından aktif olarak kullanılmaktadır.
                  </p>
                  
                  <h2 className="text-white">Ana Konular</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {post.excerpt} Bu yaklaşım, hem performans hem de kullanıcı deneyimi açısından 
                    önemli avantajlar sağlamaktadır. Özellikle büyük ölçekli projelerde bu yöntemlerin 
                    uygulanması kritik önem taşımaktadır.
                  </p>

                  <h3 className="text-white">Temel Prensipler</h3>
                  <ul className="text-gray-400 mb-6">
                    <li>Modern teknolojilerin etkin kullanımı</li>
                    <li>Performans optimizasyonu</li>
                    <li>Kullanıcı deneyimi odaklı yaklaşım</li>
                    <li>Sürdürülebilir kod yapısı</li>
                  </ul>

                  <h2 className="text-white">Sonuç</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Bu yazıda ele aldığımız konular, modern web geliştirme süreçlerinde oldukça önemli 
                    bir yere sahiptir. Bu yöntemleri projelerinizde uygulayarak daha kaliteli ve 
                    sürdürülebilir çözümler geliştirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-6`}>
                İlgili Yazılar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postsContent.posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <div 
                    key={relatedPost.id}
                    className="bg-gray-900/30 border border-gray-800/60 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md mb-3 inline-block">
                      <span className={`${fonts.mono} text-xs text-blue-400 uppercase`}>
                        {relatedPost.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">{relatedPost.excerpt.substring(0, 100)}...</p>
                    <button 
                      onClick={() => navigate(`/post/${relatedPost.id}`)}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Devamını Oku →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
