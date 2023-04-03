import { rescue } from '@/utils';
import { send } from '@/utils/api';

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  featured: boolean;
  slug: string;
  _publishedAt: string;
};

export const findArticle = (slug: string) => {
  return rescue(async () => {
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

    return data.article as Article;
  }, null);
};

export let getArticles = () => {
  return rescue(async () => {
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

    return data.allArticles as Article[];
  }, []);
};
