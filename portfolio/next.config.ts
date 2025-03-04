/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static HTML export
  distDir: 'out',   // Ensures the build goes to the correct directory
  images: {
    unoptimized: true, // Avoids Image Optimization issues on GitHub Pages
  },
};

module.exports = nextConfig;
