import Link from 'next/link';
import d from 'dayjs';

import ChevronRightIcon from '@/components/icons/chevron-right-icon';
import PageHeader from '@/components/page-header';
import { send } from '@/utils/api';

async function getArticles() {
  const data = await send({
    query: `
      query articleList {
        allArticles(
          orderBy: _publishedAt_DESC
        ) {
          id,
          title,
          excerpt,
          body,
          featured,
          slug,
          _publishedAt,
        }
      }
    `,
  });

  return data.allArticles;
}

export default async function ArticlesPage() {
  let articles = await getArticles();

  return (
    <div>
      {/* prettier-ignore */}
      <PageHeader
        title="Writing on software design, dev ops, and more"
        subtitle="All of my thoughts on programming, web & mobile app development, dev ops, and more, displayed in chronological order."
      ></PageHeader>

      <div className="mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex flex-col max-w-3xl space-y-16">
            {articles.map((article: Record<string, any>) => (
              <article
                key={article.id}
                className="md:grid md:grid-cols-4 md:items-baseline"
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
                    <ChevronRightIcon className="w-5 h-5 ml-1 stroke-current" />
                  </div>
                </div>

                <time
                  className="relative z-10 order-first hidden mt-1 mb-3 text-sm md:block text-zinc-400 dark:text-zinc-500"
                  dateTime={d(article._publishedAt).format('YYYY-MM-DD')}
                >
                  {d(article._publishedAt).format('MMMM D, YYYY')}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
