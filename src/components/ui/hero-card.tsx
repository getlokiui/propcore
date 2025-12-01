"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface HeroCardProps {
  headline: string
  subheadline?: string
  description: string
  ctaText: string
  accentNumber?: string
  onCtaClick?: () => void
  className?: string
}

// Star icon component
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

function HeroCard({
  headline,
  subheadline,
  description,
  ctaText,
  accentNumber = "01",
  onCtaClick,
  className,
}: HeroCardProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Halftone texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />

      {/* Main card container */}
      <div className="relative w-full max-w-[380px] bg-background border-3 border-border rounded-base overflow-hidden shadow-shadow-lg">
        {/* Diagonal accent stripe */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none">
          <div className="absolute -right-8 -top-8 w-48 h-16 bg-main rotate-45 origin-center transform translate-y-8" />
        </div>

        {/* Gold accent circle with number */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent border-3 border-border flex items-center justify-center z-20">
          <span className="text-border text-[10px] font-heading tracking-tight">
            {accentNumber}
          </span>
        </div>

        {/* Top decorative bar */}
        <div className="h-2 bg-border w-full" />

        {/* Content area */}
        <div className="p-6 pt-8">
          {/* Geometric accent - triangle */}
          <div className="absolute left-6 top-14 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-main border-r-[12px] border-r-transparent" />

          {/* Headline */}
          <h2 className="text-foreground text-2xl font-heading leading-[0.95] tracking-tight uppercase pl-8 mb-1">
            {headline}
          </h2>

          {/* Subheadline */}
          {subheadline && (
            <p className="text-main text-lg font-heading italic pl-8 mb-4">
              {subheadline}
            </p>
          )}

          {/* Decorative divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="h-[3px] w-8 bg-border" />
            <div className="h-[3px] w-3 bg-main" />
            <div className="h-[3px] flex-1 bg-border" />
            <div className="w-2 h-2 bg-accent rotate-45" />
          </div>

          {/* Description */}
          <p className="text-foreground text-sm leading-relaxed mb-6 font-base">
            {description}
          </p>

          {/* Diagonal stripes decoration */}
          <div className="flex gap-1 mb-6">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-4 -skew-x-12",
                  i % 3 === 0 ? "bg-main" : i % 3 === 1 ? "bg-border" : "bg-accent",
                )}
              />
            ))}
          </div>

          {/* CTA Button - Ribbon style */}
          <button
            onClick={onCtaClick}
            className="group relative w-full focus-visible:outline-none"
          >
            {/* Ribbon tails */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-r-[12px] border-r-main/70 border-b-[20px] border-b-transparent" />
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-l-[12px] border-l-main/70 border-b-[20px] border-b-transparent" />

            {/* Main button */}
            <div
              className={cn(
                "relative bg-main border-3 border-border py-3 px-6",
                "text-main-foreground text-lg font-heading tracking-wider uppercase",
                "transition-all duration-100",
                "hover:bg-border hover:text-background",
                "active:translate-x-1 active:translate-y-1 active:shadow-none",
                "shadow-shadow",
                "group-focus-visible:ring-2 group-focus-visible:ring-main group-focus-visible:ring-offset-2",
              )}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <StarIcon className="w-5 h-5" />
                {ctaText}
                <StarIcon className="w-5 h-5" />
              </span>
            </div>
          </button>

          {/* Bottom decoration */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t-3 border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-main border-2 border-border" />
              <div className="w-3 h-3 rounded-full bg-accent border-2 border-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>
            <span className="text-xs text-foreground font-heading tracking-widest uppercase">
              EST. MMXXIV
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-3 bg-main w-full border-t-3 border-border" />
      </div>
    </div>
  )
}

export { HeroCard, StarIcon }
export type { HeroCardProps }
