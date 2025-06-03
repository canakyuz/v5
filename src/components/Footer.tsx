
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { stylesContent } from "@/content/styles";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${stylesContent.colors.background.light} ${stylesContent.colors.border.light} border-t`}>
      <div className={`${stylesContent.spacing.content.maxWidth} ${stylesContent.spacing.content.padding} py-16 md:py-24`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className={`text-2xl md:text-3xl ${stylesContent.fonts.primary} font-light ${stylesContent.colors.primary.main} mb-4`}>
                Can Akyüz
              </h3>
              <p className={`${stylesContent.colors.primary.light} ${stylesContent.fonts.secondary} leading-relaxed max-w-md`}>
                Senior frontend engineer creating boundary-pushing digital experiences where code meets art. 
                Let's build something extraordinary together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/canakyuz" 
                className={`${stylesContent.buttons.icon} ${stylesContent.animations.transition.default} group`}
                aria-label="GitHub"
              >
                <Github size={18} className={`${stylesContent.colors.primary.accent} group-hover:text-white ${stylesContent.animations.transition.colors}`} />
              </a>
              <a 
                href="https://linkedin.com" 
                className={`${stylesContent.buttons.icon} ${stylesContent.animations.transition.default} group`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className={`${stylesContent.colors.primary.accent} group-hover:text-white ${stylesContent.animations.transition.colors}`} />
              </a>
              <a 
                href="https://twitter.com" 
                className={`${stylesContent.buttons.icon} ${stylesContent.animations.transition.default} group`}
                aria-label="Twitter"
              >
                <Twitter size={18} className={`${stylesContent.colors.primary.accent} group-hover:text-white ${stylesContent.animations.transition.colors}`} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className={`${stylesContent.fonts.mono} text-xs ${stylesContent.colors.primary.accent} tracking-[0.2em] uppercase mb-6`}>
              Navigation
            </h4>
            <nav className="space-y-4">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block ${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className={`${stylesContent.fonts.mono} text-xs ${stylesContent.colors.primary.accent} tracking-[0.2em] uppercase mb-6`}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className={stylesContent.colors.primary.accent} />
                <a 
                  href="mailto:canakyuz23@gmail.com" 
                  className={`${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary} text-sm`}
                >
                  canakyuz23@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className={stylesContent.colors.primary.accent} />
                <a 
                  href="tel:+905468700409" 
                  className={`${stylesContent.colors.primary.light} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary} text-sm`}
                >
                  +90 546 870 04 09
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className={stylesContent.colors.primary.accent} />
                <span className={`${stylesContent.colors.primary.light} ${stylesContent.fonts.secondary} text-sm`}>
                  Turkey
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`${stylesContent.colors.border.light} border-t mt-12 md:mt-16 pt-8`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className={`text-sm ${stylesContent.colors.primary.accent} ${stylesContent.fonts.secondary}`}>
                © {currentYear} Can Akyüz. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className={`text-sm ${stylesContent.colors.primary.accent} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className={`text-sm ${stylesContent.colors.primary.accent} ${stylesContent.animations.hover.color} ${stylesContent.animations.transition.colors} ${stylesContent.fonts.secondary}`}
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
