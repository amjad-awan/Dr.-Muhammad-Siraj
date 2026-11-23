import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SmartImage } from "./SmartImage";
import { Button } from "./Button";

interface ServiceCardProps {
  service: Service;
  /** "wide" cards get a landscape image; "compact" cards a squarer one. */
  size?: "wide" | "compact";
  className?: string;
}

export function ServiceCard({ service, size = "compact", className }: ServiceCardProps) {
  const showPrice = siteConfig.features.showPrices && service.price;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:border-secondary hover:shadow-lift motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      <Link
        href={`/services/${service.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={cn("relative block overflow-hidden", size === "wide" ? "aspect-[16/10]" : "aspect-[4/3]")}
      >
        <SmartImage
          image={service.image}
          sizes={size === "wide" ? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"}
          className="transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl text-ink">
            <Link href={`/services/${service.slug}`} className="hover:text-primary-dark">
              {service.title}
            </Link>
          </h3>
          {showPrice && service.price ? (
            <p className="shrink-0 rounded-lg bg-primary-soft px-2.5 py-1 text-sm font-semibold text-primary-dark">
              {service.price.currency} {service.price.amount}
            </p>
          ) : null}
        </div>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{service.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Button href={`/?service=${service.slug}#book`} size="md">
            Book Treatment
          </Button>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex min-h-11 items-center gap-1 font-semibold text-primary-dark underline-offset-4 hover:underline"
          >
            View Details
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
