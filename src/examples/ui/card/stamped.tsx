import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardStamp,
} from "@/components/ui/card"

export default function CardStampDemo() {
  return (
    <div className="flex flex-wrap gap-8 p-4">
      {/* Red stamp with star (default) */}
      <Card className="w-[280px] overflow-visible">
        <CardStamp />
        <CardHeader>
          <CardTitle>Featured</CardTitle>
          <CardDescription>Red star stamp - default</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The rotated stamp breaks out of bounds, creating visual tension.
          </p>
        </CardContent>
      </Card>

      {/* Black stamp with exclamation */}
      <Card className="w-[280px] overflow-visible">
        <CardStamp variant="black" position="top-left">
          <span className="text-xl font-heading -rotate-12">!</span>
        </CardStamp>
        <CardHeader>
          <CardTitle>Important</CardTitle>
          <CardDescription>Black exclamation stamp</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Custom content inside for different meanings.
          </p>
        </CardContent>
      </Card>

      {/* Gold stamp with number */}
      <Card className="w-[280px] overflow-visible">
        <CardStamp variant="gold" position="bottom-right">
          <span className="text-sm font-heading -rotate-12">01</span>
        </CardStamp>
        <CardHeader>
          <CardTitle>Edition</CardTitle>
          <CardDescription>Gold numbered stamp</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Different positions and variants for variety.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
