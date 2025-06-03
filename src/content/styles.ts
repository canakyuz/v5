
export const stylesContent = {
  // Modern font ailesi tanımları
  fonts: {
    primary: "font-display", // Ana başlıklar için Inter
    secondary: "font-inter", // Normal metinler için
    mono: "font-mono", // Monospace metinler için JetBrains Mono
  },
  
  // Modern renk paleti - Dark theme
  colors: {
    primary: {
      main: "text-white",
      light: "text-gray-300",
      lighter: "text-gray-400",
      accent: "text-gray-500"
    },
    background: {
      main: "bg-black",
      light: "bg-gray-900",
      lighter: "bg-gray-800/50",
      card: "bg-gray-900/50",
      cardHover: "bg-gray-800/70"
    },
    border: {
      light: "border-gray-800",
      medium: "border-gray-700",
      dark: "border-gray-600"
    }
  },
  
  // Enhanced metin boyutları
  typography: {
    hero: {
      title: "text-7xl md:text-9xl lg:text-[10rem] xl:text-[12rem]",
      subtitle: "text-6xl md:text-8xl lg:text-[8rem] xl:text-[10rem]",
      description: "text-xl md:text-2xl lg:text-3xl"
    },
    section: {
      title: "text-4xl md:text-6xl lg:text-8xl",
      subtitle: "text-2xl md:text-4xl",
      description: "text-base md:text-lg",
      small: "text-xs"
    },
    post: {
      title: "text-xl md:text-2xl",
      excerpt: "text-sm md:text-base",
      meta: "text-xs"
    }
  },
  
  // Enhanced spacing değerleri
  spacing: {
    section: {
      padding: "py-20 md:py-32",
      margin: "space-y-12 md:space-y-20"
    },
    content: {
      padding: "px-6 md:px-8",
      maxWidth: "max-w-7xl mx-auto"
    },
    card: {
      padding: "p-8",
      margin: "mb-8 md:mb-12",
      gap: "space-y-6"
    }
  },
  
  // Enhanced animasyon stilleri
  animations: {
    fadeIn: "animate-fade-in",
    gradient: "animate-gradient",
    hover: {
      scale: "hover:scale-105",
      translate: "hover:transform hover:translate-y-[-4px]",
      color: "hover:text-white",
      shadow: "hover:shadow-2xl hover:shadow-blue-500/25"
    },
    transition: {
      default: "transition-all duration-300",
      slow: "transition-all duration-500",
      colors: "transition-colors duration-300"
    }
  },
  
  // Modern button stilleri
  buttons: {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105",
    secondary: "border border-gray-600 rounded-xl hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300",
    icon: "w-10 h-10 border border-gray-600 rounded-xl flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
  },
  
  // Enhanced grid sistemi
  grid: {
    main: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16",
    sidebar: "lg:col-span-4",
    content: "lg:col-span-8",
    sticky: "lg:sticky lg:top-32"
  },
  
  // Modern card stilleri
  cards: {
    post: "group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:translate-y-[-4px]",
    project: "group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:transform hover:translate-y-[-4px] grid grid-cols-1 md:grid-cols-5 gap-0 h-[480px] md:h-[360px]",
    projectImage: "relative md:col-span-2 overflow-hidden bg-gray-800 h-full w-full",
    projectContent: "p-8 space-y-6 md:col-span-3 flex flex-col justify-between h-full min-h-0"
  },

  // Enhanced text utilities
  textUtils: {
    truncate: {
      single: "truncate",
      multiline: {
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4"
      }
    },
    overflow: {
      hidden: "overflow-hidden",
      ellipsis: "text-ellipsis"
    },
    gradient: {
      primary: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
      secondary: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
    }
  }
};
