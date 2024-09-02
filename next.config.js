// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
}
   
module.exports = nextConfig

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
          port: '',
        },
      ],
    },
  }