import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // ✅ Add this line
  },
};

export default nextConfig;
