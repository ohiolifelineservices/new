// Deterministic content variation for market pages. Every variant states only
// verifiable facts about the Metronet product (speeds, pricing, symmetry,
// data policy, contracts, install process). No invented local statistics,
// build dates, customer counts, reviews, or infrastructure claims.

function hash(input: string): number {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) % 100000
  }
  return h
}

export function pick<T>(slug: string, salt: number, options: T[]): T {
  return options[(hash(slug) + salt) % options.length]
}

export function cityIntro(city: string, state: string, abbr: string): string {
  return pick(city, 0, [
    `Metronet builds 100% fiber-optic internet to homes in ${city}, and Metroconet is where ${city} households compare those plans and place a new service order. Current speeds run from 500 Mbps to 2 Gig, every tier is symmetrical, and no plan carries a data cap or an annual contract.`,
    `If you are shopping for fiber internet in ${city}, ${abbr}, the practical question is which Metronet speed fits your household — and whether the line has reached your street. Metroconet handles both: compare all three plans below, then confirm serviceability at your exact address.`,
    `${city} homes on Metronet's fiber network get the same symmetrical speeds available anywhere else in ${state}: 500 Mbps, 1 Gig, or 2 Gig, with upload speed matching download on every plan, unlimited data, and no long-term contract.`,
    `Fiber internet in ${city} means something specific: a glass line to the home instead of shared copper coax, and an upload speed that matches your download. Metroconet is an independent authorized retailer for new Metronet service in ${city} and across ${state}.`,
  ])
}

export function cityAngle(city: string): { heading: string; body: string } {
  return pick(city, 7, [
    {
      heading: `What symmetrical upload changes for ${city} households`,
      body: `Cable internet in ${city} advertises a large download number and delivers an upload speed that is a fraction of it. That is the number that decides whether your video call holds up, whether a cloud backup finishes overnight, and whether uploading a few gigabytes of video takes minutes or hours. Every Metronet plan is symmetrical, so 1 Gig down is also 1 Gig up.`,
    },
    {
      heading: `Working and studying from home in ${city}`,
      body: `Remote work and online classes put pressure on the upload side of a connection, which is exactly where cable internet is weakest. In a ${city} household running two video calls, a game console, and a few streaming devices at the same time, symmetrical fiber bandwidth is what keeps all of them usable simultaneously rather than making the family take turns.`,
    },
    {
      heading: `Why device count matters less than simultaneous use in ${city}`,
      body: `The useful question is not how many devices are in your ${city} home — it is how many are doing something demanding at once. One or two light users are well served by 500 Mbps. Three or more people streaming, gaming, and working at the same time are the reason 1 Gig is the mainstream choice. Heavy uploads and large smart-home setups are where 2 Gig earns its extra $10 a month.`,
    },
    {
      heading: `Streaming and gaming on fiber in ${city}`,
      body: `Fiber's advantage for ${city} gamers and streamers is consistency, not just peak speed. Latency stays low and bandwidth stays stable when the rest of the household comes online in the evening, because fiber capacity does not degrade under neighborhood load the way shared coaxial cable does during peak hours.`,
    },
  ])
}

export function cityAvailabilityNote(city: string): string {
  return pick(city, 13, [
    `Metronet fiber is built out street by street, so coverage inside ${city} can differ between two addresses a block apart. Checking your zip confirms whether your area is an active market; your exact street address is verified during ordering.`,
    `Availability in ${city} is address-specific. New construction, multi-unit buildings, and the outer edges of the market are the most common cases where an area looks covered but an individual address still needs verification.`,
    `Because fiber requires a physical line to the home, ${city} coverage grows block by block. If your address isn't serviceable yet, joining the waitlist records your area so you hear about it when that changes.`,
  ])
}

export function cityFaqs(city: string, state: string, abbr: string) {
  return [
    {
      question: `Is Metronet fiber available throughout ${city}?`,
      answer: `Coverage can vary by street and address within ${city}. Enter your zip code in the availability checker to confirm your area, and your exact street address is verified during the ordering process.`,
    },
    {
      question: `What Metronet plans are available in ${city}, ${abbr}?`,
      answer: `Metroconet offers Metronet's current lineup in ${city}: 500 Mbps at $60/mo, 1 Gig at $70/mo, and 2 Gig at $80/mo, all with AutoPay. Every plan is symmetrical fiber with unlimited data and no annual contract.`,
    },
    {
      question: `How much does Metronet internet cost in ${city}?`,
      answer: `Pricing in ${city} matches Metronet's standard residential pricing: $60/mo for 500 Mbps, $70/mo for 1 Gig, and $80/mo for 2 Gig with AutoPay. First Month Free is available for eligible new customers.`,
    },
    {
      question: `Which Metronet plan is best for a ${city} home?`,
      answer: `1 Gig is the mainstream choice for most ${city} households running multiple devices, 4K streaming, gaming, and remote work. 500 Mbps suits one or two light users, and 2 Gig is worth the extra $10/mo for large households, heavy uploads, or smart-home setups.`,
    },
    {
      question: `How do I order Metronet service in ${city}?`,
      answer: `Choose a plan on this page and click Order Now. You'll enter your ${city} service address and pick a preferred install date and time window, and a confirmation follows by email.`,
    },
    {
      question: `Is there a data cap or contract on Metronet plans in ${city}?`,
      answer: `No. Every current Metronet residential plan includes unlimited data with no overage charges, and no annual contract is required.`,
    },
    {
      question: `Is Metroconet the same company as Metronet?`,
      answer: `No. Metroconet is an independent authorized retailer for new Metronet service in ${city} and across ${state}. Metronet is the fiber provider. Existing Metronet customers should contact official Metronet Customer Care for billing or technical support.`,
    },
  ]
}

export function stateIntroLong(state: string, marketCount: number, majorMarkets: string[]): string {
  const marketList = majorMarkets.slice(0, 5).join(", ")
  return `Metronet operates a 100% fiber-optic network across ${marketCount} ${
    marketCount === 1 ? "market" : "markets"
  } in ${state}, including ${marketList}. Every ${state} address on the network gets the same product: symmetrical upload and download speeds at 500 Mbps, 1 Gig, or 2 Gig, unlimited data with no overage charges, and no annual contract requirement. Metroconet is an independent authorized retailer for new Metronet service, which means you can compare those plans and place a new ${state} service order online.`
}
