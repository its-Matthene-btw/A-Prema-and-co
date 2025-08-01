/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'googleusercontent.com', // Good to keep this, just in case
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https', // The actual QR server uses https
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/v1/create-qr-code/**',
      },
    ],
  },
};

module.exports = nextConfig;