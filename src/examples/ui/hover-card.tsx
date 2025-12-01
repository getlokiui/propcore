import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="noShadow">@comrade_1247</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-heading uppercase tracking-wider">Comrade Worker #1247</h4>
            <p className="text-xs text-foreground/70">
              Sector 7 Production Unit Alpha. Exceeding quotas since MMXXII.
              ★ Model Worker ★
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-foreground/50">
                Productivity: 147% — Joined: Jan 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
