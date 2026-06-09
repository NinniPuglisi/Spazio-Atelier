import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title:
    "Contatti | Ninni Puglisi | Spazio Atelier | Architetto e Interior Designer a Catania",

  description:
    "Contatta Ninni Puglisi e Spazio Atelier a Misterbianco, Catania, per progetti di architettura, interior design, retail design e ristrutturazioni in Sicilia.",

  keywords: [
    "Contatti Ninni Puglisi",
    "Spazio Atelier",
    "Architetto Catania",
    "Architetto Misterbianco",
    "Interior Designer Catania",
    "Studio di Architettura Sicilia",
    "Interior Design Sicilia",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contatti | Ninni Puglisi | Spazio Atelier",

    description:
      "Contatta Ninni Puglisi per progetti di architettura e interior design a Catania e in Sicilia.",

    url: "https://studionp39.com/contact",

    siteName: "Spazio Atelier",

    locale: "it_IT",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Contatti | Ninni Puglisi | Spazio Atelier",

    description:
      "Architettura, interior design e retail design in Sicilia.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#f8f7f4] text-black overflow-hidden">

      {/* HERO */}

      <section className="pt-28 md:pt-40 pb-16 md:pb-24">

        <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">
            Contact
          </p>

          <FadeIn fromLeft>
            <h1 className="hero-title">
              Iniziamo a
              <br />
              progettare.
            </h1>
          </FadeIn>

          <p className="mt-8 md:mt-10 max-w-2xl text-base md:text-xl text-neutral-600 leading-relaxed">
            Ogni progetto nasce da un dialogo.
            Contattami per discutere la tua idea e
            trasformarla in uno spazio unico.
          </p>

        </div>

      </section>

      {/* INFO */}

      <section className="pb-20 md:pb-32">

        <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* CONTATTI */}

          <FadeIn fromLeft>
            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
                Informazioni
              </p>

              <div className="space-y-8 md:space-y-10">

                <div>
                  <h2 className="text-xl md:text-2xl mb-2">
                    Telefono
                  </h2>

                  <a
                    href="tel:+393932989036"
                    className="text-neutral-600 hover:text-black transition"
                  >
                    +39 393 298 9036
                  </a>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl mb-2">
                    Email
                  </h2>

                  <a
                    href="mailto:ninnipuglisi@studionp39.com"
                    className="text-neutral-600 hover:text-black transition break-all"
                  >
                    ninnipuglisi@studionp39.com
                  </a>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl mb-2">
                    Instagram
                  </h2>

                  <a
                    href="https://www.instagram.com/NinniPuglisi_SpazioAtelier/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-black transition"
                  >
                    @NinniPuglisi_SpazioAtelier
                  </a>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl mb-2">
                    Studio
                  </h2>

                  <p className="text-neutral-600 leading-relaxed">
                    Via Bruno Buozzi 39
                    <br />
                    95045 Misterbianco (CT)
                    <br />
                    Catania · Sicilia · Italia
                  </p>
                </div>

              </div>

            </div>
          </FadeIn>

          {/* SERVIZI + MAPPA */}

          <FadeIn>
            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
                Servizi
              </p>

              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-neutral-600">

                <p>Architettura</p>
                <p>Interior Design</p>
                <p>Ristrutturazioni</p>
                <p>Retail Design</p>
                <p>Direzione Lavori</p>
                <p>Pratiche Edilizie</p>
                <p>Modellazione 3D</p>
                <p>Rendering Fotorealistici</p>

              </div>

              <div className="mt-16 overflow-hidden rounded-sm">

                <iframe
                  src="https://maps.google.com/maps?q=Via%20Bruno%20Buozzi%2039%20Misterbianco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="350"
                  loading="lazy"
                  className="border-0 w-full"
                />

              </div>

            </div>
          </FadeIn>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-neutral-300 py-20 md:py-32">

        <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8 text-center">

          <FadeIn>
            <h2 className="section-title mb-8 md:mb-10">
              Raccontami il tuo progetto.
            </h2>
          </FadeIn>

          <a
            href="mailto:ninnipuglisi@studionp39.com"
            className="inline-block border border-black px-8 py-4 uppercase tracking-[0.25em] text-sm hover:bg-black hover:text-white transition"
          >
            Scrivimi
          </a>

        </div>

      </section>

    </main>
  );
}