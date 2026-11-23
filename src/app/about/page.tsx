import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { TeamSection } from "@/components/home/TeamSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}: personalised dental care, clear communication and a comfortable environment for every patient.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${siteConfig.name}`}
        description={siteConfig.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutSection showLearnMore={false} />
      <WhyChooseUs />
      <TeamSection />
      <AppointmentSection />
    </>
  );
}
