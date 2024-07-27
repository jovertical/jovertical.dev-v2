import type { Media } from '@/data/media.data'
import type { Tag } from '@/data/tag.data'
import { rescue } from '@/utils'
import { send } from '@/utils/api'

export type Article = {
  id: string
  title: string
  excerpt: string
  body: string
  featured: boolean
  slug: string
  thumbnail: Media | null
  tags: Tag[]
  createdAt: string
  _publishedAt: string
}

export interface FindArticleOptions {
  preview?: boolean
}

export const findArticle = (slug: string, options?: FindArticleOptions) => {
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
            thumbnail {
              id,
              url,
              size,
              width,
              height
            },
            tags {
              id,
              name,
              description,
              createdAt
            },
            createdAt,
            _publishedAt,
          }
        }
      `,
      preview: options?.preview,
      variables: { slug },
      next: {
        revalidate: 3600, // 1 hour
        tags: ['articles', 'article:' + slug],
      },
    })

    return data.article as Article
  }, null)
}

export const getArticles = (limit?: number) => {
  return rescue(async () => {
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
      next: {
        revalidate: 3600, // 1 hour
        tags: ['articles', 'articles:all'],
      },
    })

    return data.allArticles as Article[]
  }, [])
}
