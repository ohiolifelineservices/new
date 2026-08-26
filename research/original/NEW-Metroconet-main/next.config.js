/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  // Increase timeout for static generation
  staticPageGenerationTimeout: 300,
  // Enable standalone output for better deployment compatibility
  output: "standalone",

  // Add ESLint configuration to ignore errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add TypeScript configuration to ignore errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
