// Per-market canonical URL preference derived from GSC 28-day Pages export.
// Markets in this set historically perform better at /metronet/[slug] than
// /city/[slug]. For these, /metronet/ is the canonical and /city/ redirects
// to it. For all other markets, /city/ is canonical and /metronet/ redirects.

export const METRONET_CANONICAL_SLUGS = new Set([
  "tallahassee",
  "fayetteville",
  "lansing",
  "sioux-city",
  "omaha",
  "rochester",
  "naperville",
  "west-des-moines",
  "piqua",
  "new-castle",
  "la-crosse",
  "ormond-beach",
  "okemos",
  "shakopee",
  "wabash",
  "beavercreek",
  "saint-peter",
  "mayer",
  "thorntown",
  "northfield",
  "chanhassen",
  "saint-paul",
  "grimes",
  "elysian",
  "toledo",
  "jordan",
  "elburn",
  "holt",
  "englewood",
  "havelock",
  "west-milton",
  "plano",
  "byron",
  "new-germany",
  "stewartville",
  "brookville",
  "brownsdale",
  "le-roy",
  "la-fontaine",
  "pendleton",
  "henderson",
  "kenyon",
])

/** Return the canonical path for a given city slug. */
export function getCanonicalCityPath(slug: string): string {
  return METRONET_CANONICAL_SLUGS.has(slug) ? `/metronet/${slug}` : `/city/${slug}`
}
