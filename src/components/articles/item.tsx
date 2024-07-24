import { ChevronRightIcon } from '@heroicons/react/20/solid'
import cx from 'classnames'
import d from 'dayjs'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

import type { Article } from '@/data/article.data'

interface Props extends ComponentPropsWithoutRef<'article'> {
  data: Article
}

export default function Item({ className, data: article, ...props }: Props) {
  return (
    <article
      {...props}
      className={cx('md:grid md:grid-cols-4 md:items-baseline', className)}
    >
      <div className="relative flex flex-col items-start md:col-span-3 group">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute z-0 transition scale-95 opacity-0 -inset-y-6 -inset-x-4 bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>

          <Link href={`/articles/${article.slug}`}>
            <span className="absolute z-20 -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{article.title}</span>
          </Link>
        </h2>

        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          dateTime={d(article._publishedAt).format('YYYY-MM-DD')}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
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
      </div>

      <time
        className="relative z-10 order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500"
        dateTime={d(article._publishedAt).format('YYYY-MM-DD')}
      >
        {d(article._publishedAt).format('MMMM D, YYYY')}
      </time>
    </article>
  )
}
