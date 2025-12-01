"use client"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

// Star icon for active badge
function AvatarStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-full", className)} aria-hidden="true">
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden border-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        circle: "rounded-full",
        square: "rounded-base",
      },
      size: {
        sm: "size-8 text-[10px]",
        default: "size-10 text-xs",
        lg: "size-12 text-sm",
        xl: "size-16 text-base",
      },
      active: {
        true: "border-main",
        false: "border-border",
      },
    },
    defaultVariants: {
      variant: "square",
      size: "default",
      active: false,
    },
  }
)

const starBadgeSizes = {
  sm: "size-4 -bottom-1 -right-1",
  default: "size-5 -bottom-1.5 -right-1.5",
  lg: "size-6 -bottom-2 -right-2",
  xl: "size-7 -bottom-2 -right-2",
}

interface AvatarProps
  extends React.ComponentProps<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  /** Show diagonal red accent stripe */
  diagonal?: boolean
}

function Avatar({
  className,
  variant,
  size = "default",
  active,
  diagonal,
  children,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-active={active || undefined}
      className={cn(avatarVariants({ variant, size, active }), className)}
      {...props}
    >
      {/* Optional diagonal accent stripe */}
      {diagonal && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              135deg,
              transparent 60%,
              var(--main) 60%,
              var(--main) 70%,
              transparent 70%
            )`,
          }}
        />
      )}

      {children}

      {/* Active status: cream square with red star in bottom-right */}
      {active && (
        <div
          className={cn(
            "absolute z-20",
            "flex items-center justify-center",
            "bg-secondary-background",
            "border-3 border-main",
            starBadgeSizes[size || "default"],
          )}
        >
          <AvatarStar className="text-main size-3/4" />
        </div>
      )}
    </AvatarPrimitive.Root>
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center",
        "bg-secondary-background text-foreground",
        "font-heading uppercase tracking-wider",
        className,
      )}
      {...props}
    />
  )
}

// Avatar Group for stacked avatars
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show before "+N" */
  max?: number
  /** Size of avatars (for the "+N" badge) */
  size?: "sm" | "default" | "lg" | "xl"
}

const groupSizeClasses = {
  sm: "size-8 text-[10px]",
  default: "size-10 text-xs",
  lg: "size-12 text-sm",
  xl: "size-16 text-base",
}

function AvatarGroup({
  children,
  max,
  size = "default",
  className,
  ...props
}: AvatarGroupProps) {
  const avatars = React.Children.toArray(children)
  const visible = max ? avatars.slice(0, max) : avatars
  const remaining = max ? Math.max(0, avatars.length - max) : 0

  return (
    <div
      data-slot="avatar-group"
      className={cn("flex items-center -space-x-3", className)}
      {...props}
    >
      {visible.map((child, index) => (
        <div
          key={index}
          className="relative"
          style={{ zIndex: visible.length - index }}
        >
          {child}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "relative z-0",
            "inline-flex items-center justify-center",
            "border-3 border-border",
            "rounded-base",
            "bg-foreground text-background",
            "font-heading uppercase",
            groupSizeClasses[size],
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}

// Avatar Badge - ID card style with name and designation
interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src?: string
  /** Alt text / name for fallback */
  alt?: string
  /** Custom fallback text (initials) */
  fallback?: string
  /** Display name */
  name: string
  /** Role/title displayed above name */
  designation?: string
  /** Show active star indicator */
  active?: boolean
}

function AvatarBadge({
  src,
  alt,
  fallback,
  name,
  designation = "MEMBER",
  active = false,
  className,
  ...props
}: AvatarBadgeProps) {
  // Generate initials from name or fallback
  const initials = React.useMemo(() => {
    if (fallback) return fallback.slice(0, 2).toUpperCase()
    if (name) {
      const words = name.split(" ")
      if (words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase()
      }
      return name.slice(0, 2).toUpperCase()
    }
    return "??"
  }, [fallback, name])

  return (
    <div
      data-slot="avatar-badge"
      className={cn(
        "relative inline-flex items-center gap-3",
        "border-3 border-border",
        "bg-background",
        "p-2 pr-6",
        className,
      )}
      {...props}
    >
      {/* Red corner triangle accent */}
      <div
        className="absolute top-0 right-0 w-0 h-0 pointer-events-none"
        style={{
          borderTop: "24px solid var(--main)",
          borderLeft: "24px solid transparent",
        }}
      />

      <Avatar size="lg" active={active}>
        {src && <AvatarImage src={src} alt={alt || name} />}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="text-[10px] font-heading uppercase tracking-widest text-main">
          {designation}
        </span>
        <span className="text-sm font-heading uppercase tracking-wider text-foreground">
          {name}
        </span>
      </div>
    </div>
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarBadge,
  AvatarStar,
  avatarVariants,
}
