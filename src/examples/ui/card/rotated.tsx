import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardRotatedDemo() {
  return (
    <div className="flex flex-wrap gap-8 p-8">
      {/* Rotate left */}
      <Card className="w-[280px]" rotated="left">
        <CardHeader>
          <CardTitle>Rotate Left</CardTitle>
          <CardDescription>-1 degree rotation</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Slight counter-clockwise tilt for visual tension.
          </p>
        </CardContent>
      </Card>

      {/* Rotate right */}
      <Card className="w-[280px]" rotated="right">
        <CardHeader>
          <CardTitle>Rotate Right</CardTitle>
          <CardDescription>+1 degree rotation</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Slight clockwise tilt for visual tension.
          </p>
        </CardContent>
      </Card>

      {/* Random rotation */}
      <Card className="w-[280px]" rotated>
        <CardHeader>
          <CardTitle>Random</CardTitle>
          <CardDescription>Random direction</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Randomly picks left or right rotation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
