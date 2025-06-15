"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      message: "Sending message...",
      type: "loading",
      visible: true,
    });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        message: "Message sent successfully! I'll get back to you soon.",
        type: "success",
        visible: true,
      });

      e.target.reset();

      setTimeout(() => {
        setFormStatus({ message: "", type: "", visible: false });
      }, 5000);
    }, 2000);
  };

  const getStatusIcon = (type) => {
    const icons = {
      loading: (
        <svg
          className="animate-spin w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      success: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      error: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    };
    return icons[type] || null;
  };

  const getStatusStyles = (type) => {
    const styles = {
      loading: "text-accent-orange bg-accent-orange/10 border-accent-orange/30",
      success: "text-green-400 bg-green-400/10 border-green-400/30",
      error: "text-red-400 bg-red-400/10 border-red-400/30",
    };
    return styles[type] || "";
  };

  return (
    <div className="contact-form-container">
      <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="form-input"
            placeholder="Project inquiry"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="form-input resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <button type="submit" className="btn-primary w-full group">
          <span>Send Message</span>
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>

      {formStatus.visible && (
        <div
          className={`mt-6 text-center p-4 rounded-xl border backdrop-blur-sm flex items-center justify-center space-x-3 ${getStatusStyles(
            formStatus.type
          )}`}
        >
          {getStatusIcon(formStatus.type)}
          <span className="font-medium">{formStatus.message}</span>
        </div>
      )}
    </div>
  );
}
