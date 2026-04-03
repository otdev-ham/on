import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "서울특별시작업치료사회 | 마음으로 온(ON)",
  description:
    "서울특별시작업치료사회 — 지역사회와 함께하는 발달장애 가족 대상 작업치료·가족지원 사업 마음으로 온(ON). 사업 소개 및 OT 모집 안내.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
