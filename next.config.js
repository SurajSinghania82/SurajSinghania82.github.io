/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: 'build', // This will tell Next.js to output the build files to the 'build' folder
  basePath: '',
  assetPrefix: '',
  // Optional: Enable static optimization for specific pages
  trailingSlash: true, // Creates index.html in the `out/` directory for each page
};

module.exports = nextConfig;
