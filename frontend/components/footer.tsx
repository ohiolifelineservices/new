import Link from "next/link"
import { states, stateToSlug } from "@/lib/city-data"
import { SUPPORT_PHONE } from "@/lib/commercial-data"

export function Footer() {
  const stateNames = Object.keys(states)

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8" data-testid="site-footer">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
          <div className="col-span-2">
            <p className="font-display font-extrabold text-2xl text-white mb-3">
              Metro<span className="text-mc-purple">co</span>net
            </p>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Metroconet is an independent authorized retailer for new Metronet service.
              We help you shop, compare, and start new Metronet fiber internet service.
            </p>
          </div>
          <div>
            <p className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">Shop</p>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><Link href="/plans-pricing" className="hover:text-white" data-testid="footer-link-plans">Plans & Pricing</Link></li>
              <li><Link href="/promotions" className="hover:text-white" data-testid="footer-link-promotions">Promotions</Link></li>
              <li><Link href="/why-metronet" className="hover:text-white" data-testid="footer-link-why">Why Metronet</Link></li>
              <li><Link href="/check-availability" className="hover:text-white" data-testid="footer-link-availability">Check Availability</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">Company</p>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><Link href="/support" className="hover:text-white" data-testid="footer-link-support">Support</Link></li>
              <li><Link href="/contact-us" className="hover:text-white" data-testid="footer-link-contact">Contact Us</Link></li>
              <li><Link href="/careers" className="hover:text-white" data-testid="footer-link-careers">Careers</Link></li>
              <li><Link href="/metronet-state" className="hover:text-white" data-testid="footer-link-service-areas">Service Areas</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-display font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</p>
            <ul className="space-y-2.5 text-sm text-white/50">
              {stateNames.slice(0, 4).map((s) => (
                <li key={s}>
                  <Link href={`/metronet-state/${stateToSlug(s)}`} className="hover:text-white" data-testid={`footer-link-state-${stateToSlug(s)}`}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/40 text-xs max-w-2xl leading-relaxed">
            Metroconet is an independent authorized retailer for new Metronet service and is not Metronet, Inc.
            Existing Metronet customers needing billing, outage, or technical support should contact official
            Metronet Customer Care at {SUPPORT_PHONE}.
          </p>
          <div className="flex gap-6 text-xs text-white/40 shrink-0">
            <Link href="/privacy-policy" className="hover:text-white" data-testid="footer-link-privacy">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white" data-testid="footer-link-terms">Terms &amp; Conditions</Link>
          </div>
        </div>
        <p className="text-white/30 text-xs mt-6">&copy; {new Date().getFullYear()} Metroconet. All rights reserved.</p>
      </div>
    </footer>
  )
}
