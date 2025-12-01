import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsAggressiveDemo() {
  return (
    <div className="w-full max-w-lg space-y-8">
      {/* Aggressive variant */}
      <Tabs defaultValue="directives" variant="aggressive">
        <TabsList>
          <TabsTrigger value="directives">Directives</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="archive">Archive</TabsTrigger>
        </TabsList>
        <TabsContent value="directives" className="p-4 border-3 border-border bg-secondary-background">
          Current operational directives for all units.
        </TabsContent>
        <TabsContent value="reports" className="p-4 border-3 border-border bg-secondary-background">
          Weekly progress reports from all sectors.
        </TabsContent>
        <TabsContent value="archive" className="p-4 border-3 border-border bg-secondary-background">
          Historical records and documentation.
        </TabsContent>
      </Tabs>

      {/* Skewed variant */}
      <Tabs defaultValue="tab1" variant="skewed">
        <TabsList>
          <TabsTrigger value="tab1">Phase One</TabsTrigger>
          <TabsTrigger value="tab2">Phase Two</TabsTrigger>
          <TabsTrigger value="tab3">Phase Three</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="p-4 border-3 border-border bg-secondary-background -skew-x-1">
          Initial mobilization phase.
        </TabsContent>
        <TabsContent value="tab2" className="p-4 border-3 border-border bg-secondary-background -skew-x-1">
          Expansion and development phase.
        </TabsContent>
        <TabsContent value="tab3" className="p-4 border-3 border-border bg-secondary-background -skew-x-1">
          Final consolidation phase.
        </TabsContent>
      </Tabs>
    </div>
  )
}
