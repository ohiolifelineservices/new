"use client"

import { useEffect } from "react"

export default function JumpLinkHandler() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")

        if (element) {
          // Add offset for fixed headers or navigation
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
