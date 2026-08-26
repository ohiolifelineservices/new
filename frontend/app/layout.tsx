import type { Metadata } from "next"
import { Outfit, Manrope } from "next/font/google"
import "./globals.css"
import { SmoothScrollProvider } from "@/lib/smooth-scroll"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { OrderFormProvider } from "@/components/order-form-context"
import { Toaster } from "@/components/ui/sonner"
import { organizationSchema, websiteSchema } from "@/lib/schema-data"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "600", "700", "800"] })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://metroconet.com"),
  title: { default: "Metroconet | Order Metronet Fiber Internet", template: "%s | Metroconet" },
  description:
    "Metroconet is an independent authorized retailer for new Metronet fiber internet. Compare plans, see pricing, and order Metronet service today.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Metroconet",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} dark`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <GoogleAnalytics />
        <SmoothScrollProvider>
          <OrderFormProvider>
            <div className="grain-overlay" aria-hidden="true" />
            <Navigation />
            <main className="min-h-screen pb-16 lg:pb-0">{children}</main>
            <Footer />
            <StickyMobileCTA />
            <Toaster />
          </OrderFormProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
