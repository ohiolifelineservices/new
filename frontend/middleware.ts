import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// SEO consolidation: /metronet/[city] and /metronet/[city]/anything duplicated
// /city/[slug] for the same ~250 markets — a major source of the site-wide
// duplicate-content pattern implicated in the August 2026 ranking collapse.
// Every /metronet/[slug] URL now 301s to its canonical /city/[slug] page,
// preserving the market's search intent instead of diverting it to a
// generic state hub (which is what caused historically valuable, specific
// market URLs to lose their rankings).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const metronetCityMatch = pathname.match(/^\/metronet\/([^/]+)\/?$/)
  if (metronetCityMatch) {
    const url = request.nextUrl.clone()
    url.pathname = `/city/${metronetCityMatch[1]}`
    return NextResponse.redirect(url, 301)
  }

  // Discontinued products — send legacy URLs to the current plans page
  // instead of leaving inaccurate sales pages live.
  if (pathname === "/5-gig" || pathname === "/5gig" || pathname === "/home-phone") {
    const url = request.nextUrl.clone()
    url.pathname = "/plans-pricing"
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/metronet/:path*", "/5-gig", "/5gig", "/home-phone"],
}
