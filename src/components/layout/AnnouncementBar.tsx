import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  const { enabled, text } = siteConfig.announcement;
  if (!enabled || !text) return null;

  return (
    <div className="bg-primary-dark px-4 py-2 text-center text-sm font-medium text-white/95">
      {text}
    </div>
  );
}
