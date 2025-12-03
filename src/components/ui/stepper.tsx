"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface StepperProps {
  steps: string[]
  currentStep: number
  className?: string
}

// Star icon for completed steps
function StepStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-main text-sm">
          <StepStar className="w-4 h-4" />
        </span>
        <span className="text-sm font-heading uppercase tracking-wider text-foreground">
          Mission Status: Phase {currentStep + 1} of {steps.length}
        </span>
      </div>

      {/* Step progress bar */}
      <div className="relative">
        {/* Track */}
        <div className="h-3 bg-background border-3 border-border rounded-base overflow-hidden shadow-shadow-sm">
          {/* Fill */}
          <div
            className="h-full bg-main transition-all duration-500 relative"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          >
            {/* Striped overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 4px,
                  var(--border) 4px,
                  var(--border) 8px
                )`,
              }}
            />
          </div>
        </div>

        {/* Step markers */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1">
          {steps.map((_, index) => {
            const isCompleted = index < currentStep
            const isCurrent = index === currentStep
            const isPending = index > currentStep

            return (
              <div
                key={index}
                className={cn(
                  "w-5 h-5 flex items-center justify-center",
                  "border-3 border-border",
                  "rounded-base text-xs font-heading",
                  "transition-all duration-300",
                  isCompleted && "bg-main text-main-foreground",
                  isCurrent && "bg-main text-main-foreground",
                  isPending && "bg-background text-foreground",
                )}
              >
                {isCompleted ? (
                  <StepStar className="w-3 h-3" />
                ) : (
                  index + 1
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step labels */}
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isCurrent = index === currentStep

          return (
            <div
              key={index}
              className={cn(
                "text-xs font-heading uppercase tracking-wide text-center",
                "max-w-[80px]",
                isCompleted && "text-foreground",
                isCurrent && "text-main",
                !isCompleted && !isCurrent && "text-foreground/70",
              )}
            >
              {step}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Stepper, StepStar }
export type { StepperProps }
