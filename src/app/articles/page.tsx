import Link from 'next/link';
import d from 'dayjs';

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
      <h1 className="text-2xl font-semibold text-gray-900">Articles</h1>

      <ul className="mt-6 space-y-8">
        {articles.map((article: Record<string, any>) => (
          <li key={`article-${article.id}`}>
            <div>
              <h2 className="font-bold text-gray-900">{article.title}</h2>

              <p className="mt-2.5 text-sm font-medium text-gray-700">
                {d(article._publishedAt).format('MMMM D, YYYY')}
              </p>

              <p className="text-sm text-gray-700">{article.excerpt}</p>

              <Link
                className="mt-2 text-sm font-medium text-teal-500"
                href={`/articles/${article.slug}`}
              >
                Read article
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
