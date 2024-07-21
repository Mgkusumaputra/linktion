/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //   Available hostname for icon URL
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
