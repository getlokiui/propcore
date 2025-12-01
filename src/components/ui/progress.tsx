"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number
  variant?: "default" | "aggressive" | "striped"
  showLabel?: boolean
}

function Progress({
  className,
  value,
  variant = "default",
  showLabel = false,
  ...props
}: ProgressProps) {
  return (
    <div className={cn("relative", variant === "aggressive" && "-rotate-1")}>
      {showLabel && (
        <div className="absolute -top-6 right-0 font-heading text-sm uppercase tracking-wider">
          {value || 0}%
        </div>
      )}
      <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-base border-3 border-border bg-secondary-background",
          variant === "aggressive" && [
            "h-6 border-4 rounded-none",
            "shadow-[4px_4px_0_var(--border)]",
          ],
          variant === "striped" && "h-5",
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            "h-full w-full flex-1 border-r-2 border-border bg-main transition-all",
            variant === "aggressive" && "border-r-3",
            (variant === "aggressive" || variant === "striped") && "bg-main",
          )}
          style={{
            transform: `translateX(-${100 - (value || 0)}%)`,
            ...(variant !== "default" && {
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 4px,
                rgba(0,0,0,0.2) 4px,
                rgba(0,0,0,0.2) 8px
              )`,
            }),
          }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

/**
 * PropagandaProgress - Full Soviet-style progress with label badge
 */
function PropagandaProgress({
  value = 0,
  label,
  className,
  ...props
}: ProgressProps & { label: string }) {
  return (
    <div className={cn("relative -rotate-1", className)}>
      {/* Skewed label */}
      <div className="absolute -top-3 left-4 z-10">
        <span className="inline-flex items-center gap-1 bg-border text-background px-3 py-1 text-xs font-heading uppercase tracking-wider -skew-x-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden="true">
            <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
          </svg>
          {label}
        </span>
      </div>
      {/* Percentage badge */}
      <div className="absolute -top-3 right-4 z-10">
        <span className="inline-flex items-center bg-main text-main-foreground px-2 py-1 text-xs font-heading uppercase tracking-wider skew-x-3">
          {value}%
        </span>
      </div>
      <ProgressPrimitive.Root
        data-slot="progress"
        className="relative h-8 w-full overflow-hidden rounded-none border-4 border-border bg-secondary-background shadow-[4px_4px_0_var(--border)]"
        {...props}
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full w-full flex-1 border-r-3 border-border bg-main transition-all"
          style={{
            transform: `translateX(-${100 - value}%)`,
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 6px,
              rgba(0,0,0,0.15) 6px,
              rgba(0,0,0,0.15) 12px
            )`,
          }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
}

export { Progress, PropagandaProgress }
export type { ProgressProps }
