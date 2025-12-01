"use client"

import * as TabsPrimitive from "@radix-ui/react-tabs"

import * as React from "react"

import { cn } from "@/lib/utils"

type TabsVariant = "default" | "aggressive" | "skewed"

interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  variant?: TabsVariant
}

const TabsContext = React.createContext<TabsVariant>("default")

function Tabs({
  className,
  variant = "default",
  ...props
}: TabsProps) {
  return (
    <TabsContext.Provider value={variant}>
      <TabsPrimitive.Root
        data-slot="tabs"
        className={cn("w-full", className)}
        {...props}
      />
    </TabsContext.Provider>
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const variant = React.useContext(TabsContext)

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-12 items-center gap-1",
        "rounded-base border-3 border-border",
        "bg-background p-1",
        "shadow-shadow-sm",
        // Skewed variant - whole list is skewed
        variant === "skewed" && "-skew-x-3 shadow-[4px_4px_0_var(--border)]",
        // Aggressive variant - bolder styling
        variant === "aggressive" && "border-4 shadow-[4px_4px_0_var(--border)] gap-0",
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const variant = React.useContext(TabsContext)

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "whitespace-nowrap px-4 py-1.5",
        "rounded-base border-3 border-transparent",
        "text-sm font-heading uppercase tracking-wider",
        "transition-all duration-100",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Inactive state
        "text-foreground/70 hover:text-foreground hover:bg-accent/20",
        // Active state - banner style
        "data-[state=active]:bg-main data-[state=active]:text-main-foreground",
        "data-[state=active]:border-border data-[state=active]:shadow-[2px_2px_0_var(--border)]",
        // Skewed variant - counter-skew text
        variant === "skewed" && "skew-x-3",
        // Aggressive variant
        variant === "aggressive" && [
          "rounded-none border-0 px-6",
          "data-[state=active]:-rotate-1 data-[state=active]:translate-y-[-2px]",
          "data-[state=active]:shadow-[3px_3px_0_var(--border)]",
          "data-[state=active]:z-10",
        ],
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "mt-4 rounded-base",
        "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
