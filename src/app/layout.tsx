import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/sections/smooth-scroll";
import { CustomCursor } from "@/components/sections/cursor";
import { Navbar } from "@/components/sections/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vyne Protocol | Universal Liquidity Layer",
  description: "Vyne is the first specialized Layer 1 blockchain optimized for high-frequency trading and AI inference. Secure, scalable, and built for the machine economy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden`}>
        <SmoothScroll>
          <div className="bg-black text-white min-h-screen selection:bg-green-400 selection:text-black font-sans overflow-x-hidden">
            <CustomCursor />
            <Navbar />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
