"use client"

import * as React from "react"

import { shapes } from "@/components/ui/shapes"
import { Button } from "@/components/ui/button"
import { SectionBanner } from "@/components/ui/section-banner"

export default function ShapesPage() {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const getJSXCode = (name: string) => {
    return `import { ${name} } from "@/components/ui/shapes"

<${name} size={64} />`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <SectionBanner variant="red" breakOut>
          Shapes
        </SectionBanner>

        <p className="mt-6 text-lg text-foreground/80 max-w-2xl">
          40 Soviet constructivist shapes for agitational UI. Sharp angular
          forms inspired by El Lissitzky, Rodchenko, and the revolutionary
          graphic design of the 1920s.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {shapes.map((shape, index) => {
            const ShapeComponent = shape.component
            return (
              <div
                key={shape.name}
                className="group relative bg-secondary-background border-3 border-border p-6 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform"
              >
                {/* Shape display */}
                <div className="h-20 flex items-center justify-center">
                  <ShapeComponent size={80} />
                </div>

                {/* Shape name */}
                <span className="font-heading text-sm uppercase tracking-wider text-center">
                  {shape.name}
                </span>

                {/* Description */}
                <span className="text-xs text-foreground/60 text-center">
                  {shape.description}
                </span>

                {/* Copy button */}
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full mt-auto"
                  onClick={() => copyToClipboard(getJSXCode(shape.name), index)}
                >
                  {copiedIndex === index ? "Copied!" : "Copy JSX"}
                </Button>
              </div>
            )
          })}
        </div>

        {/* Usage section */}
        <div className="mt-16">
          <SectionBanner variant="black">
            Usage
          </SectionBanner>

          <div className="mt-6 bg-border text-background p-6 border-3 border-border font-mono text-sm overflow-x-auto">
            <pre>{`import { SovietStar, RedWedge, Gear } from "@/components/ui/shapes"

// Basic usage
<SovietStar size={64} />

// Custom colors
<RedWedge
  fill="var(--main)"
  stroke="var(--border)"
  size={80}
/>

// With className
<Gear className="animate-spin" size={48} />`}</pre>
          </div>
        </div>

        {/* Props section */}
        <div className="mt-12">
          <SectionBanner variant="gold">
            Props
          </SectionBanner>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-3 border-border">
              <thead>
                <tr className="bg-border text-background">
                  <th className="p-3 text-left font-heading uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="p-3 text-left font-heading uppercase tracking-wider">
                    Type
                  </th>
                  <th className="p-3 text-left font-heading uppercase tracking-wider">
                    Default
                  </th>
                  <th className="p-3 text-left font-heading uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-border">
                  <td className="p-3 font-mono text-sm">size</td>
                  <td className="p-3 font-mono text-sm">number</td>
                  <td className="p-3 font-mono text-sm">64</td>
                  <td className="p-3 text-sm">Width and height in pixels</td>
                </tr>
                <tr className="border-t-2 border-border bg-secondary-background">
                  <td className="p-3 font-mono text-sm">fill</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">var(--main)</td>
                  <td className="p-3 text-sm">Primary fill color</td>
                </tr>
                <tr className="border-t-2 border-border">
                  <td className="p-3 font-mono text-sm">stroke</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">var(--border)</td>
                  <td className="p-3 text-sm">Stroke/secondary color</td>
                </tr>
                <tr className="border-t-2 border-border bg-secondary-background">
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
