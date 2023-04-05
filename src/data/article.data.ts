import type { Tag } from '@/data/tag.data';
import { rescue, sleep } from '@/utils';
import { send } from '@/utils/api';

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  featured: boolean;
  slug: string;
  tags: Tag[];
  _publishedAt: string;
};

export const findArticle = (slug: string, preview = false) => {
  return rescue(async () => {
    await sleep(600);

    const data = await send({
      query: `
        query articleBy($slug: String!) {
          article (filter: { slug: { eq: $slug } }) {
            title,
            excerpt,
            body,
            featured,
            slug,
            tags {
              id,
              name,
              description,
              createdAt
            },
            _publishedAt,
          }
        }
      `,
      preview,
      variables: {
        slug,
      },
    });

    return data.article as Article;
  }, null);
};

export const getArticles = (limit?: number) => {
  return rescue(async () => {
    await sleep(600);

    const data = await send({
      query: `
        query articleList {
          allArticles(
            ${limit ? `first: ${limit},` : ''}
            orderBy: _publishedAt_DESC
          ) {
            id,
            title,
            excerpt,
            body,
            featured,
            slug,
            tags {
              id,
              name,
              description,
              createdAt
            },
            _publishedAt,
          }
        }
      `,
    });

    return data.allArticles as Article[];
  }, []);
};
