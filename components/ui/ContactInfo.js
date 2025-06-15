"use client"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      content: "your.email@example.com",
      bgColor: "bg-accent-orange/20",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "Your City, Country",
      bgColor: "bg-accent-blue/20",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Response Time",
      content: "Usually within 24 hours",
      bgColor: "bg-accent-orange/20",
    },
  ]

  return (
    <div className="space-y-8">
      {contactItems.map((item, index) => (
        <div key={index} className="contact-info-card">
          <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}>
            {item.icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.content}</p>
        </div>
      ))}
    </div>
  )
}
