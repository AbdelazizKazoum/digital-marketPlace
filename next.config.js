/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_TOKEN_KEY: process.env.API_TOKEN_KEY,
  },
};

module.exports = nextConfig;
