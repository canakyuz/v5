
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationContent } from "@/content/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-700/60">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white font-display">
            {navigationContent.brand}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-emerald-300 transition-colors font-inter relative group"
            >
              {navigationContent.menu.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-emerald-300 transition-colors font-inter relative group"
            >
              {navigationContent.menu.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-emerald-300 transition-colors font-inter relative group"
            >
              {navigationContent.menu.portfolio}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-300 hover:text-emerald-300 transition-colors font-inter relative group"
            >
              {navigationContent.menu.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-emerald-300 transition-colors font-inter relative group"
            >
              {navigationContent.menu.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-emerald-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-700/60 pt-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-emerald-300 transition-colors text-left font-inter"
              >
                {navigationContent.menu.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-emerald-300 transition-colors text-left font-inter"
              >
                {navigationContent.menu.about}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-emerald-300 transition-colors text-left font-inter"
              >
                {navigationContent.menu.portfolio}
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-gray-300 hover:text-emerald-300 transition-colors text-left font-inter"
              >
                {navigationContent.menu.blog}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-emerald-300 transition-colors text-left font-inter"
              >
                {navigationContent.menu.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
