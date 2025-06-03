
export const stylesContent = {
  // Font ailesi tanımları
  fonts: {
    primary: "font-cooper", // Ana başlıklar için
    secondary: "font-inter", // Normal metinler için
    mono: "font-departure", // Monospace metinler için
  },
  
  // Renk paleti - Daha sofistike
  colors: {
    primary: {
      main: "text-gray-900",
      light: "text-gray-700",
      lighter: "text-gray-500",
      accent: "text-gray-600"
    },
    background: {
      main: "bg-white",
      light: "bg-gray-50",
      lighter: "bg-gray-50/50",
      card: "bg-white",
      cardHover: "bg-gray-50/80"
    },
    border: {
      light: "border-gray-100",
      medium: "border-gray-200",
      dark: "border-gray-300"
    }
  },
  
  // Metin boyutları - Daha dengeli hiyerarşi
  typography: {
    hero: {
      title: "text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
      subtitle: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
      description: "text-lg md:text-xl lg:text-2xl"
    },
    section: {
      title: "text-3xl md:text-4xl lg:text-5xl",
      subtitle: "text-xl md:text-2xl",
      description: "text-base md:text-lg",
      small: "text-xs"
    },
    post: {
      title: "text-lg md:text-xl",
      excerpt: "text-sm md:text-base",
      meta: "text-xs"
    }
  },
  
  // Spacing değerleri - Daha geniş ve havadar
  spacing: {
    section: {
      padding: "py-20 md:py-32",
      margin: "space-y-12 md:space-y-16"
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
  
  // Animasyon stilleri
  animations: {
    fadeIn: "animate-fade-in",
    hover: {
      scale: "hover:scale-[1.01]",
      translate: "hover:transform hover:translate-y-[-2px]",
      color: "hover:text-gray-900",
      shadow: "hover:shadow-xl"
    },
    transition: {
      default: "transition-all duration-300 ease-out",
      slow: "transition-all duration-500 ease-out",
      colors: "transition-colors duration-300 ease-out"
    }
  },
  
  // Button stilleri - Daha minimal
  buttons: {
    primary: "bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg",
    secondary: "border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-md",
    icon: "w-10 h-10 border border-gray-200 flex items-center justify-center group-hover/link:border-gray-900 group-hover/link:bg-gray-900 transition-all duration-300"
  },
  
  // Grid sistemi
  grid: {
    main: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16",
    sidebar: "lg:col-span-4",
    content: "lg:col-span-8",
    sticky: "lg:sticky lg:top-32"
  },
  
  // Card stilleri - Daha minimal ve temiz
  cards: {
    post: "group relative bg-white border border-gray-100 p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-4px]",
    project: "group relative bg-white border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:translate-y-[-4px] grid grid-cols-1 md:grid-cols-5 gap-0 h-[400px] md:h-[350px]",
    projectImage: "relative md:col-span-2 overflow-hidden bg-gray-50 h-full w-full",
    projectContent: "p-8 space-y-6 md:col-span-3 flex flex-col justify-between h-full min-h-0"
  },

  // Text utilities for truncation
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
    }
  }
};
