import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/utils";
import { AppointmentForm } from "@/components/home/AppointmentForm";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} on WhatsApp or send an appointment request. Our team will help you with the next step.`,
  alternates: { canonical: "/contact" },
};

const CLINIC_EMAIL = "dr.sirajmp@gmail.com";

export default function ContactPage() {
  const { phone, address, mapUrl, businessHours } = siteConfig;
  const email = siteConfig.email || CLINIC_EMAIL;

  return (
    <>
      <PageHeader
        title="Contact us"
        description="Have a question or ready to book your visit? Message us on WhatsApp or send an appointment request below."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-3xl sm:text-4xl">Reach the clinic</h2>
            <div className="mt-6">
              <WhatsAppButton label="Chat on WhatsApp" size="lg" />
            </div>

            <ul className="mt-10 space-y-6">
              {phone ? (
                <li className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <a href={telHref(phone)} className="text-muted hover:text-primary-dark">{phone}</a>
                  </div>
                </li>
              ) : null}
              {email ? (
                <li className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Email</p>
                    <a href={`mailto:${email}`} className="break-all text-muted hover:text-primary-dark">{email}</a>
                  </div>
                </li>
              ) : null}
              {address ? (
                <li className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Address</p>
                    <p className="text-muted">{address}</p>
                    {mapUrl ? (
                      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-primary-dark underline underline-offset-4">
                        Open in maps
                      </a>
                    ) : null}
                  </div>
                </li>
              ) : null}
              {businessHours.length > 0 ? (
                <li className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-ink">Business hours</p>
                    <dl className="text-muted">
                      {businessHours.map((row) => (
                        <div key={row.label} className="flex gap-2">
                          <dt>{row.label}:</dt>
                          <dd>{row.hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ) : null}
            </ul>

            {!phone && !email && !address ? (
              <p className="mt-10 text-muted">The quickest way to reach us is WhatsApp. We will reply to confirm availability.</p>
            ) : null}
          </div>

          <div id="book" className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-9">
            <h2 className="text-3xl sm:text-4xl">Request an appointment</h2>
            <p className="mb-8 mt-3 text-muted">We will reply on WhatsApp to confirm availability.</p>
            <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
              <AppointmentForm idPrefix="contact" />
            </Suspense>
          </div>
        </div>
      </section>

      <div className="border-t border-line bg-surface py-12 text-center">
        <p className="text-lg text-muted">Looking for a specific treatment?</p>
        <div className="mt-4 flex justify-center">
          <Button href="/services" variant="secondary">Browse our services</Button>
        </div>
      </div>
    </>
  );
}