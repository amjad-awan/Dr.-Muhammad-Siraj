import { Armchair, CalendarCheck, ClipboardList, HeartHandshake, MessageCircleHeart, ShieldCheck, Sparkles } from "lucide-react";
import type { HighlightItem } from "@/types";

const icons = {
  heart: HeartHandshake,
  sparkles: Sparkles,
  clipboard: ClipboardList,
  armchair: Armchair,
  message: MessageCircleHeart,
  shield: ShieldCheck,
  calendar: CalendarCheck,
} as const;

export function FeatureIcon({ name, className }: { name: HighlightItem["icon"]; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.6} />;
}
