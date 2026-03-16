import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://lebass98.github.io/Editor/"),
  title: "듀엣미니 블로그입니다.",
  description: "듀엣미니의 소소한 일상과 맛있는 이야기들",
  openGraph: {
    title: "듀엣미니 블로그입니다.",
    description: "듀엣미니의 소소한 일상과 맛있는 이야기들",
    images: [
      {
        url: "/ogg_img.jpg",
        width: 1200,
        height: 630,
        alt: "듀엣미니 블로그",
      },
    ],
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
