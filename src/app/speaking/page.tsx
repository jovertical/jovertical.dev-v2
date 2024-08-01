import { header } from '@/app/speaking/header'
import withPageHeader from '@/components/with-page-header'
import { createMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = createMetadata({
  title: 'Speaking - Jovert Palonpon',
  description: `I like teaching and sharing my knowledge with others, specially if it's for up and coming developers.`,
})

function Page() {
  return (
    <div className="tracking-tight text-zinc-800 dark:text-zinc-100">
      Coming soon 🚧
    </div>
  )
}

export default withPageHeader(Page, header)
