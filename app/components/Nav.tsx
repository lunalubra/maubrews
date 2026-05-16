"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#dosis", label: "Dosis" },
  { href: "#formacion", label: "Formación" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500",
        scrolled
          ? "border-b border-hairline bg-paper/95 py-3"
          : "border-b border-transparent bg-transparent py-5",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <a
          href="#top"
          className="display text-[1.5rem] leading-none tracking-[-0.02em] text-ink"
          aria-label="Maubrews — inicio"
        >
          maubrews<span className="text-mark">.</span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-9 md:flex"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium tracking-[0.02em] text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden items-center gap-2 border border-ink bg-ink px-4 py-2 text-[0.8125rem] font-medium text-paper transition-colors duration-300 hover:bg-mark-deep hover:border-mark-deep md:inline-flex"
            style={{ borderRadius: 2 }}
          >
            Hablemos
            <ArrowRight size={14} strokeWidth={1.5} />
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-ink md:hidden"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="absolute inset-x-0 top-full border-t border-hairline bg-paper px-6 pt-6 pb-10">
            <nav aria-label="Navegación móvil" className="flex flex-col gap-5">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="h1 text-[2rem] text-ink"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-2 self-start border border-ink bg-ink px-5 py-3 text-sm font-medium text-paper"
                style={{ borderRadius: 2 }}
              >
                Hablemos
                <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
