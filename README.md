# Maubrews — Sitio web

Sitio editorial de **Mauricio De Luca (Maubrews)**, consultor de café de especialidad en Madrid. Acompaña a quien quiere abrir o profesionalizar una cafetería de especialidad en España.

## Stack

- **Next.js 16.2.6** (App Router, Turbopack)
- **React 19.2**
- **TypeScript** estricto
- **Tailwind CSS v4** con `@theme` (sin `tailwind.config.ts`)
- **Framer Motion** para microinteracciones
- **lucide-react** para iconografía línea fina
- `next/font` con **Fraunces** (display, variable) e **Inter** (texto)

Sin backend dedicado: la ruta `/api/contact` es un placeholder que valida y registra el payload en consola. Ver TODOs más abajo.

## Estructura

```
app/
  api/contact/route.ts     Route handler stub (valida + logea)
  components/
    Nav.tsx                Sticky con scroll state + nav móvil
    Hero.tsx               Headline + foto asimétrica + CTA
    About.tsx              Bio + cifras
    Services.tsx           Seis servicios sin grid de cards
    Process.tsx            Cuatro pasos
    Partnerships.tsx       Alpro + Slayer como credenciales tipográficas
    Dosis.tsx              Sección laboratorio + dirección + link externo
    Training.tsx           Cuatro formatos de formación
    ContactForm.tsx        Formulario controlado, fetch a /api/contact
    Contact.tsx            Section wrapper + columna meta
    Footer.tsx
    Reveal.tsx             Wrapper de framer-motion para reveal on-scroll
    SectionIndex.tsx       Componente "01 / SOBRE"
    icons.tsx              SVGs inline (Instagram, no está en lucide v1)
  layout.tsx               Metadata, OG, Schema.org JSON-LD, fuentes
  globals.css              Design tokens en @theme + utilidades componente
  page.tsx                 Composición vertical
PRODUCT.md                 Contexto de marca, voz, anti-referencias
DESIGN.md                  Sistema de diseño (paleta OKLCH, tipografía, motion)
```

## Cómo correr

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de producción
npm run lint
```

## Decisiones de diseño

### Paleta — Committed, no minimal

La paleta de partida del prompt era el reflejo *third wave* clásico (crema + marrón). Al inspeccionar el CSS de `dosiscafe.es` aparece otra realidad: la marca hermana se construye sobre un **rojo carmesí profundo** `rgb(164, 35, 37)`, no marrón. La paleta del sitio adopta ese rojo (`--mark`) como acento único cargado de identidad, sobre **neutros cálidos en OKLCH** ligeramente tintados hacia el rojo (chroma 0.005 a 0.018) para que el "papel" se sienta impreso cerca de la marca, no genérico.

| Token | OKLCH | Aprox. hex | Uso |
|---|---|---|---|
| `--color-paper` | `oklch(0.965 0.008 60)` | `#F4EFE7` | Fondo de página |
| `--color-paper-deep` | `oklch(0.94 0.012 55)` | `#EBE4D7` | Fondo alterno (Proceso, Contacto) |
| `--color-ink` | `oklch(0.185 0.018 30)` | `#1E1612` | Texto principal |
| `--color-ink-soft` | `oklch(0.42 0.018 35)` | `#594C42` | Texto secundario |
| `--color-mark` | `oklch(0.52 0.165 27)` | `#A42325` | Acento Dosis |
| `--color-hairline` | `oklch(0.86 0.013 55)` | `#D9CFC0` | Divisores |

(Ver `DESIGN.md` para la paleta completa.)

### Tipografía

- **Fraunces** (display) con `opsz` y `SOFT`, lo suficientemente moderna para no oler a *blog de café tercera ola* pero con peso editorial.
- **Inter** (body, UI), la misma familia que Dosis Café: kinship sin disonancia.

### Layout

- Grid de 12 columnas con spans intencionalmente asimétricos. Cada sección rompe el ritmo de la anterior.
- Sin grid de cards en servicios. La sección de servicios es una **lista numerada con hairlines**, editorial, no SaaS.
- *Section index* repetido como "drumbeat" (`01 / SOBRE`, `02 / SERVICIOS`...), el único elemento consistentemente rojo de la página.

### Motion

- `Reveal` wrapper único: 24px de translate + opacity, easing `ease-out-quart`, 750 ms.
- `prefers-reduced-motion`: respeta y degrada a opacity solamente.
- Sin spring, sin bounce, sin glassmorphism.

### Theme

Light, no dark. La escena que lo decide: un restaurador de 45 años evaluando una asesoría de 5k€ desde su MacBook en su oficina. Necesita leer, no impresionarse con oscuridad.

## TODOs por resolver

Marcados como `// TODO` en el código. Resumen:

- **Fotografía real.** Hero usa una foto stock de Unsplash (`photo-1511920170033-f8396924c348`); Dosis usa `photo-1554118811-1e0d58224f24`. Reemplazar con shots reales de Maubrews y Dosis cuando estén disponibles.
- **Imagen Open Graph.** Falta `/public/og.jpg` (1200×630). Generar una con tipografía de marca.
- **Logos oficiales.** Alpro y Slayer aparecen como tratamiento tipográfico; cuando se reciban los logos vectoriales, sustituir en `Partnerships.tsx`.
- **Cifras de About.** `4 años / 120+ proyectos / 600+ baristas` son placeholders editoriales. Confirmar con Maubrews antes de publicar.
- **Teléfono y emails.** `hola@maubrews.com` y el `+34 6XX XXX XXX` son placeholder.
- **Instagram personal de Maubrews.** El handle `@maubrews` está como placeholder visual; confirmar.
- **Backend del formulario.** `/api/contact` valida y logea. Conectar a Resend, Formspree, Plunk u otro proveedor antes de lanzar.
- **Páginas legales.** Aviso legal y política de privacidad están como enlaces inertes en el footer.
- **Favicon.** Se mantiene el de create-next-app; reemplazar.

## Bibliografía interna

- `PRODUCT.md`, quién es el visitante, qué tono usamos, qué evitamos.
- `DESIGN.md`, sistema completo: paleta OKLCH, tipografía, layout, motion, bans observados.
- `AGENTS.md`, recordatorio sobre Next.js (esta versión tiene breaking changes vs lo que cualquier modelo cree saber).

## Notas técnicas

- **Server-first.** Todas las secciones son server components excepto: `Nav` (scroll state), `Reveal` (motion + intersection observer) y `ContactForm` (estado de formulario). El árbol JSX se renderiza estático y las islas client se hidratan donde aportan valor.
- **Imágenes.** `images.remotePatterns` autorizado para `images.unsplash.com` en `next.config.ts`. Las imágenes locales finales deberían ir a `/public/` y servirse sin pasar por Unsplash.
- **SEO.** Metadata completa, Open Graph, Twitter Card, JSON-LD con grafo `Person` + `LocalBusiness` (Dosis) + `ProfessionalService`. `lang="es"`. `metadataBase` apunta a `https://maubrews.com`; cambiar al dominio definitivo.

## Antes de publicar

1. Resolver los TODOs listados arriba.
2. Confirmar copy con Maubrews (especialmente cifras de About y descripciones de servicios).
3. Generar OG image.
4. Conectar backend de formulario y probar end-to-end.
5. `npm run build` y desplegar.
