import ReactMarkdown from 'react-markdown';
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
    <div>
      <h4 className="font-medium text-gray-500">
        {d(article._publishedAt).format('MMMM D, YYYY')}
      </h4>

      <h1 className="text-2xl font-semibold text-gray-900">{article.title}</h1>

      <ReactMarkdown className="mt-8 prose dark:prose-invert">
        {article.body}
      </ReactMarkdown>
    </div>
  );
}
