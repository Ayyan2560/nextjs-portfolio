import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ayyan Rizwan — Web Developer",
  description:
    "Ayyan Rizwan is a Karachi-based web developer building responsive interfaces and practical web applications with JavaScript, React, Next.js, and the MERN stack.",
  authors: [{ name: "Ayyan Rizwan" }],
  creator: "Ayyan Rizwan",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f4ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geistSans.variable + " " + geistMono.variable + " h-full scroll-smooth antialiased"}
    >
      <body className="min-h-full bg-[#f5f4ee] font-sans text-[#171916] selection:bg-[#d6f56b] selection:text-[#171916]">
        {children}
      </body>
    </html>
  );
}
