"use client"

import ContactInfo from "./ui/ContactInfo"
import ContactForm from "./ui/ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-blue">Get In Touch</h2>
            <p className="text-xl text-gray-400">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
