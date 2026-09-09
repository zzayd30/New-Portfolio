import nodemailer from "nodemailer";

import { contactFormSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

function getSmtpConfiguration() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL;

  if (!host || !Number.isInteger(port) || !user || !password || !recipient) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass: password },
    recipient,
  };
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ message: "Invalid form submission." }, { status: 403 });
  }

  const smtp = getSmtpConfiguration();

  if (!smtp) {
    return Response.json(
      { message: "The contact form is not configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  const { name, email, message, website } = parsed.data;

  if (website) {
    return Response.json({ message: "Thanks — your message has been sent." });
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  try {
    await transporter.sendMail({
      from: `Zaid Portfolio <${smtp.auth.user}>`,
      to: smtp.recipient,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch {
    return Response.json(
      { message: "Unable to send your message right now. Please email me directly." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Thanks — your message has been sent." });
}
