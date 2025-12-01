import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function SelectDemo() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xs">
      {/* Sector Assignment */}
      <div className="grid gap-2">
        <Label>Production Sector</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Assignment" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Industrial</SelectLabel>
              <SelectItem value="heavy-industry">Heavy Industry</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="mining">Mining Operations</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Agricultural</SelectLabel>
              <SelectItem value="collective-farm">Collective Farm</SelectItem>
              <SelectItem value="grain-production">Grain Production</SelectItem>
              <SelectItem value="livestock">Livestock</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="administration">Administration</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Worker Rank */}
      <div className="grid gap-2">
        <Label>Worker Classification</Label>
        <Select defaultValue="worker">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apprentice">Apprentice</SelectItem>
            <SelectItem value="worker">Worker</SelectItem>
            <SelectItem value="senior-worker">Senior Worker</SelectItem>
            <SelectItem value="supervisor">Supervisor</SelectItem>
            <SelectItem value="director">Director</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Shift Selection */}
      <div className="grid gap-2">
        <Label>Shift Assignment</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Shift" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dawn">Dawn (0500-1300)</SelectItem>
            <SelectItem value="day">Day (0800-1600)</SelectItem>
            <SelectItem value="evening">Evening (1400-2200)</SelectItem>
            <SelectItem value="night">Night (2200-0600)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
