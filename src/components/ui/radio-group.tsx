"use client"

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for radio indicator
function RadioStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

type RadioGroupVariant = "default" | "aggressive"

interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  variant?: RadioGroupVariant
}

const RadioGroupContext = React.createContext<RadioGroupVariant>("default")

function RadioGroup({
  className,
  variant = "default",
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={variant}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        {...props}
      />
    </RadioGroupContext.Provider>
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  const variant = React.useContext(RadioGroupContext)

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "peer relative size-6 shrink-0",
        "bg-secondary-background",
        "border-3 border-border",
        "rounded-full",
        "shadow-shadow-sm",
        "transition-all duration-150",
        "hover:shadow-shadow",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-secondary-background",
        // Aggressive variant
        variant === "aggressive" && [
          "size-8 border-4 rounded-none",
          "shadow-[3px_3px_0_var(--border)]",
          "-rotate-3",
          "data-[state=checked]:bg-main",
          "data-[state=checked]:shadow-[3px_3px_0_var(--main)]",
          "data-[state=checked]:translate-x-[-1px] data-[state=checked]:translate-y-[-1px]",
        ],
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center w-full h-full"
      >
        <RadioStar className={cn(
          "text-main animate-in zoom-in-50 duration-150",
          variant === "aggressive" ? "size-5 text-main-foreground" : "size-4"
        )} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

/**
 * PropagandaRadioItem - Large radio with integrated label
 */
function PropagandaRadioItem({
  label,
  className,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & { label: string }) {
  return (
    <label className="flex items-center gap-4 cursor-pointer group">
      <RadioGroupPrimitive.Item
        data-slot="radio-group-item"
        value={value}
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
        <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="flex items-center justify-center w-full h-full"
        >
          <RadioStar className="size-7 text-main-foreground animate-in zoom-in-50 duration-150" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <span className="font-heading uppercase tracking-wider text-sm group-hover:text-main transition-colors">
        {label}
      </span>
    </label>
  )
}

export { RadioGroup, RadioGroupItem, PropagandaRadioItem, RadioStar }
export type { RadioGroupProps }
