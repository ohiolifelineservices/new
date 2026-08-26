import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const data = await req.json()
    const { address, city, state, zip } = data

    // This would normally check a database or external API
    // For demo purposes, we'll just return a mock response
    const isAvailable = Math.random() > 0.3 // 70% chance of availability

    // Create the XML response
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<serviceAvailability>
  <request>
    <address>${address || ""}</address>
    <city>${city || ""}</city>
    <state>${state || ""}</state>
    <zip>${zip || ""}</zip>
    <timestamp>${new Date().toISOString()}</timestamp>
  </request>
  <response>
    <available>${isAvailable}</available>
    <message>${isAvailable ? "Metronet service is available at this address!" : "Metronet service is not yet available at this address."}</message>
    ${
      isAvailable
        ? `<plans>
      <plan>
        <name>Internet 500</name>
        <speed>500 Mbps</speed>
        <price>60.00</price>
      </plan>
      <plan>
        <name>Internet 1 Gig</name>
        <speed>1000 Mbps</speed>
        <price>70.00</price>
      </plan>
      <plan>
        <name>Internet 2 Gig</name>
        <speed>2000 Mbps</speed>
        <price>80.00</price>
      </plan>
    </plans>`
        : ""
    }
  </response>
</serviceAvailability>`

    // Return the XML with proper headers
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    // Return an error XML
    const errorXml = `<?xml version="1.0" encoding="UTF-8"?>
<serviceAvailability>
  <error>
    <message>Invalid request format</message>
    <details>Please provide address information in JSON format</details>
  </error>
</serviceAvailability>`

    return new Response(errorXml, {
      status: 400,
      headers: {
        "Content-Type": "application/xml",
      },
    })
  }
}
