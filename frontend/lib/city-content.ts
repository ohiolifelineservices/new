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

// --- INTROS: 12 distinct variants ---
export function cityIntro(city: string, state: string, abbr: string): string {
  return pick(city, 0, [
    `Metronet builds 100% fiber-optic internet to homes in ${city}, and Metroconet is where ${city} households compare those plans and place a new service order. Current speeds run from 500 Mbps to 2 Gig, every tier is symmetrical, and no plan carries a data cap or an annual contract.`,
    `If you are shopping for fiber internet in ${city}, ${abbr}, the practical question is which Metronet speed fits your household — and whether the line has reached your street. Metroconet handles both: compare all three plans below, then confirm serviceability at your exact address.`,
    `${city} homes on Metronet's fiber network get the same speed tiers available across ${state}: 500 Mbps, 1 Gig, or 2 Gig, with upload speeds designed to match download, unlimited data, and no long-term contract.`,
    `Fiber internet in ${city} means something specific: a glass line to the home instead of shared copper coax, and upload speeds designed to match your download. Metroconet is an independent authorized retailer for new Metronet service in ${city} and across ${state}.`,
    `Looking for high-speed internet in ${city}? Metronet's fiber network delivers symmetrical speeds starting at 500 Mbps and going up to 2 Gig. Every plan comes with unlimited data and no annual contract, and Metroconet lets you compare all options and order online.`,
    `${city} residents have access to Metronet's fiber-to-the-home network, which means a dedicated fiber line rather than shared bandwidth. Metroconet is an authorized retailer where you can compare the 500 Mbps, 1 Gig, and 2 Gig plans and order new service entirely online.`,
    `Metronet serves ${city}, ${abbr} with true fiber-optic internet — not hybrid fiber-coax, not fixed wireless, but fiber all the way to the home. Metroconet is where ${city} households shop those plans, check address-level availability, and place a new order.`,
    `For ${city} households ready to move past cable, Metronet offers three fiber plans with symmetrical upload and download speeds. Pricing starts at $60/mo for 500 Mbps with AutoPay, and every tier includes unlimited data with no overage fees and no long-term commitment.`,
    `Metroconet helps ${city} households order new Metronet fiber internet. The network runs fiber to each home rather than sharing a neighborhood node, which is why upload speeds match download on every plan — 500 Mbps, 1 Gig, or 2 Gig.`,
    `Searching for a fiber internet provider in ${city}, ${abbr}? Metronet's residential plans range from 500 Mbps to 2 Gig, all symmetrical, all unlimited, and all available without an annual contract. Compare pricing and order through Metroconet.`,
    `Metronet's ${city} fiber network delivers internet over a dedicated glass strand to your home. That architecture gives every plan — 500 Mbps, 1 Gig, and 2 Gig — a symmetrical speed profile that cable and DSL physically cannot match.`,
    `${city} is part of Metronet's ${state} fiber footprint. As an independent authorized retailer, Metroconet lets you compare all three speed tiers, confirm availability at your street address, and order new service without calling anyone.`,
  ])
}

// --- ANGLES: 12 distinct content blocks ---
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
    {
      heading: `How fiber handles peak evening hours in ${city}`,
      body: `Between 7 and 10 PM, cable networks typically share bandwidth across a neighborhood node. The more households streaming, the more congestion can build. Fiber runs a dedicated line to each home, which means speeds are generally more consistent during peak hours than shared-infrastructure alternatives.`,
    },
    {
      heading: `Cloud storage and backup speeds in ${city}`,
      body: `Backing up a phone full of photos over cable in ${city} can be slow because cable upload speeds typically top out at 10–35 Mbps. On a 1 Gig Metronet plan, upload speeds can reach up to 1,000 Mbps. The gap matters for anything that leaves your network: cloud drives, security camera feeds, remote desktop sessions, and shared files for work.`,
    },
    {
      heading: `Smart-home performance on fiber in ${city}`,
      body: `Many ${city} households now run a growing number of connected devices — TVs, phones, laptops, thermostats, cameras, voice assistants. Most of these pull light bandwidth individually, but they all communicate simultaneously. Fiber handles many concurrent low-level connections well because each home has its own dedicated line rather than sharing a cable node with neighboring homes.`,
    },
    {
      heading: `Video calls and screen sharing in ${city}`,
      body: `A single HD video call needs about 3–4 Mbps upload. Run two calls at once — one parent on a work meeting, one student in a virtual class — and add a security camera streaming to the cloud, and you need 10+ Mbps upload sustained. Cable plans in ${city} often cap upload at 10–35 Mbps total. Metronet's symmetrical fiber starts at 500 Mbps both directions.`,
    },
    {
      heading: `Comparing fiber and cable internet in ${city}`,
      body: `Cable providers in ${city} advertise download speeds that can look competitive on paper. The difference is architecture: cable runs a shared coaxial line from a neighborhood node, splitting bandwidth among connected homes. Fiber runs a dedicated strand of glass to each address. That generally means less shared congestion, symmetrical upload capability, and lower latency — differences that tend to be most noticeable during peak usage hours.`,
    },
    {
      heading: `Choosing between 500 Mbps, 1 Gig, and 2 Gig in ${city}`,
      body: `The right speed depends on what your ${city} household does simultaneously, not just device count. 500 Mbps handles one or two people streaming and browsing comfortably. 1 Gig is the mainstream pick for families juggling 4K streams, gaming, work calls, and homework at the same time. 2 Gig is only $10 more than 1 Gig — worth it for heavy uploaders, large households, or anyone who wants headroom.`,
    },
    {
      heading: `No data caps and no contracts in ${city}`,
      body: `Every current Metronet residential plan in ${city} includes unlimited data — no overage fees and no soft caps that degrade performance. There is also no annual contract required, so you are not locked into a speed tier or a promotional rate. Standard monthly pricing applies as long as you keep the service.`,
    },
    {
      heading: `What the installation process looks like in ${city}`,
      body: `After you pick a plan and confirm your ${city} address is serviceable, you choose a preferred install date and time window. A Metronet technician runs the fiber line to your home, installs the fiber gateway (included with the service), and gets your Wi-Fi running. Because there is no annual contract, you can adjust your plan at any time.`,
    },
  ])
}

// --- AVAILABILITY NOTES: 8 distinct variants ---
export function cityAvailabilityNote(city: string): string {
  return pick(city, 13, [
    `Metronet fiber is built out street by street, so coverage inside ${city} can differ between two addresses a block apart. Checking your zip confirms whether your area is an active market; your exact street address is verified during ordering.`,
    `Availability in ${city} is address-specific. New construction, multi-unit buildings, and the outer edges of the market are the most common cases where an area looks covered but an individual address still needs verification.`,
    `Because fiber requires a physical line to the home, ${city} coverage grows block by block. If your address isn't serviceable yet, joining the waitlist records your area so you hear about it when that changes.`,
    `Fiber construction in ${city} proceeds neighborhood by neighborhood. Two homes on the same street can have different availability today. Use the availability checker to confirm your area, and your exact address is verified when you place the order.`,
    `Not every ${city} address is served yet — Metronet is still actively expanding. Enter your zip code to check your area, and your exact street address is confirmed during the ordering process. If your block isn't live, the waitlist captures your interest.`,
    `Coverage in ${city} depends on whether Metronet's fiber construction has reached your specific street. The zip check tells you if your area is an active market; final confirmation happens against your service address during ordering.`,
    `${city} is an active Metronet market, but availability is determined street by street. The zip code checker above gives you a quick area confirmation. Your precise address is verified during the order process to ensure your home is serviceable.`,
    `Metronet's ${city} network expands as construction crews extend fiber through each neighborhood. If your address is serviceable today, you can order immediately. If not, the waitlist flags your area for notification when construction reaches your block.`,
  ])
}

// --- SECOND CONTENT BLOCK: 10 distinct variants (adds unique content to each city page) ---
export function citySecondaryContent(city: string, state: string): { heading: string; body: string } {
  return pick(city, 19, [
    {
      heading: `What "fiber to the home" actually means in ${city}`,
      body: `Some providers in ${city} market "fiber" when the fiber only reaches a neighborhood cabinet and the last stretch to your home runs over copper coax. Metronet's network is fiber to the premises — a glass strand runs from the exchange to your home. That is the architecture that enables symmetrical speeds and reduces the shared-node congestion common with cable during peak hours.`,
    },
    {
      heading: `How ${city} households use 1 Gig differently than 500 Mbps`,
      body: `500 Mbps is enough for a household of one or two people doing standard browsing, streaming, and video calls. The jump to 1 Gig matters when three or more people are doing bandwidth-heavy tasks at the same time: 4K streaming on multiple screens, uploading large files for work, running a game while someone else is on a video call. At $70/mo, it is $10 more than 500 Mbps — the most popular tier for a reason.`,
    },
    {
      heading: `Why ${city} renters and homeowners both benefit from no contracts`,
      body: `Metronet does not require an annual contract on any plan. For ${city} renters, that means you can start and stop service when a lease changes without paying an early termination fee. For homeowners, it means you can upgrade or downgrade your speed at any time without being locked into a tier that does not fit how your household actually uses the internet.`,
    },
    {
      heading: `Metronet's unlimited data policy in ${city}`,
      body: `Unlike some cable and satellite providers that impose monthly data caps (often 1 TB or 1.2 TB), every current Metronet residential plan in ${city} comes with unlimited data. There are no overage charges and no soft throttling after a threshold. If your household regularly uses 2+ TB per month from 4K streaming, cloud backups, and gaming downloads, this matters.`,
    },
    {
      heading: `Upload speed: the overlooked metric for ${city} internet shoppers`,
      body: `Most ${city} internet shoppers compare download speeds, but upload speed determines the quality of video calls, the time it takes to back up photos to the cloud, how quickly you can share large files, and whether your security cameras stream reliably. Cable plans typically deliver 10–35 Mbps upload even on their top tier. Metronet's 1 Gig plan delivers 1,000 Mbps upload.`,
    },
    {
      heading: `What to expect on install day in ${city}`,
      body: `After placing your order, you pick a preferred install date and time window. A technician arrives, runs the fiber line to your home, installs the included fiber gateway, and tests the connection. Because the gateway includes Wi-Fi, you do not need to buy a separate router — though you can use your own if you prefer.`,
    },
    {
      heading: `How Metronet pricing works in ${city}`,
      body: `Metronet's pricing in ${city} is straightforward: $60/mo for 500 Mbps, $70/mo for 1 Gig, and $80/mo for 2 Gig, all with AutoPay. The First Month Free promotion is available for eligible new customers, and eligibility is confirmed during the ordering process. No annual contract is required.`,
    },
    {
      heading: `Switching from cable to fiber in ${city}`,
      body: `If you are currently on a cable plan in ${city}, switching to Metronet fiber is straightforward. Order online, schedule your install, and cancel your cable service once the fiber gateway is running. Because Metronet has no annual contract, there is no commitment if you want to test the service. Most households notice the difference immediately on upload-heavy tasks: video calls, cloud sync, and large file transfers.`,
    },
    {
      heading: `How ${city} fiber compares for gaming`,
      body: `Online gaming cares more about latency and jitter than raw download speed. Fiber's dedicated line to each home means lower and more consistent latency than cable, which shares bandwidth across a neighborhood node. For competitive gamers in ${city}, that translates to fewer lag spikes, faster matchmaking, and more reliable connections during peak evening hours when the neighborhood is streaming.`,
    },
    {
      heading: `Is 2 Gig worth it for ${city} households?`,
      body: `At $80/mo — only $10 more than the 1 Gig plan — Metronet's 2 Gig tier is less of a luxury and more of a practical headroom choice. It makes sense for ${city} households with five or more simultaneous heavy users, home servers, frequent large uploads, or anyone planning to add bandwidth-intensive devices over the next few years. If you are on the fence between 1 Gig and 2 Gig, the $10 gap makes trying it low-risk.`,
    },
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
    {
      question: `What is included with Metronet installation in ${city}?`,
      answer: `Installation includes the fiber line to your home and a fiber gateway (Wi-Fi router) at no additional equipment cost. You pick your preferred install date and time window, and a technician handles the full setup.`,
    },
  ]
}

export function stateIntroLong(state: string, marketCount: number, majorMarkets: string[]): string {
  const marketList = majorMarkets.slice(0, 5).join(", ")
  return `Metronet operates a fiber-optic network across ${marketCount} ${
    marketCount === 1 ? "market" : "markets"
  } in ${state}, including ${marketList}. Residential plans are available at 500 Mbps, 1 Gig, or 2 Gig with unlimited data and no annual contract requirement. Metroconet is an independent authorized retailer for new Metronet service, which means you can compare those plans and place a new ${state} service order online.`
}
