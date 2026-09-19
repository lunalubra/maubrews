import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { CASES, getCase, getNextCase } from "../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const title = `${c.name} · Caso de estudio`;
  return {
    title,
    description: c.tagline,
    alternates: { canonical: `/casos/${c.slug}` },
    openGraph: {
      type: "article",
      title: `${c.name} · Maubrews`,
      description: c.tagline,
      url: `/casos/${c.slug}`,
      images: [{ url: c.cover.src, alt: c.cover.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.name} · Maubrews`,
      description: c.tagline,
      images: [c.cover.src],
    },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-2">
      <span className="dot" aria-hidden />
      {children}
    </p>
  );
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const next = getNextCase(c.slug);
  const visuals = c.gallery.length > 0 || c.video;

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <Reveal>
              <Link
                href="/#casos"
                className="link-underline text-[0.8125rem] text-ink-soft"
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                Todos los casos
              </Link>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Reveal>
                  <span className="section-index">
                    <span className="num">Caso / {c.index}</span>
                  </span>
                  <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                    {c.kicker}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-9">
                <Reveal>
                  <h1
                    className="display text-[clamp(3rem,9vw,7.5rem)]"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      lineHeight: 0.92,
                    }}
                  >
                    {c.name}
                    <span className="text-mark">.</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.06}>
                  <p
                    className="h2 mt-8 max-w-[26ch] italic text-ink-soft text-[clamp(1.5rem,2.6vw,2.25rem)]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 100' }}
                  >
                    {c.tagline}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="lead mt-10 max-w-[64ch]">{c.summary}</p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Cover + ficha */}
        <section className="pb-24 sm:pb-32">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-14 px-6 sm:px-10 lg:grid-cols-12 lg:px-14">
            <div className="lg:col-span-7">
              <Reveal y={36}>
                <figure className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={c.cover.src}
                    alt={c.cover.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover"
                  />
                </figure>
                <figcaption className="mt-4 flex items-center gap-3 text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute">
                  <span className="hairline inline-block h-px w-8" />
                  {c.name} · {c.kicker.split(" · ")[0]}
                </figcaption>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
              <Reveal delay={0.08}>
                <Label>Ficha del proyecto</Label>
                <dl className="mt-6 border-t border-ink/25">
                  {c.facts.map((f) => (
                    <div
                      key={f.label}
                      className="grid grid-cols-1 gap-y-1 border-b border-hairline py-4 sm:grid-cols-[9rem_1fr] sm:gap-x-6"
                    >
                      <dt className="text-[0.6875rem] uppercase tracking-[0.18em] text-ink-mute sm:pt-1">
                        {f.label}
                      </dt>
                      <dd className="text-[0.9375rem] leading-[1.55] text-ink">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Punto de partida + reto */}
        <section className="border-t border-hairline bg-paper-deep py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <Label>El punto de partida</Label>
                  <p className="mt-6 max-w-[48ch] text-[1.125rem] leading-[1.7] text-ink">
                    {c.startingPoint}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={0.08}>
                  <Label>El reto</Label>
                  <p className="mt-6 max-w-[48ch] text-[1.125rem] leading-[1.7] text-ink">
                    {c.challenge}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Acompañamiento */}
        <section className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Reveal>
                  <Label>El acompañamiento</Label>
                </Reveal>
              </div>
              <div className="lg:col-span-9">
                <Reveal>
                  <h2 className="h1 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
                    {c.phases.length} fases,
                    <br />
                    <span
                      className="italic"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      una sola conversación.
                    </span>
                  </h2>
                </Reveal>
              </div>
            </div>

            <ol className="mt-20 border-t border-ink/25 lg:mt-24">
              {c.phases.map((phase, i) => (
                <Reveal key={phase.title} as="li" delay={Math.min(i * 0.04, 0.16)}>
                  <div className="grid grid-cols-1 gap-x-10 gap-y-6 border-b border-hairline py-10 sm:py-12 lg:grid-cols-12 lg:py-14">
                    <header className="lg:col-span-5">
                      <span
                        className="text-mark font-medium tabular-nums tracking-[0.18em]"
                        style={{ fontSize: "0.8125rem" }}
                      >
                        Fase / {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="h2 mt-4 max-w-[18ch] text-[clamp(1.5rem,2.6vw,2.25rem)]">
                        {phase.title}
                      </h3>
                    </header>
                    <div className="lg:col-span-7 lg:pt-2">
                      {phase.intro && (
                        <p className="max-w-[58ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
                          {phase.intro}
                        </p>
                      )}
                      {phase.items && (
                        <ul
                          className={[
                            "max-w-[58ch]",
                            phase.intro ? "mt-6" : "",
                          ].join(" ")}
                        >
                          {phase.items.map((item, j) => (
                            <li
                              key={item}
                              className={[
                                "flex gap-4 py-3 text-[1.0625rem] leading-[1.6] text-ink",
                                j > 0 ? "border-t border-hairline" : "",
                              ].join(" ")}
                            >
                              <span
                                aria-hidden
                                className="mt-3 inline-block h-px w-5 shrink-0 bg-ink/40"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery / video */}
        {visuals && (
          <section className="pb-24 sm:pb-32">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <div
                className={[
                  "grid grid-cols-1 gap-6 sm:gap-8",
                  c.gallery.length + (c.video ? 1 : 0) >= 3
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-12",
                ].join(" ")}
              >
                {c.video && (
                  <Reveal className="lg:col-span-5">
                    <figure className="relative w-full overflow-hidden bg-paper-deep" style={{ aspectRatio: `${c.video.width} / ${c.video.height}` }}>
                      <video
                        src={c.video.src}
                        poster={c.video.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-label={`Vídeo del interior de ${c.name}`}
                      />
                    </figure>
                  </Reveal>
                )}
                {c.gallery.map((img, i) => (
                  <Reveal key={img.src} delay={i * 0.05}>
                    <figure className="relative aspect-[4/5] w-full overflow-hidden bg-paper-deep">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                        className="object-cover"
                      />
                    </figure>
                  </Reveal>
                ))}
                {c.video && c.gallery.length === 0 && (
                  <Reveal delay={0.08} className="flex flex-col justify-end lg:col-span-6 lg:col-start-7">
                    <p className="max-w-[40ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
                      La cafetería en marcha: barra, brunch y meriendas, tal
                      como abrió en julio de 2024.
                    </p>
                  </Reveal>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Resultado */}
        <section className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Reveal>
                  <p className="flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-paper/70">
                    <span
                      aria-hidden
                      className="inline-block h-1.5 w-1.5 rounded-full bg-mark-quiet"
                    />
                    El resultado
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-9">
                <Reveal>
                  <p
                    className="h2 max-w-[38ch] text-paper text-[clamp(1.5rem,2.8vw,2.5rem)]"
                    style={{ lineHeight: 1.2 }}
                  >
                    {c.result}
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.08}>
              <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-paper/20 pt-12 md:grid-cols-4 lg:mt-24">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse">
                    <dt className="mt-4 max-w-[16ch] text-[0.75rem] uppercase tracking-[0.18em] text-paper/60">
                      {m.label}
                    </dt>
                    <dd
                      className="display text-[clamp(2.25rem,4.5vw,4rem)] text-paper tabular-nums"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 30',
                        lineHeight: 0.95,
                      }}
                    >
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Testimonial (only when available) */}
        {c.testimonial && (
          <section className="border-t border-hairline py-24 sm:py-32">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
              <Reveal>
                <blockquote className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
                  <div className="lg:col-span-3">
                    <Label>En palabras de {c.testimonial.author}</Label>
                  </div>
                  <p
                    className="h2 italic text-ink lg:col-span-8 text-[clamp(1.5rem,2.8vw,2.5rem)]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 100' }}
                  >
                    “{c.testimonial.quote}”
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </section>
        )}

        {/* Lo que aporta Maubrews + servicios */}
        <section className="border-t border-hairline py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal>
                  <Label>Lo que aporta Maubrews</Label>
                  <p className="mt-6 max-w-[52ch] text-[1.125rem] leading-[1.7] text-ink">
                    {c.contribution}
                  </p>
                </Reveal>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Reveal delay={0.08}>
                  <Label>Servicios aplicados</Label>
                  <ul className="mt-6 border-t border-ink/25">
                    {c.services.map((s) => (
                      <li
                        key={s}
                        className="border-b border-hairline py-3 text-[0.9375rem] text-ink"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA + siguiente caso */}
        <section className="border-t border-hairline bg-paper-deep py-24 sm:py-32">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <h2 className="h1 max-w-[16ch] text-[clamp(2rem,5vw,4rem)]">
                    ¿Tu proyecto es{" "}
                    <span
                      className="italic"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                    >
                      el siguiente
                    </span>
                    ?
                  </h2>
                  <p className="lead mt-6 max-w-[46ch]">
                    Cuéntame dónde estás: idea, local o cafetería abierta.
                    Respondo personalmente en menos de 48 horas.
                  </p>
                  <Link href="/#contacto" className="btn-primary mt-10">
                    Hablemos de tu proyecto
                    <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
                  </Link>
                </Reveal>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <Reveal delay={0.08}>
                  <p className="eyebrow">Siguiente caso</p>
                  <Link
                    href={`/casos/${next.slug}`}
                    className="group mt-6 block"
                  >
                    <figure className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
                      <Image
                        src={next.cover.src}
                        alt={next.cover.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 440px"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      />
                    </figure>
                    <p
                      className="display mt-5 text-[clamp(2rem,3.5vw,3rem)]"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 60',
                        lineHeight: 1,
                      }}
                    >
                      {next.name}
                      <span className="text-mark">.</span>
                    </p>
                    <span className="link-underline mt-3 text-[0.9375rem]">
                      Leer el caso
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
