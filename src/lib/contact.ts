import { profile } from "@/content/profile";

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type SendResult =
  | { ok: true; transport: "web3forms" | "mailto" }
  | { ok: false; error: string };

/** Inlined at build time; when unset the form falls back to mailto. */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function mailtoHref({ name, email, message }: ContactMessage): string {
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendContactMessage(
  message: ContactMessage,
): Promise<SendResult> {
  if (!WEB3FORMS_KEY) {
    window.location.href = mailtoHref(message);
    return { ok: true, transport: "mailto" };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio contact from ${message.name}`,
        name: message.name,
        email: message.email,
        message: message.message,
      }),
    });
    const data: { success?: boolean; message?: string } = await response.json();
    if (!response.ok || !data.success) {
      return {
        ok: false,
        error: data.message ?? `Request failed with status ${response.status}`,
      };
    }
    return { ok: true, transport: "web3forms" };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
