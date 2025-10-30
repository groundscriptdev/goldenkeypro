

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para SSR (no estático)
  output: 'standalone', // Elimina cualquier referencia a modo estático
  
  images: {
    // Para Railway, es mejor mantener la optimización activa
    unoptimized: false,
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
    ],
  },

  // Asegura que las rutas funcionen correctamente
  trailingSlash: false,
};

module.exports = withNextIntl(nextConfig);