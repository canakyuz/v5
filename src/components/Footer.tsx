
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react";
import { stylesContent } from "@/content/styles";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-gray-900 to-gray-950 dark:from-slate-950 dark:via-gray-900 dark:to-gray-950 light:from-gray-50 light:via-white light:to-gray-100 border-t border-gray-700/60 dark:border-gray-700/60 light:border-gray-200">
      <div className={`${stylesContent.spacing.content.maxWidth} ${stylesContent.spacing.content.padding} py-16 md:py-24`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className={`text-2xl md:text-3xl ${stylesContent.fonts.primary} font-light text-white dark:text-white light:text-gray-900 mb-4`}>
                Can Akyüz
              </h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 font-light leading-relaxed max-w-md">
                Senior frontend engineer creating boundary-pushing digital experiences where code meets art. 
                Let's build something extraordinary together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/canakyuz" 
                className="w-10 h-10 border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300 rounded-xl flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-400 dark:text-gray-400 light:text-gray-600 group-hover:text-emerald-300 transition-colors duration-300" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300 rounded-xl flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-400 dark:text-gray-400 light:text-gray-600 group-hover:text-emerald-300 transition-colors duration-300" />
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 border border-gray-600/50 dark:border-gray-600/50 light:border-gray-300 rounded-xl flex items-center justify-center hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-gray-400 dark:text-gray-400 light:text-gray-600 group-hover:text-emerald-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <nav className="space-y-4">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info & Theme Toggle */}
          <div>
            <h4 className="font-mono text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-500 dark:text-gray-500 light:text-gray-600" />
                <a 
                  href="mailto:canakyuz23@gmail.com" 
                  className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter text-sm"
                >
                  canakyuz23@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-500 dark:text-gray-500 light:text-gray-600" />
                <a 
                  href="tel:+905468700409" 
                  className="text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-emerald-300 transition-colors duration-300 font-inter text-sm"
                >
                  +90 546 870 04 09
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-500 dark:text-gray-500 light:text-gray-600" />
                <span className="text-gray-300 dark:text-gray-300 light:text-gray-700 font-inter text-sm">
                  Turkey
                </span>
              </div>
            </div>

            {/* Theme Toggle */}
            <div className="space-y-3">
              <h5 className="font-mono text-xs text-gray-500 dark:text-gray-500 light:text-gray-600 tracking-[0.2em] uppercase">
                Tema
              </h5>
              <div className="flex items-center space-x-3">
                <Sun size={16} className={`transition-colors duration-300 ${theme === 'light' ? 'text-amber-400' : 'text-gray-500'}`} />
                <Switch 
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                />
                <Moon size={16} className={`transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-500'}`} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/60 dark:border-gray-700/60 light:border-gray-200 mt-12 md:mt-16 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 font-inter">
                © {currentYear} Can Akyüz. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 hover:text-emerald-300 transition-colors duration-300 font-inter"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 hover:text-emerald-300 transition-colors duration-300 font-inter"
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
