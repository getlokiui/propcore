"use client"

import * as React from "react"
import { Progress, PropagandaProgress } from "@/components/ui/progress"

export default function ProgressAggressiveDemo() {
  const [value, setValue] = React.useState(67)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-md space-y-10 p-4">
      {/* Default */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Default</p>
        <Progress value={45} />
      </div>

      {/* Striped */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Striped</p>
        <Progress value={60} variant="striped" />
      </div>

      {/* Aggressive with label */}
      <div className="space-y-2">
        <p className="font-heading text-xs uppercase tracking-wider">Aggressive</p>
        <Progress value={75} variant="aggressive" showLabel />
      </div>

      {/* Full propaganda with animated value */}
      <PropagandaProgress value={value} label="Production Quota" />
    </div>
  )
}
