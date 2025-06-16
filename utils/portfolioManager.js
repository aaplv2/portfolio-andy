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
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
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
    console.log("Mobile menu toggled:", this.mobileMenuOpen);
  }
}

// Projects Component - Updated with real images
class ProjectsSection extends PortfolioComponent {
  constructor() {
    super("projects-container");
    this.projects = [
      {
        title: "Archivo Jazz",
        description:
          "A comprehensive jazz music archive platform featuring artist profiles, album collections, and interactive listening experiences with curated playlists.",
        url: "https://example-archivo-jazz.com",
        image: "/archivo-jazz.png",
        tech: ["React", "Node.js", "MongoDB", "Audio API"],
      },
      {
        title: "Birdex",
        description:
          "Bird identification and tracking application with AI-powered species recognition, location mapping, and community-driven bird watching features.",
        url: "https://example-birdex.com",
        image: "/birdex.jpg",
        tech: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      },
      {
        title: "School Management System",
        description:
          "Complete educational management platform with student enrollment, grade tracking, attendance monitoring, and parent-teacher communication tools.",
        url: "https://example-school.com",
        image: "/school.jpg",
        tech: ["Next.js", "TypeScript", "Prisma", "MySQL"],
      },
    ];
  }

  render() {
    if (!this.element) return;

    this.element.innerHTML = this.projects
      .map(
        (project, index) => `
      <div class="project-card animate-fade-in-up" style="animation-delay: ${
        index * 0.2
      }s">
        <div class="relative overflow-hidden">
          <img 
            src="${project.image}" 
            alt="${project.title} project screenshot" 
            class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onerror="this.src='/placeholder.svg?height=250&width=400'; this.alt='${
              project.title
            } - Image not available'"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Image overlay with project info -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="text-center text-white p-4">
              <svg class="w-12 h-12 mx-auto mb-2 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              <p class="text-sm font-medium">View Project</p>
            </div>
          </div>
        </div>
        
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3 text-accent-orange group-hover:text-accent-orange/80 transition-colors">
            ${project.title}
          </h3>
          <p class="text-gray-300 mb-6 leading-relaxed">${
            project.description
          }</p>
          <div class="flex flex-wrap gap-2 mb-6">
            ${project.tech
              .map(
                (tech) => `
              <span class="px-3 py-1 text-xs font-medium bg-accent-blue/20 text-accent-blue rounded-full border border-accent-blue/30">
                ${tech}
              </span>
            `
              )
              .join("")}
          </div>
          <button class="btn-secondary project-link w-full group" data-url="${
            project.url
          }">
            <span>View Project</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
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
        const url = e.target.closest(".project-link").getAttribute("data-url");
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

    // Create enhanced notification
    const notification = document.createElement("div");
    notification.className = `
      fixed top-24 right-6 bg-accent-orange text-white px-6 py-4 rounded-xl shadow-lg z-50
      flex items-center space-x-3 animate-fade-in-up backdrop-blur-sm border border-accent-orange/30
    `;

    notification.innerHTML = `
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "fadeInUp 0.3s ease-out reverse";
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
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

      input.addEventListener("input", () => {
        this.clearFieldError(input);
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

  clearFieldError(field) {
    const existingError = field.parentNode.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
    field.classList.remove("border-red-500", "border-green-500");
    field.classList.add("border-gray-700/50");
  }

  showFieldValidation(field, isValid, errorMessage) {
    this.clearFieldError(field);

    if (!isValid) {
      field.classList.remove("border-gray-700/50");
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
      field.classList.remove("border-gray-700/50");
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
      await this.simulateFormSubmission(data);
      this.showStatus(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      this.element.reset();

      // Clear all field validations
      inputs.forEach((input) => {
        this.clearFieldError(input);
      });
    } catch (error) {
      this.showStatus("Failed to send message. Please try again.", "error");
    }
  }

  async simulateFormSubmission(data) {
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

    const icons = {
      loading: `<svg class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>`,
      success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>`,
      error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`,
    };

    const colors = {
      loading: "text-accent-orange bg-accent-orange/10 border-accent-orange/30",
      success: "text-green-400 bg-green-400/10 border-green-400/30",
      error: "text-red-400 bg-red-400/10 border-red-400/30",
    };

    statusElement.className = `mt-6 text-center p-4 rounded-xl border backdrop-blur-sm flex items-center justify-center space-x-3 ${colors[type]}`;
    statusElement.innerHTML = `${icons[type]}<span class="font-medium">${message}</span>`;
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
    // Enhanced scroll effects
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });

    // Intersection Observer for animations
    this.setupScrollAnimations();

    // Parallax effects
    this.setupParallaxEffects();
  }

  handleScroll() {
    const scrolled = window.pageYOffset;
    const header = document.getElementById("header");

    if (header) {
      if (scrolled > 100) {
        header.classList.add("bg-gray-950/95", "shadow-lg");
      } else {
        header.classList.remove("bg-gray-950/95", "shadow-lg");
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
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // Observe sections and cards for animations
    document
      .querySelectorAll("section, .feature-card, .contact-info-card")
      .forEach((element) => {
        observer.observe(element);
      });
  }

  setupParallaxEffects() {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".animate-float");

      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + index * 0.1;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
}

export { PortfolioManager };
