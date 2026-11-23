import { trustHighlights } from "@/data/clinic";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export function TrustSection() {
  return (
    <section aria-label="Clinic highlights" className="border-y border-line bg-surface">
      <ul className="container-page grid sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {trustHighlights.map((item) => (
          <li key={item.title} className="flex gap-4 border-b border-line py-7 last:border-b-0 sm:odd:pr-6 sm:even:pl-6 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <FeatureIcon name={item.icon} className="mt-0.5 size-7 shrink-0 text-primary" />
            <div>
              <h2 className="font-sans text-base font-semibold leading-snug tracking-normal text-ink">{item.title}</h2>
              <p className="mt-1 text-[0.95rem] leading-snug text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
