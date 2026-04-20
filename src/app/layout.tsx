import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./Components/Header";
import Footer from "./Components/FooterSection";
import { CursorProvider } from "./context/CursorContext";
import GlobalCursor from "./Components/GlobalCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartavya Seeds",
  description: "Growing Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
      <CursorProvider>
          {/* GLOBAL CURSOR */}
          <GlobalCursor />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
