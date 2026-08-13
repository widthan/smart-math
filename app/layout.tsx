import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/layout/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Math — Развитие памяти и мышления",
  description:
    "Онлайн-курс для родителей и детей младших классов.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Background />

        {/* Градиент */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-white bg-[#EAF2FA] to-sky-50" />

        {/* Blur #1 */}
        <div className="fixed left-[-180px] top-[-180px] -z-10 h-[520px] w-[520px] rounded-full bg-fuchsia-400/25 blur-[170px]" />

        {/* Blur #2 */}
        <div className="fixed right-[-180px] top-[120px] -z-10 h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-[170px]" />

        {/* Blur #3 */}
        <div className="fixed bottom-[-220px] left-1/3 -z-10 h-[700px] w-[700px] rounded-full bg-[#EAF2FA] blur-[220px]" />

        {/* Шум */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        {children}

      </body>
    </html>
  );
}