import type { NextConfig } from "next";

// GitHub Pages needs a base path when hosted at <user>.github.io/<repo>.
// Set GITHUB_PAGES=true in CI and the base path will be derived automatically from GITHUB_REPOSITORY.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGhPages = process.env.GITHUB_PAGES === "true";
const basePath = isGhPages && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Ensure Turbopack uses the project directory (not the repository root) as the workspace root.
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
