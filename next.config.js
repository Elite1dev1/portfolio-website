/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore punycode warning
    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ }
    ];
    return config;
  },
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
}

module.exports = nextConfig