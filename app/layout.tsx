import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import BackToTop from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"] });

const domain = "https://graduation.lucswinkels.com";

export const metadata: Metadata = {
  title: {
    template: "%s // Portfolio | Luc Swinkels",
    default: "Portfolio | Luc Swinkels",
  },
  description: "My portfolio for my graduation internship at Moonly Software.",
  openGraph: {
    title: "Portfolio | Luc Swinkels",
    description:
      "My portfolio for my graduation internship at Moonly Software.",
    url: domain,
    siteName: "Portfolio | Luc Swinkels",
    images: [
      {
        url: `${domain}/img/logo/banner.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: `${domain}/favicon.ico`,
    shortcut: `${domain}/img/logo/png/ls-logo-black.png`,
    apple: `${domain}/apple-touch-icon.png`,
  },
  manifest: `${domain}/manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem>
          <Navbar />
          <div className="py-[calc(5rem+10vh)] xl:py-[calc(5rem+15vh)]">
            {children}
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
