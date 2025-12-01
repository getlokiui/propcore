import { Button, RibbonButton } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button showStars>Update Worker Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Worker Registration Form</DialogTitle>
            <DialogDescription>
              Update your collective profile. All changes are logged for party records.
            </DialogDescription>
          </DialogHeader>

          {/* Decorative divider */}
          <div className="flex items-center gap-2 my-2">
            <div className="h-[3px] w-8 bg-border" />
            <div className="h-[3px] w-3 bg-main" />
            <div className="h-[3px] flex-1 bg-border" />
            <div className="w-2 h-2 bg-accent rotate-45" />
          </div>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Comrade Name</Label>
              <Input id="name-1" name="name" defaultValue="Ivan Petrov" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="worker-id">Worker ID</Label>
              <Input id="worker-id" name="worker-id" defaultValue="WRK-1917-042" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sector">Production Sector</Label>
              <Input id="sector" name="sector" defaultValue="Heavy Industry" />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="neutral">Dismiss</Button>
            </DialogClose>
            <Button type="submit" showStars>
              Submit to Registry
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
