import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outline-light" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 ease-out motion-safe:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-sm hover:bg-primary-dark",
  secondary: "border border-primary/30 bg-surface text-primary-dark hover:border-primary hover:bg-primary-soft",
  light: "bg-white text-primary-dark hover:bg-primary-soft",
  "outline-light": "border border-white/50 text-white hover:border-white hover:bg-white/10",
  ghost: "text-primary-dark hover:bg-primary-soft",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-[0.95rem]",
  lg: "min-h-12 px-6 py-3 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, target, rel, ...anchorRest } = rest as LinkButtonProps;
    const external = /^(https?:|mailto:|tel:)/.test(href);
    if (external) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
