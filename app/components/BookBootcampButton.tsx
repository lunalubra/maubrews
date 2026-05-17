"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react";

// TODO: confirmar el usuario/event-slug reales de Cal.com una vez la
// cuenta esté configurada. Hoy "maubrews/bootcamp" es placeholder.
const CAL_LINK = "maubrews/bootcamp";
const NAMESPACE = "bootcamp";

export function BookBootcampButton({
  className,
  children = "Reservar fecha del bootcamp",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#A42325",
            "cal-brand-emphasis": "#7D0E14",
          },
          dark: {
            "cal-brand": "#D6A09E",
            "cal-brand-emphasis": "#A42325",
          },
        },
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={["btn-primary", className].filter(Boolean).join(" ")}
    >
      {children}
      <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
    </button>
  );
}
