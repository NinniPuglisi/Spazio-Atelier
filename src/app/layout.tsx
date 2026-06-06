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
  metadataBase: new URL("https://studionp39.com"),

  title: {
    default: "Ninni Puglisi | Studio di Architettura e Interior Design",
    template: "%s | Ninni Puglisi",
  },

  description:
    "Ninni Puglisi è un architetto e interior designer con sede a Misterbianco, Catania. Spazio Atelier realizza progetti residenziali, commerciali e retail in Sicilia attraverso luce, materia e proporzione.",

  keywords: [
    "Ninni Puglisi",
    "Spazio Atelier",
    "Architetto Catania",
    "Architetto Misterbianco",
    "Studio di Architettura Catania",
    "Studio di Architettura Sicilia",
    "Interior Designer Catania",
    "Interior Design Sicilia",
    "Architettura Contemporanea",
    "Progettazione Residenziale",
    "Progettazione Commerciale",
    "Retail Design",
    "Ristrutturazioni Catania",
    "Architettura d'Interni",
    "Design di Interni",
  ],

  authors: [
    {
      name: "Ninni Puglisi",
    },
  ],

  creator: "Ninni Puglisi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ninni Puglisi | Spazio Atelier",
    description:
      "Architetto e Interior Designer a Catania. Progetti residenziali, commerciali e retail sviluppati da Ninni Puglisi attraverso un approccio contemporaneo e minimale.",
    url: "https://studionp39.com",
    siteName: "Spazio Atelier",
    locale: "it_IT",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ninni Puglisi | Spazio Atelier",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ninni Puglisi | Spazio Atelier",
    description:
      "Architetto e Interior Designer a Catania. Progetti residenziali e commerciali contemporanei.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="bg-[#f8f7f4] text-black antialiased overflow-x-hidden">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8KRMFPP644"
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

        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",

              name: "Ninni Puglisi",
              alternateName: "Spazio Atelier",

              url: "https://studionp39.com",

              image: "https://studionp39.com/og-image.jpg",

              telephone: "+393932989036",

              email: "ninnipuglisi@studionp39.com",

              priceRange: "€€€",

              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Bruno Buozzi 39",
                addressLocality: "Misterbianco",
                postalCode: "95045",
                addressRegion: "CT",
                addressCountry: "IT",
              },

              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.518,
                longitude: 15.009,
              },

              sameAs: [
                "https://www.instagram.com/ninni_puglisi/",
              ],

              areaServed: [
                "Misterbianco",
                "Catania",
                "Sicilia",
              ],
            }),
          }}
        />

        <Intro />

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}