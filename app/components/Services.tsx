import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const SERVICES = [
  {
    n: "01",
    title: "Selección de maquinaria",
    body:
      "Te ayudo a elegir la máquina, los molinillos y el equipo de barra que tu concepto necesita. Sin sobre-ingeniería ni infra-presupuesto.",
    tag: "Slayer · La Marzocco · Mahlkönig · EK",
  },
  {
    n: "02",
    title: "Selección de producto",
    body:
      "Café, leche, bebidas vegetales, matcha. Defino contigo qué entra a tu carta y por qué, con criterio de barista y de operador.",
    tag: "Sourcing · Cata · Negociación",
  },
  {
    n: "03",
    title: "Cartas y signature drinks",
    body:
      "Diseñamos la carta como una identidad. Bebidas firma que sean tuyas, no plantillas de Pinterest.",
    tag: "Identidad · Estacionalidad · Coste",
  },
  {
    n: "04",
    title: "Head hunting",
    body:
      "Busco, entrevisto y filtro al talento barista para que tú solo veas a los candidatos que realmente encajan.",
    tag: "Baristas · Encargados · Jefes de barra",
  },
  {
    n: "05",
    title: "Formación del equipo",
    body:
      "Configuro molinillo y máquina, formo a tu equipo desde cero o nivelo al que ya tienes. Cursos a medida.",
    tag: "Onboarding · Calibración · Cursos in-house",
  },
  {
    n: "06",
    title: "Distribución de barra",
    body:
      "Diseño el layout para que el flujo de trabajo sea fluido en hora punta. La barra es la cocina del café, se piensa antes de instalarse.",
    tag: "Layout · Flujo · Ergonomía",
  },
];

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
              <h2 className="h1 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
                Lo que delegas en mí.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[52ch]">
                Seis frentes en los que un consultor con barra propia te
                ahorra meses de prueba y error. Tomas las decisiones, yo
                pongo el criterio.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 border-t border-hairline">
          {SERVICES.map((s, idx) => (
            <Reveal as="li" key={s.n} delay={Math.min(idx * 0.04, 0.16)}>
              <article className="group grid grid-cols-1 gap-x-10 gap-y-6 border-b border-hairline py-10 transition-colors duration-500 hover:bg-paper-deep/40 sm:py-12 lg:grid-cols-12 lg:py-14">
                <div className="lg:col-span-2">
                  <span
                    className="text-mark font-medium tabular-nums tracking-[0.18em]"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    / {s.n}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h3
                    className="h2 max-w-[16ch] text-[clamp(1.5rem,2.4vw,2.25rem)]"
                  >
                    {s.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[1rem] leading-[1.65] text-ink-soft lg:text-[1.0625rem]">
                    {s.body}
                  </p>
                  <p className="eyebrow mt-5 text-ink-mute">{s.tag}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
