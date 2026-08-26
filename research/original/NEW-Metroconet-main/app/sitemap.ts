import type { MetadataRoute } from "next"
import { states, cityToSlug, stateToSlug } from "@/lib/city-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://metroconet.com"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/plans-pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/promotions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/check-availability`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-metronet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/metronet-state`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  // State pages
  const statePages: MetadataRoute.Sitemap = Object.keys(states).map((state) => ({
    url: `${baseUrl}/metronet-state/${stateToSlug(state)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // City pages (/city/[slug])
  const allCities = Object.values(states).flat()
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/city/${cityToSlug(city)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Metronet city pages (/metronet/[city])
  const metronetCityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/metronet/${cityToSlug(city)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...statePages, ...cityPages, ...metronetCityPages]
}
