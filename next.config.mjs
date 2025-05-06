/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "businessfirms.co",
      },
      {
        protocol: "https",
        hostname: "www.itsolutions4u.co",
      },
      {
        protocol: "https",
        hostname: "darkred-pheasant-811225.hostingersite.com",
      },

    ],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/public/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
