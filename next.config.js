/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    domains: [
      "img.icons8.com",
      "raw.githubusercontent.com",
      "drive.google.com",
      "s3.amazonaws.com",
      "d2qv16rycic4zo.cloudfront.net",
      "img.rk-certificate.com",
    ],
  },
};

module.exports = nextConfig;
