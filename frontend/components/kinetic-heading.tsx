import { cn } from "@/lib/utils"

// Pure CSS entrance animation (no JS/rAF dependency) so the kinetic hero
// reveal always resolves to a visible, readable state — critical for a
// conversion-first hero and for reliable crawlability/rendering.
export function KineticHeading({
  lines,
  className,
  as = "h1",
}: {
  lines: string[]
  className?: string
  as?: "h1" | "h2"
}) {
  const Tag = as
  return (
    <div>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <div className="animate-kinetic-reveal" style={{ animationDelay: `${i * 0.12 + 0.05}s` }}>
            <Tag className={cn(className)}>{line}</Tag>
          </div>
        </div>
      ))}
    </div>
  )
}
