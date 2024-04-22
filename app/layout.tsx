import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farcaster.id",
  description: "Share your Farcaster profile",
};

export default function RootLayout({
  params,
  children,
}: Readonly<{
  params: any;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen w-full max-w-full bg-slate-50 p-4 flex flex-col items-center justify-center h-full`}
      >
        {children}
      </body>
    </html>
  );
}
