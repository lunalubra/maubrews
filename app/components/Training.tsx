import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { ArrowRight } from "lucide-react";

const COURSES = [
  {
    title: "Latte art",
    body:
      "Texturizado de leche, vertidos base, jarra y servicio. La técnica que se ve en taza.",
  },
  {
    title: "Espresso",
    body:
      "Molienda, dosis, extracción, calibración. La base técnica sobre la que se construye todo lo demás.",
  },
  {
    title: "Filtro",
    body:
      "Métodos manuales: V60, Aeropress, Chemex. Cómo elegir grano, molienda y receta para cada uno.",
  },
];

export function Training() {
  return (
    <section
      id="formacion"
      className="relative bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="05" label="Formación" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Tres cursos.
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  Un bootcamp.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[52ch]">
                Tres formaciones modulares. Cógelas sueltas, combínalas
                o lleva a tu equipo entero al bootcamp en grupo. Se
                imparten en Dosis o, para grupos, en tu local.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-2 border-t border-ink/25 md:grid-cols-3">
          {COURSES.map((m, idx) => (
            <Reveal key={m.title} delay={idx * 0.05}>
              <article className="flex h-full flex-col border-b border-hairline pt-8 pb-10 md:border-b-0 md:border-r md:pr-8 last:md:border-r-0">
                <h3 className="h2 text-[clamp(1.5rem,2.4vw,2.25rem)]">
                  {m.title}
                </h3>
                <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-[1.6] text-ink-soft">
                  {m.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Engagement CTA */}
        <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-ink/25 pt-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Cómo nos coordinamos</p>
              <h3
                className="display mt-5 text-[clamp(2rem,4vw,3rem)]"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 60',
                  lineHeight: 1,
                }}
              >
                Cuéntame qué necesita tu{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  equipo
                </span>
                .
              </h3>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.06}>
              <p className="text-[1.0625rem] leading-[1.65] text-ink-soft">
                ¿Un solo curso, una combinación de dos, el bootcamp
                completo para tu equipo? ¿Calibración técnica,
                masterclass in-house, onboarding desde cero? Cada
                formación la ajusto al nivel, al espacio y a los
                tiempos del proyecto.
              </p>
              <p className="mt-6 text-[1rem] leading-[1.65] text-ink">
                Escríbeme con lo que tengas en mente y te paso formato,
                fechas y presupuesto.
              </p>
              <a
                href="/#contacto"
                className="btn-primary mt-10"
              >
                Pedir información sobre formaciones
                <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
