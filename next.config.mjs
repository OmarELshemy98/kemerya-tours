/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/why-kemerya',
        destination: '/:locale/about-us',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kemeryatours.com',
      },
    ],
  },
};

export default nextConfig;
