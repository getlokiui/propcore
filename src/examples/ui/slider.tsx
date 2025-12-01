"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export default function SliderDemo() {
  const [intensity, setIntensity] = useState([75])
  const [allocation, setAllocation] = useState([25])
  const [quotaRange, setQuotaRange] = useState([30, 70])

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Revolution Intensity */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-main">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
          Revolution Intensity
        </Label>
        <Slider
          value={intensity}
          onValueChange={setIntensity}
          max={100}
          step={1}
        />
      </div>

      {/* Bean Allocation */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-main">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
          Bean Allocation
        </Label>
        <Slider
          value={allocation}
          onValueChange={setAllocation}
          max={100}
          step={1}
        />
      </div>

      {/* Quota Range (dual thumb) */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-main">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
          Quota Range
        </Label>
        <Slider
          value={quotaRange}
          onValueChange={setQuotaRange}
          max={100}
          step={1}
        />
      </div>

      {/* Disabled */}
      <div className="space-y-3">
        <Label className="flex items-center gap-2 opacity-50">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 text-main">
            <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
          </svg>
          Disabled Control
        </Label>
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          disabled
        />
      </div>
    </div>
  )
}
