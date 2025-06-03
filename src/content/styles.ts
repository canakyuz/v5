
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
      lighter: "bg-gray-50/30"
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
      title: "text-2xl md:text-3xl",
      excerpt: "text-base md:text-lg",
      meta: "text-sm"
    }
  },
  
  // Spacing değerleri
  spacing: {
    section: {
      padding: "py-20 md:py-40",
      margin: "space-y-12 md:space-y-16"
    },
    content: {
      padding: "px-4 md:px-6",
      maxWidth: "max-w-7xl mx-auto"
    }
  },
  
  // Animasyon stilleri
  animations: {
    fadeIn: "animate-fade-in",
    hover: {
      scale: "hover:scale-105",
      translate: "hover:transform hover:translate-x-2",
      color: "hover:text-gray-900"
    },
    transition: {
      default: "transition-all duration-300",
      slow: "transition-all duration-500",
      colors: "transition-colors duration-300"
    }
  },
  
  // Button stilleri
  buttons: {
    primary: "bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105",
    secondary: "border border-gray-300 rounded-full hover:border-gray-900 transition-colors duration-300",
    icon: "w-10 h-10 md:w-12 md:h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-500"
  },
  
  // Grid sistemi
  grid: {
    main: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16",
    sidebar: "lg:col-span-4",
    content: "lg:col-span-8",
    sticky: "lg:sticky lg:top-32"
  },
  
  // Card stilleri
  cards: {
    post: "group relative",
    project: "group hover:transform hover:translate-y-[-2px] transition-all duration-300"
  }
};
