import { Checkbox, PropagandaCheckbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxAggressiveDemo() {
  return (
    <div className="space-y-8 p-4">
      {/* Default vs Aggressive comparison */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <Checkbox id="default" />
          <Label htmlFor="default">Default</Label>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox id="aggressive" aggressive />
          <Label htmlFor="aggressive">Aggressive</Label>
        </div>
      </div>

      {/* Propaganda checkboxes with labels */}
      <div className="space-y-4">
        <PropagandaCheckbox label="Accept Party Directive" />
        <PropagandaCheckbox label="Pledge Loyalty to Cause" />
        <PropagandaCheckbox label="Report for Duty" />
      </div>
    </div>
  )
}
