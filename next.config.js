/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'out', // Use 'out' as the default export folder
  basePath: '', // Replace 'repo-name' with your GitHub repository name
  assetPrefix: '',
};

module.exports = nextConfig;

