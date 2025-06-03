
import { postsContent } from "@/content/posts";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const Posts = () => {
  return (
    <section id="blog" className="py-20 md:py-40 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Section number and title */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-departure text-gray-400 mb-6 md:mb-8 tracking-[0.2em] uppercase">{postsContent.sectionNumber}</div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-cooper font-extralight text-gray-900 leading-[0.9] mb-6 md:mb-8">
                {postsContent.title.main}
                <br />
                <span className="italic text-gray-600">{postsContent.title.accent}</span>
              </h2>
              <p className="font-inter text-gray-500 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8 max-w-sm">
                {postsContent.description}
              </p>
              <div className="w-24 h-px bg-gray-200 mt-6 md:mt-8"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-12 md:space-y-16 pt-4 md:pt-8">
              {postsContent.posts.map((post, index) => (
                <article key={post.id} className="group relative">
                  <div className="relative">
                    {/* Mobile-friendly indicator */}
                    <div className="absolute -left-4 md:-left-8 lg:-left-12 top-0 w-1 md:w-2 h-12 md:h-16 bg-gradient-to-b from-gray-900 to-gray-400"></div>
                    <div className="pl-8 md:pl-12 lg:pl-16">
                      {/* Post metadata */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-4 md:space-x-8">
                          <div className="font-departure text-xs text-gray-300 tracking-[0.2em] font-medium">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center space-x-3 md:space-x-4">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                              {post.category}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Post title */}
                      <h3 className="text-2xl md:text-3xl font-cooper font-light text-gray-900 mb-3 md:mb-4 tracking-wide">
                        {post.title}
                      </h3>
                      
                      {/* Post excerpt */}
                      <p className="text-base md:text-lg text-gray-500 leading-[1.7] max-w-full md:max-w-2xl font-inter font-light mb-6 md:mb-8">
                        {post.excerpt}
                      </p>
                      
                      {/* Post metadata - date and read time */}
                      <div className="flex items-center space-x-6 mb-6 md:mb-8">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar size={14} />
                          <span className="font-inter text-sm">{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Clock size={14} />
                          <span className="font-inter text-sm">{post.readTime}</span>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="mb-6 md:mb-8">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-white text-gray-600 text-xs font-inter border border-gray-200 rounded-full hover:border-gray-300 transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Read more link */}
                      <div className="pt-3 md:pt-4">
                        <a 
                          href={post.link}
                          className="inline-flex items-center space-x-3 md:space-x-4 group/link"
                        >
                          <div className="relative">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-500">
                              <span className="text-gray-600 group-hover/link:text-white text-sm transform group-hover/link:translate-x-1 transition-all duration-300">
                                →
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="font-inter font-medium text-gray-900 group-hover/link:text-gray-600 transition-colors duration-300 text-sm md:text-base">
                              Read More
                            </span>
                            <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase">
                              Continue Reading
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              
              {/* View All Posts Link */}
              <div className="text-center pt-8 md:pt-16">
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-3 group/more hover:transform hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="text-gray-900 font-inter font-medium text-lg group-hover/more:text-gray-600 transition-colors duration-300">
                    All Posts
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-gray-600 group-hover/more:text-gray-900 group-hover/more:transform group-hover/more:translate-x-1 group-hover/more:translate-y-[-1px] transition-all duration-300" 
                  />
                </a>
                <div className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase mt-2">
                  View All Writing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
