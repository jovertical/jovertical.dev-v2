/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'www.datocms-assets.com'],
  },

  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
