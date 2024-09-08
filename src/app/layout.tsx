import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const ppNeue = localFont({ src: "../../public/fonts/CraftworkGroteskGX.ttf" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhivet Network",
  description: "Welcome to Rhivet Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ppNeue.className}>{children}</body>
    </html>
  );
}
