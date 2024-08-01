import * as React from 'react'
import d from 'dayjs'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { TagFragment } from '@/lib/datocms/commonFragments'
import { executeQuery } from '@/lib/datocms/executeQuery'
import { generateMetadataFn } from '@/lib/datocms/generateMetadataFn'
import { gql } from '@/lib/datocms/graphql'
import { toMarkdownString } from '@/lib/unified'

type Params = { slug: string }

interface Props {
  params: Params
  searchParams: { from: 'featured' }
}

const query = gql(
  /* GraphQL */ `
    query GetArticleBySlug($slug: String!) {
      article(filter: { slug: { eq: $slug } }) {
        _seoMetaTags {
          ...TagFragment
        }
        title
        body
        createdAt
        _publishedAt
      }
    }
  `,
  [TagFragment]
)

export const generateMetadata = generateMetadataFn({
  query,
  buildQueryVariables: ({ params: { slug } }: { params: Params }) => ({ slug }),
  pickSeoMetaTags: ({ article }) => article?._seoMetaTags,
})

export default async function Page({ params: { slug }, searchParams }: Props) {
  const { isEnabled: isDraftModeEnabled } = draftMode()

  const { article } = await executeQuery(query, {
    includeDrafts: isDraftModeEnabled,
    variables: { slug },
  })

  if (!article) return notFound()

  const body = await toMarkdownString(article.body)

  return (
    <article>
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {article.title}
        </h1>

        {/* prettier-ignore */}
        <time
          dateTime={d(article._publishedAt ?? article.createdAt).format('YYYY-MM-DD')}
          className="flex items-center order-first text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>

          <span className="ml-3">
            {d(article._publishedAt ?? article.createdAt).format('MMMM D, YYYY')}
          </span>
        </time>
      </header>

      <div
        className="mt-8 prose dark:prose-invert"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      ></div>
    </article>
  )
}
