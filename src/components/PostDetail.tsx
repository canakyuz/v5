import { useParams, useNavigate } from "react-router-dom";
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Heart, User } from "lucide-react";
import { useState, useEffect } from "react";

export const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fonts, colors, typography, spacing } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const post = postsContent.posts.find(p => p.id === id);

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

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Yazı Bulunamadı</h1>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 px-6 py-3 rounded-xl transition-all duration-300"
          >
            <ArrowLeft size={16} />
            <span className="text-blue-300">Ana Sayfaya Dön</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 relative">
      <div className={`relative z-10 ${spacing.section.padding} ${spacing.content.padding}`}>
        <div className={spacing.content.maxWidth}>
          {/* Back Button */}
          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-3 group bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 hover:border-blue-500/50 px-6 py-3 rounded-xl transition-all duration-300 hover:transform hover:translate-y-[-2px]"
            >
              <ArrowLeft size={16} className="text-blue-400 group-hover:text-white group-hover:transform group-hover:translate-x-[-2px] transition-all duration-300" />
              <span className="text-blue-300 group-hover:text-white transition-colors duration-300">Geri Dön</span>
            </button>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full">
                  <span className={`${fonts.mono} text-sm text-blue-300 tracking-[0.2em] uppercase font-medium`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <h1 className={`${typography.hero.subtitle} ${fonts.primary} font-light text-gradient-elegant leading-[0.9] mb-8`}>
                {post.title}
              </h1>
              
              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-blue-400" />
                  <span>Bekircan Akyüz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-purple-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-blue-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-800/60 text-gray-300 text-sm font-medium border border-gray-700/60 rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Post Excerpt */}
              <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-300 leading-relaxed mb-8`}>
                {post.excerpt}
              </p>

              {/* Social Actions */}
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center space-x-2 group bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 px-4 py-2 rounded-lg transition-all duration-300">
                  <Heart size={16} className="text-red-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm text-red-300 group-hover:text-white transition-colors duration-300">Beğen</span>
                </button>
                <button className="inline-flex items-center space-x-2 group bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 px-4 py-2 rounded-lg transition-all duration-300">
                  <Share2 size={16} className="text-blue-400 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm text-blue-300 group-hover:text-white transition-colors duration-300">Paylaş</span>
                </button>
              </div>
            </header>

            {/* Article Content */}
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-2xl p-8 mb-16">
                <div className="prose prose-invert prose-lg max-w-none">
                  <h2>Giriş</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Bu yazıda, {post.title.toLowerCase()} konusunu detaylı bir şekilde ele alacağız. 
                    Modern web geliştirme dünyasında bu konu oldukça önemli bir yere sahip ve günümüzde 
                    birçok geliştirici tarafından aktif olarak kullanılmaktadır.
                  </p>
                  
                  <h2>Ana Konular</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {post.excerpt} Bu yaklaşım, hem performans hem de kullanıcı deneyimi açısından 
                    önemli avantajlar sağlamaktadır. Özellikle büyük ölçekli projelerde bu yöntemlerin 
                    uygulanması kritik önem taşımaktadır.
                  </p>

                  <h3>Temel Prensipler</h3>
                  <ul className="text-gray-300 mb-6">
                    <li>Modern teknolojilerin etkin kullanımı</li>
                    <li>Performans optimizasyonu</li>
                    <li>Kullanıcı deneyimi odaklı yaklaşım</li>
                    <li>Sürdürülebilir kod yapısı</li>
                  </ul>

                  <h3>Uygulama Örnekleri</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Gerçek dünya projelerinde bu kavramların nasıl uygulandığını görmek için 
                    çeşitli örnekleri inceleyebiliriz. Bu örnekler, teorik bilgilerin pratikte 
                    nasıl kullanıldığını anlamamıza yardımcı olacaktır.
                  </p>

                  <h2>Sonuç</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Bu yazıda ele aldığımız konular, modern web geliştirme süreçlerinde oldukça önemli 
                    bir yere sahiptir. Bu yöntemleri projelerinizde uygulayarak daha kaliteli ve 
                    sürdürülebilir çözümler geliştirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${typography.post.title} ${fonts.primary} font-medium text-white mb-8`}>
                İlgili Yazılar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {postsContent.posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <div 
                    key={relatedPost.id}
                    className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-2 py-1 rounded-full">
                        <span className={`${fonts.mono} text-xs text-blue-300 tracking-[0.1em] uppercase`}>
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2 group-hover:text-gradient-elegant transition-colors duration-300">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4">{relatedPost.excerpt.substring(0, 100)}...</p>
                    <button 
                      onClick={() => navigate(`/post/${relatedPost.id}`)}
                      className="text-sm text-blue-400 hover:text-white transition-colors duration-300"
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
