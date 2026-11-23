"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: "fade" | "rise" | "slide" | "image";
  /** "mount" animates on load (hero); "view" animates when scrolled into view. */
  trigger?: "mount" | "view";
  className?: string;
}

const variants = {
  fade: { hidden: { opacity: 0 }, shown: { opacity: 1 } },
  rise: { hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } },
  // "slide" and "image" never hide content (no opacity change) so above-the-fold text and the LCP image paint immediately.
  slide: { hidden: { y: 14 }, shown: { y: 0 } },
  image: { hidden: { scale: 1.04 }, shown: { scale: 1 } },
};

export function Reveal({ children, delay = 0, variant = "rise", trigger = "view", className }: RevealProps) {
  const transition = { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };

  if (trigger === "mount") {
    return (
      <motion.div className={className} variants={variants[variant]} initial="hidden" animate="shown" transition={transition}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
