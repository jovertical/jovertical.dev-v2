import type { Metadata } from 'next';
import * as React from 'react';

import List from '@/components/articles/list';
import ListSkeleton from '@/components/articles/list-skeleton';
import PageHeader from '@/components/page-header';
import { getArticles } from '@/data/article.data';
import { createMetadata } from '@/utils/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Articles - Jovert Palonpon',
  description: `All of my thoughts on programming, web & mobile app development, dev ops, and more, displayed in chronological order.`,
  keywords: [
    'articles',
    'blog',
    'programming',
    'software engineering',
    'web development',
    'mobile development',
    'dev ops',
  ],
});

export default function Page() {
  let articles = getArticles();

  return (
    <div>
      {/* prettier-ignore */}
      <PageHeader
        title="Writing on software design, dev ops, and more"
        subtitle="All of my thoughts on programming, web & mobile app development, dev ops, and more, displayed in chronological order."
      ></PageHeader>

      <div className="mt-16 sm:mt-20">
        <React.Suspense fallback={<ListSkeleton />}>
          <List items={articles} />
        </React.Suspense>
      </div>
    </div>
  );
}
