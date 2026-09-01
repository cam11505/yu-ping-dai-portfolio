import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./projects.css";
import "./steins.css";

const [repositoryOwner = "", repositoryName = ""] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const basePath =
  repositoryName && repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}`
    : "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (repositoryOwner ? `https://${repositoryOwner}.github.io` : "http://localhost:3000");
const ogImage = `${basePath}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "戴育凭｜FAE Engineer · Automotive IC",
  description:
    "戴育凭的工程履歷網站：凌陽科技 SunPlus 車用 IC 部門 FAE 工程師，具嵌入式系統、IC SDK、客戶技術支援與個人工程專案經驗。",
  openGraph: {
    title: "戴育凭｜FAE Engineer · Automotive IC",
    description: "Engineering clarity from signal to solution.",
    type: "profile",
    locale: "zh_TW",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "戴育凭工程履歷網站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "戴育凭｜FAE Engineer · Automotive IC",
    description: "Engineering clarity from signal to solution.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
