import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { themeColor, themeToCssVars } from "@/config/theme";
import { doctors } from "@/data/doctors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/layout/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { MotionProvider } from "@/components/ui/MotionProvider";

const figtree = localFont({
  src: "./fonts/figtree-latin-wght-normal.woff2",
  variable: "--font-figtree",
  weight: "300 900",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "./fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.seo.title, template: siteConfig.seo.titleTemplate },
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "/",
    locale: "en",
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
    ...(siteConfig.seo.twitterHandle ? { site: siteConfig.seo.twitterHandle } : {}),
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = navigation.filter((item) => item.requires !== "doctors" || doctors.length > 0);

  return (
    <html
      lang={siteConfig.locale}
      className={`${figtree.variable} ${instrumentSerif.variable}`}
      style={themeToCssVars() as React.CSSProperties}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <AnnouncementBar />
          <Navbar items={navItems} bookingLabel={siteConfig.booking.ctaLabel} whatsappHref={buildWhatsAppUrl()} />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
        <JsonLd />
      </body>
    </html>
  );
}
