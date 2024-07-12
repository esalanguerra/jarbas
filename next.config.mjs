/** @type {import('next').NextConfig} */
const nextConfig = {
  // Redirects urls
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/",
        permanent: true,
      },
      {
        source: "/auth/login",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/entrar",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
