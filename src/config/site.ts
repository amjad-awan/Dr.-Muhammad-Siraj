
import type { BusinessHours, SocialLink } from "@/types";
import { images } from "@/data/images";

/**
 * Central clinic configuration.
 *
 * Edit this file and files inside /src/data
 * to update website content.
 */

export const siteConfig = {
  // ---------- Identity ----------

  name: "Dr. Muhammad Siraj",

  tagline: "Professional Dental Care, Personalised to You",

  logo: "",

  description:
    "Dr. Muhammad Siraj is a General Dentist and Dental Surgeon in Port Saeed, Deira, Dubai, providing personalised dental care, restorations, crowns, bridges, veneers and dentures.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  locale: "en",

  // ---------- Professional Identity ----------

  doctor: {
    name: "Dr. Muhammad Siraj",

    title: "General Dentist / Dental Surgeon",

    specialty: "General & Restorative Dentistry",

    introduction:
      "Dedicated to helping patients maintain healthy teeth and confident smiles through thoughtful, personalised dental care.",

    location: "Port Saeed, Deira, Dubai, United Arab Emirates",
  },

  // ---------- Contact ----------

  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",

  phone: "",

  email: "",

  address: "Port Saeed, Deira, Dubai, United Arab Emirates",

  mapUrl: "",

  businessHours: [] as BusinessHours[],

  socialLinks: [] as SocialLink[],

  // ---------- Announcement Bar ----------

  announcement: {
    enabled: true,

    text: "Professional dental care in Port Saeed, Deira, Dubai.",
  },

  // ---------- Features ----------

  features: {
    // Prices remain hidden until confirmed by the clinic.
    showPrices: false,
  },

  // ---------- Booking ----------

  booking: {
    ctaLabel: "Book Appointment",

    timePreferences: [
      "Morning",
      "Afternoon",
      "Evening",
      "No preference",
    ],

    greeting:
      "Hello Dr. Muhammad Siraj, I would like to book a dental appointment.",

    closing:
      "Please let me know about your appointment availability.",
  },

  // ---------- Hero ----------

  hero: {
    label: "DR. MUHAMMAD SIRAJ | GENERAL DENTIST",

    headline:
      "Healthy Smiles Begin With Professional Care.",

    description:
      "Experience personalised dental care focused on your comfort, oral health and confidence. From routine dental care to restorative treatments, your smile deserves expert attention.",

    primaryCta: "Book an Appointment",

    secondaryCta: "Explore Dental Services",

    image: {
      ...images.patientExam,
      position: "50% 35%",
    },

    floatingNote: {
      title: "Consult Dr. Siraj",

      text:
        "Send an appointment request through WhatsApp and our team will confirm availability.",
    },
  },

  // ---------- SEO ----------

  seo: {
    title:
      "Dr. Muhammad Siraj | Dentist in Port Saeed, Deira, Dubai",

    titleTemplate: "%s | Dr. Muhammad Siraj",

    description:
      "Looking for a dentist in Deira, Dubai? Visit Dr. Muhammad Siraj, General Dentist and Dental Surgeon in Port Saeed, offering personalised dental care, restorations, crowns, bridges, veneers and dentures.",

    ogImage: `${images.patientExam.src.split("?")[0]}?auto=format&fit=crop&w=1200&h=630&q=80`,

    twitterHandle: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
