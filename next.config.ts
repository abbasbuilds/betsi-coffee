import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.menu-world.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
