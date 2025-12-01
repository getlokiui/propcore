"use client"

import * as SeparatorPrimitive from "@radix-ui/react-separator"

import * as React from "react"

import { cn } from "@/lib/utils"

interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  variant?: "default" | "accent" | "striped" | "decorative"
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "default",
  ...props
}: SeparatorProps) {
  // Decorative variant - the fancy propcore divider with shapes
  if (variant === "decorative") {
    return (
      <div
        data-slot="separator"
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation}
        className={cn(
          "flex items-center gap-2",
          orientation === "horizontal" ? "w-full my-4" : "h-full mx-4 flex-col",
          className,
        )}
        {...props}
      >
        <div className="h-[3px] w-8 bg-border" />
        <div className="h-[3px] w-3 bg-main" />
        <div className="h-[3px] flex-1 bg-border" />
        <div className="w-2 h-2 bg-accent rotate-45" />
      </div>
    )
  }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        // Default: thick black line
        variant === "default" && "bg-border",
        // Accent: red line
        variant === "accent" && "bg-main",
        // Striped: diagonal pattern
        variant === "striped" && [
          "bg-[repeating-linear-gradient(45deg,var(--border),var(--border)_4px,var(--main)_4px,var(--main)_8px)]",
        ],
        // Orientation sizing - 3px thick
        orientation === "horizontal" && "h-[3px] w-full",
        orientation === "vertical" && "h-full w-[3px]",
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
export type { SeparatorProps }
