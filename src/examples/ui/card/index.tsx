import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardDefaultDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Worker Bulletin</CardTitle>
        <CardDescription>Daily report from the collective</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Production quota exceeded by 127%. All comrades report to assembly hall for commendation ceremony.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Acknowledge</Button>
      </CardFooter>
    </Card>
  )
}
