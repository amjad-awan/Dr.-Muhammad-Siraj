"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CircleAlert, CircleCheck, Lock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import type { BookingFormErrors, BookingFormValues } from "@/types";
import { buildBookingMessage, buildWhatsAppUrl, hasWhatsAppNumber } from "@/lib/whatsapp";
import { todayIsoDate, validateBooking } from "@/lib/validation";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Button } from "@/components/ui/Button";

const initialValues: BookingFormValues = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const GENERAL_ENQUIRY = "Not sure yet / General enquiry";
const fieldOrder: Array<keyof BookingFormValues> = ["fullName", "phone", "email", "service", "date", "time", "message"];

type Status = "idle" | "sent";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-start gap-1.5 text-sm text-[#b3261e]">
      <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export function AppointmentForm({ idPrefix = "booking" }: { idPrefix?: string }) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<BookingFormValues>(initialValues);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [lastUrl, setLastUrl] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(todayIsoDate()), []);

  // "Book Treatment" links use /?service=<slug>#book to preselect a service.
  const requestedSlug = searchParams.get("service");
  useEffect(() => {
    if (!requestedSlug) return;
    const match = services.find((service) => service.slug === requestedSlug);
    if (match) setValues((current) => ({ ...current, service: match.title }));
  }, [requestedSlug]);

  const update = (name: keyof BookingFormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "sent") setStatus("idle");
  };

  const id = (name: string) => `${idPrefix}-${name}`;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateBooking(values);
    setErrors(nextErrors);

    const firstInvalid = fieldOrder.find((name) => nextErrors[name]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${id(firstInvalid)}`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(buildBookingMessage(values));
    setLastUrl(url);
    setStatus("sent");

    // Opened synchronously from the submit gesture so mobile browsers do not block it.
    const opened = window.open(url, "_blank");
    if (opened) {
      opened.opener = null;
    } else {
      window.location.assign(url);
    }
  };

  const describedBy = (name: keyof BookingFormValues) => (errors[name] ? `${id(name)}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Appointment request form">
      {process.env.NODE_ENV !== "production" && !hasWhatsAppNumber() ? (
        <p className="rounded-xl border border-accent bg-[#fbf6ea] px-4 py-3 text-sm text-ink">
          Development note: no clinic WhatsApp number is configured yet. Set <code>NEXT_PUBLIC_WHATSAPP_NUMBER</code> in
          <code> .env.local</code> or <code>src/config/site.ts</code>. This note is never shown in production.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("fullName")} className="mb-1.5 block text-sm font-semibold text-ink">
            Full name <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id={id("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy("fullName")}
            className="field"
          />
          <FieldError id={`${id("fullName")}-error`} message={errors.fullName} />
        </div>

        <div>
          <label htmlFor={id("phone")} className="mb-1.5 block text-sm font-semibold text-ink">
            Phone number <span className="font-normal text-muted">(required)</span>
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="+971 50 123 4567"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className="field"
          />
          <FieldError id={`${id("phone")}-error`} message={errors.phone} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("email")} className="mb-1.5 block text-sm font-semibold text-ink">
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className="field"
          />
          <FieldError id={`${id("email")}-error`} message={errors.email} />
        </div>

        <div>
          <label htmlFor={id("service")} className="mb-1.5 block text-sm font-semibold text-ink">
            Dental service
          </label>
          <select
            id={id("service")}
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className="field"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value={GENERAL_ENQUIRY}>{GENERAL_ENQUIRY}</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("date")} className="mb-1.5 block text-sm font-semibold text-ink">
            Preferred date
          </label>
          <input
            id={id("date")}
            name="date"
            type="date"
            min={minDate || undefined}
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={describedBy("date")}
            className="field"
          />
          <FieldError id={`${id("date")}-error`} message={errors.date} />
        </div>

        <div>
          <label htmlFor={id("time")} className="mb-1.5 block text-sm font-semibold text-ink">
            Preferred time
          </label>
          <select id={id("time")} name="time" value={values.time} onChange={(e) => update("time", e.target.value)} className="field">
            <option value="">Select a time</option>
            {siteConfig.booking.timePreferences.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={id("message")} className="mb-1.5 block text-sm font-semibold text-ink">
          Additional message <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          className="field resize-y"
        />
        <FieldError id={`${id("message")}-error`} message={errors.message} />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <WhatsAppIcon className="size-5" />
        Send request on WhatsApp
      </Button>

      <p className="flex items-start gap-2 text-sm leading-relaxed text-muted">
        <Lock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          This is an appointment request, not a confirmed booking. It opens WhatsApp with your details filled in, and our
          team will reply to confirm availability. Nothing is stored on this website; your details are only shared when you
          press send in WhatsApp.
        </span>
      </p>

      <div aria-live="polite">
        {status === "sent" ? (
          <div className="rounded-xl border border-secondary bg-primary-soft p-4 text-sm leading-relaxed text-ink">
            <p className="flex items-center gap-2 font-semibold text-primary-dark">
              <CircleCheck className="size-5" aria-hidden="true" />
              Your message is ready in WhatsApp
            </p>
            <p className="mt-2">
              Press send in WhatsApp to submit your request. Your appointment is confirmed only after the clinic replies.
            </p>
            <p className="mt-2">
              WhatsApp did not open?{" "}
              <a href={lastUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-dark underline underline-offset-4">
                Open WhatsApp with your message
              </a>
              .
            </p>
          </div>
        ) : null}
      </div>
    </form>
  );
}
