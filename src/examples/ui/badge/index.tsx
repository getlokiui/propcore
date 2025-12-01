import { Badge, RibbonBadge } from "@/components/ui/badge"

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Default - gold background */}
      <Badge variant="default">Default</Badge>

      {/* Outline - transparent with border */}
      <Badge variant="outline">New Release</Badge>

      {/* Urgent ribbon badges with stars and gold accent */}
      <RibbonBadge>Urgent Notice</RibbonBadge>
      <RibbonBadge>Act Now</RibbonBadge>
    </div>
  )
}
