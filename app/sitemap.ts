import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2026-05-12");

  return [
    {
      url: siteUrl.toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
