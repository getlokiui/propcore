"use client"

import { Slider } from "@/components/ui/slider"

export default function SliderAggressiveDemo() {
  return (
    <div className="w-full max-w-md space-y-10 p-4">
      {/* Default */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Default</p>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      {/* Aggressive */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Aggressive</p>
        <Slider defaultValue={[33]} max={100} step={1} variant="aggressive" />
      </div>

      {/* Aggressive two thumbs */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Aggressive Range</p>
        <Slider defaultValue={[25, 75]} max={100} step={1} variant="aggressive" />
      </div>
    </div>
  )
}
