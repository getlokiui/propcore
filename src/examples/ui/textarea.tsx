import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaDemo() {
  return (
    <div className="flex flex-col gap-2 max-w-md">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your revolutionary message here..." />
    </div>
  )
}
