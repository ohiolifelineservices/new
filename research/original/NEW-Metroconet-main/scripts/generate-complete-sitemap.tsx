// This is a script to generate a complete sitemap with all pages
import fs from "fs"
import { states, getAllCitiesWithStates, cityToSlug, stateToSlug } from "../lib/city-data"

// Count the total number of cities
const allCitiesWithStates = getAllCitiesWithStates()
const totalCities = allCitiesWithStates.length

// Start building the sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://metroconet.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Navigation Pages -->
  <url>
    <loc>https://metroconet.com/plans-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://metroconet.com/promotions</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://metroconet.com/why-metronet</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://metroconet.com/support</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://metroconet.com/check-availability</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://metroconet.com/contact-us</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://metroconet.com/careers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://metroconet.com/metronet-state</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://metroconet.com/terms-and-conditions</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://metroconet.com/privacy-policy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- State Pages -->
`

// Add all state pages
Object.keys(states).forEach((state) => {
  const stateSlug = stateToSlug(state)
  sitemap += `  <url><loc>https://metroconet.com/metronet-state/${stateSlug}</loc><priority>0.8</priority></url>\n`
})

sitemap += `\n  <!-- City Pages (${totalCities * 2}) -->\n`

// Add all city pages (both /city/ and /metronet/ paths)
allCitiesWithStates.forEach(({ city }) => {
  const citySlug = cityToSlug(city)
  sitemap += `  <url><loc>https://metroconet.com/city/${citySlug}</loc><priority>0.7</priority></url>\n`
  sitemap += `  <url><loc>https://metroconet.com/metronet/${citySlug}</loc><priority>0.7</priority></url>\n`
})

// Close the sitemap
sitemap += `</urlset>`

// Write to file
fs.writeFileSync("./public/sitemap.xml", sitemap)

console.log(`Sitemap generated with ${10 + Object.keys(states).length + totalCities * 2} URLs`)
console.log(`- 10 main navigation pages`)
console.log(`- ${Object.keys(states).length} state pages`)
console.log(`- ${totalCities * 2} city pages (${totalCities} cities with 2 URL patterns each)`)
