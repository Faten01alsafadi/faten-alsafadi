import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Outfit,
} from "next/font/google";

import "./globals.css";


const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Faten Alsafadi | Frontend Developer",

  description:
    "Frontend Developer focused on React, TypeScript and modern web experiences.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}