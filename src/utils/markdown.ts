import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import headings from 'rehype-autolink-headings'
import prism from 'rehype-prism-plus'
import slug from 'rehype-slug'
import html from 'rehype-stringify'

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
