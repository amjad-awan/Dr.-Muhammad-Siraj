import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  if (faqs.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-space bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div id="faq-heading">
          <SectionHeading title="Frequently asked questions" description="Quick answers about treatments, booking, and how to reach us." />
        </div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
