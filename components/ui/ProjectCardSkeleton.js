"use client";

export default function ProjectCardSkeleton({ index = 0 }) {
  return (
    <div
      className="project-card animate-fade-in-up flex flex-col h-full animate-pulse"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Skeleton */}
      <div className="relative overflow-hidden">
        <div className="w-full h-56 bg-gray-700/50 animate-pulse"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-700/50 rounded-lg mb-3 animate-pulse"></div>

        {/* Description Skeleton */}
        <div className="flex-grow space-y-3 mb-6">
          <div className="h-4 bg-gray-700/30 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-700/30 rounded animate-pulse w-5/6"></div>
          <div className="h-4 bg-gray-700/30 rounded animate-pulse w-4/6"></div>
          <div className="h-4 bg-gray-700/30 rounded animate-pulse w-3/6"></div>
        </div>

        <div className="mt-auto">
          {/* Tech Stack Skeleton */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="h-6 w-16 bg-gray-700/40 rounded-full animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-700/40 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-700/40 rounded-full animate-pulse"></div>
            <div className="h-6 w-18 bg-gray-700/40 rounded-full animate-pulse"></div>
          </div>

          {/* Button Skeleton */}
          <div className="h-12 bg-gray-700/50 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
