/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: false, // désactive Turbopack
  },
};

export default nextConfig;
