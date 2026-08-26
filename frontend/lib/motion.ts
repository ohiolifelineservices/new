export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const kineticLine = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
}

export const viewportOnce = { once: true, margin: "-80px" }
