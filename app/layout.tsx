import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vantage Health Club | Optimize Your Health with Advanced Diagnostics",
  description: "Vantage gives you a full body scan that lets you benchmark the key markers of healthspan and vitality against real target ranges and real people. Join our research program beginning Feb 2026.",
  keywords: ["health club", "body scan", "preventive health", "VO2 Max", "DEXA scan", "health optimization", "healthspan", "vitality"],
  authors: [{ name: "Vantage Health Club" }],
  openGraph: {
    title: "Vantage Health Club | Optimize Your Health",
    description: "Advanced health diagnostics and preventive care for peak performance and healthspan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantage Health Club | Optimize Your Health",
    description: "Advanced health diagnostics and preventive care for peak performance and healthspan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={`${roboto.className} quiet-luxury antialiased`}>
        {children}
      </body>
    </html>
  );
}
