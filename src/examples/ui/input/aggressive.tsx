import { Input, PropagandaInput } from "@/components/ui/input"

export default function InputAggressiveDemo() {
  return (
    <div className="w-full max-w-md space-y-8 p-4">
      {/* Aggressive mode */}
      <Input
        aggressive
        placeholder="Enter your directive..."
      />

      {/* Aggressive + rotated */}
      <Input
        aggressive
        rotated
        placeholder="Rotated input field..."
      />

      {/* Full propaganda input with label */}
      <PropagandaInput
        label="Comrade Name"
        placeholder="ENTER DESIGNATION"
      />

      {/* Another propaganda input */}
      <PropagandaInput
        label="Unit Number"
        placeholder="ENTER UNIT ID"
      />
    </div>
  )
}
