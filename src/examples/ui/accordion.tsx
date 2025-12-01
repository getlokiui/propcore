import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger>Worker Regulations</AccordionTrigger>
        <AccordionContent>
          All workers must report to their designated sector by 0600 hours.
          Productivity quotas have been increased for the glory of the collective.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Production Quotas</AccordionTrigger>
        <AccordionContent>
          Current five-year plan requires 150% output increase.
          Comrades who exceed quotas will receive special recognition badges.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Collective Benefits</AccordionTrigger>
        <AccordionContent>
          All productive workers are entitled to regulated rest periods,
          state-provided nutrition, and access to recreational facilities during approved hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
