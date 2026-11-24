import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function ToothGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7.2 3.5C4.9 3.5 3.2 5.3 3.2 7.6c0 2 .7 3.2 1.2 5 .5 1.8.6 5.6 1.7 8.4.3.8 1.4.8 1.7 0 .6-1.6.9-3.9 1.4-4.9.3-.7.9-.7 1.2 0 .5 1 .8 3.3 1.4 4.9.3.8 1.4.8 1.7 0 1.1-2.8 1.2-6.6 1.7-8.4.5-1.8 1.2-3 1.2-5 0-2.3-1.7-4.1-4-4.1-1.5 0-2.5.6-4.8.6s-3.4-.6-4.8-.6Z" />
    </svg>
  );
}

/** "Dr. Muhammad Siraj" -> "Dr. Siraj". Used on small screens so the header never overflows. */
function getShortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 2) return fullName.trim();
  const hasTitle = /^dr\.?$/i.test(parts[0] ?? "");
  const last = parts[parts.length - 1] ?? fullName;
  return hasTitle ? `${parts[0]} ${last}` : last;
}

export function BrandMark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  const fullName = siteConfig.doctor.name;
  const shortName = getShortName(fullName);

  return (
    <Link
      href="/"
      aria-label={`${fullName} home`}
      className={cn("group inline-flex min-w-0 items-center gap-2", className)}
    >
      {siteConfig.logo ? (
        <Image
          src={siteConfig.logo}
          alt=""
          width={42}
          height={42}
          priority
          className="size-10 shrink-0 object-contain"
        />
      ) : (
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl",
            isLight ? "bg-white text-primary" : "bg-primary text-white",
          )}
        >
          <ToothGlyph className="size-6" />
        </span>
      )}

      <span className="flex min-w-0 flex-col gap-1">
        <span
          className={cn(
            "truncate font-display text-base font-bold uppercase leading-none tracking-tight sm:text-lg",
            isLight ? "text-white" : "text-ink",
          )}
        >
          {/* Short name on phones, full name from the sm breakpoint up */}
          <span className="sm:hidden">{shortName}</span>
          <span className="hidden sm:inline">{fullName}</span>
        </span>

        <span
          className={cn(
            "truncate text-[10px] font-medium uppercase leading-none tracking-wider",
            isLight ? "text-white/70" : "text-muted",
          )}
        >
          General Dentist · Dental Surgeon
        </span>
      </span>
    </Link>
  );
}