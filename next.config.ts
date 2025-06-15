import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ru-msk-dr3-1.store.cloud.mts.ru',
        pathname: '/store/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/cars',
        destination: 'https://testing-api.ru-rating.ru/cars',
      },
    ];
  },
};

export default nextConfig;
