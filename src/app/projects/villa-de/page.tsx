import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
title:
"Villa D'E | Interior Design Residenziale a San Pietro Clarenza | Ninni Puglisi",

description:
"Villa D'E è un progetto di interior design residenziale firmato da Ninni Puglisi a San Pietro Clarenza, Catania. Un intervento contemporaneo sviluppato attraverso luce, materia, proporzione e continuità degli spazi.",

keywords: [
"Villa D'E",
"Interior Design Catania",
"Architetto Catania",
"Interior Designer Catania",
"Architetto San Pietro Clarenza",
"Progetto Residenziale Sicilia",
"Ristrutturazione Villa Catania",
"Architettura Contemporanea",
"Ninni Puglisi",
"Spazio Atelier",
],

alternates: {
canonical: "/projects/villa-de",
},

openGraph: {
title:
"Villa D'E | Interior Design Residenziale a San Pietro Clarenza",

description:
"Un progetto residenziale contemporaneo firmato Ninni Puglisi. Luce naturale, materiali raffinati e continuità spaziale.",

url: "https://studionp39.com/projects/villa-de",

siteName: "Spazio Atelier",

locale: "it_IT",

type: "article",

images: [
   { 
    url: "/images/villa-de-01.png", 
    width: 1600,
    height: 900,
    alt: "Villa D'E - Ninni Puglisi",
    },
  ]
},

twitter: {
  card: "summary_large_image",

  title:
  "Villa D'E | Interior Design Residenziale a San Pietro Clarenza",

  description:
  "Progetto residenziale contemporaneo firmato Ninni Puglisi.",

  images: ["/images/villa-de-01.png"],
  },
  };

export default function VillaDEPage() {
return ( <main className="bg-[#f5f4f1] text-black overflow-hidden">

```
  {/* HERO */}

  <section className="relative min-h-screen overflow-hidden">

    <Image
      src="/images/villa-de-01.png"
      alt="Villa D'E"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/25" />

    <div className="absolute bottom-12 md:bottom-20 left-6 md:left-20 text-white">

      <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
        Residenziale
      </p>

      <FadeIn fromLeft>
        <h1 className="hero-title">
          Villa D&apos;E
        </h1>
      </FadeIn>

      <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
        San Pietro Clarenza · 2026
      </p>

    </div>

  </section>

  {/* INFO */}

  <section className="py-20 md:py-32">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      <div>

        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-8">
          Concept
        </p>

        <FadeIn fromLeft>
          <h2 className="section-title">
            Materia,
            <br />
            luce e
            <br />
            proporzione.
          </h2>
        </FadeIn>

      </div>

      <FadeIn>

        <div>

          <p className="text-base md:text-xl text-neutral-700 leading-relaxed">
            Villa D&apos;E nasce dalla ricerca di un equilibrio tra
            architettura contemporanea e comfort quotidiano.
          </p>

          <p className="text-base md:text-xl text-neutral-700 leading-relaxed mt-6 md:mt-8">
            Il progetto valorizza la luce naturale, le superfici
            materiche e la continuità visiva tra cucina,
            living e zona pranzo.
          </p>

          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 text-sm">

            <div>
              <p className="text-neutral-500 mb-2">Località</p>
              <p>San Pietro Clarenza</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Anno</p>
              <p>2026</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Tipologia</p>
              <p>Residenziale</p>
            </div>

            <div>
              <p className="text-neutral-500 mb-2">Servizi</p>
              <p>Interior Design</p>
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
        "/images/villa-de-02.png",
        "/images/villa-de-03.png",
        "/images/villa-de-04.png",
        "/images/villa-de-05.png",
        "/images/villa-de-06.png",
        "/images/villa-de-07.png",
        "/images/villa-de-08.png",
        "/images/villa-de-09.png",
        "/images/villa-de-10.png",
        "/images/villa-de-11.png",
        "/images/villa-de-12.png",
      ]}
    />

  </section>

  {/* NEXT PROJECT */}

  <section className="py-20 md:py-40 border-t border-neutral-300">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-8">
        Progetto Successivo
      </p>

      <FadeIn>

        <Link
          href="/projects/max-boutique"
          className="section-title hover:opacity-60 transition"
        >
          MAX Boutique →
        </Link>

      </FadeIn>

    </div>

  </section>

</main>

);
}
