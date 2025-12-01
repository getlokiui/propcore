import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  rotated?: boolean | "left" | "right" | "random"
}

function Card({ className, rotated, ...props }: CardProps) {
  // Determine rotation class
  const getRotationClass = () => {
    if (!rotated) return ""
    if (rotated === "left") return "-rotate-1"
    if (rotated === "right") return "rotate-1"
    if (rotated === "random" || rotated === true) {
      // Use a deterministic "random" based on content for SSR consistency
      return Math.random() > 0.5 ? "rotate-1" : "-rotate-1"
    }
    return ""
  }

  return (
    <div
      data-slot="card"
      className={cn(
        "relative rounded-base flex flex-col shadow-shadow-lg border-3 border-border bg-background text-foreground font-base overflow-hidden",
        getRotationClass(),
        className,
      )}
      {...props}
    />
  )
}

// Card with halftone texture overlay
function CardWithTexture({ className, children, rotated, ...props }: CardProps) {
  return (
    <Card className={cn("", className)} rotated={rotated} {...props}>
      {/* Halftone texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />
      {children}
    </Card>
  )
}

// Top decorative bar
function CardBar({ className, variant = "black", ...props }: React.ComponentProps<"div"> & { variant?: "black" | "red" | "gold" }) {
  const variantClasses = {
    black: "bg-border",
    red: "bg-main",
    gold: "bg-accent",
  }

  return (
    <div
      data-slot="card-bar"
      className={cn("h-2 w-full", variantClasses[variant], className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading leading-tight uppercase tracking-wider text-lg", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm font-base text-foreground/80", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 py-4", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

// Decorative divider for inside cards
function CardDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-divider"
      className={cn("flex items-center gap-2 mx-6 my-4", className)}
      {...props}
    >
      <div className="h-[3px] w-8 bg-border" />
      <div className="h-[3px] w-3 bg-main" />
      <div className="h-[3px] flex-1 bg-border" />
      <div className="w-2 h-2 bg-accent rotate-45" />
    </div>
  )
}

// Accent badge for card corners (like "No.01")
function CardBadge({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badge"
      className={cn(
        "absolute top-4 right-4 w-12 h-12 rounded-full bg-accent border-3 border-border flex items-center justify-center z-20",
        className,
      )}
      {...props}
    >
      <span className="text-foreground text-[10px] font-heading tracking-tight uppercase">
        {children}
      </span>
    </div>
  )
}

// Diagonal accent stripe for card corners
function CardAccentStripe({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none", className)} {...props}>
      <div className="absolute -right-8 -top-8 w-48 h-16 bg-main rotate-45 origin-center transform translate-y-8" />
    </div>
  )
}

// Propaganda-style corner stamp - rotated square that breaks out of card bounds
// Use with CardStamped wrapper for overflow-visible support
function CardStamp({
  className,
  children,
  position = "top-right",
  variant = "red",
  ...props
}: React.ComponentProps<"div"> & {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  variant?: "red" | "black" | "gold"
}) {
  const positionClasses = {
    "top-right": "-top-3 -right-3",
    "top-left": "-top-3 -left-3",
    "bottom-right": "-bottom-3 -right-3",
    "bottom-left": "-bottom-3 -left-3",
  }

  const variantClasses = {
    red: "bg-main text-main-foreground",
    black: "bg-border text-background",
    gold: "bg-accent text-foreground",
  }

  return (
    <div
      data-slot="card-stamp"
      className={cn(
        "absolute z-30 w-11 h-11",
        "flex items-center justify-center",
        "border-3 border-border",
        "rotate-12 shadow-[2px_2px_0_var(--border)]",
        positionClasses[position],
        variantClasses[variant],
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      {children ?? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-12">
          <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
        </svg>
      )}
    </div>
  )
}

// Card wrapper that allows stamps to overflow
function CardStamped({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-stamped"
      className={cn("relative", className)}
      {...props}
    >
      <Card className="overflow-visible">
        {children}
      </Card>
    </div>
  )
}

export {
  Card,
  CardWithTexture,
  CardBar,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
  CardDivider,
  CardBadge,
  CardAccentStripe,
  CardStamp,
  CardStamped,
}
export type { CardProps }
