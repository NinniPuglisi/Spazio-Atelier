export default function Hero() {
  return (
    <section className="relative h-screen">
      <img
        src="/images/villa-de-hero.png"
        alt="Villa D'E"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex h-full items-end">
        <div className="max-w-7xl px-10 pb-24 md:pb-32">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/80">
            Architecture · Interior Design
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-8xl">
            Spazi contemporanei
            <br />
            progettati attraverso
            <br />
            luce, materia e proporzione.
          </h1>
        </div>
      </div>
    </section>
  );
}