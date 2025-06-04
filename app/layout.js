import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "./preloader/Predesign";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Zaid",
  description: "Developed By zzayd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader>
        {children}
        </Preloader>
      </body>
    </html>
  );
}
