import { Mail } from "lucide-react";
import { finalCta } from "@/data/clinic";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const CLINIC_EMAIL = "dr.sirajmp@gmail.com";

export function FinalCTA() {
  const email = siteConfig.email || CLINIC_EMAIL;

  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 -z-10">
        <SmartImage image={finalCta.image} sizes="100vw" />
        <div className="absolute inset-0 bg-primary-dark/85" />
      </div>
      <div className="container-page flex flex-col items-start py-20 lg:py-28">
        <h2 id="cta-heading" className="max-w-3xl text-4xl text-white sm:text-5xl lg:text-6xl">
          {finalCta.headline}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-white/80">{finalCta.description}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/#book" variant="light" size="lg">
            {siteConfig.booking.ctaLabel}
          </Button>
          <WhatsAppButton label="Contact Us on WhatsApp" variant="outline-light" size="lg" />
        </div>
        <p className="mt-7 flex items-center gap-2.5 text-white/85">
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
    </section>
  );
}