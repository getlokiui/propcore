"use client"

import { Check, Clipboard } from "lucide-react"

import { useState } from "react"

import { Button } from "@/components/ui/button"

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for older browsers or non-HTTPS
        const textarea = document.createElement("textarea")
        textarea.value = text
        textarea.style.position = "fixed"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
      }

      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    } catch {
      // If all else fails, at least don't crash
      console.error("Failed to copy to clipboard")
    }
  }

  return (
    <Button
      size="icon"
      className="size-9 absolute right-3.5 top-2"
      variant="noShadow"
      onClick={copy}
      aria-label="Copy"
    >
      <span className="sr-only">Copy</span>
      {isCopied ? <Check /> : <Clipboard />}
    </Button>
  )
}
