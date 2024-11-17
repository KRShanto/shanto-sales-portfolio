import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "krshanto.vercel.app",
      },
      {
        hostname: "media.licdn.com",
      },
    ],
  },
};

export default nextConfig;
