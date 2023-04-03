import * as React from 'react';

import List from '@/app/articles/list';
import ListSkeleton from '@/app/articles/list-skeleton';
import PageHeader from '@/app/page-header';
import { getArticles } from '@/data/article.data';

export default function ArticlesPage() {
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
          {/* @ts-expect-error Server Component */}
          <List items={articles} />
        </React.Suspense>
      </div>
    </div>
  );
}
