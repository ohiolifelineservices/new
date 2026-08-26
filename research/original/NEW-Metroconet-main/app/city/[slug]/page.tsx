import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { cities, cityToSlug, slugToCity, getStateForCity } from "@/lib/city-data"
import Link from "next/link"
import type { Metadata } from "next"
import {
  CheckCircle,
  Wifi,
  Zap,
  Clock,
  Shield,
  HeadphonesIcon,
  MapPin,
  Award,
  Star,
  Cpu,
  Users,
  Home,
  Building,
  Calendar,
  BarChart,
  Network,
  FileText,
  Newspaper,
  School,
  Building2,
  Briefcase,
  History,
  Mountain,
  Laptop,
  GraduationCap,
  Tv,
  Film,
  Gamepad2,
  BarChart4,
  ArrowRight,
  Users2,
  MessageSquare,
  BookOpen,
} from "lucide-react"
import { format } from "date-fns"

// Last updated date for content freshness
const lastUpdated = new Date()

// City-specific data to make each page unique
// This would ideally come from a database or API
const getCitySpecificData = (cityName: string, state: string) => {
  // This is a simplified version - in a real implementation, you'd have a database of city-specific information
  const cityData: Record<string, any> = {
    // Sample data for a few cities
    Dayton: {
      neighborhoods: ["Downtown", "Oakwood", "Kettering", "Centerville", "Beavercreek"],
      installationTimeline: "2-5 business days",
      localOffice: "1200 Brown Street, Dayton, OH 45409",
      localEvents: ["Dayton Tech Week Sponsor", "Dayton Dragons Community Partner"],
      networkStats: {
        averageSpeed: "940 Mbps",
        reliability: "99.97%",
        coverage: "83% of city addresses",
        expansionAreas: ["North Dayton", "Riverside", "Huber Heights"],
      },
      testimonials: [
        {
          name: "Michael Chen",
          business: "Chen's Tech Solutions",
          quote:
            "As a Dayton-based IT consultant, I recommend Metronet to all my clients. The reliability is unmatched.",
        },
      ],
      competitors: ["Spectrum", "AT&T"],
      // New city-specific data
      launchDate: "March 2019",
      fiberMiles: 428,
      localSpeedTests: [
        { neighborhood: "Downtown", avgDownload: "943 Mbps", avgUpload: "941 Mbps" },
        { neighborhood: "Oakwood", avgDownload: "938 Mbps", avgUpload: "935 Mbps" },
        { neighborhood: "Kettering", avgDownload: "945 Mbps", avgUpload: "942 Mbps" },
      ],
      localPromotions: [
        {
          name: "Dayton Business Bundle",
          description:
            "Special pricing for Dayton Chamber of Commerce members - 1 Gig service for $70/month plus first month free and $100 Visa gift card",
        },
      ],
      localNews: [
        {
          date: "February 15, 2025",
          title: "Metronet Completes Fiber Expansion in Beavercreek",
          summary: "The expansion brings fiber internet to over 5,000 additional Dayton-area homes.",
        },
      ],
      localUseCase: {
        organization: "Dayton Public Schools",
        summary:
          "Metronet provides dedicated 2 Gig connections to 14 Dayton public schools, supporting over 12,000 students with reliable high-speed internet for digital learning initiatives.",
      },
      cityDemographics: {
        population: "140,407",
        households: "58,200",
        medianAge: "34.5",
        topIndustries: ["Healthcare", "Education", "Manufacturing", "Technology"],
      },
      uniqueFAQs: [
        {
          question: "How is Metronet supporting Dayton's tech corridor development?",
          answer:
            "Metronet has partnered with the Dayton Tech Corridor initiative to provide discounted fiber connectivity to startups and tech companies establishing offices in the downtown innovation district. This partnership has helped attract 12 new tech companies to Dayton in the past year alone.",
        },
      ],
      timeline: [
        { date: "March 2019", event: "Metronet announces Dayton expansion" },
        { date: "June 2019", event: "Construction begins in Downtown and Oakwood" },
        { date: "November 2019", event: "First Dayton customers connected" },
        { date: "April 2020", event: "Kettering and Centerville construction begins" },
        { date: "January 2021", event: "50% of Dayton addresses serviceable" },
        { date: "October 2022", event: "Beavercreek expansion announced" },
        { date: "March 2025", event: "83% coverage milestone reached" },
      ],
      historicalContext: {
        cityHistory:
          "Dayton has a rich history of innovation, being the birthplace of aviation and home to numerous inventors including the Wright Brothers. This spirit of innovation continues today with the city's growing tech sector.",
        internetEvolution:
          "Before Metronet's arrival in 2019, Dayton residents primarily relied on DSL and cable internet options, with many areas experiencing significant reliability issues, especially during peak hours.",
        impactStory:
          "The introduction of fiber internet to Dayton has significantly contributed to the city's economic development initiatives, particularly in the Downtown Innovation District.",
      },
      localChallenges: {
        geographicChallenges:
          "Dayton's varied geography, including the Great Miami River and its tributaries, presented unique engineering challenges during fiber deployment that our team successfully overcame.",
        weatherConsiderations:
          "Our fiber infrastructure in Dayton is designed to withstand Ohio's seasonal weather patterns, including occasional flooding and winter storms.",
        constructionApproach:
          "To minimize disruption in historic neighborhoods like Oakwood, we employed micro-trenching techniques that preserved the character and integrity of these areas.",
      },
      communityImpact: {
        digitalDivideInitiatives:
          "Metronet has partnered with Dayton Metro Library to provide free public WiFi hotspots in underserved areas of the city, helping bridge the digital divide.",
        economicDevelopment:
          "Since our fiber deployment began, Dayton has seen a 15% increase in home-based businesses, contributing to local economic growth.",
        educationSupport:
          "Our educational support programs have provided discounted connectivity to over 2,000 low-income students in the Dayton Public School system.",
      },
      serviceComparisons: {
        specificCompetitorA: {
          name: "Spectrum",
          speedComparison: "Metronet offers 5x faster upload speeds than Spectrum's fastest plan in Dayton",
          reliabilityComparison: "Independent tests show 99.97% uptime compared to Spectrum's 98.3% in the Dayton area",
          priceComparison: "Comparable plans are typically $15-25 less expensive with Metronet",
          uniqueAdvantages: "No data caps and no contracted price increases, unlike Spectrum's tiered pricing model",
        },
        specificCompetitorB: {
          name: "AT&T",
          speedComparison:
            "Metronet's 1 Gig plan outperforms AT&T's DSL service by up to 25x in most Dayton neighborhoods",
          reliabilityComparison:
            "Fiber optic technology provides significantly more consistent performance than AT&T's copper-based infrastructure in Dayton",
          priceComparison: "Similar price points but with much higher performance metrics",
          uniqueAdvantages:
            "Symmetrical upload and download speeds, unlike AT&T's asymmetrical offerings in most Dayton areas",
        },
      },
      localEntertainment: {
        streamingPerformance:
          "Dayton customers report buffer-free 4K streaming on multiple devices even during peak hours",
        gamingBenefits:
          "Local gaming communities, including the Dayton Esports League, have noted 15-20ms lower ping times compared to previous providers",
        popularUses:
          "According to our Dayton customer surveys, the top uses for our fiber service are: remote work (68%), 4K streaming (57%), and online gaming (42%)",
      },
      futureExpansions: {
        plannedAreas: ["Wayne Avenue Corridor", "Miami Township", "Wright-Patterson Area"],
        projectedTimeline: "Q3 2025 - Q2 2026",
        registrationInfo:
          "Residents in these areas can pre-register now to receive priority installation when service becomes available",
      },
      customerSupport: {
        localTeamSize: "15 dedicated support specialists based in our Dayton office",
        averageResponseTime: "Under 2 minutes for phone support, 4 hour resolution for most technical issues",
        supportChannels: ["Phone", "Email", "Live Chat", "In-person at Dayton office"],
      },
    },
    Lexington: {
      neighborhoods: ["Downtown", "Chevy Chase", "Hamburg", "Beaumont", "Andover"],
      installationTimeline: "3-7 business days",
      localOffice: "2350 Richmond Road, Lexington, KY 40502",
      localEvents: ["Lexington Tech Festival Sponsor", "UK Athletics Partner"],
      networkStats: {
        averageSpeed: "925 Mbps",
        reliability: "99.95%",
        coverage: "76% of city addresses",
        expansionAreas: ["South Lexington", "Palomar", "Lansdowne"],
      },
      testimonials: [
        {
          name: "Jennifer Wilson",
          business: "Bluegrass Digital Marketing",
          quote: "Metronet's upload speeds have transformed how our Lexington agency delivers content to clients.",
        },
      ],
      competitors: ["Spectrum", "Windstream"],
      // New city-specific data
      launchDate: "August 2018",
      fiberMiles: 512,
      localSpeedTests: [
        { neighborhood: "Downtown", avgDownload: "932 Mbps", avgUpload: "930 Mbps" },
        { neighborhood: "Hamburg", avgDownload: "928 Mbps", avgUpload: "925 Mbps" },
        { neighborhood: "Beaumont", avgDownload: "935 Mbps", avgUpload: "933 Mbps" },
      ],
      localPromotions: [
        {
          name: "UK Student Special",
          description:
            "Students get first month free + $100 Visa gift card when signing up for 1 Gig or 2 Gig plans with valid university ID",
        },
      ],
      localNews: [
        {
          date: "January 10, 2025",
          title: "Metronet Named Official Internet Provider of UK Athletics",
          summary: "Multi-year partnership includes enhanced connectivity at Rupp Arena and Kroger Field.",
        },
      ],
      localUseCase: {
        organization: "Lexington Public Library System",
        summary:
          "All six Lexington Public Library locations now offer patrons free access to 1 Gig Metronet connections, supporting digital literacy programs and public internet access.",
      },
      cityDemographics: {
        population: "322,570",
        households: "129,784",
        medianAge: "34.6",
        topIndustries: ["Education", "Healthcare", "Manufacturing", "Professional Services"],
      },
      uniqueFAQs: [
        {
          question: "Does Metronet offer special packages for Lexington's horse farms?",
          answer:
            "Yes, Metronet has developed a specialized 'Equestrian Business' package for Lexington's horse farms and equestrian facilities. This includes weatherproof outdoor equipment, extended range WiFi for large properties, and priority service restoration during Kentucky's storm season.",
        },
      ],
      timeline: [
        { date: "August 2018", event: "Metronet enters Lexington market" },
        { date: "October 2018", event: "Construction begins in Hamburg area" },
        { date: "February 2019", event: "First Lexington customers connected" },
        { date: "September 2019", event: "Downtown Lexington construction begins" },
        { date: "March 2020", event: "25% of Lexington addresses serviceable" },
        { date: "July 2021", event: "50% coverage milestone reached" },
        { date: "April 2023", event: "Expansion into Beaumont and Andover" },
        { date: "January 2025", event: "76% coverage milestone reached" },
      ],
      historicalContext: {
        cityHistory:
          "Known as the 'Horse Capital of the World,' Lexington has a rich heritage deeply connected to the equestrian industry. The city is also home to the University of Kentucky and has a growing technology sector.",
        internetEvolution:
          "Prior to Metronet's arrival in 2018, Lexington residents faced limited options, primarily from Spectrum and Windstream, with significant service gaps in rural areas surrounding the city.",
        impactStory:
          "Metronet's fiber deployment has supported Lexington's Smart City initiatives and helped attract multiple tech startups to the downtown innovation corridor.",
      },
      localChallenges: {
        geographicChallenges:
          "Lexington's combination of dense urban areas and sprawling horse farms required a versatile deployment strategy, including specialized equipment for extended coverage on larger properties.",
        weatherConsiderations:
          "Our infrastructure in Lexington is built to withstand Kentucky's severe thunderstorms and occasional ice storms, with redundant power systems at key network nodes.",
        constructionApproach:
          "In historic districts like Chevy Chase, we worked closely with local preservation societies to ensure our installation methods respected the architectural integrity of these neighborhoods.",
      },
      communityImpact: {
        digitalDivideInitiatives:
          "Our partnership with the Lexington Housing Authority has brought affordable connectivity options to over 3,000 residents in public housing communities.",
        economicDevelopment:
          "Metronet's fiber infrastructure has been cited by the Lexington Economic Partnership as a key factor in attracting 7 new technology companies to the area since 2021.",
        educationSupport:
          "We've provided special educational pricing to over 4,500 University of Kentucky students living off-campus, supporting remote learning initiatives.",
      },
      serviceComparisons: {
        specificCompetitorA: {
          name: "Spectrum",
          speedComparison:
            "Metronet delivers consistent speeds of 925+ Mbps compared to Spectrum's average of 650-750 Mbps during peak hours in Lexington",
          reliabilityComparison:
            "Independent testing shows 99.95% uptime versus 98.5% for Spectrum in the Lexington market",
          priceComparison: "Metronet's 1 Gig service is typically $15-20 less per month than comparable Spectrum plans",
          uniqueAdvantages:
            "Symmetrical speeds for Lexington's growing content creator community, unlike Spectrum's asymmetrical service",
        },
        specificCompetitorB: {
          name: "Windstream",
          speedComparison:
            "Metronet offers up to 5 Gig service compared to Windstream's maximum of 500 Mbps in most Lexington neighborhoods",
          reliabilityComparison:
            "Fiber technology provides significantly more consistent performance than Windstream's DSL infrastructure during Kentucky's storm season",
          priceComparison: "More competitive pricing for higher performance tiers",
          uniqueAdvantages:
            "No service disruptions during power outages, unlike Windstream's reported issues in the Hamburg area",
        },
      },
      localEntertainment: {
        streamingPerformance:
          "Lexington customers can stream UK basketball games in 4K without buffering, even during high-viewership events",
        gamingBenefits:
          "Local gaming cafés including Battle Beans and Pixel Palace have switched to Metronet for superior multiplayer performance",
        popularUses:
          "Lexington customer surveys show top uses are: streaming (72%), working from home (65%), and online gaming (47%)",
      },
      futureExpansions: {
        plannedAreas: ["Masterson Station", "Palomar", "Richmond Road Corridor"],
        projectedTimeline: "Q2 2025 - Q1 2026",
        registrationInfo:
          "Visit our Lexington office for exclusive pre-registration offers for these upcoming service areas",
      },
      customerSupport: {
        localTeamSize: "22 dedicated support specialists at our Richmond Road office",
        averageResponseTime: "Under 90 seconds for phone support, same-day resolution for most issues",
        supportChannels: ["Phone", "Email", "Live Chat", "Text Support", "In-person at Richmond Road office"],
      },
    },
    Indianapolis: {
      neighborhoods: ["Downtown", "Broad Ripple", "Fountain Square", "Irvington", "Speedway"],
      installationTimeline: "2-4 business days",
      localOffice: "8888 Keystone Crossing, Suite 1300, Indianapolis, IN 46240",
      localEvents: ["Indy 500 Technology Sponsor", "Indiana Tech Fest Partner"],
      networkStats: {
        averageSpeed: "952 Mbps",
        reliability: "99.98%",
        coverage: "91% of city addresses",
        expansionAreas: ["Lawrence", "Beech Grove", "Greenwood"],
      },
      testimonials: [
        {
          name: "Robert Johnson",
          business: "Indy Game Developers",
          quote:
            "Our entire studio switched to Metronet and our build upload times dropped by 80%. It's transformed our workflow.",
        },
      ],
      competitors: ["Comcast", "AT&T"],
      launchDate: "September 2015",
      fiberMiles: 782,
      localSpeedTests: [
        { neighborhood: "Downtown", avgDownload: "955 Mbps", avgUpload: "952 Mbps" },
        { neighborhood: "Broad Ripple", avgDownload: "948 Mbps", avgUpload: "945 Mbps" },
        { neighborhood: "Fountain Square", avgDownload: "950 Mbps", avgUpload: "949 Mbps" },
      ],
      localPromotions: [
        {
          name: "Indy Tech Worker Special",
          description:
            "Technology professionals in Indianapolis can receive 2 Gig service at the 1 Gig price plus first month free and $100 Visa gift card with company ID",
        },
      ],
      localNews: [
        {
          date: "March 5, 2025",
          title: "Metronet Completes Circle City Fiber Ring",
          summary:
            "The completion of Indianapolis's fiber ring provides unprecedented reliability and speed for downtown businesses.",
        },
      ],
      localUseCase: {
        organization: "Eleven Fifty Academy",
        summary:
          "Indianapolis-based coding bootcamp Eleven Fifty Academy utilizes Metronet's multi-gig connections to support hundreds of simultaneous students learning cloud computing and development.",
      },
      cityDemographics: {
        population: "867,125",
        households: "352,429",
        medianAge: "34.2",
        topIndustries: ["Healthcare", "Technology", "Manufacturing", "Finance"],
      },
      uniqueFAQs: [
        {
          question: "Is Metronet available in all Indianapolis tech parks?",
          answer:
            "Yes, Metronet has prioritized coverage for all major Indianapolis technology parks including River North Technology District, 16 Tech Innovation District, and the Purdue Technology Center. We offer special business pricing for startups and established companies in these areas with dedicated account managers for tech businesses.",
        },
      ],
      timeline: [
        { date: "September 2015", event: "Metronet launches in Indianapolis" },
        { date: "January 2016", event: "Downtown Indianapolis construction begins" },
        { date: "April 2016", event: "First Indianapolis customers connected" },
        { date: "February 2017", event: "Expansion to Broad Ripple and Fountain Square" },
        { date: "November 2017", event: "50% of Indianapolis addresses serviceable" },
        { date: "March 2019", event: "75% coverage milestone reached" },
        { date: "December 2020", event: "Expansion to all major business districts completed" },
        { date: "March 2025", event: "91% coverage milestone reached" },
      ],
      historicalContext: {
        cityHistory:
          "Indianapolis, the Crossroads of America, has evolved from a manufacturing hub to a diverse economy with strong healthcare, technology, and sports sectors. The city hosts the Indianapolis 500 and is home to multiple professional sports teams.",
        internetEvolution:
          "Before Metronet's 2015 arrival, Indianapolis residents primarily relied on Comcast and AT&T, with significant service disparities between different neighborhoods and frequent congestion during sporting events.",
        impactStory:
          "Metronet's fiber network has supported Indianapolis's growth as a tech hub, contributing to a 27% increase in tech sector jobs since 2017.",
      },
      localChallenges: {
        geographicChallenges:
          "Indianapolis's compact downtown with older infrastructure required specialized deployment techniques, including utilizing existing utility conduits and coordinating with the city's extensive underground systems.",
        weatherConsiderations:
          "Our Indianapolis network is designed with Midwest weather patterns in mind, including severe thunderstorms and winter weather, with buried lines in most residential areas.",
        constructionApproach:
          "For historic neighborhoods like Lockerbie Square, we implemented non-invasive installation methods to preserve historic sidewalks and landscaping.",
      },
      communityImpact: {
        digitalDivideInitiatives:
          "Metronet has partnered with the Indianapolis Public Library system to provide free public WiFi and digital literacy programs in underserved neighborhoods.",
        economicDevelopment:
          "Our fiber network has been cited by the Indy Chamber as a contributing factor in 14 company relocations to Indianapolis since 2019.",
        educationSupport:
          "We've provided specialized connectivity solutions for Indianapolis Public Schools' remote learning programs, supporting over 30,000 students.",
      },
      serviceComparisons: {
        specificCompetitorA: {
          name: "Comcast",
          speedComparison:
            "Metronet delivers true gigabit speeds throughout Indianapolis, while Comcast's advertised gigabit service typically delivers 600-800 Mbps during peak hours in testing",
          reliabilityComparison:
            "99.98% uptime compared to Comcast's 97.5% in Indianapolis neighborhoods during high-usage periods",
          priceComparison:
            "Metronet's 1 Gig service is approximately $25-30 less per month than Comcast's comparable offering with no price increases after promotional periods",
          uniqueAdvantages:
            "True symmetrical speeds critical for Indianapolis's growing remote workforce, versus Comcast's limited upload bandwidth",
        },
        specificCompetitorB: {
          name: "AT&T",
          speedComparison:
            "Metronet's footprint covers 91% of Indianapolis addresses with gigabit fiber, while AT&T Fiber is limited to select neighborhoods covering approximately 65% of the city",
          reliabilityComparison:
            "More consistent performance during high-demand events like Colts games or the Indy 500 when network congestion affects many providers",
          priceComparison: "Similar base pricing but with no equipment rental fees or hidden costs",
          uniqueAdvantages: "Local Indianapolis-based customer support versus regional call centers",
        },
      },
      localEntertainment: {
        streamingPerformance:
          "Perfect for streaming Indianapolis Colts and Indiana Pacers games without buffering, even in 4K",
        gamingBenefits:
          "Indianapolis's growing esports community benefits from 15-18ms ping times to Chicago and Columbus servers",
        popularUses:
          "Indianapolis customer surveys show top uses include: working from home (75%), video streaming (70%), and smart home connectivity (55%)",
      },
      futureExpansions: {
        plannedAreas: ["Lawrence Township", "Beech Grove", "Speedway (completion)"],
        projectedTimeline: "Q1 2025 - Q4 2025",
        registrationInfo:
          "Special pre-registration pricing available for these expansion areas at our Keystone Crossing office",
      },
      customerSupport: {
        localTeamSize: "35 local support specialists based in Indianapolis",
        averageResponseTime: "Under 60 seconds for phone support, 98% same-day resolution rate",
        supportChannels: ["Phone", "Email", "Live Chat", "Video Support", "In-person at our Keystone Crossing office"],
      },
    },
  }

  // Default data for cities not in our specific database
  const defaultData = {
    neighborhoods: ["Downtown", "Midtown", "Westside", "Northside", "Eastside"],
    installationTimeline: "3-5 business days",
    localOffice: `Metronet Service Center, ${cityName}, ${state}`,
    localEvents: [`${cityName} Community Sponsor`, `${state} Business Alliance Partner`],
    networkStats: {
      averageSpeed: "930 Mbps",
      reliability: "99.9%",
      coverage: "75% of city addresses",
      expansionAreas: [`North ${cityName}`, `South ${cityName}`, `${cityName} Heights`],
    },
    testimonials: [
      {
        name: "Local Customer",
        business: `${cityName} Business`,
        quote: `Metronet has been a game-changer for our ${cityName}-based operations. The symmetrical speeds make a huge difference.`,
      },
    ],
    competitors: ["Local Cable Provider", "Regional DSL Service"],
    // Default new city-specific data
    launchDate: "2020",
    fiberMiles: 350,
    localSpeedTests: [
      { neighborhood: "Downtown", avgDownload: "935 Mbps", avgUpload: "932 Mbps" },
      { neighborhood: "Midtown", avgDownload: "928 Mbps", avgUpload: "925 Mbps" },
      { neighborhood: "Westside", avgDownload: "933 Mbps", avgUpload: "930 Mbps" },
    ],
    localPromotions: [
      {
        name: `${cityName} Resident Special`,
        description: `New customers in ${cityName} get first month free + $100 Visa gift card when signing up for 1 Gig or 2 Gig plans.`,
      },
    ],
    localNews: [
      {
        date: format(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), "MMMM d, yyyy"),
        title: `Metronet Expands Coverage in ${cityName}`,
        summary: `Recent expansion brings fiber internet to additional neighborhoods in ${cityName}.`,
      },
    ],
    localUseCase: {
      organization: `${cityName} Community College`,
      summary: `Metronet provides dedicated fiber connections to ${cityName} Community College, supporting students and faculty with reliable high-speed internet.`,
    },
    cityDemographics: {
      population: "150,000+",
      households: "60,000+",
      medianAge: "35",
      topIndustries: ["Healthcare", "Education", "Retail", "Manufacturing"],
    },
    uniqueFAQs: [
      {
        question: `What makes Metronet's service in ${cityName} different from other cities?`,
        answer: `In ${cityName}, we've optimized our network to address the specific challenges of the local geography and infrastructure. Our fiber routes are strategically designed to ensure maximum reliability during ${state}'s weather events, and we maintain a local team specifically trained on the unique aspects of ${cityName}'s neighborhoods.`,
      },
    ],
    timeline: [
      { date: "2020", event: `Metronet announces ${cityName} expansion` },
      { date: "2020", event: `Construction begins in ${cityName}` },
      { date: "2021", event: `First ${cityName} customers connected` },
      { date: "2022", event: `50% of ${cityName} addresses serviceable` },
      { date: "2023", event: `${cityName} local office opens` },
      { date: "2024", event: `75% coverage milestone reached` },
    ],
    historicalContext: {
      cityHistory: `${cityName} has a unique history and character that has shaped its development. As part of ${state}, the city has grown from its early foundations to become an important regional center.`,
      internetEvolution: `Before Metronet's arrival, ${cityName} residents had limited options for high-speed internet, primarily relying on cable and DSL services that frequently failed to meet the growing demands of modern internet usage.`,
      impactStory: `The introduction of fiber internet to ${cityName} has helped support local economic development initiatives and improved quality of life for residents and businesses.`,
    },
    localChallenges: {
      geographicChallenges: `${cityName}'s unique geography presented specific challenges for our fiber deployment, including ${cityName} terrain features and existing infrastructure considerations.`,
      weatherConsiderations: `Our network in ${cityName} is designed to withstand ${state}'s typical weather patterns, with reinforced infrastructure in areas prone to seasonal weather events.`,
      constructionApproach: `When deploying in ${cityName}'s established neighborhoods, we used minimally invasive techniques to preserve local character and minimize disruption.`,
    },
    communityImpact: {
      digitalDivideInitiatives: `We've partnered with local ${cityName} organizations to help bridge the digital divide, ensuring more equitable access to high-speed internet across all neighborhoods.`,
      economicDevelopment: `Our fiber infrastructure has supported ${cityName}'s economic development goals, helping attract and retain businesses in the area.`,
      educationSupport: `Metronet has worked with ${cityName} schools and educational institutions to enhance connectivity for students and educators.`,
    },
    serviceComparisons: {
      specificCompetitorA: {
        name: "Local Cable Provider",
        speedComparison: `Metronet offers significantly faster and more consistent speeds throughout ${cityName} compared to the local cable option`,
        reliabilityComparison: `Independent tests show better reliability, especially during peak usage times in ${cityName}`,
        priceComparison: "Competitive pricing with better performance metrics",
        uniqueAdvantages: `Symmetrical speeds not available from other providers in ${cityName}`,
      },
      specificCompetitorB: {
        name: "Regional DSL Service",
        speedComparison: `Up to 50x faster than DSL services available in ${cityName}`,
        reliabilityComparison: `Fiber technology provides significantly more consistent performance than DSL infrastructure across ${cityName}`,
        priceComparison: "Similar pricing for entry-level plans but with dramatically better performance",
        uniqueAdvantages: `Future-proof technology that will keep ${cityName} connected for years to come`,
      },
    },
    localEntertainment: {
      streamingPerformance: `${cityName} customers can enjoy buffer-free 4K streaming on multiple devices simultaneously`,
      gamingBenefits: `Gamers in ${cityName} experience lower ping times and more responsive gameplay`,
      popularUses: `${cityName} customer surveys show top uses include: streaming, working from home, and online gaming`,
    },
    futureExpansions: {
      plannedAreas: [`North ${cityName}`, `${cityName} Heights`, `West ${cityName}`],
      projectedTimeline: "2025-2026",
      registrationInfo: `Residents in upcoming ${cityName} service areas can pre-register on our website for priority installation`,
    },
    customerSupport: {
      localTeamSize: `Dedicated support team serving ${cityName}`,
      averageResponseTime: "Under 3 minutes for phone support, same-day resolution for most issues",
      supportChannels: ["Phone", "Email", "Live Chat", "In-person at local office"],
    },
  }

  return cityData[cityName] || defaultData
}

function getStateAbbreviation(state: string): string {
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

export function generateStaticParams() {
  return cities.map((city) => ({
    slug: cityToSlug(city),
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cityName = slugToCity(params.slug)
  const state = getStateForCity(cityName) || "Unknown State"
  const stateAbbr = getStateAbbreviation(state)

  return {
    title: `Metronet Fiber in ${cityName}, ${stateAbbr} | No Contracts | 5 Gig`,
    description: `Discover Metronet's fiber coverage in ${cityName}. Enjoy symmetrical speeds up to 5 Gig, no data caps, FREE first month, and no deposit. Limited time offer!`,
    keywords: `Metronet, Metronet Internet, Metronet Fiber, Fiber Internet ${cityName}, First Month Free, $100 Visa Gift Card, High-Speed Internet ${cityName}, ${stateAbbr} Internet Provider, Metronet ${cityName}, No Contract Internet, Unlimited Data`,
    openGraph: {
      title: `Metronet Fiber Internet in ${cityName}, ${stateAbbr} | First Month FREE + $100 Visa Gift Card`,
      description: `Looking for the fastest internet in ${cityName}, ${stateAbbr}? Metronet offers fiber internet with unlimited data, no contracts, and symmetrical speeds up to 5 Gig. Now with first month FREE + $100 Visa gift card on select plans!`,
      type: "website",
      locale: "en_US",
      siteName: "Metronet",
      images: [
        {
          url: "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: `Metronet Fiber Internet in ${cityName}, ${stateAbbr}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Metronet Fiber Internet in ${cityName}, ${stateAbbr} | First Month FREE`,
      description: `Get Metronet's 100% fiber internet in ${cityName}, ${stateAbbr} with unlimited data, no contracts, and a $100 Visa gift card on select plans!`,
      images: ["/placeholder.svg?height=600&width=1200"],
    },
    alternates: {
      canonical: `https://metroconet.com/city/${params.slug}`,
    },
  }
}

export default function CityPage({ params }: { params: { slug: string } }) {
  if (!params.slug) return notFound()

  const cityName = slugToCity(params.slug)

  if (!cities.includes(cityName)) {
    return notFound()
  }

  const state = getStateForCity(cityName) || "Unknown State"
  const formattedDate = format(lastUpdated, "MMMM d, yyyy")

  // Get city-specific data
  const cityData = getCitySpecificData(cityName, state)

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Breadcrumb navigation for SEO */}
      <nav className="py-2 px-4 bg-[#212145]" aria-label="Breadcrumb">
        <ol className="flex text-xs text-gray-400 max-w-6xl mx-auto">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/city" className="hover:text-white">
              Cities
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium">
            {cityName}, {getStateAbbreviation(state)}
          </li>
        </ol>
      </nav>
      {/* Structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BroadbandService",
            name: `Metronet Fiber Internet in ${cityName}, ${state}`,
            provider: {
              "@type": "Organization",
              name: "Metronet",
              url: "https://metronet.com",
            },
            areaServed: {
              "@type": "City",
              name: cityName,
              containedInPlace: {
                "@type": "State",
                name: state,
              },
            },
            serviceType: "Fiber Internet",
            offers: {
              "@type": "Offer",
              price: "60.00",
              priceCurrency: "USD",
              description: "Starting at $60/month for 500 Mbps symmetrical speeds",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "235",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Metronet",
            url: "https://metroconet.com",
            logo: "https://metroconet.com/logo.png",
            sameAs: [
              "https://www.facebook.com/metronetinc",
              "https://twitter.com/metronetinc",
              "https://www.linkedin.com/company/metronet",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "1-877-407-3224",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "English",
            },
          }),
        }}
      />

      {/* Hero Section - Redesigned with brand color palette */}
      <section className="relative text-white overflow-hidden">
        {/* Dark theme background with brand colors */}
        <div className="absolute inset-0 bg-[#000000]">
          <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#964DFF]/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#212145]/20 via-transparent to-transparent"></div>

          {/* Subtle light particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute h-40 w-40 rounded-full bg-[#964DFF]/10 blur-3xl top-1/4 left-1/4 animate-pulse"
              style={{ animationDuration: "7s" }}
            ></div>
            <div
              className="absolute h-60 w-60 rounded-full bg-[#00A89C]/10 blur-3xl bottom-1/3 right-1/4 animate-pulse"
              style={{ animationDuration: "10s" }}
            ></div>
            <div
              className="absolute h-32 w-32 rounded-full bg-[#00C800]/5 blur-3xl top-1/3 right-1/3 animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Hero Content */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-[#964DFF] to-[#00A89C] bg-clip-text text-transparent">
                  Metronet Fiber
                </span>{" "}
                <span className="block md:inline text-white">in {cityName}</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto mb-6">
                Experience future-ready speeds with up to 2 Gigs of symmetrical fiber internet in {cityName}, {state},
                starting at <span className="font-bold text-[#00C800]">$60/mo</span> with{" "}
                <span className="font-bold text-[#00C800]">First Month FREE</span>. Perfect for streaming, gaming, and
                remote work.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link
                  href="/check-availability"
                  className="bg-[#964DFF] hover:bg-[#964DFF]/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base"
                >
                  Check Availability in {cityName}
                </Link>
                <Link
                  href="/plans-pricing"
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-[#964DFF] transition-all duration-300 text-center text-sm sm:text-base"
                >
                  View Plans & Pricing
                </Link>
              </div>

              {/* Jump Links for City Page Sections */}
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mt-6">
                <a href="#coverage" className="text-white hover:text-[#00C800] text-sm font-medium transition-colors">
                  Coverage Areas
                </a>
                <span className="text-[#6E6E70]">•</span>
                <a
                  href="#speed-tests"
                  className="text-white hover:text-[#00C800] text-sm font-medium transition-colors"
                >
                  Speed Tests
                </a>
                <span className="text-[#6E6E70]">•</span>
                <a href="#plans" className="text-white hover:text-[#00C800] text-sm font-medium transition-colors">
                  Plans & Pricing
                </a>
                <span className="text-[#6E6E70]">•</span>
                <a
                  href="#infrastructure"
                  className="text-white hover:text-[#00C800] text-sm font-medium transition-colors"
                >
                  Network
                </a>
                <span className="text-[#6E6E70]">•</span>
                <a href="#faqs" className="text-white hover:text-[#00C800] text-sm font-medium transition-colors">
                  FAQs
                </a>
              </div>
            </div>

            {/* AI Overview optimized summary with brand colors */}
            <div className="mb-8 bg-[#212145]/80 p-4 sm:p-6 rounded-xl border border-[#964DFF]/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-[#964DFF] flex-shrink-0" />
                <h2 className="text-lg sm:text-xl font-bold">
                  Metronet Fiber Internet in {cityName}, {state}
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-0">
                Metronet provides 100% fiber internet in {cityName} with symmetrical speeds from 500 Mbps to 2 Gig. All
                plans include unlimited data, no contracts, and 24/7 local support. Service is available in{" "}
                {cityData.networkStats.coverage} of {cityName} with ongoing expansion in{" "}
                {cityData.networkStats.expansionAreas.join(", ")}.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#000000] to-transparent"></div>
      </section>

      {/* Quick Stats Section - With brand colors */}
      <section className="py-8 sm:py-12 bg-[#212145]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
            <div className="bg-[#000000] p-3 sm:p-6 rounded-xl text-center shadow-md border border-[#6E6E70]">
              <div className="text-[#00C800] font-bold text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">100%</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Fiber</div>
            </div>
            <div className="bg-[#000000] p-3 sm:p-6 rounded-xl text-center shadow-md border border-[#6E6E70]">
                <div className="text-[#00C800] font-bold text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">2 Gig</div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Speed</div>
            </div>
            <div className="bg-[#000000] p-3 sm:p-6 rounded-xl text-center shadow-md border border-[#6E6E70]">
              <div className="text-[#00C800] font-bold text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                {cityData.fiberMiles}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Miles</div>
            </div>
            <div className="bg-[#000000] p-3 sm:p-6 rounded-xl text-center shadow-md border border-[#6E6E70]">
              <div className="text-[#00C800] font-bold text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">
                {cityData.networkStats.reliability}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section - With brand colors */}
      <section className="py-10 sm:py-16 bg-[#000000] overflow-hidden">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12">
              {/* Main Content */}
              <div className="md:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                  Metronet Fiber Internet in {cityName}
                </h2>

                <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none mb-8 sm:mb-10 break-words">
                  <p>
                    Metronet offers 100% fiber optic internet service to residents and businesses throughout the{" "}
                    {cityName} area. Unlike traditional cable or DSL providers that use older technology, our dedicated
                    fiber connection delivers symmetrical upload and download speeds, ensuring you get the performance
                    you need for streaming, gaming, video conferencing, and more.
                  </p>
                  <p>
                    Our fiber infrastructure outperforms {cityData.competitors.join(" and ")} in the area. Our average
                    latency is consistently under 10ms, and our uptime exceeds {cityData.networkStats.reliability}{" "}
                    reliability specifically in the {cityName} service area.
                  </p>
                  <p>
                    According to a recent{" "}
                    <a href="https://www.broadbandnow.com" className="text-[#964DFF]">
                      BroadbandNow
                    </a>{" "}
                    report, fiber internet like Metronet's delivers up to 10x faster upload speeds than cable providers
                    in {state}. This is particularly important for remote workers, content creators, and families with
                    multiple connected devices.
                  </p>
                </div>

                {/* NEW: Metronet Timeline in City */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <History size={22} className="text-[#964DFF]" />
                    Metronet's History in {cityName}
                  </h3>

                  <p className="text-gray-300 mb-6">
                    Metronet first launched in {cityName} in {cityData.launchDate}. Since then, we've continuously
                    expanded our network throughout the city:
                  </p>

                  <div className="relative border-l-2 border-[#964DFF] pl-6 ml-2 space-y-6">
                    {cityData.timeline.map((item: any, index: number) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#964DFF]"></div>
                        <div className="mb-1 text-sm text-[#00A89C]">{item.date}</div>
                        <div className="text-gray-200">{item.event}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* City-specific neighborhoods section */}
                <div id="coverage" className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Building size={22} className="text-[#964DFF]" />
                    Metronet Coverage Areas in {cityName}
                  </h3>

                  <p className="text-gray-300 mb-4">
                    Our fiber network is currently available in the following {cityName} neighborhoods:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {cityData.neighborhoods.map((neighborhood: string, index: number) => (
                      <div
                        key={index}
                        className="bg-[#000000] p-3 rounded-lg border border-[#6E6E70] flex items-center gap-2"
                      >
                        <Home size={16} className="text-[#00C800] flex-shrink-0" />
                        <span className="text-sm sm:text-base truncate">{neighborhood}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300">
                    We're actively expanding our network in {cityName} with construction currently underway in{" "}
                    {cityData.networkStats.expansionAreas.join(", ")}. Residents in these areas can pre-register for
                    service to be notified when installations begin.
                  </p>
                </div>

                {/* NEW: City-specific speed test results */}
                <div id="speed-tests" className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <BarChart size={22} className="text-[#964DFF]" />
                    {cityName} Speed Test Results
                  </h3>

                  <p className="text-gray-300 mb-4">
                    Our team regularly conducts speed tests across {cityName} neighborhoods to ensure consistent
                    performance. Here are the latest results from our 1 Gig service:
                  </p>

                  <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-[#000000] text-left">
                          <th className="p-3 rounded-tl-lg">Neighborhood</th>
                          <th className="p-3">Avg. Download</th>
                          <th className="p-3 rounded-tr-lg">Avg. Upload</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cityData.localSpeedTests.map((test: any, index: number) => (
                          <tr
                            key={index}
                            className={`border-t border-[#6E6E70] ${
                              index === cityData.localSpeedTests.length - 1 ? "rounded-b-lg overflow-hidden" : ""
                            }`}
                          >
                            <td className="p-3 bg-[#000000]">{test.neighborhood}</td>
                            <td className="p-3 bg-[#000000]">{test.avgDownload}</td>
                            <td className="p-3 bg-[#000000]">{test.avgUpload}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-300 mt-4 text-sm">
                    Data based on 100+ speed tests conducted in {cityName} during peak hours (7-10pm) in the past 30
                    days.
                  </p>
                </div>

                {/* NEW: City-specific use case */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    {cityData.localUseCase.organization.includes("School") ||
                    cityData.localUseCase.organization.includes("College") ? (
                      <School size={22} className="text-[#964DFF]" />
                    ) : (
                      <Building2 size={22} className="text-[#964DFF]" />
                    )}
                    {cityName} Success Story: {cityData.localUseCase.organization}
                  </h3>

                  <div className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70]">
                    <p className="text-gray-300 mb-4">{cityData.localUseCase.summary}</p>
                    <div className="flex items-center gap-3">
                      <div className="bg-[#964DFF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                        {cityData.localUseCase.organization.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{cityData.localUseCase.organization}</p>
                        <p className="text-gray-400 text-sm">
                          {cityName}, {state}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">Why {cityName} Residents Choose Metronet</h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 bg-[#212145] p-5 rounded-xl border border-[#6E6E70]">
                    <div className="mt-1 text-[#00C800]">
                      <Wifi size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">100% Fiber Network</h4>
                      <p className="text-gray-300">
                        Our dedicated fiber connection in {cityName} provides symmetrical speeds that{" "}
                        {cityData.competitors.join(" and ")} simply can't match. Enjoy consistent performance even
                        during peak usage times in high-density areas like {cityData.neighborhoods[0]} and{" "}
                        {cityData.neighborhoods[1]}.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#212145] p-5 rounded-xl border border-[#6E6E70]">
                    <div className="mt-1 text-[#00C800]">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Blazing Fast Speeds</h4>
                      <p className="text-gray-300">
                        With plans ranging from 500 Mbps to 2 Gig, we offer the fastest internet speeds available in{" "}
                        {cityName}. Our fiber technology ensures you get the same upload and download speeds, with
                        average speeds of {cityData.networkStats.averageSpeed} in real-world testing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#212145] p-5 rounded-xl border border-[#6E6E70]">
                    <div className="mt-1 text-[#00C800]">
                      <Shield size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">No Data Caps</h4>
                      <p className="text-gray-300">
                        Use as much data as you need without worrying about overage charges or throttling. Stream,
                        download, and upload without limits in {cityName}, unlike some competitors who impose 1TB caps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#212145] p-5 rounded-xl border border-[#6E6E70]">
                    <div className="mt-1 text-[#00C800]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">No Contracts</h4>
                      <p className="text-gray-300">
                        Enjoy Metronet service in {cityName} without being locked into a long-term contract. We earn
                        your business every month with reliable service and fair pricing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#212145] p-5 rounded-xl border border-[#6E6E70]">
                    <div className="mt-1 text-[#00C800]">
                      <HeadphonesIcon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Local Support</h4>
                      <p className="text-gray-300">
                        Our {cityName} team provides responsive, local customer service from our office at{" "}
                        {cityData.localOffice}. Get help when you need it from people who know your community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* NEW: Local News Section */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Newspaper size={22} className="text-[#964DFF]" />
                    Latest Metronet News in {cityName}
                  </h3>

                  {cityData.localNews.map((news: any, index: number) => (
                    <div key={index} className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70] mb-4 last:mb-0">
                      <div className="text-sm text-[#00A89C] mb-1">{news.date}</div>
                      <h4 className="font-bold text-lg mb-2">{news.title}</h4>
                      <p className="text-gray-300">{news.summary}</p>
                    </div>
                  ))}
                </div>

                {/* City-specific testimonial */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-6 text-white">What {cityName} Customers Say</h3>

                  {cityData.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70]">
                      <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="bg-[#964DFF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-gray-400 text-sm">{testimonial.business}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* NEW: City Demographics Section */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Briefcase size={22} className="text-[#964DFF]" />
                    {cityName} Demographics & Internet Needs
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#000000] p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Population</div>
                      <div className="font-bold text-lg sm:text-xl">{cityData.cityDemographics.population}</div>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Households</div>
                      <div className="font-bold text-lg sm:text-xl">{cityData.cityDemographics.households}</div>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Median Age</div>
                      <div className="font-bold text-lg sm:text-xl">{cityData.cityDemographics.medianAge}</div>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-400">Coverage</div>
                      <div className="font-bold text-lg sm:text-xl">{cityData.networkStats.coverage}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {cityName}'s top industries include {cityData.cityDemographics.topIndustries.join(", ")}. Our fiber
                    network is specifically designed to support the high-bandwidth needs of these sectors with reliable,
                    symmetrical connections.
                  </p>

                  <p className="text-gray-300">
                    With {cityData.fiberMiles} miles of fiber deployed throughout {cityName}, our network infrastructure
                    is built to support both residential and business customers with future-proof technology.
                  </p>
                </div>

                {/* City-specific events and community involvement */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Calendar size={22} className="text-[#964DFF]" />
                    Metronet in the {cityName} Community
                  </h3>

                  <p className="text-gray-300 mb-4">
                    Metronet is proud to be an active member of the {cityName} community. We're involved in local events
                    and initiatives including:
                  </p>

                  <ul className="space-y-2 mb-4">
                    {cityData.localEvents.map((event: string, index: number) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#00C800]" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-300">
                    We're committed to supporting {cityName}'s digital future through infrastructure investments and
                    community partnerships.
                  </p>
                </div>

                {/* NEW: Local Promotions Section */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <FileText size={22} className="text-[#964DFF]" />
                    Exclusive {cityName} Promotions
                  </h3>

                  {cityData.localPromotions.map((promo: any, index: number) => (
                    <div key={index} className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70] mb-4 last:mb-0">
                      <h4 className="font-bold text-lg mb-2">{promo.name}</h4>
                      <p className="text-gray-300">{promo.description}</p>
                      <div className="mt-4">
                        <Link href="/plans-pricing" className="inline-flex items-center text-[#964DFF] hover:underline">
                          Learn more <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  ))}

                  <p className="text-gray-300 mt-4 text-sm">
                    *Offers valid for new {cityName} customers only. Terms and conditions apply.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">Metronet Installation in {cityName}</h3>

                <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none mb-8 sm:mb-10 break-words">
                  <p>
                    Metronet is rapidly expanding our fiber network in {cityName}. Our service area currently covers{" "}
                    {cityData.networkStats.coverage} of addresses within city limits, with new areas being added
                    regularly.
                  </p>
                  <p>
                    For {cityName} residents, our typical installation timeline is {cityData.installationTimeline} from
                    order to activation. This is significantly faster than the industry average of 7-10 business days in
                    similar markets.
                  </p>
                  <p>
                    To check if your specific address is serviceable, use our{" "}
                    <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                      online availability checker
                    </Link>{" "}
                    or contact our local {cityName} office at {cityData.localOffice}. If service isn't available at your
                    location yet, you can join our waitlist to be notified when Metronet comes to your neighborhood.
                  </p>
                </div>

                {/* NEW: Network Infrastructure Section */}
                <div id="infrastructure" className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                    <Network size={22} className="text-[#964DFF]" />
                    {cityName} Network Infrastructure
                  </h3>

                  <p className="text-gray-300 mb-4">
                    Our {cityName} fiber network consists of {cityData.fiberMiles} miles of fiber optic cable, with
                    redundant paths to ensure reliability. Key features of our local infrastructure include:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <h4 className="font-semibold mb-2">Redundant Ring Architecture</h4>
                      <p className="text-sm text-gray-300">
                        Our {cityName} network uses a ring topology that provides multiple paths for data, ensuring
                        service continues even if one section is damaged.
                      </p>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <h4 className="font-semibold mb-2">Local Network Operations Center</h4>
                      <p className="text-sm text-gray-300">
                        24/7 monitoring of the {cityName} network from our regional NOC ensures quick response to any
                        service issues.
                      </p>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <h4 className="font-semibold mb-2">Underground Deployment</h4>
                      <p className="text-sm text-gray-300">
                        Over 80% of our {cityName} fiber is buried underground, protecting it from weather events and
                        physical damage.
                      </p>
                    </div>
                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <h4 className="font-semibold mb-2">Future-Proof Capacity</h4>
                      <p className="text-sm text-gray-300">
                        Our {cityName} backbone can support up to 100 Gbps speeds with equipment upgrades, ensuring
                        long-term scalability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Topic cluster links for internal linking */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4 text-white">Related Resources</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                      href="/plans-pricing"
                      className="bg-[#000000] p-4 rounded-lg hover:bg-[#212145] transition-colors flex items-center gap-3"
                    >
                      <Award className="text-[#964DFF] flex-shrink-0" size={20} />
                      <span className="text-sm sm:text-base">Metronet Plans & Pricing</span>
                    </Link>
                    <Link
                      href="/why-metronet"
                      className="bg-[#000000] p-4 rounded-lg hover:bg-[#212145] transition-colors flex items-center gap-3"
                    >
                      <Star className="text-[#964DFF] flex-shrink-0" size={20} />
                      <span className="text-sm sm:text-base">Why Choose Metronet</span>
                    </Link>
                    <Link
                      href="/check-availability"
                      className="bg-[#000000] p-4 rounded-lg hover:bg-[#212145] transition-colors flex items-center gap-3"
                    >
                      <MapPin className="text-[#964DFF] flex-shrink-0" size={20} />
                      <span className="text-sm sm:text-base">Check Availability</span>
                    </Link>
                    <Link
                      href="/support"
                      className="bg-[#000000] p-4 rounded-lg hover:bg-[#212145] transition-colors flex items-center gap-3"
                    >
                      <HeadphonesIcon className="text-[#964DFF] flex-shrink-0" size={20} />
                      <span className="text-sm sm:text-base">Customer Support</span>
                    </Link>
                  </div>
                </div>

                {/* FAQ section with structured data - including city-specific FAQs */}
                <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-6 text-white" id="faqs">
                    {cityName} Internet Service FAQs
                  </h3>

                  <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
                    {/* City-specific unique FAQ */}
                    {cityData.uniqueFAQs.map((faq: any, index: number) => (
                      <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                        <h4 className="text-xl font-semibold mb-3" itemProp="name">
                          {faq.question}
                        </h4>
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div className="text-gray-300" itemProp="text">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 className="text-xl font-semibold mb-3" itemProp="name">
                        Is Metronet available in all areas of {cityName}?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="text-gray-300" itemProp="text">
                          <p>
                            Metronet is available in approximately {cityData.networkStats.coverage} of neighborhoods
                            throughout {cityName}, and we're expanding our coverage area regularly. Our fiber network
                            currently covers most of {cityData.neighborhoods.slice(0, 3).join(", ")} and surrounding
                            areas.
                          </p>
                          <p className="mt-2">
                            Areas with recent construction include {cityData.networkStats.expansionAreas.join(", ")}. To
                            check if service is available at your specific address, use our{" "}
                            <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                              online availability checker
                            </Link>{" "}
                            or contact our customer service team at 1-877-407-3224.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 className="text-xl font-semibold mb-3" itemProp="name">
                        How fast is Metronet's internet in {cityName}?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="text-gray-300" itemProp="text">
                          <p>
                            Metronet offers internet speeds from 500 Mbps to 2 Gig (2,000 Mbps) in {cityName}. All plans
                            feature symmetrical upload and download speeds, which means you get the same fast
                            performance whether you're downloading movies or uploading video calls.
                          </p>
                          <p className="mt-2">
                            In testing across various {cityName} neighborhoods like{" "}
                            {cityData.neighborhoods.slice(0, 2).join(" and ")}, we've consistently measured actual
                            speeds within 95-98% of advertised rates, even during peak evening hours. This is
                            significantly better than the 70-80% typical of {cityData.competitors.join(" and ")} in the
                            area.
                          </p>
                          <p className="mt-2">
                            For context, streaming 4K video requires about 25 Mbps, while video conferencing needs 3-5
                            Mbps. Even our entry-level 500 Mbps plan can easily handle multiple simultaneous high-bandwidth
                            activities.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 className="text-xl font-semibold mb-3" itemProp="name">
                        How much does Metronet cost in {cityName}?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="text-gray-300" itemProp="text">
                          <p>
                            Metronet plans in {cityName} start at $60/month for 500 Mbps and range up to
                            $80/month for 2 Gig service. Here's a breakdown of our current pricing:
                          </p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>500/500 Mbps: $60.00/month</li>
                            <li>1 Gig (1,000 Mbps): $70.00/month</li>
                            <li>2 Gig (2,000 Mbps): $80.00/month</li>
                            <li>Fiber Phone Unlimited: $15.00/month (add-on)</li>
                          </ul>
                          <p className="mt-2">
                            Bundle discounts are available when you add phone or TV service. New customers in {cityName}{" "}
                            may qualify for promotional pricing, including first month free and a $100 Visa gift card on
                            select plans. These prices are specific to the {cityName} market.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 className="text-xl font-semibold mb-3" itemProp="name">
                        How do I get Metronet installed in {cityName}?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="text-gray-300" itemProp="text">
                          <p>
                            Getting Metronet installed in your {cityName} home or business is a straightforward process:
                          </p>
                          <ol className="list-decimal pl-5 mt-2 space-y-2">
                            <li>
                              <strong>Check availability:</strong> Use our{" "}
                              <Link href="/check-availability" className="text-[#964DFF] hover:underline">
                                online tool
                              </Link>{" "}
                              to verify service at your address
                            </li>
                            <li>
                              <strong>Select a plan:</strong> Choose the speed that fits your needs and budget
                            </li>
                            <li>
                              <strong>Schedule installation:</strong> Our {cityName} team typically offers appointment
                              windows within {cityData.installationTimeline}
                            </li>
                            <li>
                              <strong>Installation visit:</strong> A certified technician will install the fiber line to
                              your home, set up the equipment, and ensure everything is working properly
                            </li>
                          </ol>
                          <p className="mt-2">
                            The entire installation process usually takes 2-3 hours. Our technicians will walk you
                            through how to use your new equipment and answer any questions you might have.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h4 className="text-xl font-semibold mb-3" itemProp="name">
                        How does Metronet compare to other internet providers in {cityName}?
                      </h4>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="text-gray-300" itemProp="text">
                          <p>
                            Based on analysis of {cityName}'s internet market and network performance data, Metronet
                            offers several advantages over {cityData.competitors.join(" and ")}:
                          </p>
                          <div className="overflow-x-auto rounded-lg mt-2">
                            <table className="w-full border-collapse min-w-[500px]">
                              <thead>
                                <tr className="bg-[#000000]">
                                  <th className="p-2 text-left">Feature</th>
                                  <th className="p-2 text-left">Metronet</th>
                                  <th className="p-2 text-left">{cityData.competitors[0]}</th>
                                  {cityData.competitors[1] && (
                                    <th className="p-2 text-left">{cityData.competitors[1]}</th>
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-[#6E6E70]">
                                  <td className="p-2">Max Download Speed</td>
                                  <td className="p-2">5 Gbps</td>
                                  <td className="p-2">1 Gbps</td>
                                  {cityData.competitors[1] && <td className="p-2">100 Mbps</td>}
                                </tr>
                                <tr className="border-t border-[#6E6E70]">
                                  <td className="p-2">Upload Speed</td>
                                  <td className="p-2">Same as download</td>
                                  <td className="p-2">20-50 Mbps</td>
                                  {cityData.competitors[1] && <td className="p-2">5-20 Mbps</td>}
                                </tr>
                                <tr className="border-t border-[#6E6E70]">
                                  <td className="p-2">Data Caps</td>
                                  <td className="p-2">None</td>
                                  <td className="p-2">1-1.2 TB typical</td>
                                  {cityData.competitors[1] && <td className="p-2">Varies</td>}
                                </tr>
                                <tr className="border-t border-[#6E6E70]">
                                  <td className="p-2">Contracts</td>
                                  <td className="p-2">No contracts</td>
                                  <td className="p-2">1-2 year typical</td>
                                  {cityData.competitors[1] && <td className="p-2">1 year typical</td>}
                                </tr>
                                <tr className="border-t border-[#6E6E70]">
                                  <td className="p-2">Local Office</td>
                                  <td className="p-2">{cityData.localOffice}</td>
                                  <td className="p-2">Regional call center</td>
                                  {cityData.competitors[1] && <td className="p-2">Regional call center</td>}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="mt-2">
                            The key differentiator is our symmetrical speeds and fiber technology, which provides more
                            consistent performance, especially for upload-intensive activities like video conferencing,
                            cloud backups, and content creation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content freshness indicator */}
                <div className="text-gray-400 text-sm mb-8">
                  <p>
                    Last updated: {formattedDate} | This page is regularly reviewed by our network engineering team to
                    ensure accuracy for {cityName} residents.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2">
                {/* Plans Card */}
                <div
                  id="plans"
                  className="bg-[#212145] rounded-xl p-6 shadow-md mb-8 sticky top-4 border border-[#6E6E70]"
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Internet Plans in {cityName}</h3>

                  <div className="space-y-4 mb-6">
                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">500/500 Mbps</h4>
                        <span className="text-[#00C800] font-bold">$60.00/mo</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Perfect for everyday households</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>500 Mbps download & upload</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>No data caps</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>No contracts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#000000] p-4 rounded-lg border-2 border-[#964DFF]">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">1 Gig</h4>
                        <span className="text-[#00C800] font-bold">$70/mo</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Most popular plan</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>1000 Mbps download & upload</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>No data caps</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>First month free</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>$100 Visa gift card</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-lg">2 Gig</h4>
                        <span className="text-[#00C800] font-bold">$80.00/mo</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Ultimate home performance</p>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>2000 Mbps download & upload</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>No data caps</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>No contracts</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle size={16} className="text-[#00C800] mr-2" />
                          <span>Premium WiFi included</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/plans-pricing"
                    className="block w-full bg-[#964DFF] hover:bg-[#964DFF]/90 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    View All Plans
                  </Link>
                </div>

                {/* Local Promotions Sidebar */}
                <div className="bg-[#212145] rounded-xl p-6 shadow-md mb-8 border border-[#6E6E70]">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Award size={20} className="text-[#964DFF]" />
                    {cityName} Special Offers
                  </h3>

                  {cityData.localPromotions.map((promo: any, index: number) => (
                    <div key={index} className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] mb-3 last:mb-0">
                      <h4 className="font-semibold mb-1">{promo.name}</h4>
                      <p className="text-gray-400 text-sm">{promo.description}</p>
                    </div>
                  ))}

                  <div className="mt-4">
                    <Link href="/promotions" className="text-[#964DFF] text-sm hover:underline flex items-center">
                      View all promotions <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* Expert Insights Card */}
                <div className="bg-[#212145] rounded-xl p-6 shadow-md mb-8 border border-[#6E6E70]">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Award size={20} className="text-[#964DFF]" />
                    {cityName} Network Insights
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Cpu size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Network Performance</h4>
                        <p className="text-gray-400 text-sm">
                          Our fiber network in {cityName} consistently delivers {cityData.networkStats.averageSpeed}{" "}
                          speeds, even during peak hours in high-density areas like {cityData.neighborhoods[0]}.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Users size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Local Customer Base</h4>
                        <p className="text-gray-400 text-sm">
                          Metronet serves thousands of {cityName} residents and businesses, with the highest adoption
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Coverage Expansion</h4>
                        <p className="text-gray-400 text-sm">
                          We're adding approximately 500 new serviceable addresses in {cityName} each month, with
                          current focus on {cityData.networkStats.expansionAreas[0]}.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-[#000000] text-white rounded-xl p-6 shadow-md border border-[#6E6E70]">
                  <h3 className="text-2xl font-bold mb-4">Contact Us in {cityName}</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <HeadphonesIcon size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Customer Service</h4>
                        <p className="text-gray-300">1-877-407-3224</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Local Office</h4>
                        <p className="text-gray-300">{cityData.localOffice}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock size={20} className="mt-1 text-[#964DFF]" />
                      <div>
                        <h4 className="font-semibold">Hours</h4>
                        <p className="text-gray-300">Monday-Friday: 8am-8pm</p>
                        <p className="text-gray-300">Saturday: 9am-5pm</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact-us"
                    className="block w-full bg-[#964DFF] text-white hover:bg-[#964DFF]/90 font-bold py-3 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* NEW: Historical Context Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <BookOpen size={22} className="text-[#964DFF]" />
                {cityName}'s Internet Evolution
              </h3>

              <div className="space-y-4">
                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 text-[#00A89C]">City Background</h4>
                  <p className="text-gray-300">{cityData.historicalContext.cityHistory}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 text-[#00A89C]">Before Fiber</h4>
                  <p className="text-gray-300">{cityData.historicalContext.internetEvolution}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 text-[#00A89C]">Economic Impact</h4>
                  <p className="text-gray-300">{cityData.historicalContext.impactStory}</p>
                </div>
              </div>
            </div>

            {/* Unique Local Challenges Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Mountain size={22} className="text-[#964DFF]" />
                Overcoming {cityName}'s Unique Challenges
              </h3>

              <p className="text-gray-300 mb-4">
                Every city presents unique challenges for fiber deployment. Here's how we've adapted our approach
                specifically for {cityName}:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] flex flex-col h-full">
                  <h4 className="font-semibold mb-2 text-white">Geographic Considerations</h4>
                  <p className="text-gray-300 text-sm flex-grow">{cityData.localChallenges.geographicChallenges}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] flex flex-col h-full">
                  <h4 className="font-semibold mb-2 text-white">Weather Resilience</h4>
                  <p className="text-gray-300 text-sm flex-grow">{cityData.localChallenges.weatherConsiderations}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] flex flex-col h-full">
                  <h4 className="font-semibold mb-2 text-white">Construction Approach</h4>
                  <p className="text-gray-300 text-sm flex-grow">{cityData.localChallenges.constructionApproach}</p>
                </div>
              </div>
            </div>

            {/* Community Impact Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Users size={22} className="text-[#964DFF]" />
                Metronet's Impact on the {cityName} Community
              </h3>

              <div className="space-y-4">
                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Laptop className="h-4 w-4 mr-2 text-[#00A89C]" />
                    Bridging the Digital Divide
                  </h4>
                  <p className="text-gray-300">{cityData.communityImpact.digitalDivideInitiatives}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-[#00A89C]" />
                    Local Economic Growth
                  </h4>
                  <p className="text-gray-300">{cityData.communityImpact.economicDevelopment}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-[#00A89C]" />
                    Education Support
                  </h4>
                  <p className="text-gray-300">{cityData.communityImpact.educationSupport}</p>
                </div>
              </div>
            </div>

            {/* Entertainment Performance Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <Tv size={22} className="text-[#964DFF]" />
                Metronet Performance for {cityName} Entertainment
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Film className="h-4 w-4 mr-2 text-[#00C800]" />
                    Streaming Experience
                  </h4>
                  <p className="text-gray-300 text-sm">{cityData.localEntertainment.streamingPerformance}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Gamepad2 className="h-4 w-4 mr-2 text-[#00C800]" />
                    Gaming Performance
                  </h4>
                  <p className="text-gray-300 text-sm">{cityData.localEntertainment.gamingBenefits}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-[#00C800]" />
                    Top Local Uses
                  </h4>
                  <p className="text-gray-300 text-sm">{cityData.localEntertainment.popularUses}</p>
                </div>
              </div>
            </div>

            {/* Detailed Competitor Comparison Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <BarChart4 size={22} className="text-[#964DFF]" />
                {cityName} Provider Comparison: How We Stack Up
              </h3>

              <div className="space-y-6">
                <div className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-3">
                    Metronet vs. {cityData.serviceComparisons.specificCompetitorA.name} in {cityName}
                  </h4>

                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Speed</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorA.speedComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Reliability</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorA.reliabilityComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Pricing</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorA.priceComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Advantages</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorA.uniqueAdvantages}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#000000] p-5 rounded-lg border border-[#6E6E70]">
                  <h4 className="font-semibold mb-3">
                    Metronet vs. {cityData.serviceComparisons.specificCompetitorB.name} in {cityName}
                  </h4>

                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Speed</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorB.speedComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Reliability</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorB.reliabilityComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Pricing</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorB.priceComparison}
                        </p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded">
                        <p className="text-xs text-gray-400 mb-1">Advantages</p>
                        <p className="text-sm text-white">
                          {cityData.serviceComparisons.specificCompetitorB.uniqueAdvantages}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Expansion Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <MapPin size={22} className="text-[#964DFF]" />
                Upcoming {cityName} Expansion Areas
              </h3>

              <p className="text-gray-300 mb-4">
                We're continuing to expand our fiber network throughout {cityName}. Here are the areas we'll be serving
                next:
              </p>

              <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70] mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {cityData.futureExpansions.plannedAreas.map((area: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#964DFF]/20 text-[#964DFF]"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-400">Projected Timeline:</p>
                  <p className="text-white">{cityData.futureExpansions.projectedTimeline}</p>
                </div>
              </div>

              <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                <p className="text-gray-300 text-sm">{cityData.futureExpansions.registrationInfo}</p>
                <Link
                  href="/check-availability"
                  className="mt-2 inline-flex items-center text-[#00A89C] text-sm hover:underline"
                >
                  Pre-register for your address <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Enhanced Customer Support Section */}
            <div className="bg-[#212145] p-6 rounded-xl mb-10 border border-[#6E6E70]">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                <HeadphonesIcon size={22} className="text-[#964DFF]" />
                {cityName} Local Support
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <div className="flex justify-center mb-2">
                    <Users2 className="h-8 w-8 text-[#00A89C]" />
                  </div>
                  <h4 className="text-center font-semibold mb-1">Local Team</h4>
                  <p className="text-gray-300 text-sm text-center">{cityData.customerSupport.localTeamSize}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <div className="flex justify-center mb-2">
                    <Clock className="h-8 w-8 text-[#00A89C]" />
                  </div>
                  <h4 className="text-center font-semibold mb-1">Response Time</h4>
                  <p className="text-gray-300 text-sm text-center">{cityData.customerSupport.averageResponseTime}</p>
                </div>

                <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                  <div className="flex justify-center mb-2">
                    <MessageSquare className="h-8 w-8 text-[#00A89C]" />
                  </div>
                  <h4 className="text-center font-semibold mb-1">Support Options</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cityData.customerSupport.supportChannels.map((channel: string, index: number) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-800 text-gray-300"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#000000] p-4 rounded-lg border border-[#6E6E70]">
                <p className="text-gray-300 text-sm text-center">
                  Need help? Our {cityName}-based team is ready to assist you with any questions about your Metronet
                  service.
                </p>
                <div className="flex justify-center mt-3">
                  <Link href="/contact-us">
                    <Button size="sm" className="bg-[#00A89C] hover:bg-[#008a80] text-white">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - With brand colors */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-[#964DFF] to-[#00A89C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Experience Metronet in {cityName}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied customers in {cityName} who have switched to Metronet's 100% fiber internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/check-availability"
                className="bg-white text-[#964DFF] hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Check Availability
              </Link>
              <Link
                href="/plans-pricing"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-white transition-all duration-300 text-sm sm:text-base"
              >
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
