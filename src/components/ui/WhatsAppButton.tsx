import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import type { ComponentProps } from "react";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
}

/** Opens a WhatsApp chat with the configured clinic number (wa.me: app on mobile, WhatsApp Web on desktop). */
export function WhatsAppButton({
  label = "Chat on WhatsApp",
  message,
  variant = "primary",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsAppUrl(message)}
      target="_blank"
      variant={variant}
      size={size}
      className={className}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {label}
    </Button>
  );
}
