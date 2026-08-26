// Accurate structured data. Only verifiable facts; no fabricated
// availability, ratings, reviews, employee counts, or office addresses.

import { PLANS } from "./commercial-data"

export function breadcrumbSchema(items: { name: string; url: string }[]) {
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

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

export function localServiceSchema(areaServed: string, level: "City" | "State") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Metronet Fiber Internet",
    provider: {
      "@type": "Organization",
      name: "Metroconet",
      url: "https://metroconet.com",
      description: "Independent authorized retailer for new Metronet fiber internet service.",
    },
    serviceType: "Internet Service Provider",
    areaServed: {
      "@type": level === "City" ? "City" : "State",
      name: areaServed,
    },
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price,
        priceCurrency: "USD",
        unitText: "MONTH",
        description: "Price with AutoPay",
      },
    })),
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metroconet",
  url: "https://metroconet.com",
  description: "Independent authorized retailer for new Metronet fiber internet service.",
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Metroconet",
  url: "https://metroconet.com",
  description: "Independent authorized retailer for new Metronet fiber internet service.",
}
