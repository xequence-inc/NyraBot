import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: "Nyra | Manage Less. Do More.",
  description: "The all-in-one Discord platform for moderation, economy, and community engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased bg-[#030305] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
