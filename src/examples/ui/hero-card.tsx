"use client"

import { HeroCard } from "@/components/ui/hero-card"

export default function HeroCardDemo() {
  return (
    <HeroCard
      headline="Join The Revolution"
      subheadline="Stand with the workers"
      description="Unite with fellow comrades in the struggle for a better tomorrow. Together we build, together we rise."
      ctaText="Enlist Now"
      accentNumber="01"
      onCtaClick={() => alert("Enlisted!")}
    />
  )
}
