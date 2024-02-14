/** @type {import('next').NextConfig} */
const nextConfig = {  
  env: {
    NEXT_PUBLIC_ROOT_DOMAIN: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};
export default nextConfig;
