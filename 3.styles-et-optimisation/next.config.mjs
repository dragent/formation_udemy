/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // Configuration pour l'optimisation des images
    formats: ['image/avif', 'image/webp'],
    // Si vous utilisez des images externes, ajoutez les domaines ici :
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
};

export default nextConfig;
