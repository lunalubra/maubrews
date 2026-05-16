import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { ArrowRight } from "lucide-react";

const COURSES = [
  {
    title: "Barismo · Iniciación",
    audience: "Para quien empieza detrás de la barra",
    duration: "1 día",
    detail:
      "Café, molienda, espresso, leche texturizada y servicio. La base sobre la que se construye todo lo demás.",
  },
  {
    title: "Calibración técnica",
    audience: "Para equipos ya formados",
    duration: "Medio día",
    detail:
      "Configuro tu molinillo y tu máquina hasta dejarlas en su punto. Documento los parámetros para que el equipo los reproduzca.",
  },
  {
    title: "Onboarding completo",
    audience: "Para nuevas aperturas",
    duration: "3 días",
    detail:
      "Llevo a tu equipo de cero a operativo. Café, leche, carta, protocolos de servicio, gestión de hora punta.",
  },
  {
    title: "Masterclass in-house",
    audience: "Para tu equipo, en tu local",
    duration: "2 horas",
    detail:
      "Formato corto sobre un tema concreto: pour-over, signature drinks, gestión de waste, cata interna.",
  },
];

export function Training() {
  return (
    <section
      id="formacion"
      className="relative border-t border-hairline py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="06" label="Formación" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Cursos y formaciones a medida.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[52ch]">
                Cuatro formatos base. Adaptamos el contenido al nivel y
                al ritmo del equipo. Las formaciones se imparten en
                Dosis o en tu local.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 border-t border-hairline">
          {COURSES.map((course, idx) => (
            <Reveal as="li" key={course.title} delay={idx * 0.04}>
              <article className="grid grid-cols-1 gap-y-4 border-b border-hairline py-10 lg:grid-cols-12 lg:gap-x-10">
                <div className="lg:col-span-5">
                  <h3 className="h3 text-[clamp(1.25rem,1.8vw,1.625rem)]">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] text-ink-mute">
                    {course.audience}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <p className="eyebrow text-ink-soft">{course.duration}</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[1rem] leading-[1.6] text-ink-soft">
                    {course.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="lead max-w-[42ch] text-ink">
              ¿Otro formato en mente? Si necesitas algo que no está
              aquí, lo construimos.
            </p>
            <a href="#contacto" className="link-underline text-[0.9375rem]">
              Solicitar formación a medida
              <ArrowRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
