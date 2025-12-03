import "@/styling/globals.css"

import type { Metadata } from "next"
import { Oswald } from "next/font/google"

import Navbar from "@/components/app/navbar"
import ScrollToTop from "@/components/app/scroll-to-top"
import SetStylingPref from "@/components/app/set-styling-pref"
import { ThemeProvider } from "@/components/app/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: "Propcore - Neo-constructivist components for React",
    template: `%s - Propcore`,
  },
  description:
    "Neo-constructivist components inspired by 1920s Soviet avant-garde. Based on shadcn/ui.",
  keywords: [
    "propcore",
    "neo-constructivist",
    "constructivism",
    "react components",
    "tailwind components",
    "shadcn components",
    "soviet design",
    "propaganda style",
  ],
  authors: [{ name: "Propcore" }],
  openGraph: {
    type: "website",
    description:
      "Neo-constructivist components inspired by 1920s Soviet avant-garde. Based on shadcn/ui.",
    images: ["https://propcore.dev/preview.png"],
    url: "https://propcore.dev/",
    title: "Propcore Components",
  },
  metadataBase: new URL("https://propcore.dev/"),
  twitter: {
    card: "summary_large_image",
    title: "Propcore - Neo-constructivist components for React",
    description:
      "Neo-constructivist components inspired by 1920s Soviet avant-garde. Based on shadcn/ui.",
    images: ["https://propcore.dev/preview.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning lang="en">
      <body className={oswald.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <SetStylingPref />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  )
}
