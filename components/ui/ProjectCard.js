"use client"

export default function ProjectCard({ title, description, url, image, tech, index }) {
  const handleProjectClick = () => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="project-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-accent-orange group-hover:text-accent-orange/80 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

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

        <button className="btn-secondary project-link w-full group" onClick={handleProjectClick}>
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
  )
}
