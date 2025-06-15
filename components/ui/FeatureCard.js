"use client"

export default function FeatureCard({ icon, title, description, bgColor }) {
  return (
    <div className="feature-card">
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
