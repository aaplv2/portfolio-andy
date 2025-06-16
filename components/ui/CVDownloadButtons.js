"use client";

import { useEffect } from "react";

export default function CVDownloadButtons() {
  const cvFiles = {
    en: "/cv-english.pdf",
    es: "/cv-spanish.pdf",
  };

  const downloadCV = (language) => {
    const filename = language === "en" ? "CV-English.pdf" : "CV-Español.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvFiles[language];
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show feedback
    showDownloadFeedback(language);
  };

  const showDownloadFeedback = (language) => {
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
  };

  useEffect(() => {
    const downloadEnBtn = document.getElementById("download-cv-en");
    const downloadEsBtn = document.getElementById("download-cv-es");

    const handleEnDownload = () => downloadCV("en");
    const handleEsDownload = () => downloadCV("es");

    if (downloadEnBtn) {
      downloadEnBtn.addEventListener("click", handleEnDownload);
    }

    if (downloadEsBtn) {
      downloadEsBtn.addEventListener("click", handleEsDownload);
    }

    return () => {
      if (downloadEnBtn) {
        downloadEnBtn.removeEventListener("click", handleEnDownload);
      }
      if (downloadEsBtn) {
        downloadEsBtn.removeEventListener("click", handleEsDownload);
      }
    };
  }, []);

  return (
    <div className="flex gap-4">
      <button id="download-cv-en" className="btn-primary group">
        <span>Download CV (EN)</span>
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>

      <button id="download-cv-es" className="btn-secondary group">
        <span>Download CV (ES)</span>
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>
    </div>
  );
}
