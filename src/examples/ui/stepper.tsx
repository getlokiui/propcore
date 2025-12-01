"use client"

import { useState } from "react"

import { Stepper } from "@/components/ui/stepper"
import { Button } from "@/components/ui/button"

export default function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(1)
  const steps = ["ENLIST", "TRAIN", "DEPLOY", "LIBERATE"]

  return (
    <div className="w-full max-w-xl">
      <div className="p-6 bg-background border-3 border-border rounded-base shadow-shadow">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="flex gap-4 mt-6">
          <Button
            variant="neutral"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous Phase
          </Button>
          <Button
            variant="default"
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Advance Mission
          </Button>
        </div>
      </div>
    </div>
  )
}
