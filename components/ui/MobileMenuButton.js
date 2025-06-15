"use client"

export default function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      id="mobile-menu-btn"
      className="md:hidden text-accent-orange hover:text-accent-orange/80 transition-colors"
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}
