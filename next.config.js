

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 genera un sitio estático compatible con Cloudflare Pages
  output: 'export',

  // 👇 desactiva optimización de imágenes (porque Cloudflare sirve los assets)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.panamagoldenkey.com', // cambia esto por tu backend real
        pathname: '/media/**',
      },
    ],
  },

  // 👇 opcional: si usas rutas base (subdominios o staging)
  assetPrefix: '',
  trailingSlash: true,
};

module.exports = withNextIntl(nextConfig);