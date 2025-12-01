import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithBadgeDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <Card className="w-[300px]">
        <CardBadge>№01</CardBadge>
        <CardHeader className="pt-6">
          <CardTitle>First Edition</CardTitle>
          <CardDescription>Numbered badge in corner</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            The circular gold badge adds a sense of importance and collectibility.
          </p>
        </CardContent>
      </Card>

      <Card className="w-[300px]">
        <CardBadge>NEW</CardBadge>
        <CardHeader className="pt-6">
          <CardTitle>Latest Release</CardTitle>
          <CardDescription>Text badge variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Use any short text to label your cards.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
