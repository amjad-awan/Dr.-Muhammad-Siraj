import type { HighlightItem } from "@/types";
import { images } from "./images";

/** Page copy that belongs to the clinic rather than to the layout. */

export const trustHighlights: HighlightItem[] = [
  { icon: "heart", title: "Patient-focused care", description: "Every visit starts with listening." },
  { icon: "sparkles", title: "Modern dental treatments", description: "Restorative and cosmetic options." },
  { icon: "clipboard", title: "Personalised treatment plans", description: "Shaped around your needs and goals." },
  { icon: "armchair", title: "A comfortable environment", description: "Calm, clean, and unhurried." },
];

export const about = {
  heading: "Dental care that starts with a conversation",
  paragraphs: [
    "We believe good dentistry begins with understanding the person in the chair. Before any treatment, we take time to listen to your concerns, explain your options clearly, and agree on a plan that feels right for you.",
    "Our approach is simple: honest advice, careful work, and a relaxed setting where questions are always welcome.",
  ],
  philosophy: "Clear communication, comfortable visits, and care that looks after your teeth for the long term.",
  image: { ...images.treatmentRoom, position: "50% 50%" },
};

export const whyChoose: { heading: string; intro: string; points: HighlightItem[] } = {
  heading: "What patients can expect from us",
  intro: "The details that make a dental visit feel easier, from the first message to the follow-up.",
  points: [
    { icon: "heart", title: "A patient-centred approach", description: "Your comfort and questions guide each appointment." },
    { icon: "clipboard", title: "Personalised treatment planning", description: "Recommendations that fit your teeth, your goals, and your timeline." },
    { icon: "armchair", title: "A comfortable setting", description: "A calm, clean treatment space designed to put you at ease." },
    { icon: "sparkles", title: "Modern dental care", description: "Restorative and cosmetic treatments explained in plain language." },
    { icon: "message", title: "Clear communication", description: "You will know what is planned, why, and what to expect afterwards." },
    { icon: "shield", title: "A focus on long-term oral health", description: "Treatment that supports healthy teeth well beyond today's visit." },
  ],
};

export const finalCta = {
  headline: "Your Journey to a Healthier Smile Starts Here.",
  description: "Send us a message and we will help you with the next step.",
  image: { ...images.dentalRoom, position: "50% 50%" },
};

export const appointmentSection = {
  heading: "Let's Take Care of Your Smile",
  description:
    "Have a question or ready to book your visit? Send us a message and our team will help you with the next step.",
};
