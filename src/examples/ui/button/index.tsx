import { Button, RibbonButton, StarIcon } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Default button with stars */}
      <Button showStars>Join The Cause</Button>

      {/* Ribbon banner button - the propaganda CTA */}
      <RibbonButton showStars>
        Enlist Now Comrade
      </RibbonButton>

      {/* Regular variants */}
      <div className="flex gap-4 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  )
}
