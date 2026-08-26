"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metronet-Reseller-Logo_2022-MPLOp3RJ6LiT30VGJI05rudWyakJlI.png"
                alt="Metronet Authorized Reseller Logo"
                width={200}
                height={67}
                className="h-auto w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-4">Bringing high-speed fiber internet to communities across the nation.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100065153454961"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/metronetindy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/metronet_promos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/posts/jdbents_metronet-named-fastest-and-most-reliable-activity-7153967052288872448-T75v"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plans-pricing" className="text-gray-400 hover:text-white transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-gray-400 hover:text-white transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/why-metronet" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/check-availability" className="text-gray-400 hover:text-white transition-colors">
                  Check Availability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Metronet Authorized Reseller. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
