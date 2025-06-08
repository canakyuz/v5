import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navigationContent } from "@/content/navigation";
import { useTheme } from "@/contexts/ThemeContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white font-display">
            <img src={navigationContent.brandLogo} alt="Bekircan Akyüz" className="w-10 h-10" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-inter relative group"
            >
              {navigationContent.menu.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-inter relative group"
            >
              {navigationContent.menu.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-inter relative group"
            >
              {navigationContent.menu.portfolio}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-inter relative group"
            >
              {navigationContent.menu.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-inter relative group"
            >
              {navigationContent.menu.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} className="md:w-[18px] md:h-[18px]" /> : <Moon size={16} className="md:w-[18px] md:h-[18px]" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Button (Mobile) */}
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
              aria-label="Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700/60 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-inter"
              >
                {navigationContent.menu.home}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-inter"
              >
                {navigationContent.menu.about}
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-inter"
              >
                {navigationContent.menu.portfolio}
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-inter"
              >
                {navigationContent.menu.blog}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-2 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-inter"
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
