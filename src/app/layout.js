import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SparePartWala",
  // description: "Best Car Parts & Accessories Online Store",
  icons: {
    icon: "/logo/logo.png",       // Normal favicon
    shortcut: "/logo/logo.png",   // Shortcut icon
    apple: "/logo/logo.png",      // For iOS Safari
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
