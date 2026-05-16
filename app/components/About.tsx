import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const NUMBERS = [
  // TODO: confirm real numbers with Maubrews
  { value: "4", unit: "años", label: "al frente de Dosis Café" },
  { value: "120+", unit: "proyectos", label: "asesorados en España" },
  { value: "600+", unit: "baristas", label: "formados desde 2020" },
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative border-t border-hairline py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-14 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
        <div className="lg:col-span-3">
          <Reveal>
            <SectionIndex num="01" label="Sobre" />
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
              Un barista que se sienta en tu lado de la mesa.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-9">
            <Reveal delay={0.05} className="lg:col-span-6">
              <div className="space-y-6 text-[1.0625rem] leading-[1.7] text-ink-soft">
                <p>
                  Soy <span className="text-ink">Mauricio De Luca</span>. Fundé
                  Dosis Café en Chamberí hace casi cuatro años y desde
                  entonces hemos crecido hasta tostar nuestro propio café y
                  abastecer a otros negocios.
                </p>
                <p>
                  Por el camino me convertí en{" "}
                  <span className="text-ink">
                    Head of Ambassadors de Alpro en España
                  </span>{" "}
                  y en el{" "}
                  <span className="text-ink">
                    distribuidor oficial de Slayer Espresso
                  </span>
                  . Lo que aprendí montando Dosis es exactamente lo que
                  pongo a tu disposición cuando decides abrir la tuya.
                </p>
                <p>
                  No vendo plantillas ni paquetes cerrados. Cada proyecto
                  empieza por entender qué quieres construir, dónde, para
                  quién y con qué presupuesto. A partir de ahí, decidimos
                  juntos.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-3">
              <ul className="space-y-10 border-l border-hairline pl-6 lg:border-l-0 lg:pl-0">
                {NUMBERS.map((n) => (
                  <li key={n.label}>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="display text-[clamp(2.5rem,4vw,3.5rem)] text-ink"
                        style={{ fontVariationSettings: '"opsz" 72, "SOFT" 30' }}
                      >
                        {n.value}
                      </span>
                      <span className="eyebrow text-ink-soft">{n.unit}</span>
                    </div>
                    <p className="mt-1 text-[0.9375rem] leading-snug text-ink-soft">
                      {n.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
