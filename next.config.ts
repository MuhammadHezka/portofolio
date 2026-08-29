import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tombol "N" (Next.js Dev Tools) tidak diperlukan pada tampilan portfolio.
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
