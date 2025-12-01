import {
  Card,
  CardAccentStripe,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithAccentStripeDemo() {
  return (
    <Card className="w-[350px]">
      <CardAccentStripe />
      <CardHeader>
        <CardTitle>Diagonal Stripe</CardTitle>
        <CardDescription>Bold corner accent</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          The diagonal red stripe cuts across the corner, adding dynamic tension to the composition. A signature element of constructivist design.
        </p>
      </CardContent>
    </Card>
  )
}
