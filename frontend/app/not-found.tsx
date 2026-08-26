import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6" data-testid="not-found-page">
      <p className="text-mc-purple font-display font-bold text-sm uppercase tracking-widest mb-3">404</p>
      <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-4">Page not found</h1>
      <p className="text-white/60 max-w-md mb-8">
        This page moved or never existed. Check out current plans and pricing, or see if Metronet fiber is available at your address.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/plans-pricing" className="bg-mc-purple text-white font-display font-bold px-8 py-3 rounded-full" data-testid="not-found-plans-link">
          View Plans &amp; Pricing
        </Link>
        <Link href="/check-availability" className="border border-white/20 text-white font-display font-semibold px-8 py-3 rounded-full" data-testid="not-found-availability-link">
          Check Availability
        </Link>
      </div>
    </div>
  )
}
