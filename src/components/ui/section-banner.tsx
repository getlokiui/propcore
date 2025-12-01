"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "red" | "black" | "gold"
  breakOut?: boolean
}

// Star icon for section headers
function BannerStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-5", className)} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

/**
 * SectionBanner - Propaganda-style skewed section header
 *
 * The banner uses skewX(-6deg) on the container with counter-skewed
 * text to create visual tension while keeping content readable.
 *
 * @example
 * <SectionBanner>IMPORTANT DIRECTIVE</SectionBanner>
 * <SectionBanner variant="black" breakOut>OPERATIONS</SectionBanner>
 */
function SectionBanner({
  className,
  children,
  variant = "red",
  breakOut = false,
  ...props
}: SectionBannerProps) {
  const variantClasses = {
    red: "bg-main text-main-foreground",
    black: "bg-border text-background",
    gold: "bg-accent text-foreground",
  }

  return (
    <div
      data-slot="section-banner"
      className={cn(
        "relative my-6",
        breakOut && "-mx-4 sm:-mx-6",
        className,
      )}
      {...props}
    >
      {/* Skewed background container */}
      <div
        className={cn(
          "relative -skew-x-6 border-y-4 border-border py-3 px-8",
          "shadow-[4px_4px_0_var(--border)]",
          variantClasses[variant],
        )}
      >
        {/* Counter-skewed content */}
        <div className="skew-x-6 flex items-center gap-3">
          <BannerStar className="size-5 flex-shrink-0" />
          <span className="font-heading text-lg uppercase tracking-wider">
            {children}
          </span>
          {/* Extending line */}
          <div className="flex-1 h-[3px] bg-current opacity-40" />
        </div>
      </div>
    </div>
  )
}

/**
 * SectionHeader - Simpler propaganda-style header without full skew
 * Just adds star and line decoration
 */
function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="section-header"
      className={cn(
        "flex items-center gap-3 my-6",
        "font-heading text-xl uppercase tracking-wider text-foreground",
        className,
      )}
      {...props}
    >
      <BannerStar className="size-5 text-main flex-shrink-0" />
      {children}
      <div className="flex-1 flex items-center gap-2">
        <div className="h-[3px] w-8 bg-border" />
        <div className="h-[3px] w-3 bg-main" />
        <div className="h-[3px] flex-1 bg-border" />
        <div className="w-2 h-2 bg-accent rotate-45" />
      </div>
    </h2>
  )
}

export { SectionBanner, SectionHeader, BannerStar }
export type { SectionBannerProps }
