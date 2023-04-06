import type { Article } from '@/data/article.data';

const BASE_URL = 'https://www.jovertical.dev';

const createItem = (article: Article) => {
  return `
    <item>
      <guid>${BASE_URL}/articles/${article.id}</guid>
      <title>${article.title}</title>
      <link>${BASE_URL}/articles/${article.slug}</link>
      <description>${article.excerpt}</description>
      <pubDate>${article._publishedAt}</pubDate>
    </item>
  `;
};

export const generate = (articles: Article[]) => {
  return `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Articles - Jovert Palonpon</title>
        <link>${BASE_URL}/articles</link>
        <description>
          All of my thoughts on programming, web and mobile app development, dev ops, and more.
        </description>
        <language>en</language>
        <lastBuildDate>${articles[0]?._publishedAt}</lastBuildDate>
        <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
        ${articles.map(createItem).join('')}
      </channel>
    </rss>
  `;
};
