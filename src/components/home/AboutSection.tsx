
import { about } from "@/data/clinic";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Check, ArrowUpRight } from "lucide-react";

const highlights = [
  "Personalised dental care",
  "Gentle, patient-focused approach",
  "General & restorative dentistry",
];

export function AboutSection({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-space overflow-hidden"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

       
{/* Image composition */}
<Reveal variant="fade">
  <div className="relative mx-auto max-w-lg pb-10 pr-6">
    <div className="absolute right-0 top-6 h-[88%] w-[88%] rounded-[2rem] bg-primary-soft" />

    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-surface-muted sm:aspect-[6/5]">
      <SmartImage
        image={about.image}
        sizes="(min-width: 1024px) 42vw, 90vw"
      />
    </div>

    {/* Doctor identity card */}
    <div className="absolute -bottom-1 right-0 z-10 max-w-[240px] rounded-2xl border border-line bg-white p-4 shadow-xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
        Your Dentist
      </p>
      <h3 className="mt-1 font-display text-lg font-bold text-ink">
        {siteConfig.doctor.name}
      </h3>
      <p className="mt-1 text-xs text-muted">
        General Dentist · Dental Surgeon
      </p>
    </div>
  </div>
</Reveal>


        {/* Content */}
        <Reveal>
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-7 bg-primary" />
              Meet Your Dentist
            </span>

            <h2
              id="about-heading"
              className="mt-5 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl"
            >
              {about.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="my-8 h-px bg-line" />

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-9 border-l-2 border-primary pl-5 font-display text-xl italic leading-relaxed text-ink">
              “{about.philosophy}”
            </blockquote>

            {showLearnMore && (
              <div className="mt-9">
                <Button href="/about" size="lg">
                  Discover More <ArrowUpRight size={17} />
                </Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
