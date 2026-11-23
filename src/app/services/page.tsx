import type { Metadata } from "next";
import { services } from "@/data/services";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Our Dental Services",
  description:
    "Dental restorations, crowns, bridges, veneers and removable, flexible and complete dentures. Learn about each treatment and request an appointment on WhatsApp.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Complete Dental Care for Every Smile"
        description="Explore our dental treatments designed to support your oral health and enhance your smile."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
      />
      <section aria-label="All dental services" className="section-space">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
