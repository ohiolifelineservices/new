import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// GSC-driven canonical map: these 42 markets perform better at /metronet/
// than /city/. For these, /city/[slug] 301s to /metronet/[slug]. For all
// other markets, /metronet/[slug] 301s to /city/[slug].
const METRONET_WINS = new Set([
  "tallahassee", "fayetteville", "lansing", "sioux-city", "omaha", "rochester",
  "naperville", "west-des-moines", "piqua", "new-castle", "la-crosse",
  "ormond-beach", "okemos", "shakopee", "wabash", "beavercreek", "saint-peter",
  "mayer", "thorntown", "northfield", "chanhassen", "saint-paul", "grimes",
  "elysian", "toledo", "jordan", "elburn", "holt", "englewood", "havelock",
  "west-milton", "plano", "byron", "new-germany", "stewartville", "brookville",
  "brownsdale", "le-roy", "la-fontaine", "pendleton", "henderson", "kenyon",
])

// Slug collisions: cities with duplicate names across states. Old undifferentiated
// slugs redirect to the first state's version.
const COLLISION_REDIRECTS: Record<string, string> = {
  "hampton": "hampton-ia",
  "geneva": "geneva-il",
  "le-roy": "le-roy-il",
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle /metronet/[slug] routes
  const metronetMatch = pathname.match(/^\/metronet\/([^/]+)\/?$/)
  if (metronetMatch) {
    const slug = metronetMatch[1]

    // If /metronet/ is the canonical for this market, let it through
    if (METRONET_WINS.has(slug)) {
      return NextResponse.next()
    }

    // Handle collision base slugs in /metronet/ context
    if (COLLISION_REDIRECTS[slug]) {
      const resolved = COLLISION_REDIRECTS[slug]
      const url = request.nextUrl.clone()
      url.pathname = METRONET_WINS.has(resolved) ? `/metronet/${resolved}` : `/city/${resolved}`
      return NextResponse.redirect(url, 301)
    }

    // Otherwise redirect to /city/ canonical
    const url = request.nextUrl.clone()
    url.pathname = `/city/${slug}`
    return NextResponse.redirect(url, 301)
  }

  // Handle /city/[slug] routes where /metronet/ is the canonical
  const cityMatch = pathname.match(/^\/city\/([^/]+)\/?$/)
  if (cityMatch) {
    const slug = cityMatch[1]

    // Handle collision base slugs in /city/ context
    if (COLLISION_REDIRECTS[slug]) {
      const resolved = COLLISION_REDIRECTS[slug]
      const url = request.nextUrl.clone()
      url.pathname = METRONET_WINS.has(resolved) ? `/metronet/${resolved}` : `/city/${resolved}`
      return NextResponse.redirect(url, 301)
    }

    // If /metronet/ is canonical for this market, redirect there
    if (METRONET_WINS.has(slug)) {
      const url = request.nextUrl.clone()
      url.pathname = `/metronet/${slug}`
      return NextResponse.redirect(url, 301)
    }
  }

  // Discontinued products
  if (pathname === "/5-gig" || pathname === "/5gig" || pathname === "/home-phone") {
    const url = request.nextUrl.clone()
    url.pathname = "/plans-pricing"
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/metronet/:path*", "/city/:path*", "/5-gig", "/5gig", "/home-phone"],
}
