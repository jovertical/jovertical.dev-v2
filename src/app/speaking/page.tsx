import type { Metadata } from 'next';

import PageHeader from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Speaking - Jovert Palonpon',
  description: `I like teaching and sharing my knowledge with others, specially if it's for up and coming developers.`,
};

export default function Page() {
  return (
    <div>
      <PageHeader
        title="I hosted a couple of web development boot camps at my alma mater."
        subtitle="I like teaching and sharing my knowledge with others, specially if it's for up and coming developers."
      ></PageHeader>
    </div>
  );
}
