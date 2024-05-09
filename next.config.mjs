/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    remotePatterns: [{ hostname: "mks-sistemas.nyc3.digitaloceanspaces.com" }],
  },
};

export default nextConfig;
