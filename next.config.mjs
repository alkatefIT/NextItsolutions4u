/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'businessfirms.co',
          },
          {
            protocol: 'https',
            hostname: 'www.itsolutions4u.co',
          },
        ],
      },
};

export default nextConfig;
 
  