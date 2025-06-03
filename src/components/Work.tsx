'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
    ]
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
    ]
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
    ]
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
    ]
  }
];

const filters = [
  { id: "all", text: "All Projects" },
  { id: "frontend", text: "Frontend" },
  { id: "fullstack", text: "Full-Stack" },
  { id: "mobile", text: "Mobile" },
  { id: "tools", text: "Tools" }
];

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
      <div className="container">
        <div className="section-header">
          <div className="section-badge">💼 Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A curated selection of projects that showcase my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 lg:gap-12">
          <div className="bg-surface border border-border rounded-xl p-6 h-fit lg:sticky lg:top-[calc(var(--header-height)+var(--space-xl))]">
            <h3 className="text-lg font-semibold mb-6">Filter Projects</h3>
            <div className="flex flex-col gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`text-left p-4 border rounded-md transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-surface-elevated text-text-primary border-border-hover' 
                      : 'bg-transparent text-text-secondary border-border hover:bg-surface-elevated hover:text-text-primary hover:border-border-hover'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.text}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredProjects.map((project, index) => (
              <article 
                key={index}
                className="project-card bg-surface border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-border-hover hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                data-category={project.category}
              >
                <div className="h-[200px] bg-gradient-to-r from-accent to-purple-500 flex items-center justify-center text-5xl">
                  {project.emoji}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="bg-surface-elevated px-3 py-1 rounded-full text-xs text-text-secondary">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-surface-elevated border border-border px-3 py-1 rounded-full text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.url}
                        className="text-accent font-medium hover:text-accent-hover transition-colors"
                      >
                        {link.text} →
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
