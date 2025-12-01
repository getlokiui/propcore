import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipAggressiveDemo() {
  return (
    <div className="flex gap-8 p-4">
      {/* Default tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default</Button>
          </TooltipTrigger>
          <TooltipContent>
            Standard tooltip
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Aggressive tooltip */}
      <TooltipProvider>
        <Tooltip variant="aggressive">
          <TooltipTrigger asChild>
            <Button>Aggressive</Button>
          </TooltipTrigger>
          <TooltipContent>
            Important directive
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
