/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'eventfinity-production-assets.s3.amazonaws.com',
            port: '',
            pathname: '/photos/**',
          },
        ],
      },
}

module.exports = nextConfig
