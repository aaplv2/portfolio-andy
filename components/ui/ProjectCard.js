"use client";

import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  tech,
  index,
}) {
  const handleProjectClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="project-card animate-fade-in-up flex flex-col h-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="relative overflow-hidden h-56">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} project screenshot`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Image overlay with project info */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center text-white p-4">
            <svg
              className="w-12 h-12 mx-auto mb-2 text-accent-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <p className="text-sm font-medium">View Project</p>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-accent-orange group-hover:text-accent-orange/80 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem) => (
              <span
                key={techItem}
                className="px-3 py-1 text-xs font-medium bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30"
              >
                {techItem}
              </span>
            ))}
          </div>

          <button
            className="btn-secondary project-link w-full group"
            onClick={handleProjectClick}
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
