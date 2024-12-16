/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '.',
    output: 'export',
    trailingSlash: true,
    optimizeFonts: true,
    images: {
        disableStaticImages: false,
        formats: ['image/avif', 'image/webp'],
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'devcdn.poodle.io',
            },
            {
                protocol: 'https',
                hostname: 'cdn.poodle.io',
            },
        ],
    },
};
export default nextConfig;
