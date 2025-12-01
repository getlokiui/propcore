import {
  SovietStar,
  RedWedge,
  Gear,
  Arrow,
  Lightning,
  Megaphone,
  Banner,
  Factory,
  Fist,
  Eye,
} from "@/components/ui/shapes"

export default function ShapesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6 p-4">
      <SovietStar size={48} />
      <RedWedge size={48} />
      <Gear size={48} />
      <Arrow size={48} />
      <Lightning size={48} />
      <Megaphone size={48} />
      <Banner size={48} />
      <Factory size={48} />
      <Fist size={48} />
      <Eye size={48} />
    </div>
  )
}
