"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(147), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-heading uppercase tracking-wider">
          <span>Production Quota</span>
          <span>{progress}%</span>
        </div>
        <Progress value={Math.min(progress, 100)} />
        {progress > 100 && (
          <p className="text-xs text-main font-bold">
            ★ EXCEEDING QUOTA — GLORY TO THE COLLECTIVE ★
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm font-heading uppercase tracking-wider">
          <span>Resource Allocation</span>
          <span>73%</span>
        </div>
        <Progress value={73} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm font-heading uppercase tracking-wider">
          <span>Worker Efficiency</span>
          <span>92%</span>
        </div>
        <Progress value={92} />
      </div>
    </div>
  )
}
