import d from 'dayjs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import ArrowLeftIcon from '@/components/icons/arrow-left-icon';
import { findArticle } from '@/data/article.data';

export default async function ArticleDetailsPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const article = await findArticle(params.slug);

  if (!article) {
    return null;
  }

  return (
    <div className="xl:relative">
      <div className="max-w-2xl mx-auto">
        <Link
          className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
          href="/articles"
          aria-label="Go back to articles"
        >
          <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"></ArrowLeftIcon>
        </Link>

        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {article.title}
            </h1>

            <time
              dateTime={d(article._publishedAt).format('YYYY-MM-DD')}
              className="flex items-center order-first text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              <span className="ml-3">
                {d(article._publishedAt).format('MMMM D, YYYY')}
              </span>
            </time>
          </header>

          <ReactMarkdown className="mt-8 prose dark:prose-invert">
            {article.body}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
