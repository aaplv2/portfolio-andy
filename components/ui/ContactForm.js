"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
    visible: false,
  });

  const validateField = (field) => {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    switch (field.type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        errorMessage = "Please enter a valid email address";
        break;
      case "text":
        isValid = value.length >= 2;
        errorMessage = "This field must be at least 2 characters long";
        break;
      default:
        isValid = value.length > 0;
        errorMessage = "This field is required";
    }

    showFieldValidation(field, isValid, errorMessage);
    return isValid;
  };

  const clearFieldError = (field) => {
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    field.classList.remove("border-red-500", "border-green-500");
  };

  const showFieldValidation = (field, isValid, errorMessage) => {
    clearFieldError(field);

    if (!isValid) {
      field.classList.add("border-red-500");
      const errorDiv = document.createElement("div");
      errorDiv.className =
        "error-message text-red-400 text-sm mt-2 flex items-center space-x-2";
      errorDiv.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>${errorMessage}</span>
      `;
      field.parentNode.appendChild(errorDiv);
    } else {
      field.classList.add("border-green-500");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validate all fields
    const inputs = e.target.querySelectorAll("input, textarea");
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      setFormStatus({
        message: "Please correct the errors above.",
        type: "error",
        visible: true,
      });
      return;
    }

    setFormStatus({
      message: "Sending message...",
      type: "loading",
      visible: true,
    });

    try {
      // Simulate form submission
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("Form submitted:", data);
          resolve();
        }, 2000);
      });

      setFormStatus({
        message: "Message sent successfully! I'll get back to you soon.",
        type: "success",
        visible: true,
      });

      e.target.reset();

      // Clear all field validations
      inputs.forEach((input) => {
        clearFieldError(input);
      });

      setTimeout(() => {
        setFormStatus({ message: "", type: "", visible: false });
      }, 5000);
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
        visible: true,
      });
    }
  };

  useEffect(() => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // Real-time validation
    const handleFieldBlur = (e) => {
      if (e.target.matches("input, textarea")) {
        validateField(e.target);
      }
    };

    const handleFieldInput = (e) => {
      if (e.target.matches("input, textarea")) {
        clearFieldError(e.target);
      }
    };

    form.addEventListener("blur", handleFieldBlur, true);
    form.addEventListener("input", handleFieldInput, true);

    return () => {
      form.removeEventListener("blur", handleFieldBlur, true);
      form.removeEventListener("input", handleFieldInput, true);
    };
  }, []);

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
