"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

const PROJECT_TYPES = [
  "Apertura desde cero",
  "Mejora de cafetería existente",
  "Formación",
  "Otro",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "No se ha podido enviar. Escríbeme directamente a gestiondosiscafe@gmail.com.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-ink/15 bg-surface px-8 py-12"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="mt-1 grid h-7 w-7 place-items-center bg-mark text-paper"
          >
            <Check size={14} strokeWidth={2} />
          </span>
          <div>
            <p className="h3 text-[1.375rem]">Mensaje recibido.</p>
            <p className="mt-3 max-w-[44ch] text-[1rem] leading-[1.6] text-ink-soft">
              Te respondo personalmente en menos de 48 horas, normalmente
              antes. Si es urgente, escribe a{" "}
              <a href="mailto:gestiondosiscafe@gmail.com" className="link-underline">
                gestiondosiscafe@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-9">
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <Field id="nombre" name="nombre" label="Nombre" required />
        <Field id="email" name="email" label="Email" type="email" required />
      </div>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <Field id="telefono" name="telefono" label="Teléfono (opcional)" type="tel" />
        <div>
          <label
            htmlFor="tipo"
            className="eyebrow mb-3 block"
          >
            Tipo de proyecto
          </label>
          <select
            id="tipo"
            name="tipo"
            required
            defaultValue=""
            className="field cursor-pointer pr-4"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className="eyebrow mb-3 block">
          Cuéntame el proyecto
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder="Local, ubicación, qué tienes, qué necesitas, cuándo abrirías..."
          className="field resize-none"
        />
      </div>

      <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "submitting" ? "Enviando…" : "Enviar"}
          {status !== "submitting" && (
            <ArrowRight className="arrow" size={16} strokeWidth={1.5} />
          )}
        </button>

        <p className="text-[0.8125rem] text-ink-mute">
          Respondo en menos de 48 h. No comparto tus datos.
        </p>
      </div>

      {error && (
        <p role="alert" className="text-[0.875rem] text-mark">
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block">
        {label}
        {required && <span aria-hidden className="ml-1 text-mark">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
        className="field"
      />
    </div>
  );
}
