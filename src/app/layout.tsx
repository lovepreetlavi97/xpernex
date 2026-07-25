import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { getSEOMetadata, getOrgSchemaJsonLd } from "@/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = getSEOMetadata({
  title: "Engineering Tomorrow. Today.",
  description: "Xpernex builds world-class AI-powered software, enterprise solutions, cloud networks, and intelligent digital experiences.",
  path: ""
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getOrgSchemaJsonLd();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans bg-brand-dark text-white min-h-screen flex flex-col antialiased">
        <LenisProvider>
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
