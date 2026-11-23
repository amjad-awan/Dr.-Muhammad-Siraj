import { siteConfig } from "@/config/site";
import type { BookingFormValues } from "@/types";
import { digitsOnly } from "./utils";

export function hasWhatsAppNumber(): boolean {
  return digitsOnly(siteConfig.whatsappNumber).length >= 7;
}

/**
 * wa.me opens the WhatsApp app on phones and WhatsApp Web on desktop.
 * If no number is configured it opens WhatsApp's contact picker with the message prefilled,
 * so the button still works while the clinic number is being set up.
 */
export function buildWhatsAppUrl(message?: string): string {
  const number = digitsOnly(siteConfig.whatsappNumber);
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatDate(isoDate: string): string {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(year, month - 1, day),
  );
}

export function buildBookingMessage(values: BookingFormValues): string {
  const { greeting, closing } = siteConfig.booking;
  const field = (label: string, value: string) => `${label}: ${value.trim() || "Not provided"}`;

  return [
    greeting,
    "",
    field("Name", values.fullName),
    field("Phone", values.phone),
    field("Email", values.email),
    field("Service", values.service),
    field("Preferred Date", formatDate(values.date)),
    field("Preferred Time", values.time),
    field("Message", values.message),
    "",
    closing,
  ].join("\n");
}

export function buildGeneralEnquiryMessage(): string {
  return `Hello ${siteConfig.name}, I would like to ask about your dental services.`;
}
