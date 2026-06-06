import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Ninni Puglisi | Studio di Architettura e Interior Design",
    template: "%s | Ninni Puglisi",
  },

  description:
    "Spazio Atelier è uno studio di architettura e interior design fondato da Ninni Puglisi. Progetti residenziali, retail e commerciali sviluppati attraverso luce, materia e proporzione.",

  keywords: [
    "Ninni Puglisi",
    "Spazio Atelier",
    "Architetto Sicilia",
    "Architetto Catania",
    "Architetto Misterbianco",
    "Interior Design Sicilia",
    "Interior Designer Catania",
    "Architettura Contemporanea",
    "Retail Design",
    "Ristrutturazioni",
    "Progettazione Architettonica",
  ],

  authors: [
    {
      name: "Ninni Puglisi",
    },
  ],

  creator: "Ninni Puglisi",

  openGraph: {
    title: "Ninni Puglisi | Spazio Atelier",
    description:
      "Studio di architettura e interior design specializzato in progetti residenziali, retail e commerciali contemporanei.",
    type: "website",
    locale: "it_IT",
    url: "https://studionp39.com",
    siteName: "Ninni Puglisi | Spazio Atelier",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="bg-[#f8f7f4] text-black antialiased overflow-x-hidden">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V7MNH767PL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8KRMFPP644');
          `}
        </Script>

        <Intro />

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}