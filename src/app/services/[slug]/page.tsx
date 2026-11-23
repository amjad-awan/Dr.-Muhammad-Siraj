import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "@/components/home/FinalCTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug);
  const showPrice = siteConfig.features.showPrices && service.price;

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.summary}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/services" }, { label: service.title }]}
      />

      <section className="section-space">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-primary-soft lg:order-2 lg:aspect-[4/5]">
            <SmartImage image={service.image} sizes="(min-width: 1024px) 40vw, 100vw" priority />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl">About this treatment</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{service.overview}</p>

            <h2 className="mt-12 text-3xl sm:text-4xl">What to talk about at your consultation</h2>
            <ul className="mt-6 space-y-4">
              {service.consultationPoints.map((point) => (
                <li key={point} className="flex gap-3 text-[1.05rem] text-ink/85">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-dark">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {showPrice && service.price ? (
              <p className="mt-8 text-lg text-ink">
                Reference price: <strong>{service.price.currency} {service.price.amount}</strong>
                <span className="block text-sm text-muted">Please confirm the current price with the clinic.</span>
              </p>
            ) : null}

            <p className="mt-8 text-sm leading-relaxed text-muted">
              This page is general information, not medical advice. Your dentist will assess your teeth and recommend what is right for you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/?service=${service.slug}#book`} size="lg">
                Book Treatment
              </Button>
              <WhatsAppButton
                label="Ask on WhatsApp"
                variant="secondary"
                size="lg"
                message={`Hello ${siteConfig.name}, I would like to ask about ${service.title}.`}
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="other-services" className="border-t border-line bg-surface py-14">
        <div className="container-page">
          <h2 id="other-services" className="text-3xl">Other treatments</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex min-h-11 items-center rounded-xl border border-line px-4 py-2 font-medium text-ink transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary-dark"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
