
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { stylesContent } from "@/content/styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { fonts, colors, typography, spacing, animations } = stylesContent;
  
  return (
    <footer className={`${colors.background.light} border-t border-gray-100`}>
      <div className={`${spacing.content.maxWidth} ${spacing.content.padding} ${spacing.section.padding}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className={`${typography.section.subtitle} ${fonts.primary} font-light ${colors.primary.main} mb-6`}>
                Bekircan Akyüz
              </h3>
              <p className={`${colors.primary.accent} ${fonts.secondary} leading-relaxed max-w-md font-light`}>
                Creating boundary-pushing digital experiences where code meets art. 
                Let's build something extraordinary together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className={`w-12 h-12 bg-white border border-gray-200 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 ${animations.transition.default} group`}
                aria-label="GitHub"
              >
                <Github size={18} className={`${colors.primary.accent} group-hover:text-white ${animations.transition.colors}`} />
              </a>
              <a 
                href="#" 
                className={`w-12 h-12 bg-white border border-gray-200 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 ${animations.transition.default} group`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className={`${colors.primary.accent} group-hover:text-white ${animations.transition.colors}`} />
              </a>
              <a 
                href="#" 
                className={`w-12 h-12 bg-white border border-gray-200 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 ${animations.transition.default} group`}
                aria-label="Twitter"
              >
                <Twitter size={18} className={`${colors.primary.accent} group-hover:text-white ${animations.transition.colors}`} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.3em] uppercase mb-8`}>
              Navigation
            </h4>
            <nav className="space-y-4">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className={`${fonts.mono} ${typography.section.small} ${colors.primary.lighter} tracking-[0.3em] uppercase mb-8`}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className={colors.primary.lighter} />
                <a 
                  href="mailto:john.doe@example.com" 
                  className={`${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} text-sm`}
                >
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className={colors.primary.lighter} />
                <a 
                  href="tel:+905551234567" 
                  className={`${colors.primary.accent} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} text-sm`}
                >
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className={colors.primary.lighter} />
                <span className={`${colors.primary.accent} ${fonts.secondary} text-sm`}>
                  Istanbul, Turkey
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className={`text-sm ${colors.primary.lighter} ${fonts.secondary}`}>
                © {currentYear} Bekircan Akyüz. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className={`text-sm ${colors.primary.lighter} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`text-sm ${colors.primary.lighter} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary}`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
