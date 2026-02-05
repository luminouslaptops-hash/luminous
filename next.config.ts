import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.springboard.com',
      },
      {
        protocol: 'https',
        hostname: 'www.webinstitute.com.bd',
      },
      {
        protocol: 'https',
        hostname: 'kritagyata.in',
      },
    ],
  },
};

export default nextConfig;
