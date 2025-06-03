
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900 font-cooper">
            {navigationContent.brand}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
            >
              {navigationContent.menu.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
            >
              {navigationContent.menu.about}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
            >
              {navigationContent.menu.portfolio}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors font-inter"
            >
              {navigationContent.menu.contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left font-inter"
              >
                {navigationContent.menu.about}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left font-inter"
              >
                {navigationContent.menu.blog}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left font-inter"
              >
                {navigationContent.menu.portfolio}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors text-left font-inter"
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
