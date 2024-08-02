import type { PropsWithChildren } from 'react'

import Section from '@/components/section'

export default function Layout({ children }: PropsWithChildren) {
  return <Section>{children}</Section>
}
