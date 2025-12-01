"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

// Star badge component - positioned to left of corner triangle
function ToastStarBadge({ starColor = "var(--main)" }: { starColor?: string }) {
  return (
    <div className="absolute top-2 right-12 bg-background border-3 border-border p-1.5">
      <svg viewBox="0 0 24 24" fill={starColor} className="size-3">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>
  )
}

// Corner diagonal accent with small star
function ToastCorner({ color, starColor = "currentColor" }: { color: string; starColor?: string }) {
  return (
    <div className="absolute top-0 right-0">
      {/* Triangle */}
      <div
        className="w-0 h-0"
        style={{
          borderTop: `40px solid ${color}`,
          borderLeft: "40px solid transparent",
        }}
      />
      {/* Small star in corner */}
      <svg viewBox="0 0 24 24" fill={starColor} className="absolute top-1 right-1 size-3">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>
  )
}

// Striped progress bar at bottom
function ToastStripes({ color }: { color: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 px-1 pb-1">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="flex-1 h-2" style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}

// Toast content wrapper
function ToastContent({
  icon,
  iconColor,
  title,
  description,
  cornerColor,
  cornerStarColor,
  stripesColor,
}: {
  icon: "star" | "x"
  iconColor: string
  title: string
  description: string
  cornerColor: string
  cornerStarColor: string
  stripesColor: string
}) {
  return (
    <div className="flex-1 pr-8">
      <ToastCorner color={cornerColor} starColor={cornerStarColor} />
      <ToastStarBadge starColor="var(--main)" />
      <div className="flex items-start gap-3">
        {icon === "star" ? (
          <svg viewBox="0 0 24 24" fill={iconColor} className="size-5 shrink-0 mt-0.5">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-5 shrink-0 mt-0.5" strokeWidth="3" stroke={iconColor}>
            <path d="M18 6L6 18M6 6l12 12" fill="none" />
          </svg>
        )}
        <div>
          <div className="font-heading uppercase tracking-wider text-sm mb-1">{title}</div>
          <div className="font-base text-foreground/80 text-sm normal-case">{description}</div>
        </div>
      </div>
      <ToastStripes color={stripesColor} />
    </div>
  )
}

export default function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        onClick={() =>
          toast(
            <ToastContent
              icon="star"
              iconColor="var(--accent)"
              title="Mission Accomplished"
              description="Your coffee subscription has been activated. The beans are on their way, comrade."
              cornerColor="var(--accent)"
              cornerStarColor="var(--foreground)"
              stripesColor="var(--accent)"
            />
          )
        }
      >
        Trigger Success
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast(
            <ToastContent
              icon="x"
              iconColor="var(--main)"
              title="Operation Failed"
              description="The espresso machine has failed. Technical support has been dispatched."
              cornerColor="var(--main)"
              cornerStarColor="var(--main-foreground)"
              stripesColor="var(--main)"
            />
          )
        }
      >
        Trigger Error
      </Button>

      <Button
        variant="default"
        className="bg-accent text-foreground border-border hover:bg-accent/90"
        onClick={() =>
          toast(
            <ToastContent
              icon="star"
              iconColor="var(--foreground)"
              title="Incoming Transmission"
              description="New directive from headquarters: All lattes must now include oat milk option."
              cornerColor="var(--foreground)"
              cornerStarColor="var(--main-foreground)"
              stripesColor="var(--main)"
            />
          )
        }
      >
        Trigger Info
      </Button>
    </div>
  )
}
