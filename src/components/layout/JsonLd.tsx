import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

/** Dentist structured data built only from details configured in siteConfig. Empty fields are omitted. */
export function JsonLd() {
  const { name, description, phone, email, address, businessHours, socialLinks, logo } = siteConfig;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name,
    description,
    url: absoluteUrl("/"),
  };

  if (logo) data.image = absoluteUrl(logo);
  if (phone) data.telephone = phone;
  if (email) data.email = email;
  if (address) data.address = { "@type": "PostalAddress", streetAddress: address };
  if (businessHours.length > 0) data.openingHours = businessHours.map((row) => `${row.label} ${row.hours}`);
  if (socialLinks.length > 0) data.sameAs = socialLinks.map((link) => link.url);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
