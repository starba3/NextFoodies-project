/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:['res.cloudinary.com']
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'res.cloudinary.com',
        //     port: '',
        //     pathname: '/dkb6qiwdh/image/upload/f_auto,q_auto/v1/**',
        //   },
        // ],
    },
}

module.exports = nextConfig
