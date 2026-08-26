import Marquee from "react-fast-marquee"

const ITEMS = [
  "100% FIBER NETWORK",
  "SYMMETRICAL SPEEDS",
  "NO DATA CAPS",
  "NO ANNUAL CONTRACTS",
  "FIRST MONTH FREE",
]

export function MarqueeStrip() {
  return (
    <div className="bg-mc-purple py-3 border-y border-black/20" data-testid="marquee-strip">
      <Marquee gradient={false} speed={45} pauseOnHover>
        {ITEMS.concat(ITEMS).map((item, i) => (
          <span key={i} className="text-white font-display font-bold text-sm md:text-base uppercase tracking-[0.15em] px-8">
            {item} <span className="opacity-50">&bull;</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
