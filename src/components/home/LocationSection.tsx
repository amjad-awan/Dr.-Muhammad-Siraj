
import { MapPin, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.278458717166!2d55.33249099999999!3d25.261216599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5df3911d9995%3A0x85025a6e3ac559cb!2sDr.%20Muhammad%20Siraj%20(%20General%20Dentist%20%2F%20Dental%20Surgeon)!5e0!3m2!1sen!2s!4v1795440898886!5m2!1sen!2s";

export function LocationSection() {
  return (
    <section className="section-space" aria-labelledby="location-heading">
      <div className="container-page">
        <Reveal>
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Find Us
              </span>
              <h2
                id="location-heading"
                className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
              >
                Visit Our Clinic
              </h2>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted">
                <MapPin size={17} className="shrink-0 text-primary" />
                {siteConfig.address}
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr.+Muhammad+Siraj+General+Dentist+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
            >
              Get Directions <ExternalLink size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal variant="fade">
          <div className="overflow-hidden rounded-3xl border border-line bg-surface-muted shadow-sm">
            <iframe
              src={mapUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Dr. Muhammad Siraj Dental Clinic Location"
              className="block w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
