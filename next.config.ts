import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Explicitly allow Cloudinary
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com", // Allow Cloudinary (HTTP)
      },
      {
        protocol: "https",
        hostname: "**", // Allow all HTTPS images (not recommended for security, but works)
      },
    ],
  },
};

export default nextConfig;
