"use client";

import { useEffect } from "react";
import Image from "next/image";
import CVDownloadButtons from "./ui/CVDownloadButtons";
import SocialLinks from "./ui/SocialLinks";
import AnimatedBackground from "./ui/AnimatedBackground";

export default function Hero() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe hero section for animations
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      observer.observe(heroSection);
    }

    // Parallax effects for background elements
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".animate-float");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <section
      id="hero"
      className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/cordillera.jpg"
          alt="Mountain landscape background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-900/70 to-gray-950/80"></div>
      </div>

      <AnimatedBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-white block">Hello, I'm</span>
            <span className="text-accent-orange block bg-gradient-to-r from-accent-orange to-accent-orange/80 bg-clip-text text-transparent">
              Andrés Pardo
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & Sound Engineer
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <CVDownloadButtons />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
