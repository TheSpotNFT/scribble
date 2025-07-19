import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 Add this line for Netlify static export
};

export default nextConfig;
