"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";

// Maubrews vive en la instancia europea de Cal (cal.eu), no en cal.com.
const CAL_LINK = "maubrews/bootcamp";
const NAMESPACE = "bootcamp";
const CAL_ORIGIN = "https://cal.eu";
const CAL_EMBED_JS = "https://app.cal.eu/embed/embed.js";

export function BookBootcampButton({
  className,
  children = "Reservar fecha del bootcamp"
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: NAMESPACE,
        embedJsUrl: CAL_EMBED_JS
      });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#A42325",
            "cal-brand-emphasis": "#7D0E14"
          },
          dark: {
            "cal-brand": "#D6A09E",
            "cal-brand-emphasis": "#A42325"
          }
        }
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-origin={CAL_ORIGIN}
      data-cal-config={`{"layout":"month_view","theme":"light","origin":"${CAL_ORIGIN}"}`}
      className={["btn-primary", className].filter(Boolean).join(" ")}
    >
      {children}
      <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
    </button>
  );
}
