import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title:{
    template: '%s | Sunday Speed Social',
    default: 'Sunday Speed Social',
  },
  description: 'What drives you?',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <link rel="icon" href="/images/logo-vector.svg" sizes="any" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
