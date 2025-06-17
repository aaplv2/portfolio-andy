"use client";

import { useEffect } from "react";
import ContactInfo from "./ui/ContactInfo";
import ContactForm from "./ui/ContactForm";

export default function Contact() {
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

    // Observe contact section and info cards
    const contactSection = document.getElementById("contact");
    const contactCards = document.querySelectorAll(".contact-info-card");

    if (contactSection) observer.observe(contactSection);
    contactCards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-blue">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">
              Have a project in mind? Lets work together to bring your ideas to
              life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
