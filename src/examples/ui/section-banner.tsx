import { SectionBanner, SectionHeader } from "@/components/ui/section-banner"

export default function SectionBannerDemo() {
  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Red banner (default) */}
      <SectionBanner>Important Directive</SectionBanner>

      <p className="text-sm text-foreground/80">
        The red banner is the default variant, perfect for important announcements and calls to action.
      </p>

      {/* Black banner */}
      <SectionBanner variant="black">Operations Status</SectionBanner>

      <p className="text-sm text-foreground/80">
        The black banner provides a more industrial, serious tone for operational content.
      </p>

      {/* Gold banner */}
      <SectionBanner variant="gold">Achievement Unlocked</SectionBanner>

      <p className="text-sm text-foreground/80">
        Gold banners celebrate achievements and positive outcomes.
      </p>

      {/* Break out variant */}
      <SectionBanner variant="red" breakOut>
        Breaking News
      </SectionBanner>

      <p className="text-sm text-foreground/80">
        Use breakOut to extend the banner beyond its container for extra emphasis.
      </p>

      {/* Section Header (simpler alternative) */}
      <SectionHeader>Simple Section Header</SectionHeader>

      <p className="text-sm text-foreground/80">
        SectionHeader is a simpler alternative without the full skew effect.
      </p>
    </div>
  )
}
