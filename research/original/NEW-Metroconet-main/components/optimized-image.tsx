"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { useInView } from "react-intersection-observer"

type OptimizedImageProps = ImageProps & {
  lowQualitySrc?: string
}

export default function OptimizedImage({ src, alt, lowQualitySrc, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  })

  // Use low quality image or blur placeholder if provided
  const placeholder = lowQualitySrc ? "empty" : props.placeholder

  // Only render the actual image when in viewport
  const imageSrc = inView ? src : lowQualitySrc || src

  return (
    <div
      ref={ref}
      className={`relative ${props.className || ""}`}
      style={{
        height: props.height,
        width: props.width,
        ...(!isLoaded && lowQualitySrc ? { background: "#f0f0f0" } : {}),
      }}
    >
      {inView && (
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          {...props}
          onLoad={() => setIsLoaded(true)}
          className={`${props.className || ""} ${!isLoaded && lowQualitySrc ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
