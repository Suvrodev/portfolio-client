import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Providers";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suvrodeb Howlader",
  description: "Welcome to Suvrodeb Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={roboto.className} suppressHydrationWarning>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
