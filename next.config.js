/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  output: "standalone",
  images: {
    domains: ['img.icons8.com']
  }
}

module.exports = nextConfig
