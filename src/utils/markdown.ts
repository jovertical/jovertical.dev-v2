import { unified } from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import slug from 'rehype-slug';
import headings from 'rehype-autolink-headings';
import prism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';

export default async function toMarkdownString(content: string) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(slug)
    .use(headings)
    .use(prism)
    .use(html)
    .process(content);

  return result.toString();
}
