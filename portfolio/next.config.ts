/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  // Only add this if you're using a custom domain instead of *.github.io
  // assetPrefix: '',
}

module.exports = nextConfig