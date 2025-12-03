import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="relative w-full overflow-auto rounded-base border-3 border-border shadow-shadow">
      <table
        data-slot="table"
        className={cn(
          "w-full caption-bottom text-sm",
          className,
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-main text-main-foreground",
        "[&_tr]:border-b-3 [&_tr]:border-border",
        className,
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "bg-background",
        "[&_tr:last-child]:border-0",
        className,
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t-3 border-border bg-main font-heading text-main-foreground",
        "uppercase tracking-wider",
        "last:[&>tr]:border-b-0",
        className,
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b-3 border-border",
        "transition-colors font-base",
        "hover:bg-secondary-background",
        "data-[state=selected]:bg-main data-[state=selected]:text-main-foreground",
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-4 text-left align-middle",
        "font-heading uppercase tracking-wider text-xs",
        "border-r-3 border-border last:border-r-0",
        "[&:has([role=checkbox])]:px-4 [&:has([role=checkbox])]:text-center",
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-4 align-middle text-left",
        "border-r-3 border-border last:border-r-0",
        "[&:has([role=checkbox])]:text-center",
        "[&:has(button)]:text-center",
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="table-caption"
      className={cn(
        "mt-4 text-sm text-foreground/70 font-base uppercase tracking-wide text-center",
        className,
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
