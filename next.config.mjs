/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: "/kevinprogress",
    assetPrefix: "/kevinprogress/",
    images: {
        unoptimized: true,
      },
};

export default nextConfig;
