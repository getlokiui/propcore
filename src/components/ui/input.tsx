import * as React from "react"

import { cn } from "@/lib/utils"

// Corner accent variants for Propcore style
type CornerAccent = "red" | "gold" | "black" | "none"

interface InputProps extends React.ComponentProps<"input"> {
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

function Input({
  className,
  type,
  cornerAccent = "gold",
  aggressive = false,
  rotated = false,
  ...props
}: InputProps) {
  const getRotationClass = () => {
    if (!rotated) return ""
    if (rotated === "left") return "-rotate-1"
    if (rotated === "right") return "rotate-1"
    return "-rotate-1"
  }

  return (
    <div className={cn("relative", getRotationClass())}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "flex h-14 w-full rounded-base border-3 border-border bg-secondary-background",
          "selection:bg-main selection:text-main-foreground",
          "px-5 py-3 text-base font-base text-foreground",
          "file:border-0 file:bg-transparent file:text-sm file:font-heading file:uppercase file:tracking-wider",
          "placeholder:text-foreground/40 placeholder:italic",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-100",
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
            borderBottom: `16px solid ${cornerAccentColors[cornerAccent]}`,
            borderLeft: "16px solid transparent",
          }}
        />
      )}
      {/* Aggressive mode adds a red accent bar on focus */}
      {aggressive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-main opacity-0 peer-focus:opacity-100 transition-opacity" />
      )}
    </div>
  )
}

/**
 * PropagandaInput - Full Soviet aesthetic input with label
 */
function PropagandaInput({
  label,
  className,
  ...props
}: InputProps & { label: string }) {
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
      <input
        data-slot="input"
        className={cn(
          "flex h-16 w-full rounded-none border-4 border-border bg-secondary-background",
          "selection:bg-main selection:text-main-foreground",
          "px-5 pt-5 pb-3 text-base font-base text-foreground",
          "shadow-[4px_4px_0_var(--border)]",
          "placeholder:text-foreground/40 placeholder:uppercase placeholder:tracking-wider",
          "focus-visible:outline-hidden focus-visible:shadow-[4px_4px_0_var(--main)]",
          "focus-visible:border-main",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-all duration-100",
          className,
        )}
        {...props}
      />
      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-0 h-0 pointer-events-none"
        style={{
          borderBottom: "20px solid var(--main)",
          borderLeft: "20px solid transparent",
        }}
      />
    </div>
  )
}

export { Input, PropagandaInput }
export type { InputProps, CornerAccent }
