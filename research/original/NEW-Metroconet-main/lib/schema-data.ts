// Structured data for the homepage
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MetroNet",
  url: "https://metroconet.com",
  logo: "https://metroconet.com/wp-content/themes/metronet/images/logo.svg",
  description: "MetroNet is a leading provider of 100% fiber optic internet, TV, and phone services.",
  foundingDate: "2005-01-01",
  founders: [
    {
      "@type": "Person",
      name: "John Cinelli",
      jobTitle: "President",
    },
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "1000+",
  },
  award: [
    "2024 Best Internet Service Provider - Consumer Choice Awards",
    "2023 Fastest Growing Fiber Provider - Broadband Industry Association",
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100065153454961",
    "https://twitter.com/metronetindy",
    "https://www.instagram.com/metronet_promos",
    "https://www.linkedin.com/posts/jdbents_metronet-named-fastest-and-most-reliable-activity-7153967052288872448-T75v",
  ],
}

// LocalBusiness schema with enhanced details
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MetroNet Authorized Reseller",
  image:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metronet-Reseller-Logo_2022-MPLOp3RJ6LiT30VGJI05rudWyakJlI.png",
  telephone: "1-877-407-3224",
  email: "support@metronetreseller.com",
  url: "https://metroconet.com",
  description:
    "Authorized reseller of MetroNet's 100% fiber optic internet services, providing high-speed connectivity with symmetrical upload and download speeds up to 5 Gbps.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Anytown",
    addressRegion: "US",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.006,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    geoRadius: "50mi",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fiber Internet Plans",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "500/500 Mbps Fiber Internet",
          description: "Fast fiber internet with 500 Mbps symmetrical speeds",
        },
        price: "60.00",
        priceCurrency: "USD",
        priceValidUntil: "2025-12-31",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "1Gb/1Gb Fiber Internet",
          description: "High-speed fiber internet with 1 Gbps symmetrical speeds",
        },
        price: "70.00",
        priceCurrency: "USD",
        priceValidUntil: "2025-12-31",
      },
    ],
  },
  review: {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.8",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "John Donovan",
    },
    reviewBody: "Metronet has transformed my online experience. The speeds are unbelievable!",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "856",
    bestRating: "5",
  },
}

// Enhanced FAQ schema with more detailed answers
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is fiber internet and how is it different from cable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiber internet uses fiber-optic cables to transmit data using light signals, resulting in significantly faster speeds and lower latency compared to traditional cable internet that uses copper wires. MetroNet's 100% fiber network offers symmetrical upload and download speeds (equally fast in both directions), unlike cable which typically has much slower upload speeds. Our fiber connection maintains consistent performance even during peak usage times, while cable internet often slows down when many people in your neighborhood are online. Additionally, fiber is more reliable and less susceptible to interference from weather conditions or electrical equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Is MetroNet available in my area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetroNet is rapidly expanding its fiber network across multiple states including Colorado, Florida, Iowa, Illinois, Indiana, Kentucky, Michigan, Minnesota, North Carolina, Nebraska, Ohio, Texas, Virginia, and Wisconsin. To check if MetroNet is available at your specific address, use our online availability checker tool or contact our customer service team at 1-877-407-3224. Even if we're not currently available at your location, you can register your interest and we'll notify you as soon as service becomes available in your neighborhood.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speeds does MetroNet offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MetroNet offers a range of high-speed internet plans to suit different needs and budgets. Our residential plans typically include: 500/500 Mbps ($60/mo), 1 Gig/1 Gig ($70/mo), 2 Gig/2 Gig ($80/mo), and 5 Gig/5 Gig (check pricing) in select areas. All our plans feature symmetrical upload and download speeds, meaning you get the same fast performance whether you're downloading large files or uploading videos to social media. Business plans with dedicated bandwidth and custom configurations are also available.",
      },
    },
    {
      "@type": "Question",
      name: "Does MetroNet have data caps or throttle internet speeds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, MetroNet does not impose data caps or throttle internet speeds on any of our plans. You can enjoy unlimited data usage with consistent high-speed performance, regardless of how much you stream, game, or download. This is a significant advantage over many cable and satellite providers who often implement data caps and may charge overage fees or slow down your connection after you reach a certain threshold. With MetroNet, you can use your internet as much as you want without worrying about unexpected charges or performance degradation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bundle internet with TV and phone services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MetroNet offers flexible bundle options that include fiber internet, TV, and phone services. Bundling can provide better value and simplify your billing with a single monthly statement. Our TV service offers a variety of channel packages to suit different viewing preferences, while our phone service includes unlimited local and long-distance calling within the US. Current bundle promotions may include discounted rates for the first few months of service, free installation, or equipment upgrades. Contact our sales team or check our website for the latest bundle deals and pricing in your area.",
      },
    },
  ],
}

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Metronet Authorized Reseller",
  url: "https://metroconet.com",
  datePublished: "2023-01-15",
  dateModified: "2025-04-10",
  description:
    "Official website of Metronet Authorized Reseller, providing high-speed fiber internet services with symmetrical speeds up to 5 Gbps.",
  publisher: {
    "@type": "Organization",
    name: "Metronet Authorized Reseller",
    logo: {
      "@type": "ImageObject",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Metronet-Reseller-Logo_2022-MPLOp3RJ6LiT30VGJI05rudWyakJlI.png",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://metroconet.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

// Breadcrumb schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://metroconet.com",
    },
  ],
}

// Service schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Metronet Fiber Internet",
  serviceType: "Internet Service Provider",
  provider: {
    "@type": "Organization",
    name: "Metronet Authorized Reseller",
  },
  description:
    "High-speed fiber internet service with symmetrical speeds up to 5 Gbps, no data caps, and no long-term contracts.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "60.00",
    highPrice: "80.00",
    priceCurrency: "USD",
    offerCount: "4",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  termsOfService: "https://metroconet.com/terms-and-conditions",
  audience: {
    "@type": "Audience",
    audienceType: "Residential and Business Customers",
  },
}
