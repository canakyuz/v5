'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGlobe, FiFileText, FiPackage, FiBook } from 'react-icons/fi';
import { FaGithub, FaApple, FaGooglePlay } from 'react-icons/fa';
import { cn } from '@/lib/utils';

// Tooltip bileşeni
interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const Tooltip = ({ children, content, position = 'top', className }: TooltipProps) => {
  return (
    <div className="relative group/tooltip">
      {children}
      <div className={cn(
        "absolute z-10 opacity-0 scale-95 transition-all duration-200 pointer-events-none group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 px-2 py-1 rounded-md text-xs font-medium bg-black/80 text-white whitespace-nowrap",
        position === 'top' && '-top-8 left-1/2 -translate-x-1/2',
        position === 'bottom' && 'top-full mt-1 left-1/2 -translate-x-1/2',
        position === 'left' && 'right-full mr-1 top-1/2 -translate-y-1/2',
        position === 'right' && 'left-full ml-1 top-1/2 -translate-y-1/2',
        className
      )}>
        {content}
        <div className={cn(
          "absolute w-2 h-2 bg-black/80 rotate-45",
          position === 'top' && 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
          position === 'bottom' && 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
          position === 'left' && 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2',
          position === 'right' && 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2',
        )}/>
      </div>
    </div>
  );
};

// Icon mapping for links
interface IconMapping {
  [key: string]: React.ReactNode;
}

const linkIcons: IconMapping = {
  "View Live": <FiGlobe className="w-4 h-4" />,
  "GitHub": <FaGithub className="w-4 h-4" />,
  "Case Study": <FiFileText className="w-4 h-4" />,
  "App Store": <FaApple className="w-4 h-4" />,
  "Play Store": <FaGooglePlay className="w-4 h-4" />,
  "NPM Package": <FiPackage className="w-4 h-4" />,
  "Documentation": <FiBook className="w-4 h-4" />
};

const projects = [
  {
    title: "E-Commerce Platform",
    year: "2024",
    category: "fullstack",
    emoji: "🏪",
    description: "Modern e-commerce solution built with Next.js and microservices architecture. Features include real-time inventory management, payment processing, admin dashboard, and comprehensive analytics.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Docker"],
    links: [
      { text: "View Live", url: "#" },
      { text: "GitHub", url: "#" },
      { text: "Case Study", url: "#" }
    ],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Analytics Dashboard",
    year: "2024",
    category: "frontend",
    emoji: "📊",
    description: "Real-time analytics dashboard for SaaS applications featuring custom data visualizations, interactive charts, export capabilities, and comprehensive reporting tools.",
    tech: ["React", "D3.js", "TypeScript", "Tailwind CSS", "WebSocket"],
    links: [
      { text: "View Live", url: "#" },
      { text: "GitHub", url: "#" }
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Task Management App",
    year: "2023",
    category: "mobile",
    emoji: "📱",
    description: "Cross-platform mobile application for task management with real-time collaboration, offline sync, push notifications, and team workspace features.",
    tech: ["Flutter", "Dart", "Firebase", "SQLite"],
    links: [
      { text: "App Store", url: "#" },
      { text: "Play Store", url: "#" },
      { text: "GitHub", url: "#" }
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Developer CLI Tools",
    year: "2023",
    category: "tools",
    emoji: "🔧",
    description: "Suite of command-line tools for developers including project scaffolding, code generation, and automation scripts. Built with Node.js and published on npm.",
    tech: ["Node.js", "TypeScript", "Commander.js", "NPM"],
    links: [
      { text: "NPM Package", url: "#" },
      { text: "Documentation", url: "#" },
      { text: "GitHub", url: "#" }
    ],
    color: "from-indigo-500 to-violet-500"
  }
];

const filters = [
  { id: "all", text: "All Projects", icon: "🌐" },
  { id: "frontend", text: "Frontend", icon: "🎨" },
  { id: "fullstack", text: "Full-Stack", icon: "⚙️" },
  { id: "mobile", text: "Mobile", icon: "📱" },
  { id: "tools", text: "Tools", icon: "🔧" }
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20; // Reduced tilt amount
    const rotateY = (centerX - x) / 20; // Reduced tilt amount
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`; // Reduced scale
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

// Filter Pill Button Component
function FilterButton({ active, onClick, icon, children }: { 
  active: boolean, 
  onClick: () => void, 
  icon: string,
  children: React.ReactNode 
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all duration-300 ${active ? 
        'bg-accent/20 text-white border-[0.5px] border-accent shadow-sm shadow-accent/20' : 
        'text-text-secondary bg-white/5 border-[0.5px] border-white/10 hover:border-white/20'}`}
    >
      <span className="text-xs">{icon}</span>
      <span>{children}</span>
    </motion.button>
  );
}

// Tech Badge Component
function TechBadge({ tech }: { tech: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white/5 backdrop-blur-sm border-[0.5px] border-white/10 px-2 py-0.5 rounded-md text-[10px] font-medium text-white/70 inline-block"
    >
      {tech}
    </motion.span>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section className="section" id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container">
        <div className="section-header">
          <div className="section-badge">💼 Works</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of projects that showcase my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="mt-10 mb-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                icon={filter.icon}
              >
                {filter.text}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TiltCard className="h-full">
                <article 
                  className="h-full project-card bg-surface/30 backdrop-blur-sm border-[0.5px] border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20 shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/30"
                  data-category={project.category}
                >
                  <div className="flex items-center gap-3 p-3 border-b border-white/5">
                    <div className={`h-10 w-10 rounded-md bg-gradient-to-r ${project.color} flex items-center justify-center text-xl relative overflow-hidden shrink-0`}>
                      <span>{project.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold truncate">{project.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/70">{project.year}</span>
                        <span className="h-1 w-1 rounded-full bg-white/20"></span>
                        <span className="text-xs text-white/70 capitalize">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 text-sm">
                    <p className="text-white/70 line-clamp-3 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="px-3 pb-3">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <TechBadge key={idx} tech={tech} />
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs text-white/60">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-2">
                      {project.links.map((link, idx) => (
                        <Tooltip key={idx} content={link.text}>
                          <Link
                            href={link.url}
                            className="group w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:text-accent rounded-md border-[0.5px] border-white/10 hover:border-accent/30 transition-all duration-200"
                          >
                            {linkIcons[link.text] || <FiGlobe className="w-4 h-4" />}
                          </Link>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
