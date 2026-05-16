import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, YouTubeIcon, LinkedInIcon } from "./icons";
import type { ComponentType } from "react";

const LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#productos", label: "Productos" },
  { href: "/#dosis", label: "Dosis" },
  { href: "/#formacion", label: "Formación" },
  { href: "/#contacto", label: "Contacto" },
];

type IconProps = { size?: number; strokeWidth?: number; className?: string };

type Social = {
  href: string;
  label: string;
  Icon?: ComponentType<IconProps>;
};

const SOCIAL: Social[] = [
  { href: "https://dosiscafe.es", label: "Dosis Café" },
  {
    href: "https://instagram.com/maubrews",
    label: "Instagram · @maubrews",
    Icon: InstagramIcon,
  },
  {
    href: "https://instagram.com/dosiscafe",
    label: "Instagram · @dosiscafe",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.youtube.com/@maubrewscoffeechannel3196",
    label: "YouTube",
    Icon: YouTubeIcon,
  },
  {
    href: "https://www.linkedin.com/in/mauricio-de-luca-kowalski/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <a
              href="/"
              className="display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.02em] text-paper"
            >
              maubrews<span className="text-mark-quiet">.</span>
            </a>
            <p className="mt-6 max-w-[36ch] text-[1rem] leading-[1.6] text-paper/70">
              Consultoría de café de especialidad. Madrid, España.
              Desde Dosis Café.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[0.6875rem] uppercase tracking-[0.22em] font-medium text-paper/55">
              Navegación
            </p>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.6875rem] uppercase tracking-[0.22em] font-medium text-paper/55">
              Encuéntrame
            </p>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline-dark"
                  >
                    {s.Icon ? <s.Icon size={13} strokeWidth={1.5} /> : null}
                    {s.label}
                    <ArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 text-[0.8125rem] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Maubrews · Mauricio De Luca. Todos los derechos
            reservados.
          </p>
          <p>
            {/* TODO: enlazar a páginas legales reales */}
            <span className="cursor-not-allowed opacity-70">
              Aviso legal
            </span>
            <span className="mx-3 text-paper/30">·</span>
            <span className="cursor-not-allowed opacity-70">
              Privacidad
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
