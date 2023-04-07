import { ArrowLeftIcon } from '@heroicons/react/20/solid';

import type { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

import Content from '@/components/articles/[slug]/content';
import ContentSkeleton from '@/components/articles/[slug]/content-skeleton';
import { findArticle } from '@/data/article.data';
import { createMetadata } from '@/utils/metadata';

interface Props {
  params: { slug: string };
  searchParams: { from: 'featured' };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await findArticle(params.slug);

  return createMetadata({
    title: `${article?.title ?? 'Article'} - Jovert Palonpon`,
    description: article?.excerpt,
    keywords: article?.tags.map((tag) => tag.name).join(', '),

    openGraph: {
      url: `https://jovert.dev/articles/${article?.slug ?? ''}`,
      type: 'article',
      authors: ['Jovert Palonpon'],
      ...(article?.thumbnail && {
        images: [
          {
            url: article.thumbnail.url,
            width: article.thumbnail.width,
            height: article.thumbnail.height,
          },
        ],
      }),
    },

    twitter: {
      card: 'summary_large_image',
      site: '@Jovertical',
      creator: '@Jovertical',
      ...(article?.thumbnail && {
        images: [article.thumbnail.url],
      }),
    },
  });
}

export default function Page({ params, searchParams }: Props) {
  const article = findArticle(params.slug);

  return (
    <div className="xl:relative">
      <div className="max-w-2xl mx-auto">
        {/* prettier-ignore */}
        <Link
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
          href={searchParams.from === 'featured' ? '/' : '/articles'}
          aria-label={searchParams.from === 'featured' ? 'Go home' : 'Go back to articles'}
        >
          <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"></ArrowLeftIcon>
        </Link>

        <React.Suspense fallback={<ContentSkeleton></ContentSkeleton>}>
          {/* @ts-expect-error Server Component */}
          <Content data={article}></Content>
        </React.Suspense>
      </div>
    </div>
  );
}
