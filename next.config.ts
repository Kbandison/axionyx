import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Disable turbopack CSS optimization
    turbo: {
      rules: {
        "*.css": {
          loaders: ["css-loader", "postcss-loader"],
          as: "*.css",
        },
      },
    },
  },
};

export default nextConfig;
