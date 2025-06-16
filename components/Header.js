"use client";

import { useEffect } from "react";
import Navigation from "./Navigation";

export default function Header() {
  useEffect(() => {
    // Enhanced scroll effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const header = document.getElementById("header");

      if (header) {
        if (scrolled > 100) {
          header.classList.add("bg-gray-950/95", "shadow-lg");
        } else {
          header.classList.remove("bg-gray-950/95", "shadow-lg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50"
    >
      <Navigation />
    </header>
  );
}
