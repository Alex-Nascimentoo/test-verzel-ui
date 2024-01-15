/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:5000",
    ADMIN_PASSWORD: "bolinho"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig
