import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
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

export const metadata: Metadata = {
  title: "Piscinas R Abreu | Venda e montagem de piscinas",
  description:
    "Especialistas em venda, montagem e assistência de piscinas. Peça o seu orçamento gratuito.",
  metadataBase: new URL("https://piscinas-r-abreu.local"),
  openGraph: {
    title: "Piscinas R Abreu | Venda e montagem de piscinas",
    description:
      "Especialistas em venda, montagem e assistência de piscinas. Peça o seu orçamento gratuito.",
    type: "website",
    locale: "pt_PT",
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
