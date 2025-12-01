import { Button } from "@/components/ui/button"

export default function ButtonRotatedDemo() {
  return (
    <div className="flex flex-wrap gap-6 p-4">
      {/* Rotated left (default) */}
      <Button rotated>
        Rotated Left
      </Button>

      {/* Rotated right */}
      <Button rotated="right" variant="secondary">
        Rotated Right
      </Button>

      {/* With diagonal stripe */}
      <Button stripe>
        With Stripe
      </Button>

      {/* Rotated with stripe and stars */}
      <Button rotated stripe showStars>
        Full Propaganda
      </Button>

      {/* Neutral rotated */}
      <Button rotated variant="neutral">
        Neutral Rotated
      </Button>
    </div>
  )
}
