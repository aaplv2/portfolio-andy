"use client"

import Navigation from "./Navigation"

export default function Header() {
  return (
    <header id="header" className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <Navigation />
    </header>
  )
}
