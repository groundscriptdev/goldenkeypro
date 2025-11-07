

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para SSR (no estático)
  output: 'standalone', // Elimina cualquier referencia a modo estático
  
  images: {
    // Deshabilitar optimización en desarrollo para evitar problemas con localhost
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.panamagoldenkey.com',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'engine.panamagoldenkey.com',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
    ],
  },

  // Asegura que las rutas funcionen correctamente
  trailingSlash: false,
};

module.exports = withNextIntl(nextConfig);