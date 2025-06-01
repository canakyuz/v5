
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-cooper font-light text-gray-900 mb-4">
                John Doe
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed max-w-md">
                Creating boundary-pushing digital experiences where code meets art. 
                Let's build something extraordinary together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <nav className="space-y-4">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-departure text-xs text-gray-400 tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <a 
                  href="mailto:john.doe@example.com" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter text-sm"
                >
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <a 
                  href="tel:+905551234567" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-inter text-sm"
                >
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-600 font-inter text-sm">
                  Istanbul, Turkey
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 md:mt-16 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="text-sm text-gray-500 font-inter">
                © {currentYear} John Doe. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 font-inter"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 font-inter"
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
