import { PropagandaAlert } from "@/components/ui/alert"

export default function AlertDemo() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl">
      {/* Info - Cream background */}
      <PropagandaAlert
        variant="info"
        title="Comrade Notice"
        description="The collective has approved your request. Please proceed to the designated area."
      />

      {/* Warning - Gold background */}
      <PropagandaAlert
        variant="warning"
        title="Caution Required"
        description="Resources are running low. Ration your artisanal oat milk accordingly."
      />

      {/* Error - Red background */}
      <PropagandaAlert
        variant="error"
        title="Critical Alert"
        description="The revolution has encountered an obstacle. Please try again later."
      />

      {/* Success - Red background */}
      <PropagandaAlert
        variant="success"
        title="Victory Achieved"
        description="Your subscription to the newsletter has been successfully processed."
      />
    </div>
  )
}
