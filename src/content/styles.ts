
export const stylesContent = {
  // Font ailesi tanımları
  fonts: {
    primary: "font-cooper", // Ana başlıklar için
    secondary: "font-inter", // Normal metinler için
    mono: "font-departure", // Monospace metinler için
  },
  
  // Renk paleti
  colors: {
    primary: {
      main: "text-gray-900",
      light: "text-gray-600",
      lighter: "text-gray-400",
      accent: "text-gray-500"
    },
    background: {
      main: "bg-white",
      light: "bg-gray-50",
      lighter: "bg-gray-50/30",
      card: "bg-white",
      cardHover: "bg-gray-50"
    },
    border: {
      light: "border-gray-100",
      medium: "border-gray-200",
      dark: "border-gray-300"
    }
  },
  
  // Metin boyutları
  typography: {
    hero: {
      title: "text-6xl md:text-8xl lg:text-[8rem] xl:text-[11rem]",
      subtitle: "text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem]",
      description: "text-xl md:text-2xl lg:text-3xl"
    },
    section: {
      title: "text-4xl md:text-5xl lg:text-7xl",
      subtitle: "text-2xl md:text-3xl",
      description: "text-base md:text-lg",
      small: "text-xs"
    },
    post: {
      title: "text-xl md:text-2xl",
      excerpt: "text-sm md:text-base",
      meta: "text-xs"
    }
  },
  
  // Spacing değerleri - Daha kompakt
  spacing: {
    section: {
      padding: "py-16 md:py-24",
      margin: "space-y-8 md:space-y-12"
    },
    content: {
      padding: "px-4 md:px-6",
      maxWidth: "max-w-7xl mx-auto"
    },
    card: {
      padding: "p-6",
      margin: "mb-6 md:mb-8",
      gap: "space-y-4"
    }
  },
  
  // Animasyon stilleri
  animations: {
    fadeIn: "animate-fade-in",
    hover: {
      scale: "hover:scale-[1.02]",
      translate: "hover:transform hover:translate-x-1",
      color: "hover:text-gray-900",
      shadow: "hover:shadow-lg"
    },
    transition: {
      default: "transition-all duration-300",
      slow: "transition-all duration-500",
      colors: "transition-colors duration-300"
    }
  },
  
  // Button stilleri
  buttons: {
    primary: "bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105",
    secondary: "border border-gray-300 rounded-lg hover:border-gray-900 transition-colors duration-300",
    icon: "w-8 h-8 md:w-10 md:h-10 border border-gray-200 rounded-lg flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-300"
  },
  
  // Grid sistemi
  grid: {
    main: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12",
    sidebar: "lg:col-span-4",
    content: "lg:col-span-8",
    sticky: "lg:sticky lg:top-24"
  },
  
  // Card stilleri - Tamamen yeniden tasarlandı
  cards: {
    post: "group relative bg-white border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-2px]",
    project: "group relative bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-[-4px]",
    projectImage: "relative aspect-[16/10] overflow-hidden bg-gray-50",
    projectContent: "p-6 space-y-4"
  }
};
