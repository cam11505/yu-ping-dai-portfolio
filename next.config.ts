import type { NextConfig } from "next";

const [repositoryOwner = "", repositoryName = ""] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const basePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repositoryName &&
  repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
