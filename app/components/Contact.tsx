import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";
import { ContactForm } from "./ContactForm";
import { Mail } from "lucide-react";
import { InstagramIcon, YouTubeIcon, LinkedInIcon } from "./icons";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative border-t border-hairline bg-paper py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionIndex num="06" label="Contacto" />
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="h1 max-w-[14ch] text-[clamp(2.25rem,5.5vw,4.5rem)]">
                Cuéntame tu proyecto.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="lead mt-6 max-w-[50ch]">
                Respondo personalmente en menos de 48 horas. Si solo
                quieres pasarte por Dosis a tomar un café y verlo en
                vivo, también funciona.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-14 gap-y-16 lg:grid-cols-12">
          <Reveal delay={0.05} className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <aside className="space-y-10 border-t border-ink/20 pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <p className="eyebrow">Directo</p>
                <ul className="mt-4 space-y-3 text-[1rem] text-ink">
                  <li>
                    <a
                      href="mailto:gestiondosiscafe@gmail.com"
                      className="link-underline"
                    >
                      <Mail size={14} strokeWidth={1.5} />
                      gestiondosiscafe@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+34674769601"
                      className="link-underline"
                    >
                      +34 674 769 601
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="eyebrow">Redes</p>
                <ul className="mt-4 space-y-3 text-[1rem]">
                  <li>
                    <a
                      href="https://instagram.com/maubrews"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      <InstagramIcon size={14} strokeWidth={1.5} />
                      @maubrews
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/dosiscafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      <InstagramIcon size={14} strokeWidth={1.5} />
                      @dosiscafe
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@maubrewscoffeechannel3196"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      <YouTubeIcon size={14} strokeWidth={1.5} />
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mauricio-de-luca-kowalski/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      <LinkedInIcon size={14} strokeWidth={1.5} />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="eyebrow">Encuéntrame</p>
                <p className="mt-4 text-[1rem] leading-snug text-ink">
                  Dosis Café
                  <br />
                  Calle Gonzalo de Córdoba, 3
                  <br />
                  28010 Madrid
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
