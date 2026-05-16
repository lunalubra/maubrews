import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { ArrowRight } from "lucide-react";

type Product = {
  category: string;
  brand: string;
  credential: string;
  body: string;
  cta: string;
};

const PRODUCTS: Product[] = [
  {
    category: "Café",
    brand: "Dosis",
    credential: "Tostadero propio · Madrid",
    body:
      "Café de especialidad tostado in-house en nuestro tostadero. Verdes seleccionados origen a origen, perfilados por nuestro equipo. Distribuyo a cafeterías y a clientes finales en toda España.",
    cta: "Solicitar muestra",
  },
  {
    category: "Leche",
    brand: "Alpro",
    credential: "Head of Ambassadors · España",
    body:
      "Bebidas vegetales de la marca de referencia en barismo profesional. Avena, soja, almendra y coco en formato hostelería. Como Head of Ambassadors, gestiono la red de adopción en todo el país.",
    cta: "Solicitar información",
  },
  {
    category: "Máquinas",
    brand: "Slayer",
    credential: "Distribuidor oficial · España",
    body:
      "Máquinas de espresso premium: Steam X, Espresso 1/2/3 groups, Single Group. Soy el distribuidor oficial en España, así que cualquier proyecto Slayer en el país pasa por mí. Asesoramiento, instalación y post-venta.",
    cta: "Pedir presupuesto",
  },
];

export function Products() {
  return (
    <section
      id="productos"
      className="relative bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="03" label="Productos" tone="dark" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[16ch] text-paper text-[clamp(2.25rem,5.5vw,4.5rem)]">
                Tres marcas
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  en mi mesa.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-8 max-w-[58ch] text-paper/75">
                Si ya tienes la cafetería abierta, también puedo
                abastecerte directamente. Relación directa con cada
                marca y precios alineados con lo que paga mi propio
                negocio, sin intermediarios en el medio.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-x-0 border-t border-paper/20 md:grid-cols-3 lg:mt-32">
          {PRODUCTS.map((p, idx) => (
            <Reveal key={p.brand} delay={idx * 0.06}>
              <article className="flex h-full flex-col border-b border-paper/15 pb-12 pt-12 md:border-b-0 md:border-r md:px-10 md:[&:first-child]:pl-0 md:[&:last-child]:border-r-0 md:[&:last-child]:pr-0">
                <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-paper/55">
                  {p.category}
                </p>

                <h3
                  className="display mt-5 text-[clamp(3rem,6vw,5rem)] text-paper"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 30',
                    lineHeight: 0.92,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.brand}
                  <span className="text-mark-quiet">.</span>
                </h3>

                <p className="mt-6 flex items-center gap-2.5 text-[0.75rem] uppercase tracking-[0.18em] text-paper/75">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-mark-quiet"
                  />
                  {p.credential}
                </p>

                <p className="mt-10 grow text-[0.9375rem] leading-[1.65] text-paper/70">
                  {p.body}
                </p>

                <div className="mt-10">
                  <a
                    href="#contacto"
                    className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-paper"
                  >
                    <span className="relative">
                      {p.cta}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-paper transition-transform duration-500 group-hover:scale-x-100"
                        style={{
                          transitionTimingFunction:
                            "cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                      />
                    </span>
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Other brands — editorial sidebar treatment */}
        <Reveal delay={0.1}>
          <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-paper/20 pt-16 lg:mt-32 lg:grid-cols-12">
            <header className="lg:col-span-5">
              <p className="text-[0.6875rem] uppercase tracking-[0.22em] text-paper/55">
                ¿No es ninguna de estas?
              </p>
              <h3
                className="display mt-5 text-[clamp(2.25rem,4.5vw,3.5rem)] text-paper"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 80',
                  lineHeight: 1,
                  letterSpacing: "-0.015em",
                }}
              >
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  Otra marca
                </span>
                <span className="text-mark-quiet">.</span>
              </h3>
            </header>

            <div className="space-y-6 lg:col-span-7 lg:pt-4">
              <p className="text-[1.125rem] leading-[1.6] text-paper/85">
                Estas tres son las que llevo en el día a día. También
                trabajo con{" "}
                <span className="text-paper">
                  Faema, La Marzocco, Mahlkönig, Mythos, EK
                </span>{" "}
                y otras según el proyecto.
              </p>
              <p className="text-[1.0625rem] leading-[1.65] text-paper/70">
                Si lo que necesitas no está en mi catálogo habitual,
                pregunta. Para proyectos serios, normalmente tiene
                sentido buscarlo, y mi red de proveedores cubre la
                mayoría de marcas de la industria.
              </p>
              <a
                href="#contacto"
                className="group mt-2 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-paper"
              >
                <span className="relative">
                  Preguntar por otra marca
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-paper transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />
                </span>
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
