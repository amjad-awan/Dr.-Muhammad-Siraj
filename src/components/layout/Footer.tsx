import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { telHref } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BrandMark } from "@/components/ui/BrandMark";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
  linkedin: "LinkedIn",
} as const;

const CLINIC_EMAIL = "dr.sirajmp@gmail.com";

const linkClass = "inline-flex min-h-8 items-center text-muted transition-colors hover:text-primary-dark";

export function Footer() {
  const { phone, address, businessHours, socialLinks } = siteConfig;
  const email = siteConfig.email || CLINIC_EMAIL;
  const quickLinks = navigation.filter((item) => item.requires !== "doctors" || doctors.length > 0);

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted">{siteConfig.description}</p>
          {socialLinks.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1 font-medium`}>
                    {socialLabels[link.platform]}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-sans text-base font-semibold tracking-normal text-ink">Quick links</h2>
          <ul className="mt-4 space-y-1">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Dental services">
          <h2 className="font-sans text-base font-semibold tracking-normal text-ink">Dental services</h2>
          <ul className="mt-4 space-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className={linkClass}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-base font-semibold tracking-normal text-ink">Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.95rem] text-muted">
            <li>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-2.5 hover:text-primary-dark">
                <WhatsAppIcon className="size-[1.1rem] shrink-0 text-primary" />
                WhatsApp us
              </a>
            </li>
            {phone ? (
              <li>
                <a href={telHref(phone)} className="inline-flex min-h-8 items-center gap-2.5 hover:text-primary-dark">
                  <Phone className="size-[1.1rem] shrink-0 text-primary" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            ) : null}
            {email ? (
              <li>
                <a href={`mailto:${email}`} className="inline-flex min-h-8 items-center gap-2.5 break-all hover:text-primary-dark">
                  <Mail className="size-[1.1rem] shrink-0 text-primary" aria-hidden="true" />
                  {email}
                </a>
              </li>
            ) : null}
            {address ? (
              <li className="flex gap-2.5">
                <MapPin className="mt-1 size-[1.1rem] shrink-0 text-primary" aria-hidden="true" />
                <span>{address}</span>
              </li>
            ) : null}
            {businessHours.length > 0 ? (
              <li className="flex gap-2.5">
                <Clock className="mt-1 size-[1.1rem] shrink-0 text-primary" aria-hidden="true" />
                <dl className="space-y-0.5">
                  {businessHours.map((row) => (
                    <div key={row.label} className="flex gap-2">
                      <dt className="font-medium text-ink">{row.label}:</dt>
                      <dd>{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-primary-dark">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}