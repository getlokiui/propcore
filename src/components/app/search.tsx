"use client"

import { Search as SearchIcon } from "lucide-react"

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { COMPONENTS_LINKS, GETTING_STARTED_LINKS } from "@/data/sidebar-links"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export default function Search() {
  const DOCS_LINKS = [
    {
      heading: "Getting started",
      links: [...GETTING_STARTED_LINKS],
    },
    {
      heading: "Components",
      links: [...COMPONENTS_LINKS],
    },
  ]

  const router = useRouter()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-2 bg-secondary-background dark:text-white border-3 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none px-3 xl:pr-16 shrink-0 h-9 text-sm font-heading uppercase tracking-wider rounded-base"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="xl:inline hidden">Search</span>

        <span className="absolute xl:flex hidden items-center justify-center text-black border text-xs px-1 border-black rounded-base bg-main h-6 right-2 top-1/2 -translate-y-1/2">
          ⌘K
        </span>
      </button>
      <CommandDialog
        title="Search documentation"
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search documentation..." />
        <CommandList className="command-scrollbar **:data-[slot=command-item]:py-1.5!">
          <CommandEmpty>No results found.</CommandEmpty>
          {DOCS_LINKS.map(({ heading, links }, i) => {
            return (
              <React.Fragment key={heading}>
                <CommandGroup heading={heading}>
                  {links.map(({ text, href }) => {
                    return (
                      <CommandItem
                        value={text}
                        onSelect={() => {
                          runCommand(() => router.push(href))
                        }}
                        key={href}
                      >
                        {text}
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
                {i < 2 && <CommandSeparator />}
              </React.Fragment>
            )
          })}
        </CommandList>
      </CommandDialog>
    </>
  )
}
