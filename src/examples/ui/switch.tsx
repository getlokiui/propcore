"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  const [notifications, setNotifications] = useState(true)
  const [propaganda, setPropaganda] = useState(false)
  const [darkRoast, setDarkRoast] = useState(true)
  const [autoRenew, setAutoRenew] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      {/* Active States */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Switch checked={notifications} onCheckedChange={setNotifications} />
          <Label className={`cursor-pointer transition-colors ${notifications ? "text-main" : ""}`}>
            Enable Notifications
          </Label>
        </div>

        <div className="flex items-center gap-4">
          <Switch checked={propaganda} onCheckedChange={setPropaganda} />
          <Label className={`cursor-pointer transition-colors ${propaganda ? "text-main" : ""}`}>
            Receive Propaganda
          </Label>
        </div>

        <div className="flex items-center gap-4">
          <Switch checked={darkRoast} onCheckedChange={setDarkRoast} />
          <Label className={`cursor-pointer transition-colors ${darkRoast ? "text-main" : ""}`}>
            Dark Roast Only
          </Label>
        </div>

        <div className="flex items-center gap-4">
          <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
          <Label className={`cursor-pointer transition-colors ${autoRenew ? "text-main" : ""}`}>
            Auto-Renew Membership
          </Label>
        </div>
      </div>

      {/* Disabled States */}
      <div className="flex flex-col gap-4">
        <p className="font-heading uppercase tracking-wider text-xs text-foreground/70">
          Disabled States
        </p>
        <div className="flex items-center gap-4">
          <Switch disabled />
          <Label className="opacity-50">Disabled Off</Label>
        </div>
        <div className="flex items-center gap-4">
          <Switch disabled defaultChecked />
          <Label className="opacity-50">Disabled On</Label>
        </div>
      </div>
    </div>
  )
}
