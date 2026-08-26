import { cn } from "@/lib/utils"

export function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return <div className={cn(className)}>{children}</div>
}
