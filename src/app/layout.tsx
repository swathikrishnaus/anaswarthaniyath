import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anaswar Thaniyath — Singer, Composer & Music Producer",
  description:
    "Independent musician, singer-songwriter, composer and music producer based in Thrissur, Kerala.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={geistSans.variable}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
