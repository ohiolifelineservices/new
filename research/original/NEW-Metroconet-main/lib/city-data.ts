// This file contains the states and cities data used throughout the site

export const states = {
  Colorado: ["Colorado Springs"],
  Florida: [
    "Altamonte Springs",
    "Apopka",
    "Daytona Beach",
    "Flagler Beach",
    "Longwood",
    "Maitland",
    "Orlando",
    "Ormond Beach",
    "Palm Coast",
    "Port Orange",
    "South Daytona",
    "Tallahassee",
  ],
  Iowa: [
    "Altoona",
    "Ames",
    "Ankeny",
    "Bettendorf",
    "Clive",
    "Coralville",
    "Davenport",
    "Des Moines",
    "Gilbert",
    "Grimes",
    "Hampton",
    "Iowa City",
    "Iowa Falls",
    "Jewell",
    "Johnston",
    "Le Claire",
    "Mason City",
    "Nevada",
    "Norwalk",
    "Pleasant Hill",
    "Polk City",
    "Sheffield",
    "Sioux City",
    "Urbandale",
    "Waterloo",
    "West Des Moines",
  ],
  Illinois: [
    "Batavia",
    "Bloomington",
    "Bristol",
    "Carbon Cliff",
    "Colona",
    "Cortland",
    "DeKalb",
    "East Moline",
    "Elburn",
    "Elgin",
    "Geneva",
    "Genoa",
    "Hampton",
    "Le Roy",
    "Milan",
    "Moline",
    "Montgomery",
    "Naperville",
    "Normal",
    "North Aurora",
    "Oswego",
    "Plainfield",
    "Plano",
    "Rock Island",
    "Romeoville",
    "Sandwich",
    "St Charles",
    "Sugar Grove",
    "Sycamore",
    "Yorkville",
  ],
  Indiana: [
    "Bargersville",
    "Carmel",
    "Connersville",
    "Crawfordsville",
    "Fishers",
    "Franklin",
    "Granger",
    "Greencastle",
    "Greenwood",
    "Hanover",
    "Huntington",
    "Indianapolis",
    "La Fontaine",
    "Lafayette",
    "Lebanon",
    "Madison",
    "Marion",
    "New Castle",
    "New Whiteland",
    "Noblesville",
    "North Manchester",
    "North Vernon",
    "Osceola",
    "Pendleton",
    "Roanoke",
    "Seymour",
    "South Bend",
    "Thorntown",
    "Vincennes",
    "Wabash",
    "Warsaw",
    "West Lafayette",
    "Westfield",
    "Zionsville",
  ],
  Kentucky: ["Berea", "Lexington", "Midway", "Nicholasville", "Paint Lick", "Richmond", "Versailles", "Wilmore"],
  Michigan: [
    "Ann Arbor",
    "Climax",
    "Detroit",
    "Dimondale",
    "East Lansing",
    "Galesburg",
    "Grand Ledge",
    "Grand Rapids",
    "Haslett",
    "Holt",
    "Hudsonville",
    "Huntington Woods",
    "Jenison",
    "Kalamazoo",
    "Lansing",
    "Mattawan",
    "Okemos",
    "Portage",
    "Scotts",
    "Wyoming",
    "Ypsilanti",
  ],
  Minnesota: [
    "Adams",
    "Albertville",
    "Austin",
    "Belle Plaine",
    "Blooming Prairie",
    "Brownsdale",
    "Byron",
    "Cannon Falls",
    "Carver",
    "Chanhassen",
    "Clarks Grove",
    "Cleveland",
    "Cologne",
    "Delano",
    "Dexter",
    "Dundas",
    "Eagle Lake",
    "Elko New Market",
    "Ellendale",
    "Elysian",
    "Excelsior",
    "Eyota",
    "Faribault",
    "Geneva",
    "Glenville",
    "Hamburg",
    "Hayfield",
    "Hayward",
    "Henderson",
    "Hollandale",
    "Jordan",
    "Kasota",
    "Kenyon",
    "Kilkenny",
    "Lakeville",
    "Le Center",
    "Le Roy",
    "Le Sueur",
    "Lyle",
    "Madison Lake",
    "Mankato",
    "Mayer",
    "Nerstrand",
    "New Germany",
    "New Richland",
    "Northfield",
    "Norwood Young America",
    "Oakland",
    "Owatonna",
    "Prior Lake",
    "Rochester",
    "Rosemount",
    "Saint Paul",
    "Saint Peter",
    "Shakopee",
    "Stewartville",
    "Victoria",
    "Waconia",
    "Waseca",
    "Watertown",
    "Waterville",
    "Winsted",
    "Zumbro Falls",
  ],
  "North Carolina": [
    "Ayden",
    "Fayetteville",
    "Greenville",
    "Grimesland",
    "Havelock",
    "Hickory",
    "Hope Mills",
    "Jacksonville",
    "Linden",
    "Midway Park",
    "New Bern",
    "Parkton",
    "Raeford",
    "Rocky Mount",
    "Winterville",
  ],
  Nebraska: ["Bennington", "Elkhorn", "Omaha"],
  Ohio: [
    "Beavercreek",
    "Beavercreek Township",
    "Bellbrook",
    "Brookville",
    "Clayton",
    "Dayton",
    "Englewood",
    "Fairborn",
    "Findlay",
    "Medway",
    "New Carlisle",
    "Piqua",
    "Tipp City",
    "Toledo",
    "Troy",
    "Vandalia",
    "West Milton",
  ],
  Texas: ["Bryan"],
  Virginia: ["Norfolk"],
  Wisconsin: ["La Crosse", "Onalaska"],
}

// Flatten the cities array for easier access
export const cities = Object.values(states).flat()

// Utility function to convert a city name to a URL-friendly slug
export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, "-")
}

// Utility function to convert a slug back to a city name
export function slugToCity(slug: string): string {
  // First try to find an exact match by converting cities to slugs
  for (const city of cities) {
    if (cityToSlug(city) === slug) {
      return city
    }
  }

  // Fallback: convert the slug to a readable format
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Get all cities as an array of slugs
export function getAllCitySlugs(): string[] {
  return cities.map(cityToSlug)
}

// Get all cities with their state information
export function getAllCitiesWithStates(): Array<{ city: string; state: string }> {
  const result: Array<{ city: string; state: string }> = []

  Object.entries(states).forEach(([state, stateCities]) => {
    stateCities.forEach((city) => {
      result.push({
        city,
        state,
      })
    })
  })

  return result
}

// Find which state a city belongs to
export function getStateForCity(cityName: string): string | undefined {
  for (const [state, stateCities] of Object.entries(states)) {
    if (stateCities.includes(cityName)) {
      return state
    }
  }
  return undefined
}

// Get all cities for a specific state
export function getCitiesForState(state: string): string[] {
  return states[state as keyof typeof states] || []
}

// New cityData array for new components
export const cityData = cities.map((city) => {
  const state = getStateForCity(city)
  return {
    name: city,
    state: state || "",
    status: "active",
  }
})

// NEW: State slug conversion utilities
export function stateToSlug(state: string): string {
  return state.toLowerCase().replace(/\s+/g, "-")
}

export function slugToState(slug: string): string {
  // First try to find an exact match by converting states to slugs
  for (const state of Object.keys(states)) {
    if (stateToSlug(state) === slug) {
      return state
    }
  }

  // Fallback: convert the slug to a readable format
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Get all states as an array of slugs
export function getAllStateSlugs(): string[] {
  return Object.keys(states).map(stateToSlug)
}

// Get state abbreviation
export function getStateAbbreviation(state: string): string {
  const stateAbbreviations: Record<string, string> = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY",
    "District of Columbia": "DC",
  }

  return stateAbbreviations[state] || state
}

// Get state-specific data
export function getStateData(stateName: string) {
  // This would ideally come from a database or API
  // For now, we'll generate some realistic data based on the state name

  const stateSpecificData: Record<string, any> = {
    // Sample data for a few states
    Indiana: {
      description:
        "Indiana is one of Metronet's most established markets, with fiber service available in over 30 cities across the state. From Indianapolis to South Bend, Metronet provides Hoosiers with reliable, high-speed fiber internet.",
      launchYear: 2005,
      totalCities: states["Indiana"].length,
      totalFiberMiles: 3500,
      majorMarkets: ["Indianapolis", "South Bend", "Carmel", "Fishers", "Lafayette"],
      networkReliability: "99.98%",
      averageSpeed: "945 Mbps",
      stateSpecificOffers: [
        {
          name: "Indiana Family Plan",
          description:
            "Special pricing for Indiana families with students - includes enhanced parental controls and priority technical support.",
        },
        {
          name: "Hoosier Business Bundle",
          description: "Tailored for Indiana small businesses with dedicated fiber lines and static IP addresses.",
        },
      ],
      communityInitiatives: [
        {
          name: "Digital Indiana",
          description: "Partnership with state libraries to provide digital literacy programs and free WiFi hotspots.",
        },
        {
          name: "Hoosier Connectivity Fund",
          description: "Supporting internet access for low-income families throughout Indiana.",
        },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          location: "Indianapolis",
          quote:
            "Metronet's fiber service has transformed how our family uses the internet. From streaming to online learning, everything is faster and more reliable.",
        },
        {
          name: "Tech Solutions Inc.",
          location: "Carmel",
          quote:
            "As a tech company in Carmel, we depend on Metronet's symmetrical speeds for our cloud operations. Their business support has been exceptional.",
        },
      ],
      expansionPlans:
        "Metronet continues to expand throughout Indiana, with plans to add service to 5 additional communities by the end of 2025.",
    },
    Illinois: {
      description:
        "Illinois represents one of Metronet's largest service areas, with fiber internet available in 30 communities across the state. From Chicago suburbs to central Illinois cities, Metronet delivers high-performance fiber internet to Illinois residents and businesses.",
      launchYear: 2008,
      totalCities: states["Illinois"].length,
      totalFiberMiles: 3200,
      majorMarkets: ["Naperville", "Bloomington", "Normal", "Romeoville", "Plainfield"],
      networkReliability: "99.97%",
      averageSpeed: "952 Mbps",
      stateSpecificOffers: [
        {
          name: "Illinois Education Connection",
          description: "Special rates for educators and students at Illinois schools and universities.",
        },
        {
          name: "Prairie State Business Fiber",
          description: "Customized fiber solutions for Illinois businesses with multi-location options.",
        },
      ],
      communityInitiatives: [
        {
          name: "Connected Illinois",
          description: "Working with community organizations to expand digital access across Illinois.",
        },
        {
          name: "Illinois Rural Broadband Initiative",
          description: "Bringing fiber internet to underserved communities throughout the state.",
        },
      ],
      testimonials: [
        {
          name: "Michael Chen",
          location: "Naperville",
          quote:
            "After switching to Metronet, our home office setup is finally reliable. Video conferences are crystal clear and file uploads are instantaneous.",
        },
        {
          name: "Bloomington Medical Group",
          location: "Bloomington",
          quote:
            "Metronet's fiber network has been crucial for our telemedicine services. The reliability and speed make a real difference for our patients.",
        },
      ],
      expansionPlans:
        "Metronet is actively expanding in the Chicago suburbs and central Illinois, with plans to reach 10 new communities by 2026.",
    },
    Minnesota: {
      description:
        "Minnesota is home to Metronet's extensive northern network, serving over 60 communities throughout the state. From the Twin Cities metro area to Rochester and beyond, Metronet provides Minnesotans with reliable fiber internet service.",
      launchYear: 2010,
      totalCities: states["Minnesota"].length,
      totalFiberMiles: 4100,
      majorMarkets: ["Rochester", "Saint Paul", "Lakeville", "Mankato", "Owatonna"],
      networkReliability: "99.95%",
      averageSpeed: "938 Mbps",
      stateSpecificOffers: [
        {
          name: "Minnesota Winter-Ready Network",
          description:
            "Enhanced reliability features designed specifically for Minnesota's challenging winter conditions.",
        },
        {
          name: "Land of 10,000 Lakes Business Package",
          description:
            "Specialized business fiber packages for Minnesota's diverse economy, from healthcare to manufacturing.",
        },
      ],
      communityInitiatives: [
        {
          name: "Minnesota Digital Inclusion Alliance",
          description: "Partnership with state agencies to expand internet access to rural Minnesota communities.",
        },
        {
          name: "Twin Cities Tech Bridge",
          description:
            "Supporting technology education and digital skills training throughout the Minneapolis-St. Paul region.",
        },
      ],
      testimonials: [
        {
          name: "Jennifer Anderson",
          location: "Rochester",
          quote:
            "Metronet's service has been rock-solid even during our harshest winter storms. Working from home is seamless with their fiber connection.",
        },
        {
          name: "Northland Manufacturing",
          location: "Mankato",
          quote:
            "Our production facilities rely on Metronet's business fiber for everything from inventory management to quality control systems.",
        },
      ],
      expansionPlans:
        "Metronet continues to expand throughout Minnesota, with a focus on bringing fiber to more rural communities in the northern and western regions of the state.",
    },
    // Default data for other states
    default: {
      description: `Metronet provides high-speed fiber internet service throughout ${stateName}, delivering symmetrical speeds, unlimited data, and exceptional reliability to residents and businesses across the state.`,
      launchYear: 2015,
      totalCities: states[stateName as keyof typeof states]?.length || 0,
      totalFiberMiles: 1000 + Math.floor(Math.random() * 3000),
      majorMarkets: states[stateName as keyof typeof states]?.slice(0, 5) || [],
      networkReliability: "99.9%",
      averageSpeed: "940 Mbps",
      stateSpecificOffers: [
        {
          name: `${stateName} Resident Special`,
          description: `Limited-time offer for ${stateName} residents: First month free plus a $100 Visa gift card with select plans.`,
        },
        {
          name: `${stateName} Business Fiber`,
          description: `Tailored fiber solutions for ${stateName} businesses with dedicated support and enhanced reliability.`,
        },
      ],
      communityInitiatives: [
        {
          name: `Connected ${stateName}`,
          description: `Working with local organizations to expand digital access across ${stateName}.`,
        },
        {
          name: `${stateName} Digital Future`,
          description: `Supporting technology education and digital literacy throughout ${stateName}.`,
        },
      ],
      testimonials: [
        {
          name: "Local Resident",
          location: states[stateName as keyof typeof states]?.[0] || stateName,
          quote: `Metronet's fiber service has transformed how our family uses the internet. From streaming to online learning, everything is faster and more reliable.`,
        },
        {
          name: "Local Business",
          location: states[stateName as keyof typeof states]?.[1] || stateName,
          quote: `As a business in ${stateName}, we depend on Metronet's symmetrical speeds for our operations. Their business support has been exceptional.`,
        },
      ],
      expansionPlans: `Metronet continues to expand throughout ${stateName}, with plans to add service to additional communities in the coming years.`,
    },
  }

  return stateSpecificData[stateName] || stateSpecificData.default
}
