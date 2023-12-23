/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.stickpng.com" },
      { protocol: "http", hostname: "image.tmdb.org" },
      { hostname: "links.papareact.com" },
    ],
  },
};

module.exports = nextConfig;
