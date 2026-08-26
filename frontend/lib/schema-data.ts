// Accurate, minimal structured data. No fabricated reviews, ratings,
// employees, founders, awards, or LocalBusiness addresses/geo coordinates.

import { PLANS, SUPPORT_PHONE } from "./commercial-data"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Metroconet",
    url: "https://metroconet.com",
    description: "Metroconet is an independent authorized retailer for new Metronet fiber internet service.",
    sameAs: [],
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Metroconet",
    url: "https://metroconet.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://metroconet.com/check-availability?zip={zip}",
      "query-input": "required name=zip",
    },
  }
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Metronet Fiber Internet",
    brand: { "@type": "Brand", name: "Metronet" },
    description: "100% fiber-optic residential internet service with symmetrical upload and download speeds.",
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: `Metronet ${plan.name}`,
      price: plan.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://metroconet.com/plans-pricing",
    })),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function localServiceSchema(areaName: string, areaType: "City" | "State") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fiber Internet Retail",
    provider: { "@type": "Organization", name: "Metroconet" },
    areaServed: { "@type": areaType, name: areaName },
    brand: { "@type": "Brand", name: "Metronet" },
  }
}

export const SUPPORT_CONTACT_POINT = {
  "@type": "ContactPoint",
  telephone: SUPPORT_PHONE,
  contactType: "customer service",
  areaServed: "US",
  availableLanguage: "English",
}
