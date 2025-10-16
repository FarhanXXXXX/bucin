// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenangan Kita ❤️",
  description: "Website spesial untuk pasangan tercinta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* 🎵 Musik global — WAJIB ADA */}
        <audio
          id="global-music"
          src="/music/penjaga-hati.mp3" // ← pastikan nama file benar
          loop
          preload="auto"
        />
        {children}
      </body>
    </html>
  );
}