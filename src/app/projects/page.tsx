import type { Metadata } from 'next';
import * as React from 'react';

import PageHeader from '@/components/page-header';
import List from '@/components/projects/list';
import ListSkeleton from '@/components/projects/list-skeleton';
import { getProjects } from '@/data/project.data';
import { createMetadata } from '@/utils/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Projects - Jovert Palonpon',
  description: `I work full time as a software engineer for companies, making me fully occupied, but when I have some free time, I work on my own projects. Some of them are freelance work, some of them are just for fun, and some of them are just for me to learn new things.`,
});

export default async function Page() {
  let projects = getProjects();

  return (
    <div>
      <PageHeader
        title="Things I've made outside my full time work."
        subtitle="I work full time as a software engineer for companies, making me fully occupied, but when I have some free time, I work on my own projects. Some of them are freelance work, some of them are just for fun, and some of them are just for me to learn new things."
      ></PageHeader>

      <div className="mt-16 sm:mt-20">
        <React.Suspense fallback={<ListSkeleton></ListSkeleton>}>
          {/* @ts-expect-error Server Component */}
          <List items={projects} />
        </React.Suspense>
      </div>
    </div>
  );
}
