import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    body:
      "Visitamos el espacio o estudiamos los planos. Hablamos de público, ticket, ubicación, competencia y presupuesto real disponible.",
    meta: "1 semana",
  },
  {
    n: "02",
    title: "Propuesta",
    body:
      "Te entrego un documento detallado: maquinaria recomendada, producto, layout, perfil de equipo, formación necesaria y cronograma.",
    meta: "2 a 3 semanas",
  },
  {
    n: "03",
    title: "Implementación",
    body:
      "Lidero la ejecución del plan: negocio con proveedores, instalo la barra, contrato al equipo y dejo todo calibrado.",
    meta: "Hasta apertura",
  },
  {
    n: "04",
    title: "Seguimiento",
    body:
      "Vuelvo a los 30, 60 y 90 días después de abrir. Ajustamos lo que no funcione y dejamos al equipo en autonomía total.",
    meta: "90 días",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="03" label="Cómo trabajo" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
                Cuatro pasos. Sin sorpresas.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[52ch]">
                El proceso es siempre el mismo. Lo que cambia es la
                profundidad de cada paso según el proyecto.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="mt-20 grid grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <Reveal as="li" key={step.n} delay={idx * 0.06}>
              <div className="relative h-full border-t border-ink/30 pt-8">
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-mark font-medium tabular-nums tracking-[0.18em]"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    / {step.n}
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                    {step.meta}
                  </span>
                </div>
                <h3 className="h2 mt-6 text-[clamp(1.5rem,2vw,2rem)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.6] text-ink-soft">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
