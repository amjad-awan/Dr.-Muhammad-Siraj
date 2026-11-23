import type { ImageAsset } from "@/types";

/**
 * Verified free-to-use photos (Unsplash License). Photo IDs were checked on unsplash.com.
 * Replace with the clinic's own photography whenever available:
 * drop files in /public/images and point `src` to "/images/your-file.jpg".
 */
function unsplash(photoId: string, width: number, quality = 78): string {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const photoCredits = [
  { photographer: "SoyBreno", url: "https://unsplash.com/photos/z8BIWPwV3zo", use: "Patient examination" },
  { photographer: "Ozkan Guner", url: "https://unsplash.com/photos/aFqSRokmw2E", use: "Treatment room" },
  { photographer: "Ozkan Guner", url: "https://unsplash.com/photos/AQG6C_xYEpA", use: "Dental room" },
  { photographer: "Ozkan Guner", url: "https://unsplash.com/photos/7Mut2WMWttA", use: "Dental close-up" },
  { photographer: "Shedrack Salami", url: "https://unsplash.com/photos/7lBJaJpS3z4", use: "Dental check-up" },
] as const;

export const images = {
  patientExam: {
    src: unsplash("1681939282781-341ac4f61996", 1200),
    alt: "A patient being examined by a dentist in a bright treatment room",
  },
  treatmentRoom: {
    src: unsplash("1643660526741-094639fbe53a", 1200),
    alt: "A clean dental treatment room with a patient chair and overhead light",
  },
  dentalRoom: {
    src: unsplash("1643660527071-52e37cf7c7ea", 1600),
    alt: "A dental clinic room with a treatment chair and equipment",
  },
  dentalCloseUp: {
    src: unsplash("1663182234283-28941e7612da", 1000),
    alt: "Close view of a dental examination",
  },
  checkUp: {
    src: unsplash("1684607633251-8a4a8d94ddd2", 1000),
    alt: "A patient receiving a dental check-up",
  },
} satisfies Record<string, ImageAsset>;
