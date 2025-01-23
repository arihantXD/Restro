import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistMont = Montserrat({
  variable: "--font-geist-mont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rustro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMont.variable} ${geistSans.variable} ${geistMono.variable} antialiased max-w-[1200px] mx-auto`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
