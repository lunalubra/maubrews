import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const SERVICES = [
  {
    n: "01",
    title: "Llave en mano",
    tag: "Un solo interlocutor, todo el proyecto",
    body:
      "Para quien no quiere gestionar quince proveedores. Coordino equipamiento, producto, branding, obra civil, interiorismo, contratación y arranque operativo bajo un único paraguas. Yo me siento con cada partner; tú firmas con uno solo.",
  },
  {
    n: "02",
    title: "Equipamiento y barra",
    tag: "Slayer · La Marzocco · Mahlkönig · EK",
    body:
      "Máquina, molinillos, refrigeración, abatidores, layout de barra. Te asesoro en qué necesita tu concepto y qué no. Acceso directo al catálogo Slayer como distribuidor oficial en España, y a las marcas con las que trabajo cada día en Dosis.",
  },
  {
    n: "03",
    title: "Producto y carta",
    tag: "Café · Leche · Matcha · Signature drinks",
    body:
      "Defino contigo qué entra a tu carta y por qué. Café de tostadores que respeto, leche y bebidas vegetales seleccionadas, matcha, tés, sodas. Si lo necesitas, diseño también los signature drinks que te van a posicionar frente a la competencia.",
  },
  {
    n: "04",
    title: "Tu propia marca de café",
    tag: "White-label · Tueste a medida",
    body:
      "Si quieres ir un paso más allá, lo tuesto yo y sale a tu local con tu marca, no con la mía. Selección de verde, perfilado, formato y etiquetado, todo end-to-end desde nuestro tostadero. Para proyectos con volumen suficiente.",
  },
  {
    n: "05",
    title: "Head hunting",
    tag: "Baristas · Encargados · Jefes de barra",
    body:
      "Busco, entrevisto y filtro al talento. Tú solo ves a los candidatos que encajan con el concepto, el ritmo del proyecto y el presupuesto. Trabajo con la red de baristas que llevo años cruzándome detrás de las barras de Madrid.",
  },
  {
    n: "06",
    title: "Post-apertura",
    tag: "Día 30 · Día 60 · Día 90",
    body:
      "La apertura no es el final. Vuelvo a los 30, 60 y 90 días para ajustar lo que no funcione: carta, operativa, gestión de hora punta. También gestión de eventos y estrategia de salida al mercado para activar el espacio en los primeros meses.",
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
              <p className="lead mt-6 max-w-[54ch]">
                Seis frentes donde un consultor con barra propia te
                ahorra meses de prueba y error caros. Tú tomas las
                decisiones; yo pongo el criterio.
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
                <div className="lg:col-span-4">
                  <h3 className="h2 max-w-[14ch] text-[clamp(1.5rem,2.4vw,2.25rem)]">
                    {s.title}
                  </h3>
                  <p className="eyebrow mt-4 text-ink-mute">{s.tag}</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[1rem] leading-[1.65] text-ink-soft lg:text-[1.0625rem]">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
