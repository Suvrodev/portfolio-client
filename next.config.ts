import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // webpack: (config) => {
  //   config.module?.rules.push({
  //     test: /\.css$/,
  //     use: ["style-loader", "css-loader"],
  //   });
  //   return config;
  // },
};

export default nextConfig;
