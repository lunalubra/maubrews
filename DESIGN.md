# Maubrews — Design System

## Color strategy

**Committed.** One signature color (the Dosis crimson) carries identity at a few high-load moments — wordmark, eyebrow rule, key CTA, the Dosis section, accent marks beside section numbers. Everywhere else: warm tinted neutrals.

All values in OKLCH, tinted toward the warm-red brand hue at low chroma (0.005–0.015) so the neutrals feel like paper printed near the brand, not generic greys.

### Palette

| Token | OKLCH | Approx hex | Role |
|---|---|---|---|
| `--paper` | `oklch(0.965 0.008 60)` | `#F4EFE7` | Page background. Warm cream paper. |
| `--paper-deep` | `oklch(0.94 0.012 55)` | `#EBE4D7` | Alt section background (Dosis, Partnerships). |
| `--surface` | `oklch(0.985 0.004 70)` | `#FCFAF6` | Slightly elevated panels, form fields. |
| `--ink` | `oklch(0.185 0.018 30)` | `#1E1612` | Body text, headlines. Warm near-black. |
| `--ink-soft` | `oklch(0.42 0.018 35)` | `#594C42` | Secondary text, captions. |
| `--ink-mute` | `oklch(0.62 0.013 45)` | `#988B7E` | Tertiary text, metadata. |
| `--hairline` | `oklch(0.86 0.013 55)` | `#D9CFC0` | Dividers, borders. |
| `--mark` | `oklch(0.52 0.165 27)` | `#A42325` | Dosis crimson. Signature accent. |
| `--mark-deep` | `oklch(0.40 0.165 25)` | `#7D0E14` | Pressed / hover state for mark. |
| `--mark-quiet` | `oklch(0.78 0.06 30)` | `#D6A09E` | Soft red wash for backgrounds. |

The crimson `--mark` is identical in chroma/lightness to Dosis Café's primary (`rgb(164, 35, 37)`). This is intentional brand kinship.

## Typography

Two families. No third unless a specific moment demands it.

- **Display: Fraunces.** Variable serif with deliberate optical sizing, soft contrast, slightly oddball personality (the curves are too soft for a Caslon, too sharp for a Garamond). Used for H1–H3 and a few hero numbers.
- **Body: Inter.** Same family Dosis Café uses, preserves kinship. All body, UI, captions, labels.

### Scale

Mobile-first, fluid. Type ramps via `clamp()`:

| Step | Use | Mobile → Desktop |
|---|---|---|
| `text-display` | Hero H1 | clamp(3rem, 8vw, 7rem) |
| `text-h1` | Section openers | clamp(2.25rem, 5vw, 4rem) |
| `text-h2` | Sub-sections | clamp(1.75rem, 3vw, 2.5rem) |
| `text-h3` | Service titles | clamp(1.25rem, 1.8vw, 1.5rem) |
| `text-lead` | Hero subtitle, section intros | clamp(1.125rem, 1.4vw, 1.375rem) |
| `text-body` | Default | 1rem / 1.625rem line |
| `text-small` | Captions, footers | 0.875rem |
| `text-eyebrow` | Section index, eyebrow caps | 0.75rem, tracked +0.18em, uppercase |

Hierarchy through scale + weight: Fraunces 380 / 480 / 560, Inter 400 / 500.

## Layout

Page-level grid is **not** a 12-column reflex. We use a 6-column grid with intentional spans, and we vary section widths:

- Hero: full width with content on a 5-column block, image floating in the 6th column with vertical negative space above and below.
- About: 4-column body + 2-column data column (the "numbers").
- Services: 6 entries laid in alternating 5/1 — 1/5 spans, dividers between, no boxed cards.
- Process: 6-column with each step a row of 1 (number) + 5 (text).
- Partnerships: full-width typographic banner.
- Dosis: 3+3 asymmetric — image left full-bleed, copy right with deliberate top offset.
- Training: 6-column condensed catalog list.
- Contact: 4-column form + 2-column meta.

Vertical rhythm:
- Section padding-block on desktop: `clamp(96px, 12vw, 200px)`. Variable — Hero gets more (`140px+`), Partnerships gets less (`80px`).
- Inside a section, items breathe at 24px / 40px / 64px depending on density.

## Motion

- Engine: framer-motion, but used surgically. No global wrapper.
- Ease: `[0.22, 1, 0.36, 1]` (ease-out-quart). All durations 600–900ms.
- Default reveal: 24px upward translate + 0→1 opacity. Triggered once on `whileInView` with `margin: -10%`.
- Nav glass on scroll: opacity-fade of background only, no blur (avoid glassmorphism reflex).
- Hover on links: animated underline grow from left, 200ms.
- No bounce. No spring. No stagger longer than 60ms between items.

`prefers-reduced-motion`: respect via framer's built-in `useReducedMotion`. Fall back to opacity-only.

## Components and patterns

### Section opener pattern (reused 6 times)
```
[01] / SOBRE                              <-- index, tracked caps, in --mark color
Un barista que se sienta                  <-- Fraunces, large
en tu lado de la mesa.
```
The index numeral is the only consistently-red mark on the page. It's the navigational drumbeat.

### CTA
- Primary: filled `--ink` bg, `--paper` text, no rounded corners (2px max), Inter 500, generous padding, arrow icon on right with 4px translate on hover.
- Secondary: text-only with underline, `--ink`, underline reveals from left on hover.

### Form
- No box. Inputs are bottom-bordered only (`1px solid --hairline`), focus state turns border `--ink` (not red — red is too loud for an input state).
- Labels float above, eyebrow-style.
- Submit is the primary CTA pattern.

### Trust badges (Alpro / Slayer)
- Not logos in boxes. Typographic treatment: role label small caps + brand name in Fraunces. Logos when files arrive (placeholder until then).

## Bans observed

- No card-grid services. Services use a numbered list with dividers and asymmetric type.
- No gradient text. The mark is solid `--mark`.
- No glassmorphism nav. The nav fades a solid `--paper` background in on scroll.
- No emoji. Icons from lucide-react at 1px stroke when needed (which is rarely).
- No `#000` / `#fff`. Everything tinted.

## Imagery

All placeholder photos from Unsplash, queried for: `specialty coffee espresso pour`, `barista hands portafilter`, `coffee roastery dark`. Marked `// TODO: replace with shoot` inline. Next/Image domains allow `images.unsplash.com`.

## Accessibility floor

- Color contrast: `--ink` on `--paper` is 13.4:1. `--ink-soft` on `--paper` is 6.1:1. `--mark` on `--paper` is 5.2:1 (use for solid surfaces, not body text).
- All interactive elements have visible focus rings: 2px offset, `--ink` outline.
- Motion respects `prefers-reduced-motion`.
- Form labels are associated, not just placeholders.

## Decision log

- **Light theme, not dark.** Dark would be the specialty-coffee category-reflex. The scene that forces light: a 45-year-old restaurateur evaluating a €5k engagement on a MacBook in their office in the afternoon. They need to read, not be impressed by darkness.
- **Crimson, not brown.** The master prompt's fallback palette was the third-wave reflex (cream + brown). The actual Dosis brand is crimson on white. Adopting the crimson preserves real kinship and avoids the cliché.
- **Fraunces, not Cormorant.** Cormorant is the third-wave-blog default. Fraunces has more personality, variable axes, and reads modern-editorial without nostalgic baggage.
- **Asymmetric editorial layout, not centered hero stack.** Centered hero + 3-column services + grid testimonials is the SaaS reflex even when the surface is a portfolio.
