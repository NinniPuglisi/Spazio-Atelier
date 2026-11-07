import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NP39 AI",
  description: "NP39 AI è il sistema operativo interno di automazione dello studio Ninni Puglisi | Spazio Atelier.",
  alternates: { canonical: "/np39-ai" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NP39AIPage() {
  return (
    <main className="bg-[#f8f7f4] text-black">
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-mobile max-w-5xl mx-auto px-6 md:px-8">
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">Studio · Automazione</p>
          <h1 className="section-title mb-10">NP39 AI</h1>
          <p className="text-lg md:text-2xl text-neutral-600 leading-relaxed max-w-3xl">
            Sistema operativo interno per automatizzare attività amministrative
            e documentali dello studio Ninni Puglisi | Spazio Atelier.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-mobile max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-5">Gestione documentale</h2>
              <p className="text-neutral-600 leading-relaxed">
                NP39 AI può controllare messaggi Gmail autorizzati per
                individuare documenti pertinenti, come i documenti DKV Mobility,
                e archiviarne gli allegati nei sistemi locali dello studio.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-5">Bozze e comunicazioni</h2>
              <p className="text-neutral-600 leading-relaxed">
                Il sistema può predisporre bozze Gmail per flussi documentali e,
                nei moduli specificamente configurati, inviare promemoria
                automatici relativi a scadenze professionali.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-5">Accesso limitato</h2>
              <p className="text-neutral-600 leading-relaxed">
                Le autorizzazioni Google sono richieste soltanto per le funzioni
                effettivamente utilizzate. Il sistema non utilizza i dati Gmail
                per pubblicità o profilazione commerciale.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-5">Controllo dello studio</h2>
              <p className="text-neutral-600 leading-relaxed">
                NP39 AI è sviluppato per l&apos;operatività dello studio e le sue
                automazioni sono configurate e controllate dal Titolare.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-10 border-t border-neutral-300">
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              Per maggiori informazioni sul trattamento dei dati Google e
              sull&apos;utilizzo delle API Gmail consulta la Privacy Policy
              dedicata a NP39 AI.
            </p>

            <Link
              href="/privacy"
              className="inline-block border border-black px-7 py-3 text-xs uppercase tracking-[0.25em] hover:bg-black hover:text-white transition-all duration-500"
            >
              Privacy Policy NP39 AI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
