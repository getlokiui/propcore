import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for badge decoration
function BadgeStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-3", className)} aria-hidden="true">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

const badgeVariants = cva(
  "inline-flex items-center justify-center border-3 border-border px-3 py-1 text-xs font-heading uppercase tracking-wider w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-accent text-foreground",
        outline: "bg-accent text-foreground",
        urgent: "bg-main text-main-foreground",
        neutral: "bg-secondary-background text-foreground",
        success: "bg-border text-background",
        warning: "bg-accent text-foreground",
        error: "bg-main text-main-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

// Ribbon-style urgent badge with stars and gold accent
function RibbonBadge({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="ribbon-badge"
      className={cn(
        "relative inline-flex items-center justify-center",
        "border-3 border-border",
        "bg-main text-main-foreground",
        "px-4 py-1",
        "text-xs font-heading uppercase tracking-wider",
        "gap-2",
        className,
      )}
      {...props}
    >
      {/* Gold triangle accent in top-right corner */}
      <div
        className="absolute top-0 right-0 w-0 h-0"
        style={{
          borderTop: "14px solid var(--accent)",
          borderLeft: "14px solid transparent",
        }}
      />
      {/* Small star in gold corner */}
      <svg viewBox="0 0 24 24" fill="var(--foreground)" className="absolute top-0.5 right-0.5 size-2">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
      <BadgeStar className="size-3" />
      {children}
      <BadgeStar className="size-3" />
    </span>
  )
}

export { Badge, RibbonBadge, BadgeStar, badgeVariants }
