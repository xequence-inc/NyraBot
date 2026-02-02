import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google"; // Using Google Fonts
import "./globals.css";

// Font Configuration
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: 'swap',
});

const rubik = Rubik({ 
  subsets: ["latin"], 
  variable: "--font-rubik",
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Nyra | The Next Gen Discord Bot",
  description: "Modular, powerful, and built for scale.",
  icons: {
    icon: "/nyralogo.png",
    shortcut: "/nyralogo.png",
    apple: "/nyralogo.png",
  }
};

import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${rubik.variable}`}>
       <head>
          <link rel="icon" href="/nyralogo.png" />
          {/* Flaticon removed. Using Mage Icons via Iconify. */}
      </head>
      <body className="font-sans antialiased bg-background text-white selection:bg-accent-purple/30 overflow-x-hidden min-h-screen">
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
