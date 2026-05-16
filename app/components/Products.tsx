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
      "Café de especialidad tostado in-house en nuestro tostadero. Verdes seleccionados, perfilados de tueste por origen y, si te interesa, un programa white-label para que el café salga a tu local con tu marca.",
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
      "Máquinas de espresso premium para alta gama: Steam X, Espresso 1/2/3 groups, Single Group. Soy el distribuidor oficial en España, así que cualquier proyecto Slayer en el país pasa por mí. Asesoramiento, instalación y post-venta.",
    cta: "Ver catálogo",
  },
];

export function Products() {
  return (
    <section
      id="productos"
      className="relative bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="04" label="Productos" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
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
              <p className="lead mt-6 max-w-[56ch]">
                Si ya tienes la cafetería abierta, puedo abastecerte
                directamente. Relación directa con cada marca y precios
                alineados con lo que paga mi propio negocio, sin
                intermediarios en el medio.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-0 border-t border-ink/25 md:grid-cols-3">
          {PRODUCTS.map((p, idx) => (
            <Reveal key={p.brand} delay={idx * 0.06}>
              <article className="flex h-full flex-col border-b border-hairline pb-10 pt-10 md:border-b-0 md:border-r md:px-8 md:pt-12 last:md:border-r-0 md:[&:first-child]:pl-0 md:[&:last-child]:pr-0">
                <p className="eyebrow text-ink-mute">{p.category}</p>

                <h3
                  className="display mt-5 text-[clamp(2.5rem,5vw,4rem)]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 40',
                    lineHeight: 0.95,
                  }}
                >
                  {p.brand}
                  <span className="text-mark">.</span>
                </h3>

                <p className="mt-5 flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-ink-soft">
                  <span className="dot" aria-hidden />
                  {p.credential}
                </p>

                <p className="mt-8 grow text-[0.9375rem] leading-[1.65] text-ink-soft">
                  {p.body}
                </p>

                <div className="mt-10">
                  <a href="#contacto" className="link-underline text-[0.9375rem]">
                    {p.cta}
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-[60ch] text-[0.9375rem] leading-[1.6] text-ink-soft">
            ¿Buscas otra cosa? Trabajo también con otras marcas de
            molinillos, refrigeración y producto. Pregunta y vemos qué
            tiene sentido para tu carta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
