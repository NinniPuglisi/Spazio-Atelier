import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title:
    "Villa C|E | Progettazione e Interior Design a Belpasso | Ninni Puglisi",

  description:
    "Villa C|E è un progetto residenziale a Belpasso firmato da Ninni Puglisi. Progettazione architettonica, ristrutturazione, interior design, direzione lavori e rendering fotorealistici.",

  keywords: [
    "Villa C|E",
    "Architetto Belpasso",
    "Interior Design Belpasso",
    "Ristrutturazione Belpasso",
    "Architetto Catania",
    "Interior Designer Catania",
    "Progettazione Architettonica Catania",
    "Ristrutturazione Villa Sicilia",
    "Direzione Lavori Catania",
    "Rendering Fotorealistici",
    "Ninni Puglisi",
    "Spazio Atelier",
  ],

  alternates: {
    canonical: "/projects/villa-ce",
  },

  openGraph: {
    title: "Villa C|E | Progetto residenziale a Belpasso",
    description:
      "Progettazione architettonica, ristrutturazione e interior design per una villa contemporanea a Belpasso.",
    url: "https://studionp39.com/projects/villa-ce",
    siteName: "Ninni Puglisi | Spazio Atelier",
    locale: "it_IT",
    type: "article",
    images: [
      {
        url: "/images/villa-ce/villa-ce-01.png",
        width: 1600,
        height: 900,
        alt: "Villa C|E, progetto residenziale a Belpasso",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Villa C|E | Progetto residenziale a Belpasso",
    description:
      "Progettazione architettonica, ristrutturazione e interior design firmati da Ninni Puglisi.",
    images: ["/images/villa-ce/villa-ce-01.png"],
  },
};

export default function VillaCEPage() {
  return (
    <main className="bg-[#f5f4f1] text-black overflow-hidden">
      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/villa-ce/villa-ce-01.png"
          alt="Villa C|E, progetto residenziale a Belpasso"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute bottom-12 left-6 text-white md:bottom-20 md:left-20">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] md:text-sm">
            Residenziale
          </p>

          <FadeIn fromLeft>
            <h1 className="hero-title">Villa C|E</h1>
          </FadeIn>

          <p className="mt-4 text-base text-white/90 md:mt-6 md:text-lg">
            Belpasso · 2026
          </p>
        </div>
      </section>

      {/* CONCEPT */}

      <section className="py-20 md:py-32">
        <div className="container-mobile mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-8">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500 md:text-sm">
              Concept
            </p>

            <FadeIn fromLeft>
              <h2 className="section-title">
                Luce,
                <br />
                materia e
                <br />
                continuità.
              </h2>
            </FadeIn>
          </div>

          <FadeIn>
            <div>
              <p className="text-base leading-relaxed text-neutral-700 md:text-xl">
                Villa C|E nasce dalla trasformazione di un&apos;abitazione
                esistente in uno spazio contemporaneo, equilibrato e
                accogliente. Il progetto ridefinisce gli ambienti attraverso
                una nuova organizzazione funzionale e un linguaggio
                architettonico essenziale.
              </p>

              <p className="mt-6 text-base leading-relaxed text-neutral-700 md:mt-8 md:text-xl">
                La luce naturale, i materiali selezionati e la continuità
                visiva tra gli spazi costruiscono un&apos;atmosfera raffinata,
                pensata per coniugare comfort quotidiano, funzionalità e
                identità progettuale.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6 text-sm md:mt-16 md:gap-8">
                <div>
                  <p className="mb-2 text-neutral-500">Località</p>
                  <p>Belpasso (CT)</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-500">Anno</p>
                  <p>2026</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-500">Tipologia</p>
                  <p>Residenziale</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-500">Servizi</p>
                  <p>
                    Progettazione architettonica
                    <br />
                    Interior Design
                    <br />
                    Ristrutturazione
                    <br />
                    Direzione Lavori
                    <br />
                    Rendering fotorealistici
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALLERIA */}

      <section className="container-mobile mx-auto max-w-7xl px-6 pb-20 md:px-8 md:pb-32">
        <GalleryLightbox
          images={[
            "/images/villa-ce/villa-ce-02.png",
            "/images/villa-ce/villa-ce-03.png",
            "/images/villa-ce/villa-ce-04.png",
            "/images/villa-ce/villa-ce-05.png",
            "/images/villa-ce/villa-ce-06.png",
            "/images/villa-ce/villa-ce-07.png",
            "/images/villa-ce/villa-ce-08.png",
            "/images/villa-ce/villa-ce-09.png",
            "/images/villa-ce/villa-ce-10.png",
            "/images/villa-ce/villa-ce-11.png",
            "/images/villa-ce/villa-ce-12.png",
            "/images/villa-ce/villa-ce-13.png",
            "/images/villa-ce/villa-ce-14.png",
            "/images/villa-ce/villa-ce-15.png",
            "/images/villa-ce/villa-ce-16.png",
            "/images/villa-ce/villa-ce-17.png",
            "/images/villa-ce/villa-ce-18.png",
            "/images/villa-ce/villa-ce-19.png",
            "/images/villa-ce/villa-ce-20.png",
            "/images/villa-ce/villa-ce-21.png",
            "/images/villa-ce/villa-ce-22.png",
            "/images/villa-ce/villa-ce-23.png",
          ]}
        />
      </section>

      {/* PROGETTO SUCCESSIVO */}

      <section className="border-t border-neutral-300 py-20 md:py-40">
        <div className="container-mobile mx-auto max-w-6xl px-6 md:px-8">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500 md:text-sm">
            Progetto successivo
          </p>

          <FadeIn>
            <Link
              href="/projects/villa-de"
              className="section-title transition hover:opacity-60"
            >
              Villa D&apos;E →
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}