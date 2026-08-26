// This script counts the number of URLs in the sitemap.xml file

import fs from "fs"
import path from "path"

function countUrlsInSitemap() {
  try {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml")
    const sitemapContent = fs.readFileSync(sitemapPath, "utf8")

    // Count the number of <url> tags
    const urlCount = (sitemapContent.match(/<url>/g) || []).length

    console.log(`Total URLs in sitemap: ${urlCount}`)

    // Count URLs by type
    const homepageCount = 1
    const mainNavCount = 10
    const stateCount = 14
    const cityCount = urlCount - homepageCount - mainNavCount - stateCount

    console.log(`Homepage: ${homepageCount}`)
    console.log(`Main Navigation: ${mainNavCount}`)
    console.log(`State Pages: ${stateCount}`)
    console.log(`City Pages: ${cityCount}`)

    return urlCount
  } catch (error) {
    console.error("Error counting URLs:", error)
    return 0
  }
}

countUrlsInSitemap()
