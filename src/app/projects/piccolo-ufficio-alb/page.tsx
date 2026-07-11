import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title:
    "Piccolo Ufficio A.L.B. | Interior Design per Uffici a Biancavilla | Ninni Puglisi",

  description:
    "Piccolo Ufficio A.L.B. è un progetto di interior design per uffici firmato da Ninni Puglisi a Biancavilla. Uno spazio professionale contemporaneo sviluppato attraverso luce, funzionalità e dettagli su misura.",

  keywords: [
    "Piccolo Ufficio A.L.B.",
    "Interior Design Uffici",
    "Office Design Catania",
    "Architetto Biancavilla",
    "Architetto Catania",
    "Interior Designer Catania",
    "Workspace Design",
    "Ninni Puglisi",
    "Spazio Atelier",
  ],

  alternates: {
    canonical: "/projects/piccolo-ufficio-alb",
  },

  openGraph: {
    title:
      "Piccolo Ufficio A.L.B. | Interior Design per Uffici a Biancavilla",

    description:
      "Uno spazio professionale contemporaneo progettato da Ninni Puglisi a Biancavilla.",

    url: "https://studionp39.com/projects/piccolo-ufficio-alb",

    siteName: "Spazio Atelier",

    locale: "it_IT",

    type: "article",

    images: [
      {
        url: "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-01.jpg",
        width: 1600,
        height: 900,
        alt: "Piccolo Ufficio A.L.B. - Ninni Puglisi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Piccolo Ufficio A.L.B. | Interior Design per Uffici a Biancavilla",

    description:
      "Progetto di interior design per uffici firmato Ninni Puglisi.",

    images: ["/images/piccolo-ufficio-alb/piccolo-ufficio-alb-01.jpg"],
  },
};

export default function PiccoloUfficioALBPage() {
  return (
    <main className="bg-[#f5f4f1] text-black overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">

        <Image
          src="/images/piccolo-ufficio-alb/piccolo-ufficio-alb-01.jpg"
          alt="Piccolo Ufficio A.L.B."
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute bottom-12 md:bottom-20 left-6 md:left-20 text-white">

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Workspace
          </p>

          <FadeIn fromLeft>
            <h1 className="hero-title">
              Piccolo
              <br />
              Ufficio A.L.B.
            </h1>
          </FadeIn>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
            Biancavilla · 2025
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
                Uno spazio
                <br />
                di lavoro
                <br />
                essenziale
                <br />
                e luminoso.
              </h2>
            </FadeIn>

          </div>

          <FadeIn>

            <div>

              <p className="text-base md:text-xl text-neutral-700 leading-relaxed">
                Piccolo Ufficio A.L.B. nasce dall'esigenza di creare uno
                spazio professionale contemporaneo, funzionale ed equilibrato.
                Il progetto interpreta l'ambiente di lavoro attraverso un
                linguaggio essenziale e una particolare attenzione alla qualità
                della luce e delle proporzioni.
              </p>

              <p className="text-base md:text-xl text-neutral-700 leading-relaxed mt-6 md:mt-8">
                Materiali neutri, arredi su misura e una distribuzione razionale
                degli spazi definiscono un ambiente ordinato e accogliente,
                pensato per favorire concentrazione, comfort e continuità visiva.
              </p>

              <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 text-sm">

                <div>
                  <p className="text-neutral-500 mb-2">Località</p>
                  <p>Biancavilla (CT)</p>
                </div>

                <div>
                  <p className="text-neutral-500 mb-2">Anno</p>
                  <p>2025</p>
                </div>

                <div>
                  <p className="text-neutral-500 mb-2">Tipologia</p>
                  <p>Ufficio</p>
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
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-02.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-03.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-04.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-05.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-06.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-07.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-08.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-09.jpg",
            "/images/piccolo-ufficio-alb/piccolo-ufficio-alb-10.jpg",
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
              href="/projects/villa-ce"
              className="section-title hover:opacity-60 transition"
            >
              Villa C|E →
            </Link>

          </FadeIn>

        </div>

      </section>

    </main>
  );
}