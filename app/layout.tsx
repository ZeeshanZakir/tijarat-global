import type { Metadata } from "next";
import "./globals.css";
import { Anton } from "next/font/google";

import Navbar from "./component/nav";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Tijarat Global",
  description: "PAKISTANI PREMIUM RICE EXPORTERS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={anton.variable}>
      <body className="font-anton antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
