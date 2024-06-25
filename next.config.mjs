/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol:'https',
            hostname: 'sundayspeedsocial.pockethost.io',
            pathname: '/api/files/**'
        }]
    }
};

export default nextConfig;
