"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { useOrderForm } from "@/components/order-form-context"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/plans-pricing", label: "Plans & Pricing" },
  { href: "/promotions", label: "Promotions" },
  { href: "/why-metronet", label: "Why Metronet" },
  { href: "/check-availability", label: "Availability" },
  { href: "/support", label: "Support" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { openOrderForm } = useOrderForm()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-[72px]">
        <Link href="/" className="font-display font-extrabold text-2xl tracking-tight text-white" data-testid="nav-logo">
          Metro<span className="text-mc-purple">co</span>net
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace(/\//g, "")}`}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                pathname === link.href ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => openOrderForm()}
            data-testid="nav-order-now-button"
            className="group flex items-center gap-2 bg-mc-purple text-white font-display font-bold text-sm px-6 py-2.5 rounded-full hover:bg-mc-teal transition-all duration-300"
          >
            Order Now
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black px-6 py-4 flex flex-col gap-1" data-testid="mobile-menu">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-link-${link.href.replace(/\//g, "")}`}
              className="py-3 text-white/80 border-b border-white/5 text-base"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); openOrderForm() }}
            data-testid="mobile-nav-order-now-button"
            className="mt-4 bg-mc-purple text-white font-display font-bold py-3 rounded-full"
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  )
}
