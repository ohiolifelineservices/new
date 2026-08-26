import type { Metadata } from "next"
import WhyMetronetClient from "./why-metronet-client"
import { breadcrumbSchema } from "@/lib/schema-data"

export const metadata: Metadata = {
  title: "Why Metronet Fiber Internet",
  description:
    "Learn what makes Metronet's 100% fiber network different from cable — symmetrical speeds, multi-device performance, and what to expect from installation.",
  alternates: { canonical: "https://metroconet.com/why-metronet" },
}

export default function WhyMetronetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "https://metroconet.com" }, { name: "Why Metronet", url: "https://metroconet.com/why-metronet" }])) }} />
      <WhyMetronetClient />
    </>
  )
}
