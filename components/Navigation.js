"use client";

import { useState, useEffect } from "react";
import MobileMenuButton from "./ui/MobileMenuButton";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      if (e.target.classList.contains("nav-link")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        // Close mobile menu if open
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleNavClick);

    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-accent-orange">Andy</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800/50">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-center py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
