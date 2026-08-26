import type { MetadataRoute } from "next"
import { getAllCitySlugs, getAllStateSlugs } from "@/lib/city-data"

const BASE_URL = "https://metroconet.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/plans-pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/promotions`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/why-metronet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/check-availability`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/metronet-state`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ]

  const statePages: MetadataRoute.Sitemap = getAllStateSlugs().map((slug) => ({
    url: `${BASE_URL}/metronet-state/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }))

  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/city/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...statePages, ...cityPages]
}
