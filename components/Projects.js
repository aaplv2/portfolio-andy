"use client";

import { useEffect } from "react";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Archivo Jazz",
      description:
        "A comprehensive jazz music archive platform featuring artist profiles, album collections, and interactive listening experiences with curated playlists.",
      url: "https://example-archivo-jazz.com",
      image: "/archivo-jazz.png",
      tech: ["React", "Node.js", "MongoDB", "Audio API"],
    },
    {
      title: "Birdex",
      description:
        "Bird identification and tracking application with AI-powered species recognition, location mapping, and community-driven bird watching features.",
      url: "https://example-birdex.com",
      image: "/birdex.jpg",
      tech: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
    },
    {
      title: "School Management System",
      description:
        "Complete educational management platform with student enrollment, grade tracking, attendance monitoring, and parent-teacher communication tools.",
      url: "https://example-school.com",
      image: "/school.jpg",
      tech: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    },
  ];

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe projects section and project cards
    const projectsSection = document.getElementById("projects");
    const projectCards = document.querySelectorAll(".project-card");

    if (projectsSection) observer.observe(projectsSection);
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

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
