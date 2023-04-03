import type { Metadata } from 'next';

import PageHeader from '@/app/page-header';

export const metadata: Metadata = {
  title: `You're subscribed - Jovert Palonpon`,
  description: `I'll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you'd want to hear about. You can unsubscribe at any time, no hard feelings.`,
};

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
