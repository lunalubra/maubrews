import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

type Item = { name: string; note: string };
type Category = { n: string; title: string; items: Item[] };

const CATEGORIES: Category[] = [
  {
    n: "01",
    title: "Espacio",
    items: [
      {
        name: "Layout de barra",
        note: "Ergonomía y flujo en hora punta",
      },
      {
        name: "Obra civil",
        note: "Delegado · red de partners de obra",
      },
      {
        name: "Interiorismo",
        note: "Delegado · red de interioristas",
      },
    ],
  },
  {
    n: "02",
    title: "Equipamiento",
    items: [
      {
        name: "Máquina de espresso",
        note: "Slayer (distribuidor oficial), La Marzocco, otras",
      },
      {
        name: "Molinillos",
        note: "Mahlkönig, Mythos, EK, configuración incluida",
      },
      {
        name: "Refrigeración y mobiliario",
        note: "Abatidores, expositores, mobiliario auxiliar",
      },
    ],
  },
  {
    n: "03",
    title: "Producto",
    items: [
      {
        name: "Café",
        note: "Sourcing, blends y single origins",
      },
      {
        name: "Leche y bebidas vegetales",
        note: "Alpro (Head of Ambassadors) y otras",
      },
      {
        name: "Matcha y tés",
        note: "Selección por categoría",
      },
      {
        name: "Carta y signature drinks",
        note: "Identidad de menú, estacionalidad, coste",
      },
    ],
  },
  {
    n: "04",
    title: "Marca y equipo",
    items: [
      {
        name: "Branding",
        note: "Delegado · red de partners de diseño",
      },
      {
        name: "Head hunting",
        note: "Baristas, encargados, jefes de barra",
      },
    ],
  },
  {
    n: "05",
    title: "Lanzamiento y operativa",
    items: [
      {
        name: "Estrategia go-to-market",
        note: "Posicionamiento, mensaje, primer trimestre",
      },
      {
        name: "Gestión de eventos",
        note: "Logística, maquinaria, equipo barista",
      },
      {
        name: "Post-apertura",
        note: "Seguimiento a 30, 60 y 90 días",
      },
    ],
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative bg-paper py-24 sm:py-32 lg:py-40"
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
              <h2 className="h1 max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                Lo que delegas
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  en mí.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-8 max-w-[56ch]">
                Estos son los frentes en los que trabajo. Tómalos
                sueltos o delégame la composición entera; en cualquier
                caso, cada combinación te ahorra meses de prueba y
                error caros.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 border-t border-ink/25 lg:mt-32">
          {CATEGORIES.map((cat, catIdx) => (
            <Reveal key={cat.n} delay={Math.min(catIdx * 0.04, 0.16)}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 border-b border-hairline py-12 sm:py-16 lg:grid-cols-12 lg:py-20">
                <header className="lg:col-span-5">
                  <span
                    className="text-mark font-medium tabular-nums tracking-[0.18em]"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    / {cat.n}
                  </span>
                  <h3
                    className="display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)]"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      lineHeight: 0.95,
                    }}
                  >
                    <span
                      className="italic"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                      }}
                    >
                      {cat.title}
                    </span>
                    <span className="text-mark">.</span>
                  </h3>
                </header>

                <ul className="lg:col-span-7">
                  {cat.items.map((item, idx) => (
                    <li
                      key={item.name}
                      className={[
                        "grid grid-cols-1 gap-x-8 gap-y-1 py-5 sm:grid-cols-2 sm:items-baseline",
                        idx > 0 ? "border-t border-hairline" : "",
                      ].join(" ")}
                    >
                      <p className="text-[1.0625rem] font-medium text-ink">
                        {item.name}
                      </p>
                      <p className="text-[0.875rem] leading-snug text-ink-soft sm:text-right">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
