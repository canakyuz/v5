
import { Sparkles } from "lucide-react";
import { stylesContent } from "@/content/styles";
import { useState, useEffect } from "react";

interface SectionHeaderProps {
  sectionNumber: string;
  title: {
    main: string;
    accent?: string;
  };
  description?: string;
  className?: string;
}

export const SectionHeader = ({ sectionNumber, title, description, className = "" }: SectionHeaderProps) => {
  const { fonts, colors, typography, spacing, grid } = stylesContent;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${grid.sidebar} ${className}`}>
      <div className={grid.sticky}>
        {/* Header Badge */}
        <div className={`mb-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-px bg-blue-500/60" />
            <div className="flex items-center space-x-2">
              <Sparkles className="w-3 h-3 text-blue-400/80" />
              <span className="text-[10px] font-mono text-blue-400/80 tracking-[0.3em] uppercase font-medium">
                {sectionNumber}
              </span>
            </div>
          </div>
        </div>

        <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h2 className={`${typography.section.title} ${fonts.primary} font-light text-white dark:text-white light:text-gray-900 leading-[0.85] mb-4`}>
            {title.main}
            {title.accent && (
              <>
                <br />
                <span className="text-blue-400/90 italic">
                  {title.accent}
                </span>
              </>
            )}
          </h2>
          {description && (
            <p className={`${fonts.secondary} text-gray-400 dark:text-gray-400 light:text-gray-600 ${typography.section.description} font-light leading-relaxed max-w-sm mb-4`}>
              {description}
            </p>
          )}
          <div className="w-16 h-px bg-blue-500/40"></div>
        </div>
      </div>
    </div>
  );
};
