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
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-rounded/css/uicons-solid-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-brands/css/uicons-brands.css' />
      </head>
      <body className="font-sans antialiased bg-background text-white selection:bg-accent-purple/30 overflow-x-hidden min-h-screen">
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
