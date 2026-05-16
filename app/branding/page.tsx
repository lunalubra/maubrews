import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Mail,
  MapPin,
  Menu,
  X,
  Check,
} from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { SectionIndex } from "../components/SectionIndex";
import {
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "../components/icons";

export const metadata: Metadata = {
  title: "Branding",
  description:
    "Sistema visual de Maubrews. Logo, color, tipografía, patrones y voz.",
};

// ───────────────────────────────────────────────────────────────
// Data
// ───────────────────────────────────────────────────────────────

const SURFACES = [
  {
    bg: "var(--color-paper)",
    name: "Paper",
    token: "--color-paper",
    hex: "#F4EFE7",
    role: "Positivo principal",
  },
  {
    bg: "var(--color-paper-deep)",
    name: "Paper Deep",
    token: "--color-paper-deep",
    hex: "#EBE4D7",
    role: "Positivo alterno",
  },
  {
    bg: "var(--color-ink)",
    name: "Ink",
    token: "--color-ink",
    hex: "#1E1612",
    role: "Negativo",
  },
] as const;

type ColorToken = {
  name: string;
  oklch: string;
  hex: string;
  role: string;
  group: "Neutros" | "Inks" | "Marca" | "Línea";
};

const COLORS: ColorToken[] = [
  {
    name: "paper",
    oklch: "oklch(0.965 0.008 60)",
    hex: "#F4EFE7",
    role: "Fondo principal.",
    group: "Neutros",
  },
  {
    name: "paper-deep",
    oklch: "oklch(0.94 0.012 55)",
    hex: "#EBE4D7",
    role: "Fondo alterno cálido.",
    group: "Neutros",
  },
  {
    name: "surface",
    oklch: "oklch(0.985 0.004 70)",
    hex: "#FCFAF6",
    role: "Paneles elevados, formularios.",
    group: "Neutros",
  },
  {
    name: "ink",
    oklch: "oklch(0.185 0.018 30)",
    hex: "#1E1612",
    role: "Texto principal. Fondo negativo.",
    group: "Inks",
  },
  {
    name: "ink-soft",
    oklch: "oklch(0.42 0.018 35)",
    hex: "#594C42",
    role: "Texto secundario.",
    group: "Inks",
  },
  {
    name: "ink-mute",
    oklch: "oklch(0.62 0.013 45)",
    hex: "#988B7E",
    role: "Texto terciario, metadatos.",
    group: "Inks",
  },
  {
    name: "mark",
    oklch: "oklch(0.52 0.165 27)",
    hex: "#A42325",
    role: "Acento Dosis. Sólo en momentos puntuales.",
    group: "Marca",
  },
  {
    name: "mark-deep",
    oklch: "oklch(0.40 0.165 25)",
    hex: "#7D0E14",
    role: "Estado pressed / hover.",
    group: "Marca",
  },
  {
    name: "mark-quiet",
    oklch: "oklch(0.78 0.06 30)",
    hex: "#D6A09E",
    role: "Acento sobre fondos oscuros.",
    group: "Marca",
  },
  {
    name: "hairline",
    oklch: "oklch(0.86 0.013 55)",
    hex: "#D9CFC0",
    role: "Divisores y bordes sutiles.",
    group: "Línea",
  },
];

const TYPE_SCALE = [
  {
    cls: "display",
    label: "Display",
    desc: "Hero del sitio. clamp(3rem, 8vw, 7rem)",
    sample: "Abre tu cafetería.",
  },
  {
    cls: "h1",
    label: "H1",
    desc: "Cabecera de sección. clamp(2.25rem, 5vw, 4rem)",
    sample: "Lo que delegas en mí.",
  },
  {
    cls: "h2",
    label: "H2",
    desc: "Sub-cabecera. clamp(1.75rem, 3vw, 2.5rem)",
    sample: "Equipamiento.",
  },
  {
    cls: "h3",
    label: "H3",
    desc: "Título de bloque. clamp(1.25rem, 1.8vw, 1.5rem)",
    sample: "Selección de maquinaria",
  },
];

const VOICE_YES = [
  "Lo aprendí montando Dosis.",
  "Tú firmas con uno solo.",
  "Si dudas si te puedo vender humo, visítame.",
  "La barra es la cocina del café.",
];

const VOICE_NO = [
  "Somos apasionados del café.",
  "Tu socio estratégico de confianza.",
  "Vivimos para servirte la mejor experiencia.",
  "Nuestro equipo experto te acompaña en tu viaje.",
];

const NONOS = [
  {
    title: "Gradient text",
    body:
      "Nada de background-clip:text combinado con un gradiente. El acento se hace con una sola tinta sólida (--color-mark).",
  },
  {
    title: "Glassmorphism",
    body:
      "Sin blurs ni cards de cristal por defecto. Las superficies son opacas y tintadas hacia la marca.",
  },
  {
    title: "Card grids idénticos",
    body:
      "Tres cards iguales con icono + título + texto está prohibido. Si hay paralelismo, lo resolvemos con tipografía y hairlines.",
  },
  {
    title: "Emojis decorativos",
    body:
      "Iconografía lucide-react a stroke 1.5, o SVG inline. Nunca emojis en la UI.",
  },
  {
    title: "Blancos y negros puros",
    body:
      "Ni #FFFFFF ni #000000. Todo se tinta hacia el rojo de marca con chroma 0.005 a 0.018.",
  },
  {
    title: "Animaciones bouncy",
    body:
      "Easing siempre ease-out-quart o ease-out-quint. Sin spring, sin elastic, sin overshoot.",
  },
  {
    title: "Em dashes en micro-copy",
    body:
      "Para texto breve preferimos comas, dos puntos o paréntesis. La raya queda para citas o copy editorial largo.",
  },
];

// ───────────────────────────────────────────────────────────────
// Sub-components
// ───────────────────────────────────────────────────────────────

function Hairline({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div
      className={`h-px w-full ${tone === "dark" ? "bg-paper/15" : "bg-hairline"}`}
    />
  );
}

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.22em] font-medium ${
        tone === "dark" ? "text-paper/60" : "text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

// A re-rendered "maubrews." wordmark in the right contrast for each surface.
function Wordmark({
  size = "display",
  tone,
}: {
  size?: "display" | "large" | "medium";
  tone: "light" | "dark";
}) {
  const sizeCls =
    size === "display"
      ? "text-[clamp(2.5rem,6vw,4.5rem)]"
      : size === "large"
        ? "text-[clamp(2rem,4vw,3rem)]"
        : "text-[1.5rem]";
  return (
    <span
      className={`display ${sizeCls} ${tone === "dark" ? "text-paper" : "text-ink"} leading-none tracking-[-0.02em]`}
    >
      maubrews
      <span className={tone === "dark" ? "text-mark-quiet" : "text-mark"}>
        .
      </span>
    </span>
  );
}

function Monogram({
  size = "display",
  tone,
}: {
  size?: "display" | "large" | "medium";
  tone: "light" | "dark";
}) {
  const sizeCls =
    size === "display"
      ? "text-[clamp(4rem,10vw,7rem)]"
      : size === "large"
        ? "text-[clamp(3rem,7vw,5rem)]"
        : "text-[3rem]";
  return (
    <span
      className={`display ${sizeCls} ${tone === "dark" ? "text-paper" : "text-ink"} leading-none tracking-[-0.02em]`}
      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
    >
      m
      <span className={tone === "dark" ? "text-mark-quiet" : "text-mark"}>
        .
      </span>
    </span>
  );
}

// ───────────────────────────────────────────────────────────────
// Page sections
// ───────────────────────────────────────────────────────────────

function Header() {
  return (
    <section className="border-b border-hairline pb-20 pt-32 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>
                <span className="dot" aria-hidden />
                /branding
              </Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h1 className="display text-[clamp(3rem,8vw,6.5rem)]">
                Sistema
                <br />
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  visual
                </span>
                <span className="text-mark">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-10 max-w-[62ch]">
                Un documento vivo. Si trabajas en algo que tiene que
                parecer Maubrews — una pieza de Instagram, una factura,
                un email transaccional, una carta impresa — esto es la
                referencia.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="mt-16 grid grid-cols-2 gap-x-10 gap-y-4 text-[0.875rem] text-ink-soft sm:grid-cols-3 md:grid-cols-5">
                {[
                  "Logo",
                  "Color",
                  "Tipografía",
                  "Patrones",
                  "Componentes",
                  "Iconografía",
                  "Fotografía",
                  "Voz",
                  "No hacemos",
                ].map((label, idx) => (
                  <li key={label}>
                    <a
                      href={`#${label.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                      className="link-underline"
                    >
                      <span className="text-mark tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>{" "}
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <section
      id="logo"
      className="border-b border-hairline bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="01" label="Logo" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Wordmark, monograma,{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  superficies
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[58ch]">
                El logo se compone en Fraunces directamente. El cuerpo
                en la tinta de la superficie; el punto siempre en rojo
                de marca, con la variante adecuada según el fondo.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Wordmark row */}
        <div className="mt-20">
          <Reveal>
            <Eyebrow>Wordmark · maubrews.</Eyebrow>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-hairline md:grid-cols-3">
            {SURFACES.map((s) => {
              const tone = s.name === "Ink" ? "dark" : "light";
              return (
                <div
                  key={s.name}
                  style={{ backgroundColor: s.bg }}
                  className="flex aspect-[5/4] flex-col items-center justify-center p-8"
                >
                  <Wordmark tone={tone} />
                  <div className="mt-8 flex flex-col items-center gap-1">
                    <span
                      className={`text-[0.6875rem] uppercase tracking-[0.22em] font-medium ${
                        tone === "dark" ? "text-paper/55" : "text-ink-mute"
                      }`}
                    >
                      Sobre {s.name}
                    </span>
                    <span
                      className={`text-[0.75rem] tabular-nums ${
                        tone === "dark" ? "text-paper/40" : "text-ink-mute"
                      }`}
                    >
                      {s.token}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Monogram row */}
        <div className="mt-16">
          <Reveal>
            <Eyebrow>Monograma · m.</Eyebrow>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-hairline md:grid-cols-3">
            {SURFACES.map((s) => {
              const tone = s.name === "Ink" ? "dark" : "light";
              return (
                <div
                  key={s.name}
                  style={{ backgroundColor: s.bg }}
                  className="flex aspect-[5/4] flex-col items-center justify-center p-8"
                >
                  <Monogram tone={tone} />
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <span
                      className={`text-[0.6875rem] uppercase tracking-[0.22em] font-medium ${
                        tone === "dark" ? "text-paper/55" : "text-ink-mute"
                      }`}
                    >
                      Sobre {s.name}
                    </span>
                    <span
                      className={`text-[0.75rem] tabular-nums ${
                        tone === "dark" ? "text-paper/40" : "text-ink-mute"
                      }`}
                    >
                      {s.token}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Favicon spec */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-hairline pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Favicon / App icon</Eyebrow>
            <h3 className="display mt-4 text-[2rem]" style={{ lineHeight: 1 }}>
              <span className="italic">m.</span> como sello
            </h3>
            <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-[1.6] text-ink-soft">
              El monograma vive también como PNG cuadrado para favicons
              y apple-touch-icon, sobre el papel cálido.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-4 gap-6">
              {[128, 96, 64, 32].map((s) => (
                <div key={s} className="flex flex-col items-center gap-3">
                  <div
                    className="overflow-hidden border border-hairline"
                    style={{ width: s, height: s }}
                  >
                    <Image
                      src="/icon.png"
                      alt={`Favicon ${s}px`}
                      width={s}
                      height={s}
                    />
                  </div>
                  <span className="text-[0.75rem] tabular-nums text-ink-mute">
                    {s}px
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-hairline pt-12 md:grid-cols-3">
          {[
            {
              title: "El punto siempre va en marca",
              body:
                "En positivo, --color-mark. En negativo, --color-mark-quiet. Nunca en gris ni en blanco.",
            },
            {
              title: "Margen de respiro",
              body:
                "Mantén la x-height del propio logo como aire libre alrededor. No lo aprietes contra otros elementos.",
            },
            {
              title: "Sin distorsionar",
              body:
                "No estirar, no rotar, no aplicar sombras ni efectos. Ni cambiar la tipografía del cuerpo.",
            },
          ].map((r) => (
            <div key={r.title}>
              <Eyebrow>Regla</Eyebrow>
              <p className="mt-3 font-medium text-ink">{r.title}</p>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-ink-soft">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ColorSection() {
  const groups = ["Neutros", "Inks", "Marca", "Línea"] as const;
  return (
    <section
      id="color"
      className="border-b border-hairline bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="02" label="Color" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Paleta{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  en OKLCH
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[60ch]">
                Diez tokens, tintados todos hacia el rojo de marca con
                chroma muy baja en los neutros. Nada de blancos ni
                negros puros: el papel siempre se siente impreso cerca
                de la marca.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {groups.map((group) => {
            const items = COLORS.filter((c) => c.group === group);
            return (
              <div key={group}>
                <Reveal>
                  <Eyebrow>{group}</Eyebrow>
                </Reveal>
                <div className="mt-5 grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-3">
                  {items.map((c) => {
                    const isDark = c.name.startsWith("ink");
                    const surfaceText = isDark ? "text-paper" : "text-ink";
                    const subText = isDark ? "text-paper/60" : "text-ink-mute";
                    return (
                      <div
                        key={c.name}
                        className="flex flex-col gap-6 bg-paper p-6 md:p-8"
                      >
                        <div
                          className={`flex aspect-[5/3] items-end justify-start p-5 ${surfaceText}`}
                          style={{ backgroundColor: `var(--color-${c.name})` }}
                        >
                          <span className="display text-[clamp(1.5rem,2.4vw,2rem)] leading-none tracking-[-0.02em]">
                            Aa
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <p
                            className="display text-[1.375rem] leading-none"
                            style={{
                              fontVariationSettings:
                                '"opsz" 48, "SOFT" 20',
                            }}
                          >
                            {c.name}
                          </p>
                          <p className="font-mono text-[0.75rem] text-ink">
                            {c.oklch}
                          </p>
                          <p className="font-mono text-[0.75rem] text-ink-mute">
                            ≈ {c.hex}
                          </p>
                          <p className="pt-1 text-[0.8125rem] leading-snug text-ink-soft">
                            {c.role}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TypographySection() {
  return (
    <section
      id="tipografia"
      className="border-b border-hairline bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="03" label="Tipografía" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Dos familias.{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  Sin terceros
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[60ch]">
                Fraunces para titulares y momentos editoriales. Inter
                para todo lo demás: cuerpo, UI, captions, eyebrows. La
                misma Inter que usa Dosis Café — kinship sin
                disonancia.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Fraunces specimen */}
        <div className="mt-24 border-t border-hairline pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow>Display</Eyebrow>
              <p
                className="display mt-4 text-[2rem]"
                style={{ lineHeight: 1 }}
              >
                Fraunces
              </p>
              <p className="mt-3 max-w-[28ch] text-[0.8125rem] leading-snug text-ink-soft">
                Serif variable. Ejes <code>opsz</code> (9 a 144) y{" "}
                <code>SOFT</code> (0 a 100). Peso 380 a 560.
              </p>
              <p className="mt-3 font-mono text-[0.75rem] text-ink-mute">
                var(--font-display)
              </p>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <p
                className="display text-[clamp(4rem,10vw,7rem)] leading-[0.92]"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 50',
                }}
              >
                Aa Bb Cc
              </p>
              <p
                className="display text-[clamp(2rem,4vw,3rem)] italic"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  lineHeight: 1.05,
                }}
              >
                Lo que delegas en mí.
              </p>
              <ul className="space-y-8 border-t border-hairline pt-8">
                {TYPE_SCALE.map((t) => (
                  <li key={t.cls}>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-12 sm:items-baseline">
                      <div className="sm:col-span-3">
                        <p className="eyebrow">{t.label}</p>
                        <p className="mt-1 font-mono text-[0.75rem] text-ink-mute">
                          .{t.cls}
                        </p>
                        <p className="mt-1 text-[0.75rem] text-ink-mute">
                          {t.desc}
                        </p>
                      </div>
                      <div className="sm:col-span-9">
                        <p className={t.cls}>{t.sample}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Inter specimen */}
        <div className="mt-20 border-t border-hairline pt-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow>Body / UI</Eyebrow>
              <p
                className="display mt-4 text-[2rem]"
                style={{ lineHeight: 1 }}
              >
                Inter
              </p>
              <p className="mt-3 max-w-[28ch] text-[0.8125rem] leading-snug text-ink-soft">
                Sans neutra. Pesos 400 y 500. Numerales tabulares vía{" "}
                <code>tabular-nums</code>. Features:{" "}
                <code>ss01</code>, <code>cv11</code>.
              </p>
              <p className="mt-3 font-mono text-[0.75rem] text-ink-mute">
                var(--font-sans)
              </p>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <p
                className="text-[clamp(3rem,7vw,5rem)] leading-[0.95]"
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                Aa Bb Cc 0123
              </p>
              <ul className="space-y-7 border-t border-hairline pt-8">
                <li className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-12 sm:items-baseline">
                  <div className="sm:col-span-3">
                    <p className="eyebrow">Lead</p>
                    <p className="mt-1 font-mono text-[0.75rem] text-ink-mute">
                      .lead
                    </p>
                  </div>
                  <p className="lead sm:col-span-9">
                    Seis frentes donde un consultor con barra propia te
                    ahorra meses de prueba y error caros.
                  </p>
                </li>
                <li className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-12 sm:items-baseline">
                  <div className="sm:col-span-3">
                    <p className="eyebrow">Body</p>
                    <p className="mt-1 font-mono text-[0.75rem] text-ink-mute">
                      base · 1rem / 1.625
                    </p>
                  </div>
                  <p className="sm:col-span-9 text-[1rem] leading-[1.625]">
                    Soy Mauricio De Luca. Fundé Dosis Café en Chamberí
                    hace casi cuatro años y desde entonces hemos
                    crecido hasta tostar nuestro propio café.
                  </p>
                </li>
                <li className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-12 sm:items-baseline">
                  <div className="sm:col-span-3">
                    <p className="eyebrow">Small</p>
                    <p className="mt-1 font-mono text-[0.75rem] text-ink-mute">
                      0.875rem
                    </p>
                  </div>
                  <p className="sm:col-span-9 text-[0.875rem] text-ink-soft">
                    Recibido el 17 de mayo de 2026, 22:30 (hora de
                    Madrid).
                  </p>
                </li>
                <li className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-12 sm:items-baseline">
                  <div className="sm:col-span-3">
                    <p className="eyebrow">Eyebrow</p>
                    <p className="mt-1 font-mono text-[0.75rem] text-ink-mute">
                      .eyebrow
                    </p>
                  </div>
                  <p className="sm:col-span-9 eyebrow">
                    Maubrews · Consultoría
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PatternsSection() {
  return (
    <section
      id="patrones"
      className="border-b border-hairline bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="04" label="Patrones" tone="dark" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-paper text-[clamp(2rem,5vw,4rem)]">
                El{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  drumbeat
                </span>{" "}
                editorial.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[60ch] text-paper/75">
                El section-index, el eyebrow con punto rojo y los
                hairlines son los tres mecanismos que dan ritmo a la
                página. Repetidos sin esfuerzo, comunican que esto
                tiene autor.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-paper/15 md:grid-cols-2">
          <div className="flex flex-col gap-6 bg-paper p-10">
            <Eyebrow>Section index · light</Eyebrow>
            <div className="py-6">
              <SectionIndex num="02" label="Servicios" />
            </div>
            <p className="text-[0.8125rem] leading-snug text-ink-soft">
              <span className="font-mono">{`<SectionIndex num="02" label="Servicios" />`}</span>
            </p>
          </div>
          <div className="flex flex-col gap-6 bg-ink p-10">
            <Eyebrow tone="dark">Section index · dark</Eyebrow>
            <div className="py-6">
              <SectionIndex num="04" label="Productos" tone="dark" />
            </div>
            <p className="text-[0.8125rem] leading-snug text-paper/60">
              <span className="font-mono">{`<SectionIndex num="04" label="Productos" tone="dark" />`}</span>
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-paper/15 md:grid-cols-2">
          <div className="flex flex-col gap-6 bg-paper p-10">
            <Eyebrow>Eyebrow con dot</Eyebrow>
            <div className="py-4">
              <span className="eyebrow inline-flex items-center gap-3">
                <span className="dot" aria-hidden />
                Consultoría de café de especialidad
              </span>
            </div>
            <p className="text-[0.8125rem] leading-snug text-ink-soft">
              Punto en <span className="font-mono">--color-mark</span>{" "}
              + label en <span className="font-mono">.eyebrow</span>.
              Marca el primer aliento del hero.
            </p>
          </div>
          <div className="flex flex-col gap-6 bg-paper-deep p-10">
            <Eyebrow>Hairline</Eyebrow>
            <div className="py-4">
              <div className="h-px w-full bg-hairline" />
            </div>
            <p className="text-[0.8125rem] leading-snug text-ink-soft">
              <span className="font-mono">--color-hairline</span>.
              Divisores entre items, no contornos rodeando cards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentsSection() {
  return (
    <section
      id="componentes"
      className="border-b border-hairline bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="05" label="Componentes" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Botones, enlaces,{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  formularios
                </span>
                .
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px border border-hairline md:grid-cols-2">
          {/* Primary button */}
          <div className="flex flex-col gap-6 bg-paper p-10">
            <Eyebrow>Primary CTA · light</Eyebrow>
            <div className="py-4">
              <a href="#contacto" className="btn-primary">
                Hablemos de tu proyecto
                <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-mono text-[0.75rem] text-ink-mute">
              .btn-primary · hover → --color-mark-deep
            </p>
          </div>

          {/* Link underline */}
          <div className="flex flex-col gap-6 bg-paper p-10">
            <Eyebrow>Link · underline reveal</Eyebrow>
            <div className="py-4">
              <a href="#" className="link-underline">
                Visitar dosiscafe.es
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-mono text-[0.75rem] text-ink-mute">
              .link-underline · 350ms ease-out-quart
            </p>
          </div>

          {/* Dark link */}
          <div className="flex flex-col gap-6 bg-ink p-10 text-paper">
            <Eyebrow tone="dark">Link · underline reveal · dark</Eyebrow>
            <div className="py-4">
              <a href="#" className="link-underline-dark">
                Solicitar muestra
                <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-mono text-[0.75rem] text-paper/55">
              .link-underline-dark
            </p>
          </div>

          {/* Dot */}
          <div className="flex flex-col gap-6 bg-paper-deep p-10">
            <Eyebrow>Dot · brand mark</Eyebrow>
            <div className="flex items-center gap-3 py-4">
              <span className="dot" aria-hidden />
              <span className="dot" aria-hidden style={{ width: 10, height: 10 }} />
              <span className="dot" aria-hidden style={{ width: 14, height: 14 }} />
            </div>
            <p className="font-mono text-[0.75rem] text-ink-mute">
              .dot · 6px default
            </p>
          </div>
        </div>

        {/* Form field */}
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-hairline pt-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow>Form field</Eyebrow>
            <p className="mt-3 max-w-[28ch] text-[0.8125rem] leading-snug text-ink-soft">
              Sin caja. Sólo línea base. El foco mueve el borde a{" "}
              <span className="font-mono">--color-ink</span>, no a la
              marca (demasiado ruidoso para un input).
            </p>
          </div>
          <div className="lg:col-span-9 max-w-[480px]">
            <label htmlFor="demo-name" className="eyebrow mb-3 block">
              Nombre <span className="text-mark">*</span>
            </label>
            <input
              id="demo-name"
              type="text"
              className="field"
              placeholder="María"
              readOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IconographySection() {
  const lucideIcons = [
    { Icon: ArrowRight, name: "ArrowRight" },
    { Icon: ArrowUpRight, name: "ArrowUpRight" },
    { Icon: ArrowDown, name: "ArrowDown" },
    { Icon: Mail, name: "Mail" },
    { Icon: MapPin, name: "MapPin" },
    { Icon: Menu, name: "Menu" },
    { Icon: X, name: "X" },
    { Icon: Check, name: "Check" },
  ];

  const customIcons = [
    { Icon: InstagramIcon, name: "InstagramIcon" },
    { Icon: YouTubeIcon, name: "YouTubeIcon" },
    { Icon: LinkedInIcon, name: "LinkedInIcon" },
  ];

  return (
    <section
      id="iconografia"
      className="border-b border-hairline bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="06" label="Iconografía" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[20ch] text-[clamp(2rem,5vw,4rem)]">
                Línea fina,{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  stroke 1.5
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[58ch]">
                lucide-react para todo lo neutro, SVG inline en{" "}
                <span className="font-mono">icons.tsx</span> para marca
                (lucide v1 ya no trae iconos de redes). Stroke uniforme
                a 1.5px, sin rellenos sólidos.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Eyebrow>lucide-react</Eyebrow>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {lucideIcons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 border border-hairline bg-paper p-6"
              >
                <Icon size={24} strokeWidth={1.5} className="text-ink" />
                <span className="font-mono text-[0.6875rem] text-ink-mute">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Eyebrow>SVG inline · brand</Eyebrow>
          <div className="mt-5 grid grid-cols-3 gap-4 sm:max-w-[600px]">
            {customIcons.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-3 border border-hairline bg-paper p-6"
              >
                <Icon size={24} strokeWidth={1.5} className="text-ink" />
                <span className="font-mono text-[0.6875rem] text-ink-mute">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotographySection() {
  return (
    <section
      id="fotografia"
      className="border-b border-hairline bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="07" label="Fotografía" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-[clamp(2rem,5vw,4rem)]">
                Cálida,{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  honesta
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[58ch]">
                Imágenes reales del local y de Maubrews. No usamos
                stock de baristas genéricos ni de "manos sostienen
                taza". Si la foto puede aparecer en cualquier otra web,
                no es nuestra.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                <Image
                  src="/images/maubrews-portrait.jpg"
                  alt="Mauricio De Luca en Dosis Café"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <p className="text-[0.9375rem] text-ink">
                  Portrait · Mauricio
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.22em] text-ink-mute">
                  Hero · About
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06}>
            <figure>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                <Image
                  src="/images/dosis-interior.jpg"
                  alt="Interior de Dosis Café"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <p className="text-[0.9375rem] text-ink">
                  Interior · Dosis Chamberí
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.22em] text-ink-mute">
                  Dosis section
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-hairline pt-12 md:grid-cols-3">
          {[
            {
              title: "Luz natural",
              body:
                "Día, ventana grande, sin flash. La cafetería tiene su propia paleta cálida; respétala.",
            },
            {
              title: "Retratos en perfil o tres cuartos",
              body:
                "Evitamos la mirada directa a cámara. La foto debe sentirse cogida en mitad del oficio, no posada.",
            },
            {
              title: "Detalle sobre escenografía",
              body:
                "Mejor un primer plano de la jarra que un plano abierto del local entero. Lo específico vende.",
            },
          ].map((r) => (
            <div key={r.title}>
              <Eyebrow>Guía</Eyebrow>
              <p className="mt-3 font-medium text-ink">{r.title}</p>
              <p className="mt-2 text-[0.875rem] leading-[1.55] text-ink-soft">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VoiceSection() {
  return (
    <section
      id="voz"
      className="border-b border-hairline bg-paper-deep py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="08" label="Voz" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[20ch] text-[clamp(2rem,5vw,4rem)]">
                Cercano,{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  no corporativo
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[60ch]">
                Tuteamos. Frases cortas. Hechos concretos en lugar de
                adjetivos. La confianza viene de haber estado en la
                barra, no de decirlo en bonito.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>
              <span className="dot" aria-hidden />
              Sí dice
            </Eyebrow>
            <ul className="mt-6 space-y-5">
              {VOICE_YES.map((v) => (
                <li
                  key={v}
                  className="display text-[clamp(1.25rem,2vw,1.625rem)] italic text-ink"
                  style={{
                    fontVariationSettings: '"opsz" 48, "SOFT" 80',
                    lineHeight: 1.25,
                  }}
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>No dice</Eyebrow>
            <ul className="mt-6 space-y-5">
              {VOICE_NO.map((v) => (
                <li
                  key={v}
                  className="text-[clamp(1.125rem,1.6vw,1.375rem)] leading-snug text-ink-mute line-through"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-hairline pt-12 md:grid-cols-4">
          {[
            "Tutea sin servilismo",
            "Frases cortas, párrafos cortos",
            "Hechos antes que adjetivos",
            "Cero jerga de hospitalidad",
          ].map((p) => (
            <p
              key={p}
              className="text-[0.9375rem] leading-snug text-ink"
            >
              <span className="text-mark mr-2">·</span>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoNosSection() {
  return (
    <section
      id="no-hacemos"
      className="bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="09" label="No hacemos" tone="dark" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[18ch] text-paper text-[clamp(2rem,5vw,4rem)]">
                Lo que{" "}
                <span
                  className="italic"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  no
                </span>{" "}
                hacemos.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[60ch] text-paper/75">
                Estos son los reflejos del diseño AI-genérico. Si te
                descubres a punto de hacer uno, reescribe el elemento
                con otra estructura.
              </p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 border-t border-paper/15">
          {NONOS.map((n, idx) => (
            <Reveal as="li" key={n.title} delay={Math.min(idx * 0.04, 0.2)}>
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 border-b border-paper/15 py-8 sm:grid-cols-12 sm:items-baseline">
                <div className="sm:col-span-1">
                  <span
                    className="text-mark-quiet tabular-nums"
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                    }}
                  >
                    / {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3
                    className="display text-[clamp(1.5rem,2.4vw,2rem)] text-paper"
                    style={{
                      fontVariationSettings: '"opsz" 96, "SOFT" 40',
                      lineHeight: 1.05,
                    }}
                  >
                    {n.title}
                  </h3>
                </div>
                <p className="sm:col-span-7 text-[0.9375rem] leading-[1.6] text-paper/70">
                  {n.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────

export default function BrandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <LogoSection />
        <ColorSection />
        <TypographySection />
        <PatternsSection />
        <ComponentsSection />
        <IconographySection />
        <PhotographySection />
        <VoiceSection />
        <NoNosSection />
      </main>
      <Footer />
    </>
  );
}
