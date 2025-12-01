import { Textarea, PropagandaTextarea } from "@/components/ui/textarea"

export default function TextareaAggressiveDemo() {
  return (
    <div className="w-full max-w-md space-y-8 p-4">
      {/* Aggressive mode */}
      <Textarea
        aggressive
        placeholder="Enter your report..."
      />

      {/* Aggressive + rotated */}
      <Textarea
        aggressive
        rotated
        cornerAccent="red"
        placeholder="Enter operational details..."
      />

      {/* Full propaganda textarea with label */}
      <PropagandaTextarea
        label="Mission Report"
        placeholder="DESCRIBE MISSION OUTCOME"
      />
    </div>
  )
}
