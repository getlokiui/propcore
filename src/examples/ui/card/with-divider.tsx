import {
  Card,
  CardContent,
  CardDescription,
  CardDivider,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithDividerDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Section Header</CardTitle>
        <CardDescription>Content above the divider</CardDescription>
      </CardHeader>
      <CardDivider />
      <CardContent>
        <p className="text-sm">
          The decorative divider uses the propcore design language: thick lines, a red accent dash, and a rotated gold diamond.
        </p>
      </CardContent>
      <CardDivider />
      <CardContent>
        <p className="text-sm">
          Use multiple dividers to separate distinct sections within a card.
        </p>
      </CardContent>
    </Card>
  )
}
