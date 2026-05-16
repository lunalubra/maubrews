import { NextResponse } from "next/server";

// TODO: conectar a un proveedor real (Resend, Formspree, Plunk, ...).
// Por ahora, esta ruta solo valida el payload y lo escribe en los logs
// del servidor para que cualquier prueba local sea visible.

type ContactPayload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  tipo?: string;
  mensaje?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Cuerpo JSON inválido." },
      { status: 400 },
    );
  }

  const nombre = payload.nombre?.trim();
  const email = payload.email?.trim();
  const tipo = payload.tipo?.trim();
  const mensaje = payload.mensaje?.trim();

  if (!nombre || !email || !tipo || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Email inválido." },
      { status: 400 },
    );
  }

  // Visible en el log del servidor mientras no haya proveedor.
  console.log("[contact] nuevo mensaje:", {
    nombre,
    email,
    telefono: payload.telefono?.trim() || null,
    tipo,
    mensaje,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Método no permitido." },
    { status: 405 },
  );
}
