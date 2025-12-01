import { RadioGroup, RadioGroupItem, PropagandaRadioItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupAggressiveDemo() {
  return (
    <div className="space-y-8 p-4">
      {/* Aggressive variant */}
      <RadioGroup defaultValue="option-1" variant="aggressive">
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-1" id="ag-1" />
          <Label htmlFor="ag-1">Priority Alpha</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-2" id="ag-2" />
          <Label htmlFor="ag-2">Priority Beta</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="option-3" id="ag-3" />
          <Label htmlFor="ag-3">Priority Gamma</Label>
        </div>
      </RadioGroup>

      {/* Propaganda radio items with integrated labels */}
      <RadioGroup defaultValue="sector-1">
        <PropagandaRadioItem value="sector-1" label="Industrial Sector" />
        <PropagandaRadioItem value="sector-2" label="Agricultural Sector" />
        <PropagandaRadioItem value="sector-3" label="Defense Sector" />
      </RadioGroup>
    </div>
  )
}
