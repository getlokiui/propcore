"use client"

import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Propaganda-style star icon
function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
    </svg>
  )
}

// Chevron for expandable items
function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

// Navigation data with propaganda theme
const navData = {
  main: [
    {
      title: "PRODUCTION",
      isActive: true,
      items: [
        { title: "Daily Quota", url: "#" },
        { title: "Output Report", url: "#" },
        { title: "Efficiency", url: "#" },
      ],
    },
    {
      title: "DIRECTIVES",
      items: [
        { title: "Current Orders", url: "#" },
        { title: "Priority Tasks", url: "#" },
        { title: "Announcements", url: "#" },
      ],
    },
    {
      title: "DOCUMENTATION",
      items: [
        { title: "Protocols", url: "#" },
        { title: "Guidelines", url: "#" },
        { title: "Records", url: "#" },
      ],
    },
    {
      title: "ADMINISTRATION",
      items: [
        { title: "Personnel", url: "#" },
        { title: "Resources", url: "#" },
        { title: "Reports", url: "#" },
      ],
    },
  ],
  quickAccess: [
    { title: "Central Command", url: "#" },
    { title: "Worker Registry", url: "#" },
    { title: "Dispatch Log", url: "#" },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="static" collapsible="icon" {...props}>
      <SidebarHeader className="border-b-3 border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent">
              <div className="flex aspect-square size-10 items-center justify-center bg-main border-3 border-border">
                <StarIcon className="size-6 text-main-foreground" />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="font-heading text-lg uppercase tracking-wider">
                  PROPCORE
                </span>
                <span className="text-xs uppercase tracking-widest text-foreground/60">
                  Control Panel
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-heading uppercase tracking-widest text-xs">
            <StarIcon className="size-3 mr-2 text-main" />
            Operations
          </SidebarGroupLabel>
          <SidebarMenu>
            {navData.main.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      variant="aggressive"
                      tooltip={item.title}
                      isActive={item.isActive}
                    >
                      <StarIcon className="size-4" />
                      <span className="font-heading">{item.title}</span>
                      <ChevronIcon className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton variant="aggressive" asChild>
                            <a href={subItem.url}>
                              <span>▶</span>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="font-heading uppercase tracking-widest text-xs">
            <StarIcon className="size-3 mr-2 text-accent" />
            Quick Access
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navData.quickAccess.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className="text-xs">▶</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t-3 border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-main/10">
              <div className="flex aspect-square size-8 items-center justify-center bg-accent border-3 border-border text-xs font-heading">
                IP
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="font-heading uppercase text-sm">
                  Ivan Petrov
                </span>
                <span className="text-xs uppercase tracking-wider text-foreground/60">
                  Worker №1247
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
