import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-6 max-w-md">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Comrade Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Communication Channel</Label>
        <Input id="email" type="email" placeholder="your@email.com" cornerAccent="red" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="manifesto">Your Manifesto</Label>
        <Textarea id="manifesto" placeholder="Share your revolutionary thoughts..." />
      </div>
    </div>
  )
}
