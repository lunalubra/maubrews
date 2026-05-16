import { ArrowUpRight } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#dosis", label: "Dosis" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

const SOCIAL = [
  { href: "https://dosiscafe.es", label: "Dosis Café" },
  { href: "https://instagram.com/dosiscafe", label: "Instagram" },
  // TODO: añadir LinkedIn y Instagram personal de Maubrews
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.02em] text-ink"
            >
              maubrews<span className="text-mark">.</span>
            </a>
            <p className="mt-6 max-w-[36ch] text-[1rem] leading-[1.6] text-ink-soft">
              Consultoría de café de especialidad. Madrid, España.
              Desde Dosis Café.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow">Navegación</p>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-ink">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Encuéntrame</p>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-ink">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {s.label}
                    <ArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-hairline pt-8 text-[0.8125rem] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Maubrews · Mauricio De Luca. Todos los derechos
            reservados.
          </p>
          <p>
            {/* TODO: enlazar a páginas legales reales */}
            <span className="link-underline cursor-not-allowed opacity-70">
              Aviso legal
            </span>
            <span className="mx-3">·</span>
            <span className="link-underline cursor-not-allowed opacity-70">
              Privacidad
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
