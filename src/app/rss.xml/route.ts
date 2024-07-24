import Rss from 'rss'

import { getArticles } from '@/data/article.data'
import { rescue } from '@/utils'

export async function GET() {
  const feedXml = await rescue(async () => {
    const articles = await getArticles()

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
        date: article._publishedAt,
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
