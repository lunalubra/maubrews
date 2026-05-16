import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-14 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
        {/* Left — text column */}
        <div className="lg:col-span-7 xl:col-span-7">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3">
              <span className="dot" aria-hidden />
              Consultoría de café de especialidad
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              className="display mt-8 text-[clamp(3rem,8.5vw,7rem)]"
            >
              Abre tu cafetería
              <br />
              sin dolor de
              <br />
              <span className="italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                cabeza.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="lead mt-8 max-w-[44ch]">
              Soy Maubrews. Llevo más de una década en café de
              especialidad. Si quieres montar o profesionalizar una
              cafetería en España, te acompaño en cada decisión, desde
              la máquina hasta el equipo.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a href="#contacto" className="btn-primary">
                Hablemos de tu proyecto
                <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
              </a>
              <a href="#servicios" className="link-underline text-[0.9375rem]">
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — image column */}
        <div className="relative lg:col-span-5 xl:col-span-5">
          <Reveal delay={0.12} y={36}>
            <figure className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-paper-deep lg:mt-12">
              <Image
                src="/images/maubrews-portrait.jpg"
                alt="Mauricio De Luca, Maubrews, fundador de Dosis Café"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </figure>
            <figcaption className="mt-4 flex items-center justify-end gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
              <span className="hairline inline-block h-px w-8" />
              Mauricio De Luca · Dosis, Madrid
            </figcaption>
          </Reveal>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="mx-auto mt-24 flex max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <span className="eyebrow flex items-center gap-3">
          <ArrowDown size={14} strokeWidth={1.5} />
          Madrid · 2026
        </span>
        <span className="eyebrow hidden sm:inline">
          Head of Ambassadors Alpro · Distribuidor Slayer España
        </span>
      </div>
    </section>
  );
}
