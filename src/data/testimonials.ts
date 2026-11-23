import type { Testimonial } from "@/types";

/**
 * Only add genuine patient feedback that you have permission to publish.
 * While this list is empty the testimonials section is not rendered.
 *
 * Example entry:
 * { quote: "Exact words from the patient.", author: "First name or initials", context: "Treatment (optional)" }
 */
export const testimonials: Testimonial[] = [
  {
    name: "Faizana Rushdi",
    date: "5 months ago",
    review:
      "I had a wonderful experience with Mr. Siraj. I was suffering from severe pain in a tooth with a root canal crown, and after consulting him, I felt reassured by his professional and caring approach. His treatment relieved my pain.",
    featured: true,
  },
  {
    name: "HAFIS FAYIS",
    date: "5 months ago",
    review:
      "Dr. Siraj is a highly experienced and professional dentist who treats patients with patience and care. He explains procedures clearly, listens to concerns, and provides effective treatment at reasonable costs. Highly recommended.",
  },
  {
    name: "Atif Rehan",
    date: "1 year ago",
    review:
      "I had an excellent experience with Dr. Muhammad Siraj. He is not only highly skilled but also incredibly dedicated to his patients.",
  },
  {
    name: "murshida musthafa",
    date: "4 months ago",
    review:
      "I had a difficult and risky tooth condition, but the dentist handled it with great skill and care. The procedure went smoothly, and I am very happy with the result. I highly recommend this dentist.",
    featured: true,
  },
  {
    name: "Sahadiya Aseeb",
    date: "1 year ago",
    review:
      "Excellent Pediatric Care from Dr. Muhammad Siraj. He treated my son with great care and professionalism. He was kind, patient, and explained everything clearly. My son felt comfortable, and the treatment was effective.",
  },
  {
    name: "Dilsha Dilu",
    date: "1 year ago",
    review:
      "I recently had a tooth extraction performed by Dr. Muhammad Siraj, and I was thoroughly impressed by the entire experience. The procedure was so seamless that I didn't even realize the tooth had already been removed.",
  },
  {
    name: "Mahshooqa Suman",
    date: "1 year ago",
    review:
      "Recently I had a filling done by Dr. Muhammad Siraj, and I was very pleased with his perfectionism and deep knowledge. I had this filling done twice before by other dentists, but it was never quite right.",
    featured: true,
  },
  {
    name: "Sajna Ahmad",
    date: "1 year ago",
    review:
      "We had a wonderful experience with Dr. Siraj. My daughter had to get her first tooth extracted, and although she was scared, the doctor handled her with such calmness, patience, and care.",
  },
  {
    name: "Muhammad Savad EM",
    date: "1 year ago",
    review:
      "My son was treated by Dr. Mohammed Siraj, and I truly appreciate his kindness and expertise. His treatment helped relieve my son's toothache effectively. The doctor handled my hyperactive child with great patience and care.",
  },
  {
    name: "Emmanuel Joshua Ohene-Darko",
    date: "1 year ago",
    review:
      "It was an amazing customer experience from my first visit (free consultation) to my third appointment. Next two weeks will be my final appointment and I hope that will be another wow experience.",
  },
  {
    name: "Umer Choudhary",
    date: "1 year ago",
    review: "Best dental clinic in UAE.",
  },
  {
    name: "Basharat Chougle",
    date: "2 years ago",
    review:
      "Very proactive service. Polite to talk to. Inform every detail about treatment. Excellent cooperation from the doctor and staff.",
  },
  {
    name: "Amer Osama",
    date: "3 days ago",
    review:
      "A very respectable clinic. Dr. Mohamed Serag is very understanding and highly professional in his work; he resolved my dental issues in just two sessions, completely pain-free.",
    featured: true,
  },
];
