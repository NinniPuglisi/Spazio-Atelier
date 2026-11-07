import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy NP39 AI",
  description: "Informativa privacy relativa a NP39 AI e all'utilizzo delle API Google e Gmail.",
  alternates: { canonical: "/privacy" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#f8f7f4] text-black">
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-mobile max-w-4xl mx-auto px-6 md:px-8">
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-8">NP39 AI</p>
          <h1 className="section-title mb-10">Privacy Policy</h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            La presente informativa descrive come NP39 AI utilizza i dati
            dell&apos;account Google autorizzato per svolgere automazioni
            operative dello studio professionale.
          </p>
          <p className="mt-6 text-sm text-neutral-500">Ultimo aggiornamento: 7 novembre 2026</p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-mobile max-w-4xl mx-auto px-6 md:px-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Titolare del trattamento</h2>
            <div className="text-neutral-600 leading-relaxed">
              <p>Antonino Puglisi – Architetto</p>
              <p>Spazio Atelier</p>
              <p>Via Bruno Buozzi 39, 95045 Misterbianco (CT), Italia</p>
              <p>P. IVA 05048810872</p>
              <p>
                Email:{" "}
                <a href="mailto:ninnipuglisi@studionp39.com" className="underline underline-offset-4">
                  ninnipuglisi@studionp39.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Cos&apos;è NP39 AI</h2>
            <p className="text-neutral-600 leading-relaxed">
              NP39 AI è un sistema ad uso operativo dello studio che automatizza
              attività amministrative e documentali, tra cui il controllo di
              messaggi e allegati relativi a documenti DKV Mobility, la
              predisposizione di bozze email e l&apos;invio di promemoria di
              scadenza previamente configurati.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Dati Google e Gmail utilizzati</h2>
            <div className="space-y-5 text-neutral-600 leading-relaxed">
              <p>
                <strong className="text-black">Gmail in sola lettura.</strong>{" "}
                L&apos;app può leggere messaggi, intestazioni e allegati necessari
                a individuare e archiviare i documenti pertinenti alle
                automazioni configurate. La posta ricevuta non viene cancellata
                o modificata da questa funzione.
              </p>
              <p>
                <strong className="text-black">Creazione di bozze Gmail.</strong>{" "}
                Per il flusso DKV Mobility, NP39 AI può creare bozze email con
                gli allegati archiviati. Le bozze DKV non vengono inviate
                automaticamente dal sistema.
              </p>
              <p>
                <strong className="text-black">Invio di email.</strong>{" "}
                Un modulo separato di gestione scadenze può inviare email di
                promemoria esclusivamente quando una regola di scadenza
                precedentemente configurata viene soddisfatta e verso
                destinatari già definiti nel sistema.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Finalità dell&apos;utilizzo dei dati</h2>
            <p className="text-neutral-600 leading-relaxed">
              I dati Google vengono utilizzati unicamente per eseguire le
              automazioni richieste dallo studio: individuazione di documenti,
              archiviazione locale, preparazione di bozze, gestione di scadenze
              e invio di comunicazioni operative autorizzate. I dati non vengono
              utilizzati per pubblicità, profilazione commerciale o vendita di
              informazioni personali.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Conservazione e sicurezza</h2>
            <p className="text-neutral-600 leading-relaxed">
              Le credenziali OAuth e i token di autorizzazione sono conservati
              nei sistemi locali controllati dal Titolare e utilizzati
              esclusivamente dai moduli autorizzati. I documenti eventualmente
              estratti da Gmail vengono conservati nell&apos;archivio
              professionale dello studio secondo esigenze operative,
              amministrative e obblighi di legge. Sono adottate misure
              ragionevoli per prevenire accessi o divulgazioni non autorizzate.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Condivisione dei dati</h2>
            <p className="text-neutral-600 leading-relaxed">
              NP39 AI non vende i dati Google degli utenti e non li condivide con
              terzi per finalità pubblicitarie. I dati possono transitare
              attraverso i servizi Google necessari al funzionamento delle API e,
              quando viene eseguito un invio email autorizzato, essere comunicati
              ai destinatari previsti dalla specifica automazione.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Google API Services User Data Policy</h2>
            <p className="text-neutral-600 leading-relaxed">
              L&apos;utilizzo da parte di NP39 AI delle informazioni ricevute
              dalle API Google è conforme alla{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Google API Services User Data Policy
              </a>
              , inclusi i requisiti di Limited Use applicabili.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Revoca dell&apos;accesso Google</h2>
            <p className="text-neutral-600 leading-relaxed">
              L&apos;utente può revocare in qualsiasi momento le autorizzazioni
              concesse a NP39 AI dalle impostazioni di sicurezza del proprio
              Account Google. In seguito alla revoca, le funzioni che dipendono
              dalle API Google non potranno più operare finché non verrà concessa
              una nuova autorizzazione.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-5">Informativa generale del sito</h2>
            <p className="text-neutral-600 leading-relaxed">
              Per i trattamenti relativi alla navigazione di studionp39.com,
              cookie, statistiche e servizi web è disponibile anche
              l&apos;informativa generale del sito gestita tramite Iubenda:{" "}
              <a
                href="https://www.iubenda.com/privacy-policy/97183777"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Privacy Policy generale
              </a>
              .
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-300">
            <h2 className="text-3xl md:text-4xl mb-5">Contatti</h2>
            <p className="text-neutral-600 leading-relaxed">
              Per richieste relative alla presente informativa o all&apos;utilizzo
              dei dati Google:{" "}
              <a href="mailto:ninnipuglisi@studionp39.com" className="underline underline-offset-4">
                ninnipuglisi@studionp39.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
