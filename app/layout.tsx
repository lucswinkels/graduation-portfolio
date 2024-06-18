import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import BackToTop from "@/components/back-to-top";
import Cursor from "@/components/cursor";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const domain = "https://graduation.lucswinkels.com";

{
  /* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212">
<meta name="msapplication-TileColor" content="#121212">
<meta name="theme-color" content="#ffffff"></meta> */
}

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
        url: `${domain}/img/logo/jpg/banner/banner--black-icon--white-gradient-background.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: `${domain}/favicon.ico`,
    shortcut: `${domain}/img/logo/jpg/boxed/boxed--black-icon--white-gradient-background.jpg`,
    apple: `${domain}/apple-touch-icon.png`,
  },
  manifest: `${domain}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" enableSystem>
          {/* <Navbar /> */}
          {/* Min-h = 100dvh - copyright height to push copyright down on empty pages */}
          <div className="py-32 min-h-[calc(100dvh-5rem)]">{children}</div>
          {/* <BackToTop /> */}
          {/* <Cursor /> */}
          {/* <Footer />
          <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
