import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Engineer Portfolio | React • Next.js • TypeScript",
  description:
    "Senior Frontend Engineer with 4+ years building scalable, high-performance React and Next.js applications across EdTech, Travel, and FinTech.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Frontend Engineer Portfolio",
    description:
      "Scalable React/Next.js platforms, performance optimization, and reusable architecture for real-world products.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}


