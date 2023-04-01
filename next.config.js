/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'www.datocms-assets.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
