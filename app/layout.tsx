import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen w-full max-w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="text-black dark:text-white min-h-screen w-full max-w-full bg-slate-50 dark:bg-slate-950 p-4 flex flex-col items-center justify-center h-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
