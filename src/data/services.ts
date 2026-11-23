import type { Service } from "@/types";
import { images } from "./images";

/**
 * Add, remove or reorder services here. The homepage, services pages,
 * booking form options, footer links and sitemap all read from this list.
 * The only price supplied (AED 599, Veneers) comes from a reference screenshot
 * and is hidden until `siteConfig.features.showPrices` is set to true.
 */
export const services: Service[] = [
  {
    slug: "dental-restoration",
    title: "Dental Restoration",
    summary:
      "Restore damaged or decayed teeth with treatments designed to improve tooth strength, function, and appearance.",
    overview:
      "Dental restoration repairs teeth that have been affected by decay, wear, or damage. Your dentist will examine the tooth, talk through the options that suit it, and explain what each one involves before anything begins.",
    consultationPoints: [
      "Tell us about any pain, sensitivity, or changes you have noticed.",
      "Your dentist will explain the recommended approach in plain language.",
      "You can ask about the steps, the number of visits, and aftercare.",
    ],
    image: { ...images.checkUp, position: "50% 40%" },
  },
  {
    slug: "dental-crown",
    title: "Dental Crown",
    summary:
      "Custom-made coverings that protect and restore damaged or weakened teeth.",
    overview:
      "A dental crown is a custom-made cap that fits over a tooth to protect it and restore its shape and function. Your dentist will assess whether a crown is the right option for the tooth in question.",
    consultationPoints: [
      "Your dentist will check the tooth and explain why a crown may or may not suit it.",
      "Ask about material choices and how the crown is matched to your teeth.",
      "Discuss how many visits to expect and how to care for the crown.",
    ],
    image: { ...images.dentalCloseUp, position: "50% 45%" },
  },
  {
    slug: "dental-bridge",
    title: "Dental Bridge",
    summary:
      "Fixed prosthetic restorations designed to replace missing teeth and restore your bite.",
    overview:
      "A dental bridge is a fixed restoration that fills the space left by one or more missing teeth. It is supported by neighbouring teeth, so your dentist will first look at their condition.",
    consultationPoints: [
      "Your dentist will examine the gap and the teeth beside it.",
      "Ask how a bridge compares with other tooth replacement options.",
      "Discuss everyday care, including cleaning around the bridge.",
    ],
    image: { ...images.dentalCloseUp, position: "50% 85%" },
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    summary:
      "Enhance your smile by improving the appearance of discoloured, uneven, or chipped teeth.",
    overview:
      "Veneers are thin, custom-made shells placed on the front of teeth to improve their colour, shape, or evenness. A consultation helps you and your dentist decide whether they suit your teeth and your goals.",
    consultationPoints: [
      "Share what you would like to change about your smile.",
      "Your dentist will check that your teeth and gums are suitable.",
      "Ask what to expect from the process and how veneers are looked after.",
    ],
    image: { ...images.patientExam, position: "50% 30%" },
    price: { amount: 599, currency: "AED", note: "Reference price from supplied screenshot. Confirm before publishing." },
  },
  {
    slug: "removable-dentures",
    title: "Removable Dentures",
    summary:
      "Removable prosthetic teeth designed to replace missing teeth and restore everyday oral function.",
    overview:
      "Removable dentures replace missing teeth and can be taken out for cleaning. Your dentist will talk with you about fit, comfort, and how they work alongside your remaining teeth.",
    consultationPoints: [
      "Describe any difficulty with eating or speaking.",
      "Ask how the denture is fitted and adjusted for comfort.",
      "Discuss daily cleaning and when to book a review.",
    ],
    image: { ...images.dentalRoom, position: "30% 50%" },
  },
  {
    slug: "flexible-denture",
    title: "Flexible Denture",
    summary:
      "Lightweight, flexible tooth replacement options designed for comfort and a natural appearance.",
    overview:
      "Flexible dentures are made from a lighter, more pliable material than traditional dentures. Your dentist can explain whether this option fits your situation and how it compares with others.",
    consultationPoints: [
      "Tell us what matters most to you: comfort, appearance, or both.",
      "Ask about suitability for the number and position of missing teeth.",
      "Discuss care and maintenance at home.",
    ],
    image: { ...images.treatmentRoom, position: "50% 50%" },
  },
  {
    slug: "complete-denture",
    title: "Complete Denture",
    summary:
      "Full dentures designed to replace an entire set of missing teeth.",
    overview:
      "A complete denture replaces all of the teeth in the upper jaw, the lower jaw, or both. Your dentist will guide you through the process, from the first conversation to fitting and follow-up.",
    consultationPoints: [
      "Your dentist will discuss your goals and what to expect at each stage.",
      "Ask how the denture is made and how many visits are involved.",
      "Talk through adjusting to a new denture and ongoing care.",
    ],
    image: { ...images.checkUp, position: "70% 60%" },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
