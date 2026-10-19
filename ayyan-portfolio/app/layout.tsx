import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans=Geist({variable:"--font-geist-sans",subsets:["latin"]});
const geistMono=Geist_Mono({variable:"--font-geist-mono",subsets:["latin"]});
export const metadata:Metadata={title:"Ayyan Rizwan — Web Developer",description:"The portfolio of Ayyan Rizwan, a Karachi-based web developer working with JavaScript, React, Next.js and the MERN stack.",authors:[{name:"Ayyan Rizwan"}],creator:"Ayyan Rizwan",icons:{icon:"/favicon.ico"}};
export const viewport:Viewport={themeColor:"#090b10",colorScheme:"dark"};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={geistSans.variable+" "+geistMono.variable+" h-full scroll-smooth antialiased"}><body className="min-h-full bg-[#090b10] font-sans text-[#f4f6fb] selection:bg-[#6385ff] selection:text-white">{children}</body></html>}
