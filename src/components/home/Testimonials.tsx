
"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
  MessageSquareQuote,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Testimonial } from "@/types";
import { testimonials } from "@/data/testimonials";





function GoogleMark() {
  return (
    <span
      aria-label="Google"
      className="font-bold tracking-tight"
    >
      <span className="text-[#4285F4]">G</span>
      <span className="sr-only">oogle</span>
    </span>
  );
}

function StarRating() {
  return (
    <div
      className="flex items-center gap-1"
      aria-label="5 out of 5 stars"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="size-4 fill-[#F5B942] text-[#F5B942]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-7"
    >
      {/* Decorative quote */}
      <Quote
        aria-hidden="true"
        className="absolute right-6 top-6 size-10 text-primary/10 transition-transform duration-300 group-hover:scale-110"
      />

      {/* Review header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-lg font-semibold text-primary-dark">
            {review.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {review.name}
            </h3>

            <p className="mt-1 text-xs text-muted">
              {review.date}
            </p>
          </div>
        </div>

        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-muted">
          <GoogleMark />
        </div>
      </div>

      {/* Stars */}
      <div className="mt-6">
        <StarRating />
      </div>

      {/* Review text */}
      <p className="mt-5 flex-1 text-[0.95rem] leading-[1.85] text-ink/75">
        "{review.review}"
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <span className="text-xs font-medium text-muted">
          Google Review
        </span>

        <span className="text-xs font-semibold text-primary-dark">
          Verified review
        </span>
      </div>

      {review.featured && (
        <div className="absolute left-0 top-0 h-1 w-full bg-primary/60" />
      )}
    </motion.article>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-background py-20 sm:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[400px] rounded-full bg-primary/5 blur-[100px]"
      />

      <div className="container-page relative">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2"
          >
            <GoogleMark />
            <span className="text-xs font-semibold tracking-wide text-muted">
              PATIENT EXPERIENCES
            </span>
          </motion.div>

          <motion.h2
            id="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Smiles That Speak{" "}
            <span className="text-primary">
              For Themselves.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Real experiences shared by patients who trusted Dr. Muhammad
            Siraj with their dental care.
          </motion.p>
        </div>

        {/* Google rating summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-5 rounded-2xl border border-line bg-surface px-6 py-5 shadow-sm sm:gap-8 sm:px-9"
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold tracking-tight text-ink">
              5.0
            </span>

            <div className="flex flex-col gap-1">
              <StarRating />
              <span className="text-xs text-muted">
                All supplied reviews
              </span>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-line sm:block" />

          <div className="text-center">
            <p className="text-xl font-bold text-ink">
              {testimonials.length}
            </p>
            <p className="text-xs text-muted">
              Patient testimonials
            </p>
          </div>

          <div className="hidden h-10 w-px bg-line sm:block" />

          <div className="flex items-center gap-2">
            <span className="text-2xl">
              <GoogleMark />
            </span>
            <span className="text-sm font-semibold text-ink">
              Google
            </span>
          </div>
        </motion.div>

        {/* Testimonial grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((review, index) => (
            <ReviewCard
              key={review.name}
              review={review}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary-soft text-primary-dark">
            <MessageSquareQuote className="size-5" />
          </div>

          <h3 className="text-xl font-semibold text-ink">
            Your smile matters to us.
          </h3>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Looking for personalised dental care? Get in touch with Dr.
            Muhammad Siraj to discuss your dental needs.
          </p>

          <a
            href="/#book"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book Your Appointment
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
