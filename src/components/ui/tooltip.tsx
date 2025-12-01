"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import * as React from "react"

import { cn } from "@/lib/utils"

type TooltipVariant = "default" | "aggressive"

const TooltipContext = React.createContext<TooltipVariant>("default")

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  variant?: TooltipVariant
}

function Tooltip({
  variant = "default",
  ...props
}: TooltipProps) {
  return (
    <TooltipContext.Provider value={variant}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipContext.Provider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 8,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  const variant = React.useContext(TooltipContext)

  return (
    <TooltipPrimitive.Content
      data-slot="tooltip-content"
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-visible",
        "bg-border text-background",
        "px-3 py-2",
        "text-sm font-heading uppercase tracking-wider",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "origin-(--radix-tooltip-content-transform-origin)",
        // Aggressive variant
        variant === "aggressive" && [
          "-rotate-2",
          "border-3 border-main",
          "shadow-[4px_4px_0_var(--main)]",
          "bg-main text-main-foreground",
        ],
        className,
      )}
      {...props}
    >
      {/* Arrow/pointer */}
      <TooltipPrimitive.Arrow
        className={cn(
          "fill-border",
          variant === "aggressive" && "fill-main"
        )}
        width={12}
        height={6}
      />
      <span className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 shrink-0" aria-hidden="true">
          <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
        </svg>
        {children}
      </span>
    </TooltipPrimitive.Content>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
export type { TooltipProps }
