// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // optional, you can leave this empty unless using external images
  },
  experimental: {
    appDir: false, // disable App Router if you’re using /pages directory
  },
}

module.exports = nextConfig;
