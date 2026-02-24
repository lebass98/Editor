import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages에 배포할 때만 basePath를 /Editor로 설정하여 로컬 개발 404 방지
  basePath: isGithubActions ? "/Editor" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
