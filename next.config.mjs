/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Configure domains for external images if needed
    domains: [],
    // Allow all image formats
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
};

export default nextConfig;
