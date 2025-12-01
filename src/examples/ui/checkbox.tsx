import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Basic checkbox with label */}
      <div className="flex items-center gap-3 group">
        <Checkbox id="terms" />
        <Label
          htmlFor="terms"
          className="cursor-pointer group-hover:text-main transition-colors"
        >
          I pledge allegiance to the collective
        </Label>
      </div>

      {/* Checked state */}
      <div className="flex items-center gap-3 group">
        <Checkbox id="quota" defaultChecked />
        <Label
          htmlFor="quota"
          className="cursor-pointer group-hover:text-main transition-colors"
        >
          Production quota fulfilled
        </Label>
      </div>

      {/* Disabled */}
      <div className="flex items-center gap-3">
        <Checkbox id="restricted" disabled />
        <Label htmlFor="restricted" className="opacity-50">
          Access restricted by party directive
        </Label>
      </div>

      {/* Multiple options */}
      <div className="border-3 border-border rounded-base p-4 bg-secondary-background shadow-shadow">
        <p className="font-heading uppercase tracking-wider text-sm mb-3">
          Select Your Sector Assignment:
        </p>
        <div className="flex flex-col gap-2">
          {["Heavy Industry", "Agriculture", "Education", "Infrastructure"].map((sector) => (
            <div key={sector} className="flex items-center gap-3 group">
              <Checkbox id={sector.toLowerCase().replace(" ", "-")} />
              <Label
                htmlFor={sector.toLowerCase().replace(" ", "-")}
                className="cursor-pointer group-hover:text-main transition-colors text-sm"
              >
                {sector}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
