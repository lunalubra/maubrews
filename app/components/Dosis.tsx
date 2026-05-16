import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const FACETS = [
  {
    label: "Cafetería · B2C",
    body:
      "Activo propio en Chamberí. Espacio físico de prueba, cata y formación. Abierta todos los días.",
  },
  {
    label: "Tostadero",
    body:
      "Tueste propio en Madrid desde 2022. Verdes seleccionados origen a origen, perfilados in-house por nuestro equipo.",
  },
  {
    label: "B2B y e-commerce",
    body:
      "Distribución a hostelería: café, matcha y maquinaria. Venta online de café y matcha Dosis a clientes finales en toda España.",
  },
];

export function Dosis() {
  return (
    <section
      id="dosis"
      className="relative border-t border-hairline py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-14 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
        <div className="lg:col-span-6">
          <Reveal>
            <figure className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
              <Image
                src="/images/dosis-storefront.jpg"
                alt="Fachada de Dosis Café en Chamberí, Madrid"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </figure>
            <figcaption className="mt-4 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
              <span className="hairline inline-block h-px w-8" />
              Chamberí, abierta desde 2022
            </figcaption>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pl-6 lg:pt-12">
          <Reveal>
            <SectionIndex num="04" label="Dosis" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="h1 mt-8 max-w-[14ch] text-[clamp(2.25rem,5.5vw,4.5rem)]">
              Mi{" "}
              <span
                className="italic"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                laboratorio
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.7] text-ink-soft">
              <p>
                Todo lo que asesoro está probado en mi propia cafetería.
                Dosis abrió en 2022 en Chamberí, tuesta su propio café y
                es donde diariamente seguimos refinando lo que funciona
                y lo que no.
              </p>
              <p>
                Si dudas si alguien con teoría te puede vender humo,
                visítame. Te invito a un espresso y vemos tu proyecto
                en la barra.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-12 space-y-0 border-t border-hairline">
              {FACETS.map((f) => (
                <li key={f.label} className="border-b border-hairline py-5">
                  <p className="eyebrow text-ink">{f.label}</p>
                  <p className="mt-2 max-w-[44ch] text-[0.9375rem] leading-[1.55] text-ink-soft">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow flex items-center gap-2">
                  <MapPin size={12} strokeWidth={1.5} />
                  Dirección
                </p>
                <p className="mt-3 text-[1rem] leading-snug text-ink">
                  Calle Gonzalo de Córdoba, 3<br />
                  28010 Madrid
                </p>
              </div>
              <div>
                <p className="eyebrow">Horario</p>
                <p className="mt-3 text-[1rem] leading-snug text-ink">
                  L–V · 8:00 a 19:00
                  <br />
                  S–D · 9:30 a 19:30
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href="https://dosiscafe.es"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-10 inline-flex text-[0.9375rem]"
            >
              Visitar dosiscafe.es
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
