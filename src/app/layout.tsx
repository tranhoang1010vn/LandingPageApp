import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "App Quawaco - Hướng dẫn sử dụng ứng dụng",
  description: "Astro SaaS template built with Astro & Tailwind CSS. Customize freely and deploy with ease.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name or Company Name" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.quawaco.com/",
    title: "App Quawaco - Hướng dẫn sử dụng ứng dụng",
    description: "A brief description of your website content.",
    images: ["https://www.yourwebsite.com/path/to/image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Quawaco - Hướng dẫn sử dụng ứng dụng",
    description: "A brief description of your website content.",
    images: ["https://www.yourwebsite.com/path/to/image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth selection:bg-accent-500 selection:text-white no-touchevents hydrated`}
      suppressHydrationWarning
    >
      <body
        className="bg-white flex flex-col min-h-svh font-sans"
        suppressHydrationWarning
      >
        <Navigation />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
