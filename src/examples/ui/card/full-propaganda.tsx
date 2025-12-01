import {
  CardWithTexture,
  CardBar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardDivider,
  CardAccentStripe,
  CardStamp,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardFullPropagandaDemo() {
  return (
    <CardWithTexture className="w-[380px] overflow-visible">
      {/* Corner stamp */}
      <CardStamp position="top-right" />

      {/* Diagonal stripe */}
      <CardAccentStripe />

      {/* Top bar */}
      <CardBar variant="black" />

      <CardHeader className="pt-8">
        {/* Red triangle accent */}
        <div className="absolute left-6 top-14 w-0 h-0 border-l-[10px] border-l-transparent border-b-[16px] border-b-main border-r-[10px] border-r-transparent" />

        <CardTitle className="pl-6">Full Propaganda</CardTitle>
        <CardDescription className="pl-6">
          All card features combined
        </CardDescription>
      </CardHeader>

      <CardDivider />

      <CardContent>
        <p className="text-sm mb-4">
          This card demonstrates the full propcore aesthetic: halftone texture, corner stamp, diagonal stripe, decorative bars, and dividers.
        </p>

        {/* Diagonal stripes decoration */}
        <div className="flex gap-1 mb-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-4 -skew-x-12 ${
                i % 3 === 0 ? "bg-main" : i % 3 === 1 ? "bg-border" : "bg-accent"
              }`}
            />
          ))}
        </div>

        <Button className="w-full">Join The Collective</Button>
      </CardContent>

      {/* Bottom decoration */}
      <div className="flex justify-between items-center px-6 py-4 border-t-3 border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-main border-2 border-border" />
          <div className="w-3 h-3 rounded-full bg-accent border-2 border-border" />
          <div className="w-3 h-3 rounded-full bg-border" />
        </div>
        <span className="text-xs font-heading tracking-widest uppercase">
          EST. MMXXIV
        </span>
      </div>

      {/* Bottom bar */}
      <CardBar variant="red" className="h-3 border-t-3 border-border" />
    </CardWithTexture>
  )
}
