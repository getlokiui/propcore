"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"

import * as React from "react"

import { cn } from "@/lib/utils"
import { StarIcon } from "@/components/ui/button"

// Soviet-style close icon (angular X)
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" className={cn("size-4", className)} aria-hidden="true">
      <path d="M6 6L18 18M6 18L18 6" />
    </svg>
  )
}

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%]",
          "border-3 border-border rounded-base shadow-shadow-lg overflow-hidden",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "duration-200 sm:max-w-lg",
          className,
        )}
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

        {/* Diagonal red accent in top-right corner */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-main rotate-45" />
          <StarIcon className="absolute top-2 right-2 size-5 text-main-foreground" />
        </div>

        {/* Close button */}
        <DialogPrimitive.Close
          className={cn(
            "absolute right-12 top-4 z-20",
            "size-8 flex items-center justify-center",
            "bg-border text-background",
            "border-3 border-border",
            "hover:bg-main hover:scale-110",
            "transition-all duration-100",
            "focus:outline-hidden focus:ring-2 focus:ring-accent",
          )}
        >
          <CloseIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>

        {/* Content wrapper */}
        <div className="relative p-6 pt-8 z-10">{children}</div>

        {/* Bottom decorative stripe */}
        <div className="h-2 w-full bg-main" />
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-2 text-center sm:text-left mb-4 pb-4",
        "border-b-3 border-border",
        className,
      )}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end mt-6 pt-4",
        "border-t border-border/30",
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "flex items-center gap-3",
        "text-xl font-heading leading-none tracking-wider uppercase",
        className,
      )}
      {...props}
    >
      <StarIcon className="size-5 text-main" />
      {children}
    </DialogPrimitive.Title>
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm font-base text-foreground/80 leading-relaxed", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
