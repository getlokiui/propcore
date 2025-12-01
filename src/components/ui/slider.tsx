"use client"

import * as SliderPrimitive from "@radix-ui/react-slider"

import * as React from "react"

import { cn } from "@/lib/utils"

type SliderVariant = "default" | "aggressive"

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  variant?: SliderVariant
}

const SliderContext = React.createContext<SliderVariant>("default")

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  variant = "default",
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderContext.Provider value={variant}>
      <SliderPrimitive.Root
        data-slot="slider"
        defaultValue={defaultValue}
        value={value}
        min={min}
        max={max}
        className={cn(
          "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          variant === "aggressive" && "-rotate-1",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative w-full grow overflow-hidden bg-secondary-background border-3 border-border data-[orientation=horizontal]:h-4 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-4",
            variant === "aggressive" && [
              "border-4 data-[orientation=horizontal]:h-6",
              "shadow-[4px_4px_0_var(--border)]",
            ],
          )}
        >
          <SliderPrimitive.Range
            data-slot="slider-range"
            className={cn(
              "absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
              "bg-main",
            )}
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 3px,
                rgba(0,0,0,0.15) 3px,
                rgba(0,0,0,0.15) 6px
              )`,
            }}
          />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderThumb key={index} />
        ))}
      </SliderPrimitive.Root>
    </SliderContext.Provider>
  )
}

function SliderThumb() {
  const variant = React.useContext(SliderContext)

  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      className={cn(
        "block h-6 w-6",
        "border-3 border-border",
        "bg-secondary-background",
        "transition-all duration-100",
        "hover:bg-accent",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        variant === "aggressive" && [
          "h-8 w-8 border-4 rounded-none",
          "-rotate-3",
          "shadow-[2px_2px_0_var(--border)]",
          "hover:shadow-[2px_2px_0_var(--main)]",
          "hover:translate-x-[-1px] hover:translate-y-[-1px]",
        ],
      )}
    >
      {variant === "aggressive" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 mx-auto text-main" aria-hidden="true">
          <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
        </svg>
      )}
    </SliderPrimitive.Thumb>
  )
}

export { Slider }
export type { SliderProps }
