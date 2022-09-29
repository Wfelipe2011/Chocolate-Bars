/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chocolates-api.vercel.app'],
  }
}

module.exports = nextConfig
