
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface HeroSlide {
  label: string;
  headline: string;
  highlight: string;
  description: string;
  image: string;
  imagePosition: string;
  tag: string;
  icon: typeof Heart;
  points: string[];
}

const slides: HeroSlide[] = [
  {
    label: "PERSONALISED DENTAL CARE",
    headline: "Your smile deserves",
    highlight: "exceptional care.",
    description:
      "Discover thoughtful dental care, personalised treatment plans and a friendly team dedicated to keeping your smile healthy.",
    image:
      "https://www.clinicdentaland.com/assets/dentaland-hero-clinic.jpg",
    imagePosition: "center",
    tag: "A better dental experience",
    icon: Heart,
    points: [
      "Personalised treatment",
      "Friendly dental team",
      "Patient-first approach",
    ],
  },
  {
    label: "COSMETIC DENTISTRY",
    headline: "Love your smile.",
    highlight: "Show it confidently.",
    description:
      "Explore cosmetic dental solutions designed to enhance your smile and help you feel more confident every day.",
    image:
      "https://www.aestheticdentalcenter.com/assets/images/smile-gallery-1.webp",
    imagePosition: "center",
    tag: "Confidence starts with a smile",
    icon: Sparkles,
    points: [
      "Smile enhancement",
      "Cosmetic dental care",
      "Natural-looking results",
    ],
  },
  {
    label: "GENTLE DENTAL EXPERIENCE",
    headline: "Relax. You're",
    highlight: "in caring hands.",
    description:
      "From your first consultation to your treatment journey, enjoy clear guidance and a comfortable, welcoming experience.",
    image:
      "https://static.tildacdn.com/tild3235-6361-4736-a365-643638316564/ChatGPT_Image_11__20.png",
    imagePosition: "center",
    tag: "Your comfort comes first",
    icon: ShieldCheck,
    points: [
      "Friendly consultations",
      "Clear treatment guidance",
      "Comfort-focused care",
    ],
  },
];

export function Hero() {
  const { hero } = siteConfig;
  const [active, setActive] = useState<number>(0);

  const current = slides[active];
const CurrentIcon = current?.icon ?? Stethoscope;
  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically advance and restart timer after manual navigation.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section
      aria-label="Dental clinic introduction"
      className="relative isolate min-h-[700px] overflow-hidden bg-[#142c28] text-white lg:min-h-[790px]"
    >
      {/* Background image transition */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.1 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url("${current?.image}")`,
            backgroundSize: "cover",
            backgroundPosition: current?.imagePosition,
          }}
        />
      </AnimatePresence>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102b27]/95 via-[#102b27]/80 to-[#102b27]/30" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102b27]/80 via-transparent to-black/10" />

      {/* Ambient decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[500px] rounded-full bg-primary/20 blur-[130px]" />

      <div className="container-page relative flex min-h-[700px] flex-col justify-center pb-36 pt-28 lg:min-h-[790px] lg:pb-40">

        {/* Main slide content */}
        <div className="max-w-3xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              {/* Label */}
              {/* <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-lg">
                <span className="size-2 animate-pulse rounded-full bg-primary" />

                <span className="text-xs font-semibold tracking-[0.2em] text-white/90">
                  {current?.label}
                </span>
              </div> */}

              {/* Headline */}
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[5.2rem]">
                {current?.headline}{" "}
                <span className="text-primary">
                  {current?.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-xl">
                {current?.description}
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="/#book" size="lg">
                  <CalendarDays className="mr-2 size-4" />
                  {hero.primaryCta}
                  <ArrowRight className="ml-2 size-4" />
                </Button>

                <Button href="/services" variant="secondary" size="lg">
                  {hero.secondaryCta}
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4">
                {current?.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="size-3 text-white" />
                    </span>

                    <span className="text-sm text-white/90">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating appointment card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute bottom-28 right-6 hidden max-w-[285px] rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl xl:block"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary">
              <WhatsAppIcon className="size-5" />
            </span>

            <div>
              <p className="font-semibold text-white">
                {hero.floatingNote.title}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-white/70">
                {hero.floatingNote.text}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom slider navigation */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-page flex items-center justify-between gap-4">

         

            {/* Current slide category */}
            <div className="hidden items-center gap-2 text-sm text-white/70 md:flex">
              <CurrentIcon className="size-4 text-primary" />
              <span>{current?.tag}</span>
            </div>

            {/* Previous / next */}
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous slide"
                className="flex size-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#142c28] sm:size-11"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex size-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white hover:text-[#142c28] sm:size-11"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
