import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const NUMBERS = [
  { value: "10+", unit: "asesorías", label: "en cafeterías reales en España" },
  { value: "100+", unit: "formaciones", label: "impartidas desde Dosis" },
  { value: "4", unit: "años", label: "al frente de Dosis Café" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="01" label="Sobre" tone="dark" />
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal>
              <h2
                className="h1 max-w-[18ch] text-paper text-[clamp(2rem,5vw,4rem)]"
              >
                Un barista que se sienta en tu{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  lado
                </span>{" "}
                de la mesa.
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-14 max-w-[58ch] space-y-6 text-[1.0625rem] leading-[1.7] text-paper/75">
                <p>
                  Soy <span className="text-paper">Mauricio De Luca</span>.
                  Fundé Dosis Café en Chamberí hace casi cuatro años y
                  desde entonces hemos crecido hasta tostar nuestro
                  propio café y abastecer a otros negocios.
                </p>
                <p>
                  Por el camino me convertí en{" "}
                  <span className="text-paper">
                    Head of Ambassadors de Alpro en España
                  </span>{" "}
                  y en el{" "}
                  <span className="text-paper">
                    distribuidor oficial de Slayer Espresso
                  </span>
                  . Lo que aprendí montando Dosis es exactamente lo
                  que pongo a tu disposición cuando decides abrir la
                  tuya.
                </p>
                <p>
                  No vendo plantillas ni paquetes cerrados. Cada
                  proyecto empieza por entender qué quieres construir,
                  dónde, para quién y con qué presupuesto. A partir de
                  ahí, decidimos juntos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Numbers strip */}
        <div className="mt-24 border-t border-paper/15 pt-12 lg:mt-32 lg:pt-16">
          <ul className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-x-10">
            {NUMBERS.map((n, idx) => (
              <Reveal as="li" key={n.label} delay={idx * 0.06}>
                <div className="flex flex-col">
                  <span
                    className="display text-[clamp(4rem,9vw,7.5rem)] text-paper"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 50',
                      lineHeight: 0.9,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {n.value}
                  </span>
                  <span className="eyebrow mt-6 text-paper/60">
                    {n.unit}
                  </span>
                  <p className="mt-2 text-[0.9375rem] leading-snug text-paper/75">
                    {n.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
