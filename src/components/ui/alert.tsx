import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star decoration for alerts
function AlertStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-3 opacity-60", className)}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

// Icon box for propaganda alerts - circular style
function AlertIconBox({
  children,
  variant = "info",
  className
}: {
  children: React.ReactNode
  variant?: "info" | "warning" | "error" | "success"
  className?: string
}) {
  const variantStyles = {
    info: "border-main bg-background text-main",
    warning: "border-border bg-accent text-foreground",
    error: "border-main-foreground bg-main text-main-foreground",
    success: "border-main-foreground bg-main text-main-foreground",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "w-12 h-12 shrink-0",
        "rounded-full",
        "border-3",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

const alertVariants = cva(
  "relative w-full border-3 border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-5 [&>svg]:translate-y-0.5 [&>svg]:text-current overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        info: "bg-background text-foreground shadow-shadow",
        warning: "bg-accent text-foreground shadow-shadow",
        error: "bg-main text-main-foreground",
        destructive: "bg-main text-main-foreground",
        success: "bg-border text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {/* Halftone texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />
      {/* Diagonal accent stripe in corner */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-16 h-4 origin-top-right rotate-45 translate-x-4 -translate-y-1 bg-current opacity-10" />
      </div>
      {props.children}
    </div>
  )
}

// Propaganda-style alert with icon box
interface PropagandaAlertProps extends React.ComponentProps<"div"> {
  variant: "info" | "warning" | "error" | "success"
  title: string
  description: string
}

function PropagandaAlert({
  variant,
  title,
  description,
  className,
  ...props
}: PropagandaAlertProps) {
  const iconElement = {
    warning: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    ),
    success: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-6">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">i</text>
      </svg>
    ),
    error: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="13" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="1.25" fill="white" />
      </svg>
    ),
  }

  const variantStyles = {
    info: "bg-background text-foreground",
    warning: "bg-accent text-foreground",
    error: "bg-main text-main-foreground",
    success: "bg-main text-main-foreground",
  }

  return (
    <div
      data-slot="propaganda-alert"
      role="alert"
      className={cn(
        "relative flex items-center gap-4",
        "w-full border-3 border-border",
        "px-4 py-4",
        "overflow-hidden",
        "shadow-shadow",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      <AlertIconBox variant={variant}>
        {iconElement[variant]}
      </AlertIconBox>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 font-heading uppercase tracking-wider">
          <AlertStar className="opacity-100" />
          <span>{title}</span>
          <AlertStar className="opacity-100" />
        </div>
        <p className="text-sm mt-1 opacity-90 normal-case">{description}</p>
      </div>
    </div>
  )
}

function AlertTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 min-h-4 font-heading tracking-wider uppercase",
        className,
      )}
      {...props}
    >
      <span className="line-clamp-1">{children}</span>
    </div>
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm font-base [&_p]:leading-relaxed normal-case",
        className,
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertStar, AlertIconBox, PropagandaAlert }
