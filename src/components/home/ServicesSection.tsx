import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { cn } from "@/lib/utils";

/**
 * On large screens the grid has six columns: rows of 2, 3, 2 cards (the pattern repeats if more services are added).
 * Wide cards span 3 columns, compact cards span 2. Tablets use two columns, phones one.
 */
const pattern = ["wide", "wide", "compact", "compact", "compact"] as const;

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-space bg-primary-soft/60">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div id="services-heading">
            <SectionHeading
              title="Complete Dental Care for Every Smile"
              description="Explore our dental treatments designed to support your oral health and enhance your smile."
            />
          </div>
          <Button href="/services" variant="secondary" className="self-start md:self-auto">
            View all services
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const size = pattern[index % pattern.length] ?? "compact";
            return (
              <Reveal
                key={service.slug}
                delay={(index % 3) * 0.08}
                className={cn(
                  "min-w-0 md:max-lg:last:odd:col-span-2",
                  size === "wide" ? "lg:col-span-3" : "lg:col-span-2",
                )}
              >
                <ServiceCard service={service} size={size} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
