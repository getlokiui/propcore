"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      style={{ fontFamily: "inherit", overflowWrap: "anywhere" }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group relative bg-background text-foreground border-border border-3 font-heading shadow-shadow text-[13px] flex items-center gap-3 p-4 pb-6 w-[400px] [&:has(button)]:justify-between overflow-hidden",
          title: "font-heading uppercase tracking-wider text-sm",
          description: "font-base text-foreground/80 text-sm",
          actionButton:
            "font-heading uppercase tracking-wider border-3 text-[11px] h-7 px-3 bg-main text-main-foreground border-border rounded-base shrink-0 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all",
          cancelButton:
            "font-heading uppercase tracking-wider border-3 text-[11px] h-7 px-3 bg-secondary-background text-foreground border-border rounded-base shrink-0 hover:bg-accent transition-colors",
          error: "bg-background text-foreground border-border [&_.toast-corner]:bg-main [&_.toast-stripes>div]:bg-main",
          success: "bg-accent text-foreground border-border [&_.toast-corner]:bg-accent [&_.toast-stripes>div]:bg-accent",
          warning: "bg-accent text-foreground border-border [&_.toast-corner]:bg-accent [&_.toast-stripes>div]:bg-accent",
          info: "bg-background text-foreground border-border [&_.toast-corner]:bg-border [&_.toast-stripes>div]:bg-main",
          loading:
            "[&[data-sonner-toast]_[data-icon]]:flex [&[data-sonner-toast]_[data-icon]]:size-5 [&[data-sonner-toast]_[data-icon]]:relative [&[data-sonner-toast]_[data-icon]]:justify-start [&[data-sonner-toast]_[data-icon]]:items-center [&[data-sonner-toast]_[data-icon]]:flex-shrink-0",
          icon: "size-5",
        },
      }}
      icons={{
        success: (
          <svg viewBox="0 0 24 24" fill="var(--accent)" className="size-5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
        error: (
          <svg viewBox="0 0 24 24" fill="var(--main)" className="size-5" strokeWidth="2.5" stroke="var(--main)">
            <path d="M18 6L6 18M6 6l12 12" fill="none" />
          </svg>
        ),
        warning: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
          </svg>
        ),
        info: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ),
      }}
      {...props}
    />
  )
}

export { Toaster }
