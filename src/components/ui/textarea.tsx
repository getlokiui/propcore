import * as React from "react"

import { cn } from "@/lib/utils"

// Corner accent variants for Propcore style
type CornerAccent = "red" | "gold" | "black" | "none"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  cornerAccent?: CornerAccent
  aggressive?: boolean
  rotated?: boolean | "left" | "right"
}

const cornerAccentColors = {
  red: "var(--main)",
  gold: "var(--accent)",
  black: "var(--border)",
  none: "transparent",
}

function Textarea({
  className,
  cornerAccent = "gold",
  aggressive = false,
  rotated = false,
  ...props
}: TextareaProps) {
  const getRotationClass = () => {
    if (!rotated) return ""
    if (rotated === "left") return "-rotate-1"
    if (rotated === "right") return "rotate-1"
    return "-rotate-1"
  }

  return (
    <div className={cn("relative", getRotationClass())}>
      <textarea
        data-slot="textarea"
        className={cn(
          "flex min-h-[120px] w-full",
          "rounded-base border-3 border-border",
          "bg-secondary-background",
          "px-5 py-3",
          "text-base font-base text-foreground",
          "placeholder:text-foreground/40 placeholder:italic",
          "selection:bg-main selection:text-main-foreground",
          "transition-all",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          // Aggressive mode
          aggressive && [
            "border-4 shadow-[4px_4px_0_var(--border)]",
            "focus-visible:shadow-[4px_4px_0_var(--main)]",
            "focus-visible:translate-x-[-2px] focus-visible:translate-y-[-2px]",
          ],
          className,
        )}
        {...props}
      />
      {cornerAccent !== "none" && (
        <div
          className="absolute bottom-0 right-0 w-0 h-0 pointer-events-none"
          style={{
            borderBottom: `${aggressive ? "20px" : "16px"} solid ${cornerAccentColors[cornerAccent]}`,
            borderLeft: `${aggressive ? "20px" : "16px"} solid transparent`,
          }}
        />
      )}
    </div>
  )
}

/**
 * PropagandaTextarea - Full Soviet aesthetic textarea with label
 */
function PropagandaTextarea({
  label,
  className,
  ...props
}: TextareaProps & { label: string }) {
  return (
    <div className="relative -rotate-1">
      {/* Skewed label */}
      <div className="absolute -top-3 left-4 z-10">
        <span className="inline-flex items-center gap-1 bg-border text-background px-3 py-1 text-xs font-heading uppercase tracking-wider -skew-x-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden="true">
            <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
          </svg>
          {label}
        </span>
      </div>
      <textarea
        data-slot="textarea"
        className={cn(
          "flex min-h-[140px] w-full",
          "rounded-none border-4 border-border",
          "bg-secondary-background",
          "px-5 pt-5 pb-3",
          "text-base font-base text-foreground",
          "shadow-[4px_4px_0_var(--border)]",
          "placeholder:text-foreground/40 placeholder:uppercase placeholder:tracking-wider",
          "selection:bg-main selection:text-main-foreground",
          "transition-all",
          "focus-visible:outline-hidden focus-visible:shadow-[4px_4px_0_var(--main)]",
          "focus-visible:border-main",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          className,
        )}
        {...props}
      />
      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0 pointer-events-none"
        style={{
          borderBottom: "24px solid var(--main)",
          borderLeft: "24px solid transparent",
        }}
      />
    </div>
  )
}

export { Textarea, PropagandaTextarea }
export type { TextareaProps }
