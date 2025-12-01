import { cn } from "@/lib/utils"

// Star separator for propcore style
function MarqueeStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("size-6 text-main shrink-0", className)}>
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

interface MarqueeProps {
  items: string[]
  className?: string
  speed?: "slow" | "normal" | "fast"
  showStars?: boolean
}

export default function Marquee({
  items,
  className,
  speed = "normal",
  showStars = true,
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed]

  const speedClass2 = {
    slow: "animate-marquee2-slow",
    normal: "animate-marquee2",
    fast: "animate-marquee2-fast",
  }[speed]

  const renderItems = () => (
    <>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-4">
          {showStars && <MarqueeStar />}
          <span className="font-heading text-4xl uppercase tracking-wider">
            {item}
          </span>
        </span>
      ))}
    </>
  )

  return (
    <div
      data-slot="marquee"
      className={cn(
        "relative flex w-full overflow-x-hidden",
        "border-y-3 border-border",
        "bg-secondary-background text-foreground",
        className,
      )}
    >
      {/* Halftone texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-10"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />

      <div className={cn("flex items-center gap-8 whitespace-nowrap py-8", speedClass)}>
        {renderItems()}
      </div>

      <div className={cn("absolute top-0 flex items-center gap-8 whitespace-nowrap py-8", speedClass2)}>
        {renderItems()}
      </div>
    </div>
  )
}

export { MarqueeStar }
