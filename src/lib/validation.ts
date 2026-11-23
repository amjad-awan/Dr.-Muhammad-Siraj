import type { BookingFormErrors, BookingFormValues } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^\+?[\d\s().-]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function todayIsoDate(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function validateBooking(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid phone number, for example +971 50 123 4567.";
  }

  if (values.email.trim() && !isValidEmail(values.email)) {
    errors.email = "Enter a valid email address, or leave this field empty.";
  }

  if (values.date && values.date < todayIsoDate()) {
    errors.date = "Please choose today or a future date.";
  }

  if (values.message.length > 800) {
    errors.message = "Please keep your message under 800 characters.";
  }

  return errors;
}
