import type { Metadata } from "next";
import Image from "next/image";

import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
 title:
 "Studio | Ninni Puglisi | Spazio Atelier",

 description:
 "Scopri Spazio Atelier, lo studio di architettura e interior design fondato da Ninni Puglisi a Misterbianco, Catania. Progettazione architettonica, interior design, retail design, ristrutturazioni e direzione lavori in Sicilia.",

 keywords: [
  "Ninni Puglisi", 
  "Architetto Catania", 
  "Architetto Misterbianco", 
  "Interior Designer Catania", 
  "Studio di Architettura Sicilia", 
  "Studio di Architettura Catania", 
  "Interior Design Sicilia", 
  "Retail Design Sicilia", 
  "Ristrutturazioni Catania", 
  "Direzione Lavori", 
  "Spazio Atelier", 
 ],

 alternates: {
   canonical: "/studio",
 }, 
 openGraph: { 
   title: "Ninni Puglisi | Spazio Atelier", 
  
   description: "Spazio Atelier è uno studio di architettura e interior design specializzato in progetti residenziali, retail e commerciali contemporanei.",
  
   url: "https://studionp39.com/studio", 
  
   siteName: "Spazio Atelier", 
  
   locale: "it_IT", 
  
   type: "website",

   images: [ 
     { 
       url: "/images/ninni-puglisi.jpg", 
       width: 1200, 
       height: 1600, 
       alt: "Ninni Puglisi", 
     }, 
   ],
 },

 twitter: { 
   card: "summary_large_image", 
  
   title: 
   "Ninni Puglisi | Spazio Atelier", 
  
   description: 
   "Studio di architettura e interior design con sede a Misterbianco, Catania.", 
  
   images: ["/images/ninni-puglisi.jpg"], 
 },
};

export default function StudioPage() {
return ( <main className="bg-[#f8f7f4] text-black overflow-hidden">

```
  {/* HERO */}

  <section className="pt-28 md:pt-40 pb-16 md:pb-24">

    <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">
        Studio
      </p>

      <FadeIn fromLeft>
        <h1 className="hero-title max-w-5xl">
          Architettura,
          <br />
          interior design
          <br />
          e ricerca
          <br />
          progettuale.
        </h1>
      </FadeIn>

    </div>

  </section>

  {/* PROFILO */}

  <section className="pb-20 md:pb-32">

    <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

      <FadeIn>
        <div>
          <Image
            src="/images/ninni-puglisi.jpg"
            alt="Ninni Puglisi"
            width={900}
            height={1200}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </FadeIn>

      <FadeIn>
        <div>

          <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
            Fondatore
          </p>

          <h2 className="section-title mb-8">
            Ninni Puglisi
          </h2>

          <div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed">

            <p>
              Spazio Atelier nasce dalla volontà di sviluppare progetti
              capaci di unire architettura, interior design e ricerca
              materica in un linguaggio contemporaneo ed essenziale.
            </p>

            <p>
              Ogni intervento viene affrontato attraverso un processo
              progettuale attento alla luce, alle proporzioni e alla
              qualità dello spazio, trasformando ogni ambiente in
              un&apos;esperienza unica e senza tempo.
            </p>

            <p>
              L&apos;obiettivo è creare luoghi autentici, funzionali e
              riconoscibili, costruiti intorno alle esigenze delle
              persone che li vivono.
            </p>

          </div>

        </div>
      </FadeIn>

    </div>

  </section>

  {/* FILOSOFIA */}

  <section className="py-20 md:py-32 bg-white">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-10">
        Filosofia
      </p>

      <FadeIn fromLeft>
        <h2 className="section-title max-w-5xl">
          Progettare significa trovare l&apos;equilibrio
          tra luce, materia, funzione ed emozione.
        </h2>
      </FadeIn>

    </div>

  </section>

  {/* SERVIZI */}

  <section className="py-20 md:py-32">

    <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-12 md:mb-16">
        Servizi
      </p>

      <FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 md:gap-y-16">

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Architettura
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Progettazione architettonica per edifici residenziali,
              commerciali e spazi contemporanei.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Interior Design
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Progetti d&apos;interni su misura con particolare attenzione
              a materiali, luce e dettagli.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Direzione Lavori
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Coordinamento e supervisione delle opere durante tutte
              le fasi realizzative.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Ristrutturazioni
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Riqualificazione di edifici esistenti e trasformazione
              di spazi residenziali e commerciali.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Retail Design
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Concept e progettazione di negozi, showroom e spazi
              dedicati al brand.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              Modellazione 3D & Rendering
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Visualizzazioni fotorealistiche per raccontare il
              progetto prima della realizzazione.
            </p>
          </div>

        </div>

      </FadeIn>

    </div>

  </section>

  {/* CTA */}

  <section className="py-20 md:py-40 border-t border-neutral-300">

    <div className="container-mobile max-w-6xl mx-auto px-6 md:px-8">

      <FadeIn>

        <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-8">
          Contatti
        </p>

        <h2 className="section-title mb-10">
          Parliamo del
          <br />
          tuo progetto.
        </h2>

        <a
          href="mailto:ninnipuglisi@studionp39.com"
          className="inline-block border border-black px-8 py-4 uppercase tracking-[0.25em] text-sm hover:bg-black hover:text-white transition"
        >
          Contattami
        </a>

      </FadeIn>

    </div>

  </section>

</main>

);
}
