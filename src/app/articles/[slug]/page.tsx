import d from 'dayjs';

import { send } from '@/utils/api';

async function findArticle(slug: string) {
  const data = await send({
    query: `
      query articleBy($slug: String!) {
        article (filter: { slug: { eq: $slug } }) {
          title,
          excerpt,
          body,
          featured,
          slug,
          _publishedAt,
        }
      }
    `,
    variables: {
      slug,
    },
  });

  return data.article;
}

export default async function ArticleDetailsPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let article = await findArticle(params.slug);

  console.log(article);

  return (
    <main>
      <div>
        <h4 className="font-medium text-gray-500">
          {d(article._publishedAt).format('MMMM D, YYYY')}
        </h4>

        <h1 className="text-2xl font-semibold text-gray-900">
          {article.title}
        </h1>

        <div
          className="mt-4 prose md:mt-8 dark:prose-dark lg:prose-lg"
          dangerouslySetInnerHTML={{
            __html: article.body,
          }}
        />
      </div>
    </main>
  );
}
