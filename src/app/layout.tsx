import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Troy Towing | 24/7 Emergency Tow Service",
  description:
    "Fast, reliable 24/7 towing in Troy, MI. Emergency roadside assistance, flatbed towing, lockouts and more. Call now for immediate help!",
  alternates: {
    canonical: "https://troytowingservice.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head />
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
