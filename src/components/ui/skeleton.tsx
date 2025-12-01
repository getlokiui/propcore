import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  [
    "animate-pulse rounded-base",
    "border-3 border-border",
  ],
  {
    variants: {
      variant: {
        default: "bg-secondary-background",
        striped: [
          "bg-secondary-background",
          "relative overflow-hidden",
        ],
        halftone: [
          "bg-secondary-background",
          "relative overflow-hidden",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Skeleton({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ variant }), className)}
      {...props}
    >
      {/* Striped overlay */}
      {variant === "striped" && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 4px,
              currentColor 4px,
              currentColor 8px
            )`,
          }}
        />
      )}
      {/* Halftone overlay */}
      {variant === "halftone" && (
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "4px 4px",
          }}
        />
      )}
    </div>
  )
}

export { Skeleton, skeletonVariants }
