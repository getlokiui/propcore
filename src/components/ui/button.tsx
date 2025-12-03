import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for propaganda flair
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

// Arrow icons for directional buttons
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden="true">
      <polygon points="5,4 19,12 5,20" />
    </svg>
  )
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden="true">
      <polygon points="19,4 5,12 19,20" />
    </svg>
  )
}

function DoubleArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)} aria-hidden="true">
      <polygon points="2,4 10,12 2,20" />
      <polygon points="12,4 20,12 12,20" />
    </svg>
  )
}

const buttonVariants = cva(
  "inline-flex flex-row items-center justify-center whitespace-nowrap rounded-base text-sm font-heading uppercase tracking-wider ring-offset-white transition-all duration-100 gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-main border-3 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none",
        noShadow:
          "text-main-foreground bg-main border-3 border-border",
        neutral:
          "bg-secondary-background text-foreground border-3 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        secondary:
          "bg-secondary-background text-foreground border-3 border-border shadow-shadow hover:bg-accent hover:text-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        ghost:
          "bg-transparent text-foreground border-3 border-transparent hover:border-border hover:bg-accent/20",
        destructive:
          "text-main-foreground bg-main border-3 border-border shadow-shadow hover:bg-propcore-red-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        outline:
          "bg-transparent text-foreground border-3 border-border shadow-shadow hover:bg-main hover:text-main-foreground hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        reverse:
          "text-main-foreground bg-main border-3 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showStars?: boolean
  rotated?: boolean | "left" | "right"
  stripe?: boolean
  arrow?: "left" | "right" | "both" | "forward"
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  showStars = false,
  rotated = false,
  stripe = false,
  arrow,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Determine rotation class
  const getRotationClass = () => {
    if (!rotated) return ""
    if (rotated === "left") return "-rotate-2"
    if (rotated === "right") return "rotate-2"
    return "-rotate-2" // default to left rotation
  }

  // Render left decoration (star or arrow)
  const renderLeftDecor = () => {
    if (showStars) return <StarIcon className="size-4" />
    if (arrow === "left" || arrow === "both") return <ArrowLeft className="size-4" />
    return null
  }

  // Render right decoration (star or arrow)
  const renderRightDecor = () => {
    if (showStars) return <StarIcon className="size-4" />
    if (arrow === "right" || arrow === "both" || arrow === "forward") {
      return arrow === "forward" ? <DoubleArrowRight className="size-4" /> : <ArrowRight className="size-4" />
    }
    return null
  }

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        getRotationClass(),
        stripe && "overflow-hidden relative",
        className,
      )}
      {...props}
    >
      {/* Diagonal stripe overlay */}
      {stripe && (
        <div
          className="absolute top-0 right-0 w-8 h-full pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -right-4 -top-2 w-12 h-16 bg-border/30 -skew-x-[20deg]"
          />
        </div>
      )}
      {renderLeftDecor()}
      {children}
      {renderRightDecor()}
    </Comp>
  )
}

// Ribbon-style button for hero CTAs - the propaganda banner treatment
function RibbonButton({
  className,
  children,
  showStars = true,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { showStars?: boolean }) {
  return (
    <div className="relative inline-flex group">
      {/* Left ribbon tail */}
      <div
        className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0"
        style={{
          borderTop: "22px solid transparent",
          borderBottom: "22px solid transparent",
          borderRight: "12px solid var(--propcore-red)",
        }}
      />

      <button
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "bg-main text-main-foreground",
          "px-6 py-3 font-heading uppercase tracking-wider text-sm",
          "border-3 border-border",
          "shadow-shadow",
          "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-shadow-sm",
          "active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none",
          "transition-all duration-100",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {showStars && <StarIcon className="size-4" />}
        {children}
        {showStars && <StarIcon className="size-4" />}
      </button>

      {/* Right ribbon tail */}
      <div
        className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 w-0 h-0"
        style={{
          borderTop: "22px solid transparent",
          borderBottom: "22px solid transparent",
          borderLeft: "12px solid var(--propcore-red)",
        }}
      />
    </div>
  )
}

export { Button, RibbonButton, buttonVariants, StarIcon, ArrowRight, ArrowLeft, DoubleArrowRight }
