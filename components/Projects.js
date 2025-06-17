"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ui/ProjectCard";
import ProjectCardSkeleton from "./ui/ProjectCardSkeleton";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const projectsData = [
    {
      title: "Archivo Jazz",
      description:
        "A comprehensive jazz music archive platform featuring artist profiles, album collections, and interactive listening experiences.",
      url: "https://archivo-jazz.vercel.app/",
      image: "/archivo-jazz.png",
      tech: ["React", "Node.js", "Audio API"],
    },
    {
      title: "Birdex",
      description:
        "Bird identification and description across some of the landscapes of the world.",
      url: "https://birddex.netlify.app/",
      image: "/birdex.jpg",
      tech: ["Vue.js", "TensorFlow", "Next.js"],
    },
    {
      title: "Swing Dance School",
      description:
        "Spanish website for a fictional swing dance school. Front end design mostly to take an elegant approach to the digital experience.",
      url: "https://school-website-rouge.vercel.app/",
      image: "/school.jpg",
      tech: ["Next.js", "Tailwindcss", "Animate"],
    },
  ];

  useEffect(() => {
    // Simulate loading delay
    const loadProjects = async () => {
      setIsLoading(true);

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setProjects(projectsData);
      setIsLoading(false);
    };

    loadProjects();

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

    if (projectsSection) observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Re-observe project cards when they're loaded
    if (!isLoading) {
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

      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card) => observer.observe(card));

      return () => {
        observer.disconnect();
      };
    }
  }, [isLoading]);

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
          {isLoading
            ? // Show skeleton cards while loading
              Array.from({ length: 3 }, (_, index) => (
                <ProjectCardSkeleton key={`skeleton-${index}`} index={index} />
              ))
            : // Show actual project cards when loaded
              projects.map((project, index) => (
                <ProjectCard key={index} {...project} index={index} />
              ))}
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-3 text-accent-orange">
              <svg
                className="animate-spin w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="font-medium">Loading projects...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
