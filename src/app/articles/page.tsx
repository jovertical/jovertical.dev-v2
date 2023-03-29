import List from '@/app/articles/list';
import PageHeader from '@/app/page-header';
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
    <>
      {/* prettier-ignore */}
      <PageHeader
        title="Writing on software design, dev ops, and more"
        subtitle="All of my thoughts on programming, web & mobile app development, dev ops, and more, displayed in chronological order."
      ></PageHeader>

      <div className="mt-16 sm:mt-20">
        <List items={articles} />
      </div>
    </>
  );
}
