// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexHire.ai",
  description: "Smart, AI-powered hiring for modern teams and job seekers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen h-full flex flex-col scroll-smooth font-sans">
        <Navbar />
        <main className="mx-auto w-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
