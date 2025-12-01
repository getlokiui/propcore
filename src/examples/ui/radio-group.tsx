import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <div className="space-y-4">
      <h4 className="font-heading text-sm uppercase tracking-wider">Select Your Sector Assignment</h4>
      <RadioGroup defaultValue="alpha">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="alpha" id="sector-alpha" />
          <Label htmlFor="sector-alpha" className="uppercase tracking-wider">Sector Alpha — Industrial</Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="beta" id="sector-beta" />
          <Label htmlFor="sector-beta" className="uppercase tracking-wider">Sector Beta — Agricultural</Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="gamma" id="sector-gamma" />
          <Label htmlFor="sector-gamma" className="uppercase tracking-wider">Sector Gamma — Technical</Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="delta" id="sector-delta" />
          <Label htmlFor="sector-delta" className="uppercase tracking-wider">Sector Delta — Administrative</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
