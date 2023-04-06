import * as feed from '@/utils/feed';
import { getArticles } from '@/data/article.data';
import { rescue } from '@/utils';

export async function GET() {
  const feedXml = await rescue(async () => {
    const articles = await getArticles();

    return feed.generate(articles);
  });

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
