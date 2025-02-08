/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
          readline: false, // ✅ Prevents browser from trying to import 'readline'
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;