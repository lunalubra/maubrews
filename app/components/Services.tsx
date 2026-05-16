import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { ArrowUpRight } from "lucide-react";

type Group = {
  label: string;
  items: { name: string; note?: string }[];
};

type Brand = {
  letter: string;
  name: string;
  tagline: string;
  intro: string;
  groups: Group[];
  cta?: { label: string; href: string; external?: boolean };
};

const MAUBREW: Brand = {
  letter: "A",
  name: "Maubrew",
  tagline: "Agencia de hostelería",
  intro:
    "La agencia con la que abrimos y profesionalizamos cafeterías de especialidad en España. Modelo mixto: servicios propios donde aporto criterio directo y red de socios delegados para todo lo demás.",
  groups: [
    {
      label: "Núcleo",
      items: [
        { name: "Selección y consultoría de equipamiento" },
        { name: "Distribución de producto clave" },
        { name: "Tu propia marca de café" },
      ],
    },
    {
      label: "Delegados",
      items: [
        { name: "Branding y marketing" },
        { name: "Obra civil y construcción" },
        { name: "Interiorismo" },
      ],
    },
    {
      label: "Distribución y embajador",
      items: [
        { name: "Alpro España", note: "Head of Ambassadors" },
        { name: "Slayer Espresso España", note: "Distribuidor oficial" },
      ],
    },
    {
      label: "Extras",
      items: [
        { name: "Gestión de eventos" },
        { name: "Estrategia go-to-market" },
        { name: "Post-delivery y seguimiento" },
      ],
    },
  ],
  cta: { label: "Hablemos de tu proyecto", href: "#contacto" },
};

const DOSIS: Brand = {
  letter: "B",
  name: "Dosis",
  tagline: "Marca y operación",
  intro:
    "La marca propia: la cafetería, el tostadero y la línea de distribución. El activo donde se prueba todo lo que después llevamos a otros proyectos.",
  groups: [
    {
      label: "Cafetería · B2C",
      items: [
        { name: "Dosis Café", note: "Chamberí, Madrid · desde 2022" },
      ],
    },
    {
      label: "Distribución · B2B",
      items: [
        { name: "Café de especialidad" },
        { name: "Matcha" },
        { name: "Maquinaria de espresso y molinillos" },
        { name: "Sodas", note: "Juno" },
      ],
    },
    {
      label: "E-commerce",
      items: [
        { name: "Café Dosis y Matcha Dosis" },
        { name: "Cafés de tostadores invitados" },
      ],
    },
    {
      label: "Formación",
      items: [
        { name: "Cursos especializados", note: "Ver más abajo ↓" },
      ],
    },
  ],
  cta: {
    label: "Visitar dosiscafe.es",
    href: "https://dosiscafe.es",
    external: true,
  },
};

const BRANDS = [MAUBREW, DOSIS];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative border-t border-hairline py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="02" label="Servicios" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[14ch] text-[clamp(2rem,5vw,4rem)]">
                Dos casas.
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  Un criterio.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[56ch]">
                Trabajo desde dos marcas. Maubrew es la agencia con la
                que aterrizamos proyectos ajenos. Dosis es donde aplico
                cada día lo que en Maubrew vendemos: cafetería, tostadero,
                distribución y formación.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          {BRANDS.map((brand, idx) => (
            <Reveal key={brand.name} delay={idx * 0.08}>
              <article className="relative h-full border-t border-ink/25 pt-10">
                <div className="flex items-baseline gap-5">
                  <span
                    className="text-mark font-medium tabular-nums tracking-[0.18em]"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    / {brand.letter}
                  </span>
                  <span className="eyebrow text-ink-soft">
                    {brand.tagline}
                  </span>
                </div>

                <h3
                  className="display mt-6 text-[clamp(2.75rem,5.5vw,4.5rem)]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 40',
                    lineHeight: 0.95,
                  }}
                >
                  {brand.name}
                  <span className="text-mark">.</span>
                </h3>

                <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
                  {brand.intro}
                </p>

                <dl className="mt-12 space-y-8">
                  {brand.groups.map((group) => (
                    <div key={group.label} className="border-t border-hairline pt-5">
                      <dt className="eyebrow text-ink">
                        {group.label}
                      </dt>
                      <dd className="mt-3">
                        <ul className="space-y-2.5 text-[1rem] leading-snug text-ink">
                          {group.items.map((item) => (
                            <li
                              key={item.name}
                              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                            >
                              <span>{item.name}</span>
                              {item.note && (
                                <span className="text-[0.8125rem] text-ink-mute">
                                  {item.note}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>

                {brand.cta && (
                  <div className="mt-12">
                    <a
                      href={brand.cta.href}
                      target={brand.cta.external ? "_blank" : undefined}
                      rel={brand.cta.external ? "noopener noreferrer" : undefined}
                      className="link-underline text-[0.9375rem]"
                    >
                      {brand.cta.label}
                      {brand.cta.external ? (
                        <ArrowUpRight size={14} strokeWidth={1.5} />
                      ) : null}
                    </a>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
