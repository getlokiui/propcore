import { transformToSlug } from "@/lib/utils"

import COMPONENTS from "./components"

// All components in a single list, sorted alphabetically
const COMPONENTS_LINKS = COMPONENTS
  .map((component) => {
    return {
      href: `/docs/${transformToSlug(component.name)}`,
      text: component.name,
    }
  })
  .sort((a, b) => a.text.localeCompare(b.text))

const GETTING_STARTED_LINKS = [
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/design-principles",
    text: "Design Principles",
  },
  {
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
  {
    href: "/styling",
    text: "Styling",
  },
  {
    href: "/charts",
    text: "Charts",
  },
]

const MAIN_SIDEBAR = [
  "Getting started",
  {
    href: "/docs",
    text: "Introduction",
  },
  {
    href: "/docs/installation",
    text: "Installation",
  },
  {
    href: "/docs/design-principles",
    text: "Design Principles",
  },
  {
    href: "/docs/resources",
    text: "Resources",
  },
  {
    href: "/docs/changelog",
    text: "Changelog",
  },
  "Components",
  ...COMPONENTS_LINKS,
]

export { MAIN_SIDEBAR, COMPONENTS_LINKS, GETTING_STARTED_LINKS }
