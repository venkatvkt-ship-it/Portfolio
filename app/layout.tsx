import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Venkat S | Software Engineer - Full Stack Developer",
  description:
    "Software Engineer experienced in building production-grade SaaS applications and automation-driven systems using Angular and Node.js. Based in Dubai, UAE.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Angular",
    "Node.js",
    "Dubai",
    "UAE",
  ],
};

export const viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
