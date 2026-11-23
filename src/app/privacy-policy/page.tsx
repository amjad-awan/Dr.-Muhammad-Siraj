import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name}'s website handles the information you share when you contact the clinic.`,
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    title: "What this website does with your details",
    body: "When you use the appointment form, the details you enter are combined into a WhatsApp message on your own device. This website does not store them in a database and does not send them to our servers. The message only reaches the clinic when you press send in WhatsApp.",
  },
  {
    title: "WhatsApp",
    body: "Messages sent through WhatsApp are handled by WhatsApp under its own terms and privacy policy. Please avoid sharing detailed medical information in your first message. Our team will tell you what is needed at your appointment.",
  },
  {
    title: "Appointment confirmation",
    body: "Sending a request does not reserve a time. An appointment is confirmed only after the clinic replies to you.",
  },
  {
    title: "Questions",
    body: "If you have questions about how your information is handled, please contact the clinic through WhatsApp or the contact details on our contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy policy"
        description="A plain-language summary of how this website handles the information you share with us."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]}
      />
      <section className="section-space">
        <div className="container-page max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-3xl">{section.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}
          <p className="text-sm text-muted">
            This summary describes how the website works. The clinic should have it reviewed to ensure it meets local legal requirements before launch.
          </p>
        </div>
      </section>
    </>
  );
}
