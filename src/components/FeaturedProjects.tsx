"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
return ( <section className="py-20 md:py-32 bg-neutral-50">

```
  <div className="container-mobile max-w-7xl mx-auto px-6 md:px-8">

    <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-500 mb-10 md:mb-12">
      Progetti Selezionati
    </p>

    <div className="grid md:grid-cols-2 gap-20">

      {/* VILLA DE */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link
          href="/projects/villa-de"
          className="group block"
        >
          <article>

            <div className="relative overflow-hidden">

              <img
                src="/images/villa-de-cover.jpg"
                alt="Villa D'E"
                className="w-full h-[760px] object-cover transition duration-1000"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700" />

              <div className="hidden md:block absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition duration-700">
                View Project →
              </div>

            </div>

            <div className="mt-5 md:mt-6">

              <h3 className="text-4xl font-light tracking-[-0.03em]">
                Villa D&apos;E
              </h3>

              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                San Pietro Clarenza · 2026
              </p>

            </div>

          </article>
        </Link>
      </motion.div>

      {/* MAX BOUTIQUE */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <Link
          href="/projects/max-boutique"
          className="group block"
        >
          <article>

            <div className="relative overflow-hidden">

              <img
                src="/images/max-boutique-cover.jpg"
                alt="MAX Boutique"
                className="w-full h-[760px] object-cover transition duration-1000"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700" />

              <div className="hidden md:block absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition duration-700">
                View Project →
              </div>

            </div>

            <div className="mt-5 md:mt-6">

              <h3 className="text-4xl font-light tracking-[-0.03em]">
                MAX Boutique
              </h3>

              <p className="text-neutral-500 mt-2 text-sm md:text-base">
                Misterbianco · 2026
              </p>

            </div>

          </article>
        </Link>
      </motion.div>

    </div>

  </div>

</section>

);
}
