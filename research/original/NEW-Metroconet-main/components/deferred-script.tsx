"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

interface DeferredScriptProps {
  src: string
  id?: string
  strategy?: "afterInteractive" | "lazyOnload" | "worker"
}

export default function DeferredScript({ src, id, strategy = "lazyOnload" }: DeferredScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if the user has interacted with the page
    const handleInteraction = () => {
      setShouldLoad(true)
      // Remove event listeners once script is set to load
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
    }

    // Set a timeout to load the script after 3 seconds even without interaction
    const timer = setTimeout(() => {
      setShouldLoad(true)
    }, 3000)

    // Add event listeners for user interaction
    window.addEventListener("scroll", handleInteraction)
    window.addEventListener("click", handleInteraction)
    window.addEventListener("keydown", handleInteraction)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleInteraction)
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
    }
  }, [])

  if (!shouldLoad) return null

  return <Script src={src} id={id} strategy={strategy} />
}
