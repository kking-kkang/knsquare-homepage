import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "KNSquare — AI & Knowledge Graph Innovation",
  description:
    "방대한 비정형 문서를 체계적 지식으로 전환하여, 정확하고 신뢰할 수 있는 인사이트를 제공합니다. We Structure Knowledge, You Discover Insight.",
  keywords: ["KNSquare", "지식광장네트워크", "Knowledge Graph", "AI", "RAG", "Kraph", "KNie"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${notoSansKR.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
