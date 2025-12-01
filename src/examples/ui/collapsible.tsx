"use client"

import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTriggerStyled,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[380px]"
    >
      <CollapsibleTriggerStyled>
        Worker Directives
      </CollapsibleTriggerStyled>

      <CollapsibleContent className="space-y-2 mt-2">
        <div className="rounded-base border-3 border-border bg-background px-4 py-3 text-sm">
          <span className="font-heading uppercase tracking-wider text-main">Directive 1:</span>
          <span className="ml-2">Report to sector by 0600 hours</span>
        </div>
        <div className="rounded-base border-3 border-border bg-background px-4 py-3 text-sm">
          <span className="font-heading uppercase tracking-wider text-main">Directive 2:</span>
          <span className="ml-2">Maintain 150% quota compliance</span>
        </div>
        <div className="rounded-base border-3 border-border bg-background px-4 py-3 text-sm">
          <span className="font-heading uppercase tracking-wider text-main">Directive 3:</span>
          <span className="ml-2">Submit daily production reports</span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
