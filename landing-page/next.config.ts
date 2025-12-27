import type { NextConfig } from "next";

// GitHub Pages needs a base path when hosted at <user>.github.io/<repo>.
// Set GITHUB_PAGES=true in CI and the base path will be derived automatically from GITHUB_REPOSITORY,
// unless you set CUSTOM_DOMAIN=true (for apex/custom domains on Pages) to keep assets at root.
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGhPages = process.env.GITHUB_PAGES === "true";
const useRepoBasePath = isGhPages && process.env.CUSTOM_DOMAIN !== "true";
const basePath = useRepoBasePath && repo ? `/${repo}` : "";

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
