"use client"

import * as LabelPrimitive from "@radix-ui/react-label"

import * as React from "react"

import { cn } from "@/lib/utils"

// Propcore star icon for labels
function LabelStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4 text-main inline-block mr-2", className)}>
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  showStar?: boolean
}

function Label({
  className,
  showStar = true,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-sm font-heading uppercase tracking-wider",
        "leading-none",
        "text-foreground",
        "flex items-center",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {showStar && <LabelStar />}
      {children}
    </LabelPrimitive.Root>
  )
}

export { Label, LabelStar }
