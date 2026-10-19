import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 85 is used for photos; 75 stays as the Next.js default.
    qualities: [75, 85],
  },
};

export default nextConfig;
