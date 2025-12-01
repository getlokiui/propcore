import {
  CardWithTexture,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithTextureDemo() {
  return (
    <CardWithTexture className="w-[350px]">
      <CardHeader>
        <CardTitle>Halftone Texture</CardTitle>
        <CardDescription>Authentic print texture overlay</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          The subtle halftone dot pattern adds that vintage propaganda poster feel, like ink pressed onto rough paper.
        </p>
      </CardContent>
    </CardWithTexture>
  )
}
