'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Bento grid ana kapsayıcı bileşeni
interface BentoGridProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  staggerDelay?: number;
  animate?: boolean;
}

export const BentoGrid = ({
  children,
  className,
  containerClassName,
  staggerDelay = 0.075,
  animate = true,
}: BentoGridProps) => {
  // Framer Motion için container varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div 
      className={cn(
        "w-full",
        containerClassName
      )}
      initial={animate ? "hidden" : false}
      animate={animate ? "show" : false}
      variants={containerVariants}
    >
      <div 
        className={cn(
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

// Bento grid öğesi / kartı bileşeni
interface BentoGridItemProps {
  children?: ReactNode;
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  image?: ReactNode;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'featured';
  bgClassName?: string;
  withHoverEffect?: boolean;
  imagePosition?: 'top' | 'left' | 'right' | 'background';
  innerClassName?: string;
}

export const BentoGridItem = ({
  children,
  className,
  title,
  description,
  header,
  footer,
  image,
  icon,
  size = 'medium',
  bgClassName,
  withHoverEffect = true,
  imagePosition = 'top',
  innerClassName,
}: BentoGridItemProps) => {
  // Boyut sınıflarını belirle
  const sizeClasses = {
    small: "col-span-1 md:col-span-2 row-span-1",
    medium: "col-span-1 md:col-span-3 row-span-1",
    large: "col-span-1 md:col-span-4 row-span-2",
    featured: "col-span-1 md:col-span-6 lg:col-span-6 row-span-2"
  }[size];
  
  // Hover efekti için stil
  const hoverEffectClasses = withHoverEffect 
    ? "transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/10 hover:border-white/20" 
    : "";

  // Görsel konumu için sınıflar
  const imagePositionClasses = 
    imagePosition === 'right' || imagePosition === 'left' ? "grid grid-cols-1 md:grid-cols-2" : "flex flex-col";

  // Framer Motion için öğe varyantları
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className={cn(sizeClasses, className, "h-full")} 
      variants={itemVariants}
    >
      <div 
        className={cn(
          "h-full rounded-lg border-[0.5px] border-white/10 overflow-hidden",
          "bg-surface/20 backdrop-blur-[2px] shadow-sm",
          hoverEffectClasses,
          bgClassName
        )}
      >
        <div className={cn(
          "h-full",
          imagePositionClasses,
          innerClassName
        )}>
          {/* Üst ya da sol konum için görsel alanı */}
          {image && imagePosition === 'top' && (
            <div className={cn(
              "w-full", 
              size === 'small' ? "h-24" : 
              size === 'medium' ? "h-32" : 
              "h-40"
            )}>
              {image}
            </div>
          )}
          
          {imagePosition === 'right' || imagePosition === 'left' ? (
            <>
              {/* Görsel */}
              {imagePosition === 'left' && (
                <div className={cn(
                  "h-full order-2 md:order-1",
                  size === 'small' ? "min-h-[6rem]" : 
                  size === 'medium' ? "min-h-[8rem]" : 
                  "min-h-[10rem]"
                )}>
                  {image}
                </div>
              )}
              
              {/* İçerik */}
              <div className={cn(
                "flex flex-col flex-grow",
                imagePosition === 'right' ? "order-1 md:order-1" : "order-1 md:order-2",
                size === 'small' ? 'p-3' : 
                size === 'medium' ? 'p-4' : 'p-5'
              )}>
                {header && <div className="mb-3">{header}</div>}
                {icon && <div className="mb-2">{icon}</div>}
                
                {title && (
                  <h3 className={cn(
                    "font-semibold line-clamp-2 tracking-tight",
                    size === 'large' || size === 'featured' ? "text-xl mb-2" : "text-base mb-1"
                  )}>
                    {title}
                  </h3>
                )}
                
                {description && (
                  <p className="text-white/60 text-sm line-clamp-3 mb-3 leading-relaxed">
                    {description}
                  </p>
                )}
                
                {children}
                
                {footer && <div className="mt-auto pt-2">{footer}</div>}
              </div>
              
              {/* Görsel - sağ konum için */}
              {imagePosition === 'right' && (
                <div className={cn(
                  "h-full order-2 md:order-2",
                  size === 'small' ? "min-h-[6rem]" : 
                  size === 'medium' ? "min-h-[8rem]" : 
                  "min-h-[10rem]"
                )}>
                  {image}
                </div>
              )}
            </>
          ) : imagePosition === 'top' && (
            <div className={cn(
              "flex flex-col flex-grow",
              size === 'small' ? 'p-3' : 
              size === 'medium' ? 'p-4' : 'p-5'
            )}>
              {/* Başlık kısmı */}
              {header && <div className="mb-3">{header}</div>}
              
              {/* İkon varsa göster */}
              {icon && <div className="mb-2">{icon}</div>}
              
              {/* Başlık */}
              {title && (
                <h3 className={cn(
                  "font-semibold line-clamp-2 tracking-tight",
                  size === 'large' || size === 'featured' ? "text-xl mb-2" : "text-base mb-1"
                )}>
                  {title}
                </h3>
              )}
              
              {/* Açıklama */}
              {description && (
                <p className="text-white/60 text-sm line-clamp-3 mb-3 leading-relaxed">
                  {description}
                </p>
              )}
              
              {/* Çocuk içerik */}
              {children}
              
              {/* Alt kısım */}
              {footer && <div className="mt-auto pt-2">{footer}</div>}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Gradient arka plan bileşeni
export const BentoGridBackground = ({
  className,
  gradient = "from-indigo-500 to-purple-600",
  children,
  iconClassName,
}: {
  className?: string;
  gradient?: string;
  children: ReactNode;
  iconClassName?: string;
}) => {
  return (
    <div className={cn(
      `bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden h-full`,
      className
    )}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2),rgba(255,255,255,0))]">
        <div className="absolute inset-0 mix-blend-overlay"></div>
      </div>
      <span className={cn("relative z-10", iconClassName)}>{children}</span>
    </div>
  );
};
