import { gql } from '@/lib/datocms/graphql'
import { executeQuery } from '@/lib/datocms/executeQuery'
import { rescue } from '@/utils'
import Rss from 'rss'

const query = gql(/* GraphQL */ `
  query GetArticles($limit: IntType) {
    allArticles(first: $limit, orderBy: _publishedAt_DESC) {
      id
      title
      excerpt
      slug
      _publishedAt
    }
  }
`)

export async function GET() {
  const feedXml = await rescue(async () => {
    const { allArticles: articles } = await executeQuery(query)

    // prettier-ignore
    const feed = new Rss({
      title: 'Articles - Jovert Palonpon',
      description: 'All of my thoughts on programming, web and mobile app development, dev ops, and more.',
      feed_url: 'https://www.jovertical.dev/rss.xml',
      site_url: 'https://www.jovertical.dev',
      language: 'en',
    });

    articles.forEach((article) => {
      feed.item({
        title: article.title,
        description: article.excerpt,
        url: `https://www.jovertical.dev/articles/${article.slug}`,
        guid: `https://www.jovertical.dev/articles/${article.id}`,
        date: article._publishedAt ?? '',
      })
    })

    return feed.xml()
  })

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
