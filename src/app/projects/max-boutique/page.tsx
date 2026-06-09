import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
title:
"MAX Boutique | Retail Design e Interior Design Commerciale a Misterbianco | Ninni Puglisi",

description:
"MAX Boutique è un progetto di retail design firmato da Ninni Puglisi a Misterbianco, Catania. Uno spazio commerciale contemporaneo progettato attraverso luce, materiali, dettagli su misura ed esperienza d'acquisto.",

keywords: [ 
  "MAX Boutique",
  "Retail Design Catania", 
  "Interior Design Commerciale", 
  "Architetto Catania", 
  "Boutique Design Sicilia", 
  "Progettazione Negozi", 
  "Architettura Commerciale", 
  "Interior Designer Catania", 
  "Misterbianco", 
  "Ninni Puglisi", 
  "Spazio Atelier", 
],

alternates: {
  canonical: "/projects/max-boutique", 
},

openGraph: { 
  title:
   "MAX Boutique | Retail Design e Interior Design Commerciale",

  description: "Uno spazio commerciale contemporaneo progettato da Ninni Puglisi a Misterbianco.",

  url: "https://studionp39.com/projects/max-boutique",

  siteName: "Spazio Atelier",

  locale: "it_IT",

  type: "article",

  images: [ 
    {
      url: "/images/max-boutique-01.jpg", 
      width: 1600, 
      height: 900, 
      alt: "MAX Boutique - Ninni Puglisi", 
    }, 
  ],
},

twitter: {
 card: "summary_large_image",

 title:
  "MAX Boutique | Retail Design e Interior Design Commerciale",

  description:
  "Progetto retail contemporaneo firmato Ninni Puglisi.",

  images: ["/images/max-boutique-01.jpg"],
 }, 
};

export default function MaxBoutiquePage() {
return ( <main className="bg-[#f5f4f1] text-black overflow-hidden">

```
  {/* HERO */}

  <section className="relative min-h-screen overflow-hidden">

    <Image
      src="/images/max-boutique-01.jpg"
      alt="MAX Boutique"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/25" />

    <div className="absolute bottom-12 md:bottom-20 left-6 md:left-20 text-white">

      <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
        Retail Design
      </p>

      <FadeIn fromLeft>
        <h1 className="hero-title">
          MAX Boutique
        </h1>
      </FadeIn>

      <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
        Misterbianco · 2026
      </p>

    </div>

  </section>

  {/* CONCEPT */}

  <section className="py-20 md:py-32">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      <div>

        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-8">
          Concept
        </p>

        <FadeIn fromLeft>
          <h2 className="section-title">
            Un&apos;esperienza
            <br />
            retail costruita
            <br />
            attraverso luce
            <br />
            e materia.
          </h2>
        </FadeIn>

      </div>

      <FadeIn>

        <div>

          <p className="text-base md:text-xl text-neutral-700 leading-relaxed">
            MAX Boutique nasce dalla volontà di creare uno spazio
            contemporaneo capace di valorizzare il prodotto attraverso
            un linguaggio architettonico essenziale e sofisticato.
          </p>

          <p className="text-base md:text-xl text-neutral-700 leading-relaxed mt-6 md:mt-8">
            Materiali materici, illuminazione integrata e dettagli
            metallici definiscono un ambiente elegante e funzionale,
            pensato per accompagnare il cliente lungo un percorso
            d&apos;acquisto fluido e coinvolgente.
          </p>

          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 text-sm">

            <div>
              <p className="text-neutral-500 mb-2">Località</p>
              <p>Misterbianco (CT)</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Anno</p>
              <p>2026</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Tipologia</p>
              <p>Boutique di Abbigliamento</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Superficie</p>
              <p>135 m²</p>
            </div>

          </div>

        </div>

      </FadeIn>

    </div>

  </section>

  {/* GALLERIA */}

  <section className="container-mobile max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">

    <GalleryLightbox
      images={[
        "/images/max-boutique-02.jpg",
        "/images/max-boutique-03.jpg",
        "/images/max-boutique-04.jpg",
        "/images/max-boutique-05.jpg",
        "/images/max-boutique-06.jpg",
        "/images/max-boutique-07.jpg",
        "/images/max-boutique-08.jpg",
        "/images/max-boutique-09.jpg",
        "/images/max-boutique-10.jpg",
        "/images/max-boutique-11.jpg",
        "/images/max-boutique-12.jpg",
        "/images/max-boutique-13.jpg",
        "/images/max-boutique-14.jpg",
        "/images/max-boutique-15.jpg",
      ]}
    />

  </section>

  {/* PREVIOUS PROJECT */}

  <section className="py-20 md:py-40 border-t border-neutral-300">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-8">
        Progetto Precedente
      </p>

      <FadeIn>

        <Link
          href="/projects/piccolo-ufficio-alb"
          className="section-title hover:opacity-60 transition"
        >
          Piccolo Ufficio A.L.B. →
        </Link>

      </FadeIn>

    </div>

  </section>

</main>

);
}
