import { AboutSection } from "@/components/home/AboutSection";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { LocationSection } from "@/components/home/LocationSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TeamSection } from "@/components/home/TeamSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustSection } from "@/components/home/TrustSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <TeamSection />
      <AppointmentSection />
      <Testimonials />
      <FAQ />
            <LocationSection />

      <FinalCTA />
    </>
  );
}
