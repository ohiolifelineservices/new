export default function ResourceHints() {
  return (
    <>
      {/* Preload critical CSS */}
      <link rel="preload" href="/globals.css" as="style" />

      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />
    </>
  )
}
