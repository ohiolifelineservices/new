import type { Metadata } from "next"
import SupportClient from "./support-client"

// Update the metadata section with more targeted keywords and a better description
export const metadata: Metadata = {
  title: "Metronet Support & Help Center | Plans Starting at $60",
  description:
    "Get instant help with Metronet's 24/7 fiber internet support. Find troubleshooting guides, WiFi optimization tips, equipment setup help, and connect with our expert technical team. Plans starting at $60 with free installation and no deposit required.",
  keywords:
    "Metronet support, fiber internet help, Metronet customer service, internet troubleshooting, WiFi setup help, Metronet technical support, fiber internet problems, Metronet phone number, no deposit, free installation, unlimited data",
}

// Update the main component with improved content and structure
export default function Support() {
  return <SupportClient />
}
