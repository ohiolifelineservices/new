import Script from "next/script"

export function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-07QK0ZSDWH" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-07QK0ZSDWH');
        `}
      </Script>
    </>
  )
}
