import headings from 'rehype-autolink-headings'
import html from 'rehype-stringify'
import markdown from 'remark-parse'
import prism from 'rehype-prism-plus'
import remark2rehype from 'remark-rehype'
import slug from 'rehype-slug'
import { unified } from 'unified'

export const toMarkdownString = async (content: string) => {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(slug)
    .use(headings)
    .use(prism, { showLineNumbers: true, ignoreMissing: true })
    .use(html)
    .process(content)

  return result.toString()
}
