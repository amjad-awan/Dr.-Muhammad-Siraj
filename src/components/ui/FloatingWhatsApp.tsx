
"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  const phone = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!phone) return null;

  const message = encodeURIComponent(
    "Hello Dr. Muhammad Siraj, I would like to book a dental appointment."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={27} strokeWidth={2} />

      {/* Waving rings */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <span className="absolute -inset-1 -z-10 animate-pulse rounded-full border-2 border-[#25D366]/50" />
    </a>
  );
}
