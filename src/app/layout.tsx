import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import ApplicationHeader from "@/components/application/layout/header";
import TerminalFooter from "@/components/application/shared/terminal-footer";
import WhatsAppCTA from "@/components/application/shared/hero/whatsapp-cta";
import { IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
});

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tech-share",
});

export const metadata: Metadata = {
  title: "Matheus Montovaneli",
  description: "Matheus Montovaneli Portfolio",
  icons: {
    icon: "/neli-icon.jpg",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} ${ibmMono.variable} ${shareTech.variable} antialiased`}
      >
        <Analytics />
        <ApplicationHeader />
        {children}
        <TerminalFooter />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
