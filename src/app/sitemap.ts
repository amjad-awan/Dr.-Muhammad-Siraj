import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/services", "/contact", "/privacy-policy"];
  return [
    ...staticPages.map((path) => ({ url: absoluteUrl(path), changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...services.map((service) => ({ url: absoluteUrl(`/services/${service.slug}`), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
