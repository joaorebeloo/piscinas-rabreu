import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getSiteUrl } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const siteTitle = "Piscinas R Abreu | Venda de piscinas";
const siteDescription =
  "Venda de piscinas em Portugal, com catálogo de modelos, aconselhamento especializado e orçamento gratuito.";

export const metadata: Metadata = {
  applicationName: "Piscinas R Abreu",
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | Piscinas R Abreu",
  },
  description: siteDescription,
  keywords: [
    "piscinas",
    "venda de piscinas",
    "piscinas em Portugal",
    "piscinas em Leiria",
    "piscinas em Alcobaça",
    "piscinas de fibra",
    "orçamento piscina",
  ],
  authors: [{ name: "Piscinas R Abreu" }],
  creator: "Piscinas R Abreu",
  publisher: "Piscinas R Abreu",
  category: "Home improvement",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Piscinas R Abreu",
    type: "website",
    locale: "pt_PT",
    countryName: "Portugal",
    images: [
      {
        url: "/images/hero-seedance-poster.png",
        width: 1200,
        height: 630,
        alt: "Piscina residencial da Piscinas R Abreu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero-seedance-poster.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
