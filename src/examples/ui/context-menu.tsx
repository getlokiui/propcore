import { FileTextIcon, StarIcon, UsersIcon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-base border-3 border-border border-dashed text-sm font-heading uppercase tracking-wider">
        ★ Right Click for Actions ★
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          View Worker Profile
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Check Productivity
          <ContextMenuShortcut>⌘K</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Request Transfer
          <ContextMenuShortcut>⌘T</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Administrative</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-52">
            <ContextMenuItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              Submit Report
              <ContextMenuShortcut>⇧⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <StarIcon className="mr-2 h-4 w-4" />
              Nominate for Award
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <UsersIcon className="mr-2 h-4 w-4" />
              Assign to Unit
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Enable Notifications
          <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Quota Warnings</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="sector-7">
          <ContextMenuLabel inset>Current Sector</ContextMenuLabel>
          <ContextMenuRadioItem value="sector-7">
            Sector 7 — Industrial
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="sector-12">Sector 12 — Technical</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
