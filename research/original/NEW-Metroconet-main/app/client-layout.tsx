"use client"

import type React from "react"
import { ErrorBoundary } from "react-error-boundary"
import Navigation from "@/components/Navigation"
import HomePageAvailabilityChecker from "@/components/home-page-availability-checker"
import JumpLinkHandler from "@/components/jump-link-handler"
import Footer from "@/components/footer"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <HomePageAvailabilityChecker />
      <JumpLinkHandler />
      <main className="min-h-screen bg-black text-white pt-16">
        <ErrorBoundary
          fallback={
            <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
              <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
              <p className="mb-6">We're sorry, but there was an error loading this page.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Try again
              </button>
            </div>
          }
        >
          <div className="pt-0">{children}</div>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  )
}
