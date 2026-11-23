"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  pathname: string;
  bookingLabel: string;
  whatsappHref: string;
}

export function MobileMenu({ open, onClose, items, pathname, bookingLabel, whatsappHref }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(22rem,90vw)] flex-col bg-background p-6 shadow-lift lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <BrandMark className="[&>span:last-child]:text-xl" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-xl text-ink hover:bg-primary-soft"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-10 flex flex-col">
              {items.map((item) => {
                const active = item.href === "/" ? pathname === "/" : !item.href.includes("#") && pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-14 items-center border-b border-line text-xl font-medium transition-colors",
                      active ? "text-primary-dark" : "text-ink hover:text-primary-dark",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <Button href="/#book" size="lg" onClick={onClose}>
                {bookingLabel}
              </Button>
              <Button href={whatsappHref} target="_blank" variant="secondary" size="lg">
                <WhatsAppIcon className="size-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
