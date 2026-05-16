import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const BADGES = [
  {
    role: "Head of Ambassadors",
    name: "Alpro España",
    note:
      "Representante principal de la marca en el canal barista y cafetería de especialidad.",
    // TODO: añadir logo oficial cuando esté disponible
  },
  {
    role: "Distribuidor oficial",
    name: "Slayer Espresso",
    note:
      "Único canal autorizado en España para la marca de máquinas premium referencia mundial en alta gama.",
    // TODO: añadir logo oficial cuando esté disponible
  },
];

export function Partnerships() {
  return (
    <section
      id="alianzas"
      className="relative border-t border-hairline py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="04" label="Alianzas" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[14ch] text-[clamp(2rem,5vw,4rem)]">
                Donde ponen su nombre.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[50ch]">
                Las marcas que más respeto en el sector confían en mí
                para representarlas en España.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-hairline pt-16 md:grid-cols-2 md:gap-16">
          {BADGES.map((b) => (
            <Reveal key={b.name}>
              <div className="flex flex-col gap-6">
                <div className="flex items-baseline gap-3">
                  <span className="dot" aria-hidden />
                  <span className="eyebrow">{b.role}</span>
                </div>
                <p
                  className="display text-[clamp(2.5rem,5vw,4rem)]"
                  style={{
                    fontVariationSettings: '"opsz" 96, "SOFT" 30',
                    lineHeight: 1.02,
                  }}
                >
                  {b.name}
                </p>
                <p className="max-w-[42ch] text-[1rem] leading-[1.6] text-ink-soft">
                  {b.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
