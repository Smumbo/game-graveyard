import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/public/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Game Graveyard",
  description: "A list of dead, at-risk, and resurrected online games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
