"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for propcore checkmark
function StarCheckmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  aggressive?: boolean
}

function Checkbox({
  className,
  aggressive = false,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative size-6 shrink-0",
        "bg-secondary-background",
        "border-3 border-border",
        "rounded-base",
        "shadow-shadow-sm",
        "transition-all duration-150",
        "hover:shadow-shadow",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-secondary-background",
        // Aggressive mode
        aggressive && [
          "size-8 border-4",
          "shadow-[3px_3px_0_var(--border)]",
          "-rotate-2",
          "data-[state=checked]:bg-main data-[state=checked]:shadow-[3px_3px_0_var(--main)]",
          "data-[state=checked]:translate-x-[-1px] data-[state=checked]:translate-y-[-1px]",
        ],
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn("flex items-center justify-center w-full h-full")}
      >
        <StarCheckmark className={cn(
          "text-main animate-in zoom-in-50 duration-150",
          aggressive ? "size-6 text-main-foreground" : "size-5"
        )} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

/**
 * PropagandaCheckbox - Large checkbox with label in Soviet style
 */
function PropagandaCheckbox({
  label,
  className,
  ...props
}: CheckboxProps & { label: string }) {
  return (
    <label className="flex items-center gap-4 cursor-pointer group">
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(
          "peer relative size-10 shrink-0",
          "bg-secondary-background",
          "border-4 border-border",
          "rounded-none",
          "shadow-[4px_4px_0_var(--border)]",
          "-rotate-2",
          "transition-all duration-150",
          "group-hover:shadow-[4px_4px_0_var(--main)]",
          "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-main",
          "data-[state=checked]:translate-x-[-2px] data-[state=checked]:translate-y-[-2px]",
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className={cn("flex items-center justify-center w-full h-full")}
        >
          <StarCheckmark className="size-7 text-main-foreground animate-in zoom-in-50 duration-150" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className="font-heading uppercase tracking-wider text-sm group-hover:text-main transition-colors">
        {label}
      </span>
    </label>
  )
}

export { Checkbox, PropagandaCheckbox, StarCheckmark }
export type { CheckboxProps }
