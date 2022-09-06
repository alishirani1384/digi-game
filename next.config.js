/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig =withVideos( {
  i18n: {
    locales: ['en-US', 'fa-IR'],
    defaultLocale:'en-US'
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
});

module.exports = nextConfig
