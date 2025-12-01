import { Button } from "@/components/ui/button"
import { Badge, RibbonBadge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" className="bg-accent text-foreground border-border hover:bg-accent/90">
          Open Intel
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-heading text-lg leading-none uppercase tracking-wider">
              Classified Info
            </h4>
            <p className="text-sm text-foreground/80 normal-case">
              The revolution will be caffeinated. Bean reserves are at optimal levels.
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="default">Urgent</Badge>
            <RibbonBadge>Top Secret</RibbonBadge>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
