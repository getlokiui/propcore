"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import * as React from "react"

import { cn } from "@/lib/utils"

// Propcore chevron icon (angular)
function CollapsibleChevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      className={cn("size-4 transition-transform duration-200", className)}
    >
      <path d="M6 9L12 15L18 9" />
    </svg>
  )
}

// Star icon for decoration
function CollapsibleStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-3", className)}>
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="collapsible"
      className={cn("space-y-2", className)}
      {...props}
    />
  )
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        "[&[data-state=open]_svg.collapsible-chevron]:rotate-180",
        className,
      )}
      {...props}
    />
  )
}

// Styled trigger variant with star and chevron built-in
function CollapsibleTriggerStyled({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        "flex w-full items-center justify-between",
        "rounded-base border-3 border-border",
        "bg-secondary-background px-4 py-3",
        "font-heading text-sm uppercase tracking-wider text-foreground",
        "shadow-shadow",
        "transition-all",
        "hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
        "[&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        <CollapsibleStar className="text-main" />
        {children}
      </span>
      <CollapsibleChevron />
    </CollapsiblePrimitive.CollapsibleTrigger>
  )
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className,
      )}
      {...props}
    />
  )
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleTriggerStyled,
  CollapsibleContent,
  CollapsibleChevron,
  CollapsibleStar,
}
