"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="py-12 border-t border-gray-800/50 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-400 hover:text-accent-orange transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
