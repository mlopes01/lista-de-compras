/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    // ...outras configurações...
    allowedDevOrigins: [
        'http://192.168.3.66:3000', // coloque o IP do seu computador e a porta do dev server
    ],
};