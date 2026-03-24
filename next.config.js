/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: trailing slash consistency
  trailingSlash: true,

  // Performance: image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'social-bridge.net',
      },
    ],
  },

  // SEO: security & performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // SEO: redirects for URL normalization
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-japanese',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-english',
        destination: '/en/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
