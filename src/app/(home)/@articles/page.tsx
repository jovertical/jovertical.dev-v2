import { executeQuery } from '@/lib/datocms/executeQuery'
import { gql } from '@/lib/datocms/graphql'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import d from 'dayjs'
import Link from 'next/link'

const query = gql(/* GraphQL */ `
  query GetArticles($limit: IntType) {
    allArticles(first: $limit, orderBy: _publishedAt_DESC) {
      id
      title
      excerpt
      slug
      _publishedAt
    }
  }
`)

export default async function Page() {
  const { allArticles: articles } = await executeQuery(query)

  return (
    <div id="featured-article-list" className="flex flex-col gap-16">
      {articles.map((article) => (
        <article
          key={'featured-article-' + article.id}
          className="group relative flex flex-col items-start"
        >
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div className="absolute z-0 transition scale-95 opacity-0 -inset-x-4 -inset-y-6 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>

            <Link href={`/articles/${article.slug}?from=featured`}>
              <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl"></span>
              <span className="relative z-10">{article.title}</span>
            </Link>
          </h2>

          <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
            dateTime={d(article._publishedAt).format('YYYY-MM-DD')}
          >
            <span className="absolute inset-y-0 left-0 flex items-center">
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
            </span>

            {d(article._publishedAt).format('MMMM D, YYYY')}
          </time>

          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {article.excerpt}
          </p>

          <div
            aria-hidden="true"
            className="relative z-10 flex items-center mt-4 text-sm font-medium text-teal-500"
          >
            Read article
            <ChevronRightIcon className="w-4 h-4 ml-1 stroke-current"></ChevronRightIcon>
          </div>
        </article>
      ))}
    </div>
  )
}
