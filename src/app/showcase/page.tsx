import { Metadata } from "next"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

export const metadata: Metadata = {
  title: "Showcase",
  description: "Showcase of websites built with Propcore components.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Showcase</PageHeading>

        <PageDescription>Coming Soon</PageDescription>
      </PageHeader>
    </PageWrapper>
  )
}
