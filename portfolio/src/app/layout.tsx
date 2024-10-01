import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milena S. Aron | Portfolio",
  description: "My portfolio as a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
      <Analytics />
    </html>
  );
}
