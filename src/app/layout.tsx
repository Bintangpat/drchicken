import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Bodybase from "@/components/bodybase";
import Navbar from "@/components/navbar";

import "./globals.css";

const Intertightsans = Inter_Tight({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr.Chicken",
  description: "Ayam goreng enak di pringsewu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Intertightsans.className} antialiased`}>
        <Bodybase>
          <Navbar />
          {children}
        </Bodybase>
      </body>
    </html>
  );
}
