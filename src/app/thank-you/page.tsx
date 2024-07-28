import { header } from '@/app/thank-you/header'
import withPageHeader from '@/components/with-page-header'
import { createMetadata } from '@/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createMetadata({
  title: `You're subscribed - Jovert Palonpon`,
  description: `I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings.`,
})

function Page() {
  return null
}

export default withPageHeader(Page, header)
