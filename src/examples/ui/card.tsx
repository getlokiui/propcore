import { Button, RibbonButton } from "@/components/ui/button"
import {
  CardWithTexture,
  CardBar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardDivider,
  CardBadge,
  CardAccentStripe,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
    <CardWithTexture className="w-full max-w-sm">
      {/* Diagonal red stripe in corner */}
      <CardAccentStripe />

      {/* Gold accent badge */}
      <CardBadge>№01</CardBadge>

      {/* Top decorative bar */}
      <CardBar variant="black" />

      <CardHeader className="pt-8">
        {/* Red triangle accent */}
        <div className="absolute left-6 top-14 w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-main border-r-[10px] border-r-transparent" />

        <CardTitle className="pl-6">Comrade Access</CardTitle>
        <CardDescription className="pl-6">
          Enter your credentials to access the collective
        </CardDescription>
      </CardHeader>

      {/* Decorative divider */}
      <CardDivider />

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Worker ID</Label>
              <Input
                id="email"
                type="email"
                placeholder="comrade@collective.org"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Access Code</Label>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>

      {/* Diagonal stripes decoration */}
      <div className="flex gap-1 px-6 mb-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-4 -skew-x-12 ${
              i % 3 === 0 ? "bg-main" : i % 3 === 1 ? "bg-border" : "bg-accent"
            }`}
          />
        ))}
      </div>

      <div className="px-6 pb-6">
        <RibbonButton className="w-full" showStars>
          Enter Collective
        </RibbonButton>
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-between items-center px-6 pb-4 pt-4 border-t-3 border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-main border-2 border-border" />
          <div className="w-3 h-3 rounded-full bg-accent border-2 border-border" />
          <div className="w-3 h-3 rounded-full bg-border" />
        </div>
        <span className="text-xs font-heading tracking-widest uppercase">
          EST. MMXXIV
        </span>
      </div>

      {/* Bottom red bar */}
      <CardBar variant="red" className="h-3 border-t-3 border-border" />
    </CardWithTexture>
  )
}
