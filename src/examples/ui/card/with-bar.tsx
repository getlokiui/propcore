import {
  Card,
  CardBar,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithBarDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="w-[350px]">
        <CardBar variant="black" />
        <CardHeader>
          <CardTitle>Black Bar</CardTitle>
          <CardDescription>Industrial header accent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">The default industrial look.</p>
        </CardContent>
      </Card>

      <Card className="w-[350px]">
        <CardBar variant="red" />
        <CardHeader>
          <CardTitle>Red Bar</CardTitle>
          <CardDescription>Revolutionary header accent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">For important announcements.</p>
        </CardContent>
      </Card>

      <Card className="w-[350px]">
        <CardBar variant="gold" />
        <CardHeader>
          <CardTitle>Gold Bar</CardTitle>
          <CardDescription>Achievement header accent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">For commendations and awards.</p>
        </CardContent>
      </Card>
    </div>
  )
}
