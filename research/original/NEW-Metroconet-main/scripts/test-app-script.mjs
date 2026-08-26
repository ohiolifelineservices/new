const APP_SCRIPT_URL =
  process.env.APP_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyUAIeLf5c-3B0nAZy40SwO7kkbvs21bbzuHOCmCR9W1ZYAmEUacUiVXpZAoNy6FR-olQ/exec"

// Real order submission with the address you specified
const realLead = {
  order: "Internet 1 Gig - $70",
  firstName: "John",
  lastName: "Smith",
  serviceAddress: "1494 Netherland Ct",
  zipCode: "45240",
  phoneNumber: "5139876543",
  email: "john.smith@example.com",
  dateOfBirth: "05/15/1985",
  lastFourSSN: "5678",
  preferredInstallDate: "2026-04-15",
  preferredInstallTime: "10:00 AM - 12:00 PM",
  promoCode: "SAVE100",
  addPhoneService: "Yes",
}

async function run() {
  console.log("\n" + "=".repeat(70))
  console.log("INTEGRATION TEST: Apps Script with Real Lead Submission")
  console.log("=".repeat(70))
  console.log(`\nEndpoint: ${APP_SCRIPT_URL}`)
  console.log(`\nAddress: ${realLead.serviceAddress}, ${realLead.zipCode}`)
  console.log(`Name: ${realLead.firstName} ${realLead.lastName}`)
  console.log(`Email: ${realLead.email}`)
  console.log(`Phone: ${realLead.phoneNumber}`)

  console.log("\n--- Testing GET (health check) ---")
  try {
    const getRes = await fetch(APP_SCRIPT_URL, { method: "GET" })
    const getBody = await getRes.text()
    console.log(`Status: ${getRes.status}`)
    console.log(`Response: ${getBody.trim()}`)
  } catch (err) {
    console.error(`GET failed: ${err.message}`)
  }

  console.log("\n--- Testing POST (real lead submission) ---")
  try {
    const postRes = await fetch(APP_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(realLead),
    })

    const postBody = await postRes.text()
    console.log(`Status: ${postRes.status}`)
    console.log(`Response: ${postBody.trim()}`)

    if (postRes.ok && /success/i.test(postBody)) {
      console.log("\n✅ Lead submitted successfully!")
      console.log("Expected behavior:")
      console.log("  1. Address geocoded to coordinates in Cincinnati, OH area")
      console.log("  2. Broadband API queried for available providers at that location")
      console.log("  3. Providers matched against: spectrum, at&t, optimum, etc.")
      console.log("  4. If providers match → email notification sent via Resend")
      console.log("  5. Row appended to Google Sheet with geocode status & matched providers")
    } else {
      console.error("\n❌ Response unexpected")
      process.exit(1)
    }
  } catch (err) {
    console.error(`\n❌ POST failed: ${err.message}`)
    process.exit(1)
  }

  console.log("\n" + "=".repeat(70))
}

run().catch((error) => {
  console.error("Test crashed:", error)
  process.exit(1)
})
