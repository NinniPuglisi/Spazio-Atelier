import type { Metadata } from "next";

import ProjectsGrid from "@/components/FeaturedProjects";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
title: "Ninni Puglisi | Studio di Architettura e Interior Design in Sicilia",
description:
"Spazio Atelier è uno studio di architettura e interior design fondato da Ninni Puglisi.",
};

export default function Home() {
return ( <main className="bg-[#f8f7f4] text-black overflow-hidden">

```
  {/* HERO */}

  <section className="relative min-h-screen overflow-hidden">

    <img
      src="/images/villa-de-hero.png"
      alt="Villa D'E"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/25" />

    <div className="relative z-10 flex items-end min-h-screen">

      <div className="hero-content container-mobile max-w-6xl px-6 md:px-16 pb-20 md:pb-28">

        <p className="uppercase tracking-[0.35em] text-white text-[10px] md:text-sm mb-4 md:mb-6">
          Architecture · Interior Design
        </p>

        <h1 className="hero-title text-white font-light max-w-5xl">
          Spazi contemporanei progettati attraverso luce, materia e proporzione.
        </h1>

      </div>

    </div>

  </section>

  {/* MANIFESTO */}

  <section
    id="studio"
    className="py-20 md:py-32"
  >
    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8 md:mb-12">
        Manifesto
      </p>

      <FadeIn fromLeft>
        <h2 className="section-title mb-10 md:mb-16">
          Progettare l&apos;essenziale.
        </h2>
      </FadeIn>

      <FadeIn>

        <div className="max-w-3xl">

          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Dal 2013 sviluppiamo progetti architettonici e di interior
            design caratterizzati da un linguaggio contemporaneo,
            materico e senza tempo.
          </p>

          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mt-6 md:mt-8">
            Ogni spazio nasce dall&apos;equilibrio tra funzione,
            luce e materia, eliminando il superfluo per valorizzare
            ciò che conta davvero.
          </p>

        </div>

      </FadeIn>

    </div>
  </section>

  {/* PROGETTI */}

  <section id="progetti">
    <ProjectsGrid />
  </section>

  {/* SERVIZI */}

  <section
    id="servizi"
    className="py-20 md:py-24"
  >
    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-10">
        Servizi
      </p>

      <FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          <div>
            <h3 className="text-2xl mb-4">
              Architettura
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Progettazione architettonica per edifici residenziali,
              commerciali e spazi contemporanei.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">
              Interior Design
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Progetti d&apos;interni caratterizzati da materiali
              autentici, luce e dettagli su misura.
            </p>
          </div>

          <div>
            <h3 className="text-2xl mb-4">
              Direzione Lavori
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              Supervisione completa del progetto fino alla
              realizzazione finale.
            </p>
          </div>

        </div>

      </FadeIn>

    </div>
  </section>

  {/* CONTATTI */}

  <section
    id="contatti"
    className="py-20 md:py-32"
  >
    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <FadeIn>

        <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">
          Contatti
        </p>

        <h2 className="section-title mb-8 md:mb-10">
          Parliamo del tuo progetto.
        </h2>

        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-10 md:mb-12">
          Ogni progetto nasce da un dialogo.
          Raccontaci la tua idea e costruiamo insieme
          uno spazio unico.
        </p>

        <a
          href="mailto:ninnipuglisi@studionp39.com"
          className="inline-block border border-black px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-500"
        >
          Contattaci
        </a>

      </FadeIn>

    </div>
  </section>

</main>

);
}
