import { Metadata } from "next"

import {
  PageDescription,
  PageHeader,
  PageHeading,
  PageWrapper,
} from "@/components/app/page"

export const metadata: Metadata = {
  title: "Templates",
  description: "Get started with Propcore templates.",
}

export default function Page() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageHeading>Templates</PageHeading>

        <PageDescription>Coming Soon</PageDescription>
      </PageHeader>
    </PageWrapper>
  )
}
