import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardDivider,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="profile" className="max-w-[420px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="directives">Directives</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Worker Profile</CardTitle>
            <CardDescription>
              Your collective registration information. Updates require approval.
            </CardDescription>
          </CardHeader>
          <CardDivider />
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="worker-name">Comrade Name</Label>
              <Input id="worker-name" defaultValue="Ivan Petrov" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="worker-id">Worker ID</Label>
              <Input id="worker-id" defaultValue="WRK-1917-042" disabled />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sector">Assigned Sector</Label>
              <Input id="sector" defaultValue="Heavy Industry" disabled />
            </div>
            <Button className="w-full" showStars>Submit for Review</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="metrics">
        <Card>
          <CardHeader>
            <CardTitle>Production Metrics</CardTitle>
            <CardDescription>
              Your contribution to the collective this cycle.
            </CardDescription>
          </CardHeader>
          <CardDivider />
          <CardContent className="grid gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-heading uppercase">Quota Progress</span>
                <span className="text-main font-bold">87%</span>
              </div>
              <Progress value={87} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-heading uppercase">Attendance</span>
                <span className="text-main font-bold">96%</span>
              </div>
              <Progress value={96} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-heading uppercase">Team Collaboration</span>
                <span className="text-main font-bold">72%</span>
              </div>
              <Progress value={72} />
            </div>
            <div className="pt-2 border-t-3 border-border mt-2">
              <p className="text-xs text-foreground/70">
                Report generated: Cycle 47, Year of Progress
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="directives">
        <Card>
          <CardHeader>
            <CardTitle>Active Directives</CardTitle>
            <CardDescription>
              Current party directives for your sector.
            </CardDescription>
          </CardHeader>
          <CardDivider />
          <CardContent className="grid gap-3">
            <div className="p-3 bg-main/10 border-l-4 border-main rounded-base">
              <p className="font-heading uppercase text-sm">Directive 47-A</p>
              <p className="text-xs text-foreground/80">Increase output by 15% before cycle end.</p>
            </div>
            <div className="p-3 bg-accent/20 border-l-4 border-accent rounded-base">
              <p className="font-heading uppercase text-sm">Directive 47-B</p>
              <p className="text-xs text-foreground/80">Mandatory efficiency training Thursday.</p>
            </div>
            <div className="p-3 bg-secondary-background border-l-4 border-border rounded-base">
              <p className="font-heading uppercase text-sm">Directive 47-C</p>
              <p className="text-xs text-foreground/80">Submit weekly reports by 1800 hours.</p>
            </div>
            <Button variant="outline" className="w-full">
              Acknowledge All Directives
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
