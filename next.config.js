/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: 'build', // This will tell Next.js to output the build files to the 'build' folder
};

module.exports = nextConfig;
