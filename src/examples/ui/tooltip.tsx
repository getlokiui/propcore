import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-4">
        <p className="font-heading uppercase tracking-wider text-xs text-foreground/70">
          Tooltip Directions
        </p>
        <div className="flex gap-6">
          <Tooltip>
            <TooltipTrigger className="font-heading uppercase tracking-wider text-sm border-b-2 border-dashed border-border pb-1 cursor-pointer">
              Top
            </TooltipTrigger>
            <TooltipContent side="top">
              Appears Above
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="font-heading uppercase tracking-wider text-sm border-b-2 border-dashed border-main text-main pb-1 cursor-pointer">
              Bottom
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Appears Below
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="font-heading uppercase tracking-wider text-sm border-b-2 border-dashed border-border pb-1 cursor-pointer">
              Left
            </TooltipTrigger>
            <TooltipContent side="left">
              Appears Left
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger className="font-heading uppercase tracking-wider text-sm border-b-2 border-dashed border-border pb-1 cursor-pointer">
              Right
            </TooltipTrigger>
            <TooltipContent side="right">
              Appears Right
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
