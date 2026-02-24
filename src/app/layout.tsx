import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendardGov = localFont({
  src: [
    { path: "./fonts/PretendardGOV-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/PretendardGOV-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/PretendardGOV-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/PretendardGOV-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PretendardGOV-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/PretendardGOV-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PretendardGOV-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PretendardGOV-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/PretendardGOV-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-pretendard-gov",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlogChannel - 사는 재미가 없으면, 사는 재미라도",
  description: "BlogChannel Clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendardGov.variable} font-sans antialiased bg-white text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
