import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack uses the project directory (not the repository root) as the workspace root.
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
