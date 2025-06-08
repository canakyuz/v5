import { useParams, useNavigate } from "react-router-dom";
import { portfolioContent } from "@/content/portfolio";
import { stylesContent } from "@/content/styles";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
      <div className="min-h-screen bg-gray-950 dark:bg-gray-950 light:bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">Project Not Found</h1>
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

          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-blue-500/60" />
              <div className="bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-md">
                <span className={`${fonts.mono} text-sm text-blue-400 tracking-wide uppercase`}>
                  Project Details
                </span>
              </div>
            </div>
            
            <h4 className={`${typography.section.title} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 leading-tight mb-6`}>
              {project.title}
            </h4>
            
            <p className={`${typography.section.description} ${fonts.secondary} font-light text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed max-w-3xl mb-6`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">
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
            <div className="relative rounded-xl overflow-hidden bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200">
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
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-4`}>
                Technologies
              </h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="flex items-center space-x-2 p-3 bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-4`}>
                Features
              </h3>
              <div className="space-y-2">
                {["Modern UI/UX", "Responsive", "Performance", "SEO"].map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center space-x-2 p-3 bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 dark:text-gray-400 light:text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-4`}>
                Statistics
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">100%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">Completed</div>
                </div>
                <div className="p-3 bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-lg">
                  <div className="text-xl font-bold text-blue-400 mb-1">{project.year}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600">Project Year</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mb-12 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
            <div className="bg-gray-900/30 dark:bg-gray-900/30 light:bg-white/50 border border-gray-800/60 dark:border-gray-800/60 light:border-gray-200 rounded-xl p-6">
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-medium text-white dark:text-white light:text-gray-900 mb-4`}>
                About the Project
              </h3>
              <div className="prose prose-invert dark:prose-invert light:prose max-w-none">
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-4">
                  This project is a comprehensive web application developed using modern web technologies.
                  With a focus on user experience, an excellent result has been achieved both visually and functionally.
                </p>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                  Developed with performance optimization and SEO compatibility in mind, this project
                  meets modern web standards.
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
                View Project
              </span>
              <ExternalLink size={16} className="text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
