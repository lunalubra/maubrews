import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  tipo?: string;
  mensaje?: string;
};

type ContactData = {
  nombre: string;
  email: string;
  telefono?: string;
  tipo: string;
  mensaje: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMadridDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

// ───────────────────────────────────────────────────────────
// Email shell — shared chrome (paper bg, eyebrow header, footer)
// ───────────────────────────────────────────────────────────

function emailShell(opts: {
  preheader: string;
  title: string;
  inner: string;
  footer: string;
}) {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${opts.title}</title>
</head>
<body style="margin:0;padding:0;background-color:#F4EFE7;-webkit-font-smoothing:antialiased;">
  <div style="display:none;font-size:1px;color:#F4EFE7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${opts.preheader}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F4EFE7;">
    <tr>
      <td align="center" style="padding:48px 16px 64px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#F4EFE7;font-family:-apple-system,BlinkMacSystemFont,Inter,Helvetica,Arial,sans-serif;">
          <tr>
            <td style="padding-bottom:40px;">
              <span style="display:inline-block;width:6px;height:6px;border-radius:9999px;background-color:#A42325;vertical-align:middle;margin-right:10px;"></span>
              <span style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#594C42;font-weight:500;vertical-align:middle;">Maubrews · Consultoría</span>
            </td>
          </tr>
          ${opts.inner}
          <tr>
            <td style="padding-top:56px;border-top:1px solid #D9CFC0;padding-top:32px;font-size:12px;color:#988B7E;line-height:1.55;">
              ${opts.footer}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ───────────────────────────────────────────────────────────
// Notification email (sent to Mauricio)
// ───────────────────────────────────────────────────────────

function buildNotificationHtml(data: ContactData) {
  const safe = {
    nombre: escapeHtml(data.nombre),
    email: escapeHtml(data.email),
    telefono: data.telefono ? escapeHtml(data.telefono) : null,
    tipo: escapeHtml(data.tipo),
    mensaje: escapeHtml(data.mensaje).replace(/\r?\n/g, "<br />")
  };

  const fields: Array<[string, string]> = [
    ["Nombre", safe.nombre],
    [
      "Email",
      `<a href="mailto:${safe.email}" style="color:#1E1612;text-decoration:underline;">${safe.email}</a>`
    ]
  ];
  if (safe.telefono) {
    fields.push([
      "Teléfono",
      `<a href="tel:${safe.telefono.replace(/[^+\d]/g, "")}" style="color:#1E1612;text-decoration:underline;">${safe.telefono}</a>`
    ]);
  }
  fields.push(["Tipo de proyecto", safe.tipo]);

  const fieldRows = fields
    .map(
      ([label, value], idx) => `
      <tr>
        <td style="padding:14px 0;${idx > 0 ? "border-top:1px solid #D9CFC0;" : ""}width:38%;vertical-align:top;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#594C42;font-weight:500;font-family:-apple-system,BlinkMacSystemFont,Inter,Helvetica,Arial,sans-serif;">${label}</td>
        <td style="padding:14px 0;${idx > 0 ? "border-top:1px solid #D9CFC0;" : ""}vertical-align:top;font-size:16px;line-height:1.45;color:#1E1612;font-family:-apple-system,BlinkMacSystemFont,Inter,Helvetica,Arial,sans-serif;">${value}</td>
      </tr>`
    )
    .join("");

  const receivedAt = formatMadridDate(new Date());

  const inner = `
    <tr>
      <td style="padding:48px 0 0;border-top:1px solid #D9CFC0;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:36px;line-height:1.05;letter-spacing:-0.018em;color:#1E1612;">
          Nuevo mensaje<br/>desde el sitio.
        </h1>
        <p style="margin:24px 0 0;font-size:16px;line-height:1.6;color:#594C42;max-width:48ch;">
          Alguien ha rellenado el formulario en maubrews.com. Su email va como reply-to, así que puedes responder directamente desde este correo.
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding-top:48px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          ${fieldRows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding-top:48px;">
        <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#594C42;font-weight:500;">Mensaje</p>
        <div style="font-size:17px;line-height:1.65;color:#1E1612;">
          ${safe.mensaje}
        </div>
      </td>
    </tr>
  `;

  return emailShell({
    preheader: `${safe.tipo} · ${safe.nombre} acaba de escribirte desde maubrews.com.`,
    title: "Nuevo mensaje desde maubrews.com",
    inner,
    footer: `Recibido el ${receivedAt} (hora de Madrid).<br/>maubrews.com`
  });
}

function buildNotificationText(data: ContactData) {
  const lines = [
    "Maubrews · Nuevo mensaje desde el sitio",
    "",
    `Nombre:           ${data.nombre}`,
    `Email:            ${data.email}`
  ];
  if (data.telefono) lines.push(`Teléfono:         ${data.telefono}`);
  lines.push(
    `Tipo de proyecto: ${data.tipo}`,
    "",
    "Mensaje:",
    data.mensaje,
    "",
    `Recibido el ${formatMadridDate(new Date())} (hora de Madrid).`,
    "Su email está en el campo Reply-To; responde a este correo para escribirle directamente."
  );
  return lines.join("\n");
}

// ───────────────────────────────────────────────────────────
// Confirmation email (sent back to the submitter)
// ───────────────────────────────────────────────────────────

function buildConfirmationHtml(data: ContactData) {
  const safe = {
    nombre: escapeHtml(data.nombre),
    email: escapeHtml(data.email),
    telefono: data.telefono ? escapeHtml(data.telefono) : null,
    tipo: escapeHtml(data.tipo),
    mensaje: escapeHtml(data.mensaje).replace(/\r?\n/g, "<br />")
  };

  const fields: Array<[string, string]> = [
    ["Tipo de proyecto", safe.tipo],
    ["Tu email", safe.email]
  ];
  if (safe.telefono) {
    fields.push(["Tu teléfono", safe.telefono]);
  }

  const fieldRows = fields
    .map(
      ([label, value], idx) => `
      <tr>
        <td style="padding:14px 0;${idx > 0 ? "border-top:1px solid #D9CFC0;" : ""}width:38%;vertical-align:top;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#594C42;font-weight:500;font-family:-apple-system,BlinkMacSystemFont,Inter,Helvetica,Arial,sans-serif;">${label}</td>
        <td style="padding:14px 0;${idx > 0 ? "border-top:1px solid #D9CFC0;" : ""}vertical-align:top;font-size:16px;line-height:1.45;color:#1E1612;font-family:-apple-system,BlinkMacSystemFont,Inter,Helvetica,Arial,sans-serif;">${value}</td>
      </tr>`
    )
    .join("");

  const inner = `
    <tr>
      <td style="padding:48px 0 0;border-top:1px solid #D9CFC0;">
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:48px;line-height:1;letter-spacing:-0.022em;color:#1E1612;">
          Recibido.
        </h1>
        <p style="margin:32px 0 0;font-size:17px;line-height:1.65;color:#1E1612;">
          Hola ${safe.nombre},
        </p>
        <p style="margin:16px 0 0;font-size:16px;line-height:1.65;color:#594C42;max-width:52ch;">
          Tu mensaje ha llegado bien. Le voy a echar un ojo personalmente y te respondo en menos de 48 horas, normalmente antes.
        </p>
        <p style="margin:16px 0 0;font-size:16px;line-height:1.65;color:#594C42;max-width:52ch;">
          Si era urgente y no respondo pronto, escríbeme directamente a <a href="mailto:gestiondosiscafe@gmail.com" style="color:#1E1612;text-decoration:underline;">gestiondosiscafe@gmail.com</a> o llámame al <a href="tel:+34674769601" style="color:#1E1612;text-decoration:underline;">+34 674 769 601</a>.
        </p>
        <p style="margin:32px 0 0;font-size:16px;line-height:1.65;color:#1E1612;">
          Un café,<br/>
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;letter-spacing:-0.01em;">Mauricio</span>
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding-top:48px;">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#594C42;font-weight:500;">Tu copia</p>
        <p style="margin:0 0 16px;font-size:13px;line-height:1.55;color:#988B7E;max-width:52ch;">
          Estos son los datos que has enviado. Guárdalos por si necesitas referenciar este mensaje.
        </p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          ${fieldRows}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding-top:32px;">
        <p style="margin:0 0 16px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#594C42;font-weight:500;">Mensaje</p>
        <div style="font-size:16px;line-height:1.65;color:#1E1612;">
          ${safe.mensaje}
        </div>
      </td>
    </tr>
  `;

  return emailShell({
    preheader: `Tu mensaje ha llegado bien. Te respondo en menos de 48 horas.`,
    title: "Recibido — Maubrews",
    inner,
    footer: `Maubrews · Consultoría de café de especialidad<br/>Madrid · maubrews.com`
  });
}

function buildConfirmationText(data: ContactData) {
  const lines = [
    "Maubrews · Mensaje recibido",
    "",
    `Hola ${data.nombre},`,
    "",
    "Tu mensaje ha llegado bien. Le voy a echar un ojo personalmente y te respondo en menos de 48 horas, normalmente antes.",
    "",
    "Si era urgente y no respondo pronto, escríbeme directamente a gestiondosiscafe@gmail.com o llámame al +34 674 769 601.",
    "",
    "Un café,",
    "Mauricio",
    "",
    "──",
    "",
    "Tu copia:",
    "",
    `Tipo de proyecto: ${data.tipo}`,
    `Tu email:         ${data.email}`
  ];
  if (data.telefono) lines.push(`Tu teléfono:      ${data.telefono}`);
  lines.push(
    "",
    "Mensaje:",
    data.mensaje,
    "",
    "Maubrews · Madrid · maubrews.com"
  );
  return lines.join("\n");
}

// ───────────────────────────────────────────────────────────
// Route handler
// ───────────────────────────────────────────────────────────

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo JSON inválido." },
      { status: 400 }
    );
  }

  const nombre = payload.nombre?.trim();
  const email = payload.email?.trim();
  const tipo = payload.tipo?.trim();
  const mensaje = payload.mensaje?.trim();
  const telefono = payload.telefono?.trim() || undefined;

  if (!nombre || !email || !tipo || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Email inválido." },
      { status: 400 }
    );
  }

  const username = process.env.EMAIL_USERNAME;
  const password = process.env.EMAIL_PASSWORD;
  const destination = process.env.PERSONAL_EMAIL;

  if (!username || !password || !destination) {
    console.error(
      "[contact] missing EMAIL_USERNAME, EMAIL_PASSWORD or PERSONAL_EMAIL env vars"
    );
    return NextResponse.json(
      { ok: false, error: "Servicio de correo no configurado." },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: username, pass: password }
  });

  const data: ContactData = { nombre, email, telefono, tipo, mensaje };

  // 1) Notification to Mauricio (this MUST succeed)
  try {
    await transporter.sendMail({
      from: `"Maubrews · Formulario" <${username}>`,
      to: destination,
      replyTo: email,
      subject: `${tipo} · ${nombre} — maubrews.com`,
      text: buildNotificationText(data),
      html: buildNotificationHtml(data)
    });
  } catch (error) {
    console.error("[contact] notification sendMail failed:", error);
    return NextResponse.json(
      { ok: false, error: "No se ha podido enviar el mensaje." },
      { status: 502 }
    );
  }

  // 2) Confirmation back to the submitter (best-effort; do not fail
  //    the request if this errors — Mauricio already has the message)
  try {
    await transporter.sendMail({
      from: `"Maubrews" <${username}>`,
      to: email,
      replyTo: destination,
      subject: "Recibido — te respondo pronto",
      text: buildConfirmationText(data),
      html: buildConfirmationHtml(data)
    });
  } catch (error) {
    console.warn(
      "[contact] confirmation sendMail failed (notification succeeded):",
      error
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Método no permitido." },
    { status: 405 }
  );
}
