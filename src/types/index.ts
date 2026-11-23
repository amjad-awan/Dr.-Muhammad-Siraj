export interface ImageAsset {
  src: string;
  alt: string;
  /** CSS object-position, e.g. "50% 30%". Useful to vary the crop of a shared photo. */
  position?: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Item is hidden from navigation until the named content exists. */
  requires?: "doctors";
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "x" | "youtube" | "tiktok" | "linkedin";
  url: string;
}

export interface BusinessHours {
  label: string;
  hours: string;
}

export interface ServicePrice {
  amount: number;
  currency: string;
  note?: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  /** General, non-clinical points that help a patient prepare for a consultation. */
  consultationPoints: string[];
  image: ImageAsset;
  /** Only displayed when siteConfig.features.showPrices is true. */
  price?: ServicePrice;
}

export interface Doctor {
  name: string;
  designation: string;
  qualifications?: string[];
  bio: string;
  photo?: ImageAsset;
}

export interface Testimonial {
  name: string;
  date: string;
  review: string;
  featured?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: "heart" | "sparkles" | "clipboard" | "armchair" | "message" | "shield" | "calendar";
}

export interface BookingFormValues {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;
