"use client"

import * as SwitchPrimitive from "@radix-ui/react-switch"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for switch thumb
function SwitchStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function Switch({
  className,
  checked,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={checked}
      className={cn(
        "group peer relative inline-flex h-12 w-24 shrink-0 cursor-pointer items-center",
        "border-[4px] border-border",
        "shadow-[4px_4px_0_0_var(--border)]",
        "transition-colors duration-200",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        "data-[state=unchecked]:bg-background",
        "data-[state=checked]:bg-main",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none relative flex items-center justify-center",
          "h-9 w-9",
          "border-[4px] border-border",
          "bg-background",
          "shadow-[2px_2px_0_0_var(--border)]",
          "transition-transform duration-200 ease-in-out",
          "data-[state=unchecked]:translate-x-0.5",
          "data-[state=checked]:translate-x-[50px]",
          "group-disabled:shadow-none",
        )}
      >
        <SwitchStar
          className={cn(
            "size-4 text-main transition-all duration-200",
            "opacity-0 scale-0",
            "group-data-[state=checked]:opacity-100 group-data-[state=checked]:scale-100",
          )}
        />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch, SwitchStar }
