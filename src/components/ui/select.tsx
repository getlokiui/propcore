"use client"

import * as SelectPrimitive from "@radix-ui/react-select"

import * as React from "react"

import { cn } from "@/lib/utils"

// Propcore star icon for check indicator
function SelectStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-3", className)}>
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

// Propcore angular chevron icon
function SelectChevron({ className, direction = "down" }: { className?: string; direction?: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      className={cn("size-4", className)}
    >
      {direction === "down" ? (
        <path d="M6 9L12 15L18 9" />
      ) : (
        <path d="M6 15L12 9L18 15" />
      )}
    </svg>
  )
}

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "group relative flex h-12 w-full items-center justify-between gap-2 px-4",
        "rounded-base border-3 border-border",
        "bg-secondary-background text-foreground",
        "font-heading text-sm uppercase tracking-wider",
        "shadow-shadow",
        "transition-all duration-150",
        "hover:bg-accent/20",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "[&>span]:line-clamp-1 *:data-[slot=select-value]:line-clamp-1",
        "*:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2",
        className,
      )}
      {...props}
    >
      {/* Star prefix */}
      <SelectStar className="text-main shrink-0" />
      <span className="flex-1 text-left truncate">{children}</span>
      <SelectPrimitive.Icon asChild>
        <SelectChevron className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </SelectPrimitive.Icon>
      {/* Diagonal red accent corner */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 0,
          height: 0,
          borderTop: "12px solid var(--main)",
          borderLeft: "12px solid transparent",
        }}
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up"
      className={cn(
        "flex cursor-pointer items-center justify-center h-8",
        "bg-background text-foreground",
        "border-b-2 border-border",
        className,
      )}
      {...props}
    >
      <SelectChevron direction="up" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down"
      className={cn(
        "flex cursor-pointer items-center justify-center h-8",
        "bg-background text-foreground",
        "border-t-2 border-border",
        className,
      )}
      {...props}
    >
      <SelectChevron direction="down" />
    </SelectPrimitive.ScrollDownButton>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden",
          "rounded-base border-3 border-border",
          "bg-background text-foreground",
          "shadow-shadow",
          // Animation
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "origin-(--radix-select-content-transform-origin)",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        {...props}
      >
        {/* Halftone texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "4px 4px",
          }}
        />
        {/* Diagonal red accent corner */}
        <div
          className="absolute top-0 right-0 z-10 pointer-events-none"
          style={{
            width: 0,
            height: 0,
            borderTop: "20px solid var(--main)",
            borderLeft: "20px solid transparent",
          }}
        />
        <div className="absolute top-[5px] right-[4px] z-20 pointer-events-none">
          <SelectStar className="size-2 text-main-foreground" />
        </div>

        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1 relative z-[1]",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "flex items-center gap-2 px-3 py-2",
        "font-heading text-xs uppercase tracking-widest",
        "text-main",
        "border-b-2 border-border/30",
        className,
      )}
      {...props}
    >
      <SelectStar className="size-2" />
      {children}
    </SelectPrimitive.Label>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-2",
        "py-2 px-3 pr-8",
        "font-heading text-sm uppercase tracking-wide",
        "text-foreground",
        "outline-none transition-colors duration-100",
        // Hover/focus turns red
        "hover:bg-main hover:text-main-foreground",
        "focus:bg-main focus:text-main-foreground",
        // Selected state with gold tint
        "data-[state=checked]:bg-accent/30",
        "data-[state=checked]:hover:bg-main data-[state=checked]:hover:text-main-foreground",
        // Disabled
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <SelectStar className="size-3" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("my-1 h-[2px] bg-border", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectStar,
  SelectChevron,
}
