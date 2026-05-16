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

const BUNDLES = [
  {
    label: "Un curso",
    price: "200 €",
    detail: "Elige uno cualquiera de los tres.",
  },
  {
    label: "Dos cursos",
    price: "320 €",
    detail: "Cualquier combinación, ahorras 80 €.",
  },
  {
    label: "Bootcamp",
    price: "200 € / persona",
    detail:
      "Los tres cursos en grupo cerrado, en Dosis o en tu local. Para equipos enteros.",
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
                o lleva a tu equipo entero al bootcamp. Se imparten en
                Dosis o, para grupos, en tu local.
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

        <div className="mt-16 border-t border-ink/25 pt-10">
          <Reveal>
            <p className="eyebrow mb-6">Cómo se contrata</p>
          </Reveal>
          <ul className="space-y-0">
            {BUNDLES.map((b, idx) => (
              <Reveal as="li" key={b.label} delay={idx * 0.05}>
                <div className="grid grid-cols-1 gap-y-2 border-b border-hairline py-6 sm:grid-cols-12 sm:items-baseline sm:gap-x-10 sm:gap-y-0">
                  <h4 className="h3 sm:col-span-3">{b.label}</h4>
                  <p className="text-[0.9375rem] leading-[1.6] text-ink-soft sm:col-span-6">
                    {b.detail}
                  </p>
                  <p
                    className="display text-[clamp(1.25rem,2vw,1.625rem)] text-ink sm:col-span-3 sm:text-right"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30' }}
                  >
                    {b.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="lead max-w-[44ch] text-ink">
              ¿Algo más específico? Calibración técnica, masterclass
              in-house, onboarding completo. También se hace.
            </p>
            <a href="#contacto" className="link-underline text-[0.9375rem]">
              Solicitar formación a medida
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
