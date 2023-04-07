import type { Metadata } from 'next';

import PageHeader from '@/components/page-header';
import { createMetadata } from '@/utils/metadata';

export const metadata: Metadata = createMetadata({
  title: `You're subscribed - Jovert Palonpon`,
  description: `I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings.`,
});

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Thanks for subscribing."
        subtitle="I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings."
      ></PageHeader>
    </div>
  );
}
