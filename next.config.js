/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
