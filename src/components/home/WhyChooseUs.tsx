import { whyChoose } from "@/data/clinic";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="section-space">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div id="why-heading">
            <SectionHeading title="Why Choose Our Clinic?" description={whyChoose.intro} />
          </div>
        </div>

        <Reveal>
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {whyChoose.points.map((point) => (
              <li key={point.title} className="border-t border-line py-7">
                <FeatureIcon name={point.icon} className="size-7 text-primary" />
                <h3 className="mt-4 text-lg text-ink">{point.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">{point.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
