"use client"

import FeatureCard from "./ui/FeatureCard"

export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
      bgColor: "bg-accent-orange/20",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work on all devices",
      bgColor: "bg-accent-blue/20",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance",
      description: "Optimizing applications for speed and user experience",
      bgColor: "bg-accent-orange/20",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent-blue">About Me</h2>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate full-stack developer with expertise in modern web technologies. I love creating clean,
              efficient, and user-friendly applications that solve real-world problems.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
