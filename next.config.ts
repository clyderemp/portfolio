import type { NextConfig } from "next";

/**
 * Static export so the site can be hosted on GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH is set to "/portfolio" by the deploy workflow;
 * locally (and on hosts like Vercel) it is empty.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Allow hot reload when opening the dev server through this LAN address.
  allowedDevOrigins: ["192.168.8.50"],
  images: {
    // next/image optimization needs a server; Pages is static-only.
    unoptimized: true,
  },
};

export default nextConfig;
