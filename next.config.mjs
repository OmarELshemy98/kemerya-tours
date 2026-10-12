import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Initialize OpenNext Cloudflare dev integration for local development
// This enables Cloudflare bindings (KV, R2, DO, D1) in next dev
initOpenNextCloudflareForDev();

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
    qualities: [70, 75, 80],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kemeryatours.com',
      },
    ],
    // Reduce unused image formats on mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compile to modern JS only (eliminates legacy polyfills ~14 KiB)
  // browserslist in package.json handles this for the build
};

export default nextConfig;
