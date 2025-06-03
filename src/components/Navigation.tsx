
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationContent } from "@/content/navigation";
import { stylesContent } from "@/content/styles";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fonts, colors, animations } = stylesContent;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className={`text-xl font-semibold ${colors.primary.main} ${fonts.primary}`}>
            {navigationContent.brand}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} font-medium`}
            >
              {navigationContent.menu.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} font-medium`}
            >
              {navigationContent.menu.about}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} font-medium`}
            >
              {navigationContent.menu.portfolio}
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} font-medium`}
            >
              {navigationContent.menu.blog}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} ${fonts.secondary} font-medium`}
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
          <div className="md:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} text-left ${fonts.secondary} font-medium`}
              >
                {navigationContent.menu.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} text-left ${fonts.secondary} font-medium`}
              >
                {navigationContent.menu.about}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} text-left ${fonts.secondary} font-medium`}
              >
                {navigationContent.menu.portfolio}
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} text-left ${fonts.secondary} font-medium`}
              >
                {navigationContent.menu.blog}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${colors.primary.light} hover:${colors.primary.main} ${animations.transition.colors} text-left ${fonts.secondary} font-medium`}
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
