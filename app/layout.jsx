// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <body className="antialiased flex flex-col min-h-screen scroll-smooth font-sans">
        <Navbar />
        <main className="mx-auto px-6 py-8 max-w-5xl w-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
