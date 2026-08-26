"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Plans & Pricing", href: "/plans-pricing" },
  { name: "Check Availability", href: "/check-availability" },
  { name: "Promotions", href: "/promotions" },
  { name: "Service Areas", href: "/metronet-state" },
  { name: "Why Choose Us", href: "/why-metronet" },
  { name: "Support & FAQ", href: "/support" },
  { name: "Contact Us", href: "/contact-us" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white fixed w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center">
        <div className="flex items-center justify-between h-14 w-full">
          <Link href="/" className="flex items-center mr-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metronet-Reseller-Logo_2022-MPLOp3RJ6LiT30VGJI05rudWyakJlI.png"
              alt="Metronet Authorized Reseller Logo"
              width={150}
              height={50}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-purple-400 relative group ${
                    pathname === item.href ? "text-purple-400" : "text-gray-300 hover:text-teal-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-current transform origin-left transition-transform duration-300 ${
                      pathname === item.href ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-purple-400 bg-gray-900"
                    : "text-gray-300 hover:text-purple-400 hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
