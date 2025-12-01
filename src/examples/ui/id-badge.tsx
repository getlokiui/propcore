"use client"

import { IdBadge } from "@/components/ui/id-badge"

export default function IdBadgeDemo() {
  return (
    <div className="flex flex-col gap-4">
      <IdBadge
        name="Ivan Petrov"
        role="ENGINEER"
        active
      />
      <IdBadge
        name="Maria Volkov"
        role="DIRECTOR"
        src="/pfps/17.jpg"
      />
      <IdBadge
        name="Alexei Sorokin"
        role="WORKER"
        active
        src="/pfps/20.jpg"
      />
      <IdBadge
        name="Yuri Gagarin"
        role="COMRADE"
        variant="compact"
      />
    </div>
  )
}
