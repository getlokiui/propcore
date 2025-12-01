"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface IdBadgeProps {
  src?: string
  alt?: string
  fallback?: string
  name: string
  role?: string
  active?: boolean
  variant?: "default" | "compact"
  className?: string
}

// Star icon for active indicator
function BadgeStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

// Avatar component used inside the badge
function BadgeAvatar({
  src,
  alt,
  fallback,
  compact = false,
}: {
  src?: string
  alt?: string
  fallback?: string
  compact?: boolean
}) {
  const [imageError, setImageError] = React.useState(false)

  const initials = React.useMemo(() => {
    if (fallback) return fallback.slice(0, 2).toUpperCase()
    if (alt) {
      const words = alt.split(" ")
      if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase()
      }
      return alt.slice(0, 2).toUpperCase()
    }
    return "??"
  }, [fallback, alt])

  const showFallback = !src || imageError

  return (
    <div
      className={cn(
        "relative flex-shrink-0",
        "flex items-center justify-center",
        "border-3 border-border",
        "rounded-base",
        "bg-background",
        "overflow-hidden",
        compact ? "w-8 h-8" : "w-12 h-12",
      )}
    >
      {showFallback ? (
        <span
          className={cn(
            "font-heading uppercase tracking-wider",
            "text-foreground",
            "select-none",
            compact ? "text-[10px]" : "text-sm",
          )}
        >
          {initials}
        </span>
      ) : (
        <img
          src={src}
          alt={alt || ""}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  )
}

function IdBadge({
  src,
  alt,
  fallback,
  name,
  role = "COMRADE",
  active = false,
  variant = "default",
  className,
}: IdBadgeProps) {
  const isCompact = variant === "compact"

  return (
    <div
      className={cn(
        "relative inline-flex items-center",
        "border-3 border-border",
        "rounded-base",
        "bg-background",
        "shadow-shadow",
        "overflow-hidden",
        isCompact ? "gap-2 p-1.5 pr-3" : "gap-3 p-2 pr-4",
        className,
      )}
    >
      {/* Red left edge accent */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0",
          "bg-main",
          isCompact ? "w-1" : "w-1.5",
        )}
      />

      {/* Active status: diagonal red stripe with white star */}
      {active && (
        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none z-10">
          <div
            className="absolute top-0 right-0 w-12 h-12 bg-main flex items-end justify-start"
            style={{
              transform: "translate(50%, -50%) rotate(45deg)",
            }}
          >
            <BadgeStar className="w-3 h-3 text-background translate-x-[14px] translate-y-[-2px]" />
          </div>
        </div>
      )}

      {/* Avatar */}
      <div className={isCompact ? "ml-1" : "ml-1.5"}>
        <BadgeAvatar src={src} alt={alt || name} fallback={fallback} compact={isCompact} />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-center min-w-0">
        {!isCompact && (
          <span
            className={cn(
              "text-[9px] font-heading uppercase tracking-[0.15em]",
              "text-main",
              "leading-tight",
            )}
          >
            {role}
          </span>
        )}
        <span
          className={cn(
            "font-heading uppercase tracking-wide",
            "text-foreground",
            "leading-tight truncate",
            isCompact ? "text-xs" : "text-sm",
          )}
        >
          {name}
        </span>
      </div>
    </div>
  )
}

export { IdBadge, BadgeAvatar, BadgeStar }
export type { IdBadgeProps }
