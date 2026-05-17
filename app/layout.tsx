import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.maubrews.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maubrews — Consultoría de café de especialidad en Madrid",
    template: "%s · Maubrews",
  },
  description:
    "Asesoría para abrir y profesionalizar cafeterías de especialidad en España. Maquinaria, producto, formación, head hunting. Distribuidor oficial Slayer España y Head of Ambassadors Alpro.",
  keywords: [
    "consultoría cafetería",
    "café de especialidad Madrid",
    "abrir cafetería",
    "Slayer España",
    "Alpro barista",
    "formación barista",
    "Maubrews",
    "Dosis Café",
  ],
  authors: [{ name: "Mauricio De Luca" }],
  creator: "Maubrews",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Maubrews",
    title: "Maubrews — Consultoría de café de especialidad",
    description:
      "Asesoría para abrir y profesionalizar cafeterías de especialidad en España.",
    images: [
      {
        // TODO: replace with branded OG image
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Maubrews — Consultoría de café de especialidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maubrews — Consultoría de café de especialidad",
    description:
      "Asesoría para abrir y profesionalizar cafeterías de especialidad en España.",
    // TODO: replace with branded OG image
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE7",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Mauricio De Luca",
      alternateName: "Maubrews",
      jobTitle: "Consultor de café de especialidad",
      url: SITE_URL,
      sameAs: ["https://dosiscafe.es"],
      worksFor: { "@id": `${SITE_URL}/#dosis` },
      knowsAbout: [
        "Café de especialidad",
        "Espresso",
        "Slayer Espresso",
        "Barismo",
        "Apertura de cafeterías",
        "Formación barista",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#dosis`,
      name: "Dosis Café",
      url: "https://dosiscafe.es",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Gonzalo de Córdoba, 3",
        addressLocality: "Madrid",
        addressRegion: "Madrid",
        postalCode: "28010",
        addressCountry: "ES",
      },
      founder: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Maubrews Consultoría",
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: { "@type": "Country", name: "Spain" },
      serviceType: [
        "Selección de maquinaria de café",
        "Selección de producto",
        "Creación de cartas y signature drinks",
        "Head hunting hostelería",
        "Formación de equipo barista",
        "Distribución de barra",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
