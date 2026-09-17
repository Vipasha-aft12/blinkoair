/** @type {import("next").NextConfig} */
// Static export is enabled only when NEXT_EXPORT=1, set by the `build` npm script.
// Every build process (main + workers) inherits the env var, so it is consistent.
// It is OFF for `next dev`, because dev cannot resolve generateStaticParams() for
// dynamic routes when export is on; with it off, `npm run dev` serves every page.
const nextConfig = {
  ...(process.env.NEXT_EXPORT === "1" ? { output: "export" } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
};
export default nextConfig;
