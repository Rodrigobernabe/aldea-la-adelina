import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aldea La Adelina | Digital Gorpcore",
  description: "Experience the fusion of nature and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${anton.variable} ${inter.variable} bg-charcoal-forest text-soft-sand antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
