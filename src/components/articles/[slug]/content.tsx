import d from 'dayjs';
import { notFound } from 'next/navigation';

import { Article } from '@/data/article.data';
import { toMarkdownString } from '@/utils/markdown';

interface Props {
  data: Promise<Article | null>;
}

export default async function Content({ data }: Props) {
  const article = await data;

  if (!article) {
    notFound();
  }

  const body = await toMarkdownString(article.body);

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
  );
}
