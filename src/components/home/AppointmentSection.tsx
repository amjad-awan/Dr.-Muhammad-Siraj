import { Suspense } from "react";
import { Mail } from "lucide-react";
import { appointmentSection } from "@/data/clinic";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AppointmentForm } from "./AppointmentForm";

const CLINIC_EMAIL = "dr.sirajmp@gmail.com";

const steps = [
  "Fill in the form with your details and the treatment you are interested in.",
  "WhatsApp opens with your message ready to send to our team.",
  "We reply to confirm availability. Your visit is confirmed once you hear from us.",
];

export function AppointmentSection({ idPrefix = "booking" }: { idPrefix?: string }) {
  const email = siteConfig.email || CLINIC_EMAIL;

  return (
    <section aria-labelledby="book-heading" className="section-space bg-primary-dark text-white">
      <div className="container-page grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <div id="book-heading">
            <SectionHeading title={appointmentSection.heading} description={appointmentSection.description} tone="light" />
          </div>

          <ol className="mt-10 space-y-5">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/40 text-sm font-semibold">
                  {index + 1}
                </span>
                <p className="pt-0.5 text-white/85">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-white/20 pt-8">
            <p className="text-white/85">Prefer to write to us directly?</p>
            <div className="mt-4">
              <WhatsAppButton
                label="Message us on WhatsApp"
                message={`Hello ${siteConfig.name}, I would like to ask about booking a dental appointment.`}
                variant="light"
              />
            </div>
            <p className="mt-6 flex items-center gap-2.5 text-white/85">
              <Mail className="size-5 shrink-0" aria-hidden="true" />
              <span>
                Or email us at{" "}
                <a
                  href={`mailto:${email}`}
                  className="break-all font-semibold text-white underline underline-offset-4 hover:text-primary-soft"
                >
                  {email}
                </a>
              </span>
            </p>
          </div>
        </div>

        <Reveal>
          <div id="book"  className="rounded-3xl bg-surface p-6 text-ink shadow-lift sm:p-9">
            <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
              <AppointmentForm idPrefix={idPrefix} />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  );
}