/** @type {import('next').NextConfig} */
const nextConfig = {
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
