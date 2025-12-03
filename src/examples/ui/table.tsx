import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Star icon for table headers
function TableStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-3 inline-block mr-2"}
    >
      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
    </svg>
  )
}

const inventory = [
  {
    sku: "BEAN-001",
    description: "Revolutionary Dark Roast",
    origin: "ETHIOPIA",
    qty: 500,
    price: 24.99,
    total: 12495.0,
  },
  {
    sku: "BEAN-002",
    description: "Proletariat Blend",
    origin: "COLOMBIA",
    qty: 320,
    price: 19.99,
    total: 6396.8,
  },
  {
    sku: "BEAN-003",
    description: "Collective Cold Brew",
    origin: "BRAZIL",
    qty: 180,
    price: 29.99,
    total: 5398.2,
  },
  {
    sku: "MERCH-001",
    description: "Propaganda Mug (Red)",
    origin: "LOCAL",
    qty: 1200,
    price: 14.99,
    total: 17988.0,
  },
  {
    sku: "MERCH-002",
    description: "Hammer & Bean T-Shirt",
    origin: "LOCAL",
    qty: 450,
    price: 34.99,
    total: 15745.5,
  },
]

export default function TableDemo() {
  return (
    <div className="relative">
      {/* Title bar */}
      <div className="relative bg-background border-3 border-border border-b-0 p-4">
        <h3 className="font-heading uppercase tracking-wider flex items-center gap-2">
          <TableStar className="size-4 text-main" />
          Inventory Manifest
        </h3>
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-0 h-0"
          style={{
            borderTop: "40px solid var(--main)",
            borderLeft: "40px solid transparent",
          }}
        />
        <svg
          viewBox="0 0 24 24"
          fill="var(--main-foreground)"
          className="absolute top-2 right-2 size-4"
        >
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
        </svg>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-border">
            <TableHead className="w-[120px]">SKU</TableHead>
            <TableHead>Item Description</TableHead>
            <TableHead>Origin</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.sku}>
              <TableCell className="font-heading">{item.sku}</TableCell>
              <TableCell className="font-heading">{item.description}</TableCell>
              <TableCell>{item.origin}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell className="font-heading">
                ${item.total.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <TableStar className="size-4 text-accent" />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
