import type { Metadata } from "next";
import Link from "next/link";

import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Portfolio di architettura e interior design firmato Ninni Puglisi. Scopri i progetti residenziali, workspace e retail sviluppati da Spazio Atelier in Sicilia.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#f8f7f4] text-black min-h-screen overflow-hidden">

      {/* HERO */}

      <section className="pt-28 md:pt-40 pb-16 md:pb-20">

        <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">
            Portfolio
          </p>

          <FadeIn fromLeft>
            <h1 className="hero-title">
              Progetti
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-8 max-w-2xl text-base md:text-xl text-neutral-600 leading-relaxed">
              Una selezione di progetti residenziali, workspace e retail
              sviluppati attraverso luce, materia e proporzione.
            </p>
          </FadeIn>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="pb-24 md:pb-40">

        <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

            {/* VILLA D'E */}

            <FadeIn>

              <Link
                href="/projects/villa-de"
                className="group block"
              >
                <div className="overflow-hidden bg-neutral-100">

                  <img
                    src="/images/villa-de-cover.jpg"
                    alt="Villa D'E"
                    className="
                      project-image
                      w-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                </div>

                <div className="mt-6 md:mt-8">

                  <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                    Residential
                  </p>

                  <h2
                    className="
                      text-2xl
                      md:text-4xl
                      font-light
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    Villa D&apos;E
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-neutral-500">
                    San Pietro Clarenza · 2026
                  </p>

                </div>

              </Link>

            </FadeIn>

            {/* MAX BOUTIQUE */}

            <FadeIn>

              <Link
                href="/projects/max-boutique"
                className="group block"
              >
                <div className="overflow-hidden bg-neutral-100">

                  <img
                    src="/images/max-boutique-cover.jpg"
                    alt="MAX Boutique"
                    className="
                      project-image
                      w-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                </div>

                <div className="mt-6 md:mt-8">

                  <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                    Retail
                  </p>

                  <h2
                    className="
                      text-2xl
                      md:text-4xl
                      font-light
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    MAX Boutique
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-neutral-500">
                    Misterbianco · 2026
                  </p>

                </div>

              </Link>

            </FadeIn>

            {/* PICCOLO UFFICIO A.L.B. */}

            <FadeIn>

              <Link
                href="/projects/piccolo-ufficio-alb"
                className="group block"
              >
                <div className="overflow-hidden bg-neutral-100">

                  <img
                    src="/images/piccolo-ufficio-alb/piccolo-ufficio-alb-01.jpg"
                    alt="Piccolo Ufficio A.L.B."
                    className="
                      project-image
                      w-full
                      object-cover
                      transition-all
                      duration-1000
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />

                </div>

                <div className="mt-6 md:mt-8">

                  <p className="uppercase tracking-[0.25em] text-xs text-neutral-500 mb-3">
                    Workspace
                  </p>

                  <h2
                    className="
                      text-2xl
                      md:text-4xl
                      font-light
                      transition-all
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    Piccolo Ufficio A.L.B.
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-neutral-500">
                    Biancavilla · 2025
                  </p>

                </div>

              </Link>

            </FadeIn>

          </div>

        </div>

      </section>

    </main>
  );
}