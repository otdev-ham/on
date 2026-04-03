import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "마음으로 온(ON) | 성동구 발달장애 가족 지원",
  description:
    "지역사회와 함께하는 발달장애 가족 대상 작업치료·가족지원 프로그램. 서비스 신청 및 OT 모집 안내.",
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
