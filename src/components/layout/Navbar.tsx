"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  items: NavItem[];
  bookingLabel: string;
  whatsappHref: string;
}

export function Navbar({ items, bookingLabel, whatsappHref }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled ? "border-line bg-background/90 shadow-soft backdrop-blur-md" : "border-transparent bg-background",
        )}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <BrandMark />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {items.map((item) => {
              const isHashLink = item.href.includes("#");
              const active = item.href === "/" ? pathname === "/" : !isHashLink && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-[0.95rem] font-medium transition-colors",
                    active ? "text-primary-dark" : "text-ink/80 hover:text-primary-dark",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/#book" className="hidden sm:inline-flex">
              {bookingLabel}
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex size-11 items-center justify-center rounded-xl text-ink hover:bg-primary-soft lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        items={items}
        pathname={pathname}
        bookingLabel={bookingLabel}
        whatsappHref={whatsappHref}
      />
    </>
  );
}
