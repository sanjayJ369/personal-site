import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    // Exclude paper.js from server-side bundling
    if (isServer) {
      config.externals.push({
        paper: "paper",
        "paper/dist/paper-core": "paper",
        "paper/dist/paper-full": "paper",
      });
    }

    return config;
  },
};

export default nextConfig;
