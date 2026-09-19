import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { CASES } from "../casos/data";

export function Cases() {
  return (
    <section
      id="casos"
      className="relative border-t border-hairline bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="03" label="Casos" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                Cafeterías que abrí
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  con sus dueños.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-8 max-w-[54ch]">
                Dos proyectos reales, del primer local al primer turno.
                Cómo empezaron, qué decidimos por el camino y qué hay
                hoy abierto.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 border-t border-ink/25 lg:mt-32">
          {CASES.map((c, idx) => {
            const flipped = idx % 2 === 1;
            return (
              <Reveal key={c.slug} delay={Math.min(idx * 0.04, 0.12)}>
                <article className="grid grid-cols-1 gap-x-10 gap-y-10 border-b border-hairline py-14 sm:py-20 lg:grid-cols-12 lg:py-24">
                  {/* Image */}
                  <div
                    className={[
                      "lg:col-span-6",
                      flipped ? "lg:order-2 lg:col-start-7" : "lg:col-start-1",
                    ].join(" ")}
                  >
                    <Link
                      href={`/casos/${c.slug}`}
                      aria-label={`Leer el caso de ${c.name}`}
                      className="group block"
                    >
                      <figure className="relative aspect-[4/5] w-full overflow-hidden bg-paper">
                        <Image
                          src={c.cover.src}
                          alt={c.cover.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 640px"
                          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                        />
                      </figure>
                    </Link>
                    <figcaption
                      className={[
                        "mt-4 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute",
                        flipped ? "lg:justify-end" : "",
                      ].join(" ")}
                    >
                      <span className="hairline inline-block h-px w-8" />
                      {c.kicker}
                    </figcaption>
                  </div>

                  {/* Copy */}
                  <div
                    className={[
                      "flex flex-col lg:col-span-5 lg:pt-6",
                      flipped
                        ? "lg:order-1 lg:col-start-1 lg:pr-6"
                        : "lg:col-start-8",
                    ].join(" ")}
                  >
                    <span
                      className="text-mark font-medium tabular-nums tracking-[0.18em]"
                      style={{ fontSize: "0.8125rem" }}
                    >
                      Caso / {c.index}
                    </span>

                    <h3
                      className="display mt-5 text-[clamp(2.75rem,6vw,5rem)]"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 60',
                        lineHeight: 0.95,
                      }}
                    >
                      {c.name}
                      <span className="text-mark">.</span>
                    </h3>

                    <p
                      className="h3 mt-6 max-w-[28ch] italic text-ink-soft text-[clamp(1.25rem,1.8vw,1.5rem)]"
                      style={{ fontVariationSettings: '"opsz" 24, "SOFT" 100' }}
                    >
                      {c.tagline}
                    </p>

                    <p className="mt-8 max-w-[46ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
                      {c.excerpt}
                    </p>

                    <dl className="mt-10 grid grid-cols-3 gap-x-6 border-t border-hairline pt-6">
                      {c.metrics.slice(1, 4).map((m) => (
                        <div key={m.label}>
                          <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                            {m.label.split(" · ")[0]}
                          </dt>
                          <dd
                            className="display mt-2 text-[clamp(1.75rem,2.6vw,2.5rem)] tabular-nums"
                            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40' }}
                          >
                            {m.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href={`/casos/${c.slug}`}
                      className="link-underline mt-10 self-start text-[0.9375rem]"
                    >
                      Leer el caso completo
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
