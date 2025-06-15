"use client";

import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern full-stack e-commerce solution with real-time inventory management, secure payments, and responsive design.",
      url: "https://example-ecommerce.com",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      url: "https://example-taskapp.com",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application with detailed forecasts, interactive maps, and customizable alerts for multiple locations.",
      url: "https://example-weather.com",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["Next.js", "TypeScript", "Chart.js", "Weather API"],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-blue">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </div>

        <div
          id="projects-container"
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
