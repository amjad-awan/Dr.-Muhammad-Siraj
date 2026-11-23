import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({ title, description, as: Tag = "h2", tone = "dark", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Tag className={cn("text-4xl sm:text-5xl lg:text-[3.5rem]", tone === "light" ? "text-white" : "text-ink")}>
        {title}
      </Tag>
      {description ? (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "light" ? "text-white/80" : "text-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
