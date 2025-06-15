// Base Portfolio Component Class
class PortfolioComponent {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    this.setupEventListeners();
    this.render();
    this.isInitialized = true;
  }

  setupEventListeners() {
    // Override in subclasses
  }

  render() {
    // Override in subclasses
  }
}

// Navigation Component
class Navigation extends PortfolioComponent {
  constructor() {
    super("header");
    this.mobileMenuOpen = false;
  }

  setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        this.toggleMobileMenu();
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Implementation for mobile menu toggle
    console.log("Mobile menu toggled:", this.mobileMenuOpen);
  }
}

// Projects Component
class ProjectsSection extends PortfolioComponent {
  constructor() {
    super("projects-container");
    this.projects = [
      {
        title: "E-Commerce Platform",
        description:
          "A full-stack e-commerce solution built with modern technologies.",
        url: "https://example-ecommerce.com",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Task Management App",
        description:
          "A collaborative task management application with real-time updates.",
        url: "https://example-taskapp.com",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Weather Dashboard",
        description:
          "A responsive weather dashboard with interactive charts and forecasts.",
        url: "https://example-weather.com",
        image: "/placeholder.svg?height=200&width=300",
      },
    ];
  }

  render() {
    if (!this.element) return;

    this.element.innerHTML = this.projects
      .map(
        (project) => `
      <div class="project-card bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2 text-accent-orange">${project.title}</h3>
          <p class="text-gray-300 mb-4">${project.description}</p>
          <button class="btn-secondary project-link" data-url="${project.url}">
            View Project
          </button>
        </div>
      </div>
    `
      )
      .join("");

    this.setupProjectLinks();
  }

  setupProjectLinks() {
    document.querySelectorAll(".project-link").forEach((button) => {
      button.addEventListener("click", (e) => {
        const url = e.target.getAttribute("data-url");
        window.open(url, "_blank", "noopener,noreferrer");
      });
    });
  }
}

// CV Download Component
class CVDownloader extends PortfolioComponent {
  constructor() {
    super("hero");
    this.cvFiles = {
      en: "/cv-english.pdf",
      es: "/cv-spanish.pdf",
    };
  }

  setupEventListeners() {
    const downloadEnBtn = document.getElementById("download-cv-en");
    const downloadEsBtn = document.getElementById("download-cv-es");

    if (downloadEnBtn) {
      downloadEnBtn.addEventListener("click", () => {
        this.downloadCV("en");
      });
    }

    if (downloadEsBtn) {
      downloadEsBtn.addEventListener("click", () => {
        this.downloadCV("es");
      });
    }
  }

  downloadCV(language) {
    const filename = language === "en" ? "CV-English.pdf" : "CV-Español.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = this.cvFiles[language];
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show feedback
    this.showDownloadFeedback(language);
  }

  showDownloadFeedback(language) {
    const message =
      language === "en"
        ? "English CV downloaded!"
        : "¡CV en Español descargado!";

    // Create temporary notification
    const notification = document.createElement("div");
    notification.className =
      "fixed top-20 right-4 bg-accent-orange text-white px-4 py-2 rounded-lg shadow-lg z-50";
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
}

// Contact Form Component
class ContactForm extends PortfolioComponent {
  constructor() {
    super("contact-form");
    this.formData = {};
  }

  setupEventListeners() {
    if (!this.element) return;

    this.element.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit();
    });

    // Real-time validation
    const inputs = this.element.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        this.validateField(input);
      });
    });
  }

  validateField(field) {
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

    this.showFieldValidation(field, isValid, errorMessage);
    return isValid;
  }

  showFieldValidation(field, isValid, errorMessage) {
    // Remove existing error message
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    if (!isValid) {
      field.classList.add("border-red-500");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message text-red-400 text-sm mt-1";
      errorDiv.textContent = errorMessage;
      field.parentNode.appendChild(errorDiv);
    } else {
      field.classList.remove("border-red-500");
      field.classList.add("border-green-500");
    }
  }

  async handleSubmit() {
    const formData = new FormData(this.element);
    const data = Object.fromEntries(formData.entries());

    // Validate all fields
    const inputs = this.element.querySelectorAll("input, textarea");
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      this.showStatus("Please correct the errors above.", "error");
      return;
    }

    this.showStatus("Sending message...", "loading");

    try {
      // Simulate API call
      await this.simulateFormSubmission(data);
      this.showStatus(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      this.element.reset();
    } catch (error) {
      this.showStatus("Failed to send message. Please try again.", "error");
    }
  }

  async simulateFormSubmission(data) {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Form submitted:", data);
        resolve();
      }, 2000);
    });
  }

  showStatus(message, type) {
    const statusElement = document.getElementById("form-status");
    if (!statusElement) return;

    statusElement.className = `mt-4 text-center ${
      type === "error"
        ? "text-red-400"
        : type === "success"
        ? "text-green-400"
        : "text-accent-orange"
    }`;
    statusElement.textContent = message;
    statusElement.classList.remove("hidden");

    if (type === "success" || type === "error") {
      setTimeout(() => {
        statusElement.classList.add("hidden");
      }, 5000);
    }
  }
}

// Main Portfolio Manager
class PortfolioManager {
  constructor() {
    this.components = [];
  }

  init() {
    // Initialize all components
    this.components = [
      new Navigation(),
      new ProjectsSection(),
      new CVDownloader(),
      new ContactForm(),
    ];

    this.components.forEach((component) => {
      component.init();
    });

    this.setupGlobalEventListeners();
  }

  setupGlobalEventListeners() {
    // Scroll animations
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });

    // Smooth reveal animations
    this.setupScrollAnimations();
  }

  handleScroll() {
    const scrolled = window.pageYOffset;
    const header = document.getElementById("header");

    if (header) {
      if (scrolled > 100) {
        header.classList.add("bg-gray-900/95");
      } else {
        header.classList.remove("bg-gray-900/95");
      }
    }
  }

  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    // Observe sections for animations
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }
}

// Make PortfolioManager globally available
if (typeof window !== "undefined") {
  window.PortfolioManager = PortfolioManager;
}
