import { Button } from "@/components/ui/button"

export default function ButtonArrowsDemo() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* Arrow pointing right - for "Next" actions */}
      <Button arrow="right">
        Continue
      </Button>

      {/* Arrow pointing left - for "Back" actions */}
      <Button arrow="left" variant="outline">
        Go Back
      </Button>

      {/* Arrows on both sides - for emphasis */}
      <Button arrow="both" variant="secondary">
        Select
      </Button>

      {/* Double arrow - for "Forward" emphasis */}
      <Button arrow="forward">
        Proceed
      </Button>

      {/* Combining with rotation */}
      <Button arrow="right" rotated stripe>
        Full Propaganda
      </Button>
    </div>
  )
}
