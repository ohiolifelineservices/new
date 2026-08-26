import type { NextRequest } from "next/server"
import { getAllCitiesWithStates, cityToSlug } from "@/lib/city-data"

export async function GET(req: NextRequest) {
  const baseUrl = "https://metronet.com"
  const today = new Date().toISOString()

  // Get all city data
  const allCities = getAllCitiesWithStates()

  // Start building the XML content
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Metronet - Fiber Internet Provider</title>
    <link>${baseUrl}</link>
    <description>Metronet provides 100% fiber optic internet, TV, and phone services with no contracts and no data caps.</description>
    <language>en-us</language>
    <lastBuildDate>${today}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Metronet</title>
      <link>${baseUrl}</link>
    </image>

    <!-- Main Pages -->
    <item>
      <title>Metronet Fiber Internet, TV, and Phone Services</title>
      <link>${baseUrl}</link>
      <guid>${baseUrl}</guid>
      <pubDate>${today}</pubDate>
      <description>Discover Metronet's 100% fiber optic internet, TV, and phone services with no contracts and no data caps.</description>
    </item>
    <item>
      <title>Metronet Plans and Pricing</title>
      <link>${baseUrl}/plans-pricing</link>
      <guid>${baseUrl}/plans-pricing</guid>
      <pubDate>${today}</pubDate>
      <description>Explore Metronet's fiber internet plans and pricing options to find the perfect fit for your home or business.</description>
    </item>
    <item>
      <title>Current Metronet Promotions</title>
      <link>${baseUrl}/promotions</link>
      <guid>${baseUrl}/promotions</guid>
      <pubDate>${today}</pubDate>
      <description>Check out Metronet's latest promotions and special offers for new and existing customers.</description>
    </item>
    <item>
      <title>Why Choose Metronet</title>
      <link>${baseUrl}/why-metronet</link>
      <guid>${baseUrl}/why-metronet</guid>
      <pubDate>${today}</pubDate>
      <description>Learn why Metronet's 100% fiber network provides superior internet service compared to cable and DSL providers.</description>
    </item>`

  // Add the most recent city pages (limit to 20 to keep the feed manageable)
  allCities.slice(0, 20).forEach(({ city, state }) => {
    const citySlug = cityToSlug(city)
    xml += `
    <item>
      <title>Metronet Fiber Internet in ${city}, ${state}</title>
      <link>${baseUrl}/metronet-in-${citySlug}</link>
      <guid>${baseUrl}/metronet-in-${citySlug}</guid>
      <pubDate>${today}</pubDate>
      <description>Get information about Metronet's fiber internet service availability, plans, and pricing in ${city}, ${state}.</description>
    </item>`
  })

  // Close the XML
  xml += `
  </channel>
</rss>`

  // Return the XML with proper headers
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Cache-Control": "max-age=86400", // Cache for 24 hours
    },
  })
}
