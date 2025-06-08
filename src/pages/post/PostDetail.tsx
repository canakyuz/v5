import { useParams, useNavigate } from "react-router-dom";
import { postsContent } from "@/content/posts";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      <div className="min-h-screen bg-gray-950 dark:bg-gray-950 light:bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Post Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={16} />
            <span className="text-blue-400">Return to Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 dark:bg-gray-950 light:bg-gray-50">
      <div className={`${spacing.section.padding} ${spacing.content.padding}`}>
        <div className={spacing.content.maxWidth}>
          <div className={`mb-8 mt-16 relative z-10 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-2 bg-gray-900/40 dark:bg-gray-900/40 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 hover:border-blue-500/40 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ArrowLeft size={16} className="text-blue-400" />
              <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">Go Back</span>
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
              
              <h1 className={`${typography.section.title} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 leading-tight mb-6`}>
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-blue-400" />
                  <span>Can Akyüz</span>
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
                    className="px-2 py-1 bg-gray-800/40 dark:bg-gray-800/40 light:bg-gray-100 text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm border border-gray-700/40 dark:border-gray-700/40 light:border-gray-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed`}>
                {post.excerpt}
              </p>
            </header>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-xl p-6 mb-12">
                <div className="prose prose-invert dark:prose-invert light:prose max-w-none">
                  <h2 className="text-2xl font-medium text-white dark:text-white light:text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-6">
                    In this article, we will explore {post.title.toLowerCase()} in detail. 
                    This topic holds significant importance in the modern web development world and is 
                    actively used by many developers today.
                  </p>
                  
                  <h2 className="text-2xl font-medium text-white dark:text-white light:text-gray-900 mb-4">Main Topics</h2>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-6">
                    {post.excerpt} This approach provides important advantages in terms of both performance 
                    and user experience. Implementing these methods is especially critical in large-scale projects.
                  </p>

                  <h3 className="text-xl font-medium text-white dark:text-white light:text-gray-900 mb-3">Core Principles</h3>
                  <ul className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6 pl-5 space-y-2">
                    <li>Effective use of modern technologies</li>
                    <li>Performance optimization</li>
                    <li>User experience-focused approach</li>
                    <li>Sustainable code structure</li>
                  </ul>

                  <h2 className="text-2xl font-medium text-white dark:text-white light:text-gray-900 mb-4">Conclusion</h2>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                    The topics covered in this article hold significant importance in modern web development processes. 
                    By implementing these methods in your projects, you can develop higher quality and 
                    more sustainable solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-4`}>
                Related Posts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {postsContent.posts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                  <div 
                    key={relatedPost.id}
                    className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-xl p-4 hover:border-blue-500/40 transition-all duration-300"
                  >
                    <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-md mb-3 inline-block">
                      <span className={`${fonts.mono} text-xs text-blue-400 uppercase`}>
                        {relatedPost.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-white dark:text-white light:text-gray-900 mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 mb-3">{relatedPost.excerpt.substring(0, 100)}...</p>
                    <button 
                      onClick={() => navigate(`/post/${relatedPost.id}`)}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Read More →
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

export default PostDetail;
