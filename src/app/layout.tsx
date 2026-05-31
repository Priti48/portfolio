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
  title: "Priti Singh | Frontend Engineer — React, Next.js & TypeScript",
  description:
    "Software Engineer (Frontend) with 3+ years building scalable React and Next.js applications across Government EdTech, FinTech, and Travel. Specialising in RBAC systems, reusable component architecture, and API-driven UIs. Open to Remote and Hybrid roles.",
  metadataBase: new URL("https://priti-portfolio-five.vercel.app"),
  keywords: [
    "Priti Singh",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Software Engineer Frontend",
    "React.js",
    "Redux Toolkit",
    "React Query",
    "RBAC frontend",
    "Frontend Portfolio India",
    "Remote Frontend Developer",
    "Hybrid Frontend Developer",
  ],
  openGraph: {
    title: "Priti Singh | Frontend Engineer — React, Next.js & TypeScript",
    description:
      "3+ years building production React/Next.js platforms across EdTech, FinTech, and Travel. Specialising in RBAC, reusable component systems, and API-driven UIs. Open to Remote & Hybrid roles.",
    type: "website",
    url: "https://priti-portfolio-five.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priti Singh | Frontend Engineer — React, Next.js & TypeScript",
    description:
      "3+ years building production React/Next.js platforms. Open to remote , hybrid & onsite Frontend Engineer roles.",
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


